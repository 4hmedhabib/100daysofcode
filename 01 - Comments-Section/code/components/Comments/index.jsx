import { Fragment } from "react";
import { Card, Counter, Content, Reply } from "../../components";

const Comments = () => {
  return (
    <Fragment>
      <Card>
        <Counter />
        <Content />
      </Card>
      <Reply />
    </Fragment>
  );
};

export default Comments;
