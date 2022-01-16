import { Fragment } from "react";
import { Card, Counter, Comment, Reply } from "../../components";

const Comments = ({ data, currentUser }) => {
  const comments = [];

  for (let comment of data.comments) {
    comments.push(comment);
  }

  // console.log(comments[0].user);

  return (
    <Fragment>
      {comments &&
        comments.map((comment) => {
          return (
            <Fragment key={comment.id}>
              <Card>
                <Counter score={comment.score} />
                <Comment
                  user={comment.user}
                  content={comment.content}
                  createdAt={comment.createdAt}
                  score={comment.score}
                />
              </Card>
              {comment.replies.length > 0 && (
                <Reply replies={comment.replies} currentUser={currentUser} />
              )}
            </Fragment>
          );
        })}
    </Fragment>
  );
};

export default Comments;
