import Image from "next/image";

export default function Home() {
  return (
    <div id="container" className="px-2 font-rubik">
      <div
        id="card"
        className="shadow-md shadow-lightGray bg-white rounded-md px-7 py-4 lg:w-2/3 flex"
      >
        <div className="card-counter bg-veryLightGray px-2 w-10 rounded-lg text-center">
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

        <div className="ml-6 w-full">
          <div id="card-header" className="flex justify-between items-center">
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
            <p>
              Impressive! Though it seems the drag feature could be improved.
              But overall it looks incredible. You've nailed the design and the
              responsiveness at various breakpoints works really well.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
