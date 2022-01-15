import { Fragment } from "react";
import Image from "next/image";

const Counter = () => {
  return (
    <Fragment>
      {/* Counter Card */}
      <div className="card-counter bg-veryLightGray px-2 w-10 rounded-lg text-center py-2">
        <div className="mb-1">
          <Image
            src="/icons/icon-plus.svg"
            alt="icons-plus"
            width="12"
            height="12"
          />
        </div>
        <h6 className="font-[600]  text-moderateBlue mb-1">12</h6>
        <div>
          <Image
            src="/icons/icon-minus.svg"
            alt="icons-minus"
            className="my-2 h-auto"
            width="12"
            height="5"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Counter;
