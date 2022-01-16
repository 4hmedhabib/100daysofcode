import { Content, Counter, ReplyCard } from "../../../components";
import { Fragment } from "react";

const Reply = () => {
  return (
    <Fragment>
      <div id="reply" className="flex flex-col items-center gap-3 pl-14">
        <div className="flex gap-4">
          <div className=" border-l-2 border-lightGray border-solid" />
          <div className="flex flex-col gap-3">
            <ReplyCard>
              <Counter />
              <Content />
            </ReplyCard>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Reply;
