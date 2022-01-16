import { Fragment } from "react";
import Image from "next/image";

const Content = ({ user, content, createdAt, replyingTo }) => {
  return (
    <Fragment>
      {/* Card Body */}
      <div className="ml-6 w-full">
        <div
          id="card-header"
          className="flex justify-between items-center mb-2"
        >
          <div className="flex items-center">
            <Image
              src={user.image.png}
              alt={user.username}
              width="32"
              height="32"
            />
            <h6 className="ml-4 text-darkBlue mr-3 font-[600] font-rubik">
              {user.username}
            </h6>
            <span className="text-grayishBlue text-md font-[400]">
              {createdAt}
            </span>
          </div>
          <div className="flex items-center">
            <Image
              src="/icons/icon-reply.svg"
              alt="icons-plus"
              width="12"
              height="12"
            />
            <h6 className="ml-1 text-moderateBlue font-[500]">Reply</h6>
          </div>
        </div>
        <div>
          <p className=" text-grayishBlue leading-6 tracking-normal">
            {replyingTo && (
              <span className="font-bold font-rubik text-moderateBlue">
                @{replyingTo}
              </span>
            )}{" "}
            {content}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Content;
