import { Fragment } from "react";
import Image from "next/image";

const Counter = ({ score }) => {
  return (
    <Fragment>
      {/* Counter Card */}
      <div className="card-counter bg-veryLightGray px-2 md:w-10 rounded-lg text-center w-28 py-2 absolute bottom-3  md:relative flex md:block items-center justify-between align-baseline">
        <div className="mb-1 w-1/3 md:w-full cursor-pointer items-center flex justify-center">
          <Image
            src="/icons/icon-plus.svg"
            alt="icons-plus"
            width="12"
            height="12"
          />
        </div>
        <h6 className="font-[600] w-1/3 md:w-full text-moderateBlue mb-1 items-center flex justify-center  md:mt-2">
          {score}
        </h6>
        <div className="   cursor-pointer w-1/3 md:w-full items-top flex align-middle justify-center md:mt-2">
          <Image
            src="/icons/icon-minus.svg"
            alt="icons-minus"
            width="12"
            height="5"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Counter;
