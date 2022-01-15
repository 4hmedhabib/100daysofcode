import { Fragment } from "react";
import Image from "next/image";

const Content = () => {
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
              src="/avators/image-amyrobson.png"
              alt=""
              width="32"
              height="32"
            />
            <h6 className="ml-4 text-darkBlue mr-3 font-[600] font-rubik">
              amyrobson
            </h6>
            <span className="text-grayishBlue text-md font-[400]">
              1 month ago
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
            Impressive! Though it seems the drag feature could be improved. But
            overall it looks incredible. You've nailed the design and the
            responsiveness at various breakpoints works really well.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Content;
