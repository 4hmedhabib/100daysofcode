import Image from "next/image";

export default function Home() {
  return (
    <div id="container" className="px-2">
      <div
        id="card"
        className="shadow-md shadow-lightGray bg-white rounded-md px-7 py-4 lg:w-2/3"
      >
        <div className="card-counter bg-veryLightGray px-2 w-10 rounded-lg text-center">
          <Image
            src="/icons/icon-plus.svg"
            alt="icons-plus"
            className="my-2 h-auto"
            width="14"
            height="14"
          />
          <h6 className="font-bold text-moderateBlue font-mono">12</h6>
          <Image
            src="/icons/icon-minus.svg"
            alt="icons-minus"
            className="my-2 h-auto"
            width="16"
            height="5"
          />
        </div>
      </div>
    </div>
  );
}
