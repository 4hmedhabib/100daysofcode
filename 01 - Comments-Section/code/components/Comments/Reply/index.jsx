import { Content, Counter, ReplyCard } from "../../../components";
import { Fragment } from "react";

const Reply = ({ replies }) => {
  return (
    <Fragment>
      <div id="reply" className="flex flex-col items-center gap-3 pl-14">
        <div className="flex gap-4">
          <div className=" border-l-2 border-lightGray border-solid" />
          <div className="flex flex-col gap-3">
            {replies.map((reply) => {
              return (
                <ReplyCard key={reply.id}>
                  <Counter score={reply.score} />
                  <Content
                    content={reply.content}
                    replyingTo={reply.replyingTo}
                    createdAt={reply.createdAt}
                    user={reply.user}
                  />
                </ReplyCard>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Reply;
