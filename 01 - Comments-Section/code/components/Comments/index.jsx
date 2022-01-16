import { Fragment } from "react";
import { Card, Counter, Comment, Reply } from "../../components";

const Comments = ({ data, currentUser }) => {
  const comments = [];

  for (let comment of data.comments) {
    comments.push(comment);
  }

  return (
    <Fragment>
      {comments.map((comment) => {
        return (
          <Fragment key={comment.id}>
            <Card>
              <Comment />
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
