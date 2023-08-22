"use client";

import Image from "next/image";

const UniqueFeatures = () => {
  return (
    <div className=" w-full h-[579px] bg-indigo-50 mt-[135px] mb-[132px] flex justify-center items-center">
      <div className="w-[1050px] h-[550px] relative flex">
        <svg
          className=" absolute left-[-9px] top-[21px] z-0"
          xmlns="http://www.w3.org/2000/svg"
          width="481"
          height="450"
          viewBox="0 0 481 450"
          fill="none"
        >
          <path
            d="M481 232C481 362.339 412.339 450 282 450C151.661 450 0 376.339 0 246C0 115.661 142 -23.9999 251.5 4.00004C361 32 481 101.661 481 232Z"
            fill="#F5E1FC"
          />
        </svg>
        <Image
          src="/chair11.png"
          width={509}
          height={550}
          alt=""
          className=" z-10 ml-10"
        />
        <div className="flex flex-col gap-2 justify-start items-start pt-[82px] pb-[140px]">
          <h2 className="text-violet-950 text-[35px] font-bold leading-[46.20px] tracking-wide mb-[29px]">
            Unique Features Of leatest &<br />
            Trending Poducts
          </h2>
          <div className="flex flex-col gap-[13px] justify-start items-start">
            <div className="flex justify-start items-baseline gap-[17px]">
              <div className="w-[11px] h-[11px] bg-rose-500 rounded-full"></div>
              <p className="text-gray-400 text-base font-medium leading-[21.12px] tracking-tight">
                All frames constructed with hardwood solids and laminates
              </p>
            </div>
            <div className="flex justify-start items-baseline gap-[17px]">
              <div className="w-[15px] h-[11px] bg-blue-700 rounded-full"></div>
              <p className="text-gray-400 text-base font-medium leading-[21.12px] tracking-tight">
                Reinforced with double wood dowels, glue, screw - nails corner
                blocks and machine nails
              </p>
            </div>
            <div className="flex justify-start items-baseline gap-[17px]">
              <div className="w-[11px] h-[11px] bg-teal-400 rounded-full"></div>
              <p className="text-gray-400 text-base font-medium leading-[21.12px] tracking-tight">
                Arms, backs and seats are structurally reinforced
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center gap-[19px] mt-[38px]">
            <button className="w-[157px] h-[45px] bg-pink-500 rounded-sm text-white text-[17px] font-semibold tracking-tight hover:bg-pink-600">
              Add To Cart
            </button>
            <div className="flex flex-col items-start justify-between gap-[3px]">
              <p className="text-violet-950 text-sm font-semibold tracking-tight">
                B&B Italian Sofa{" "}
              </p>
              <p className="text-violet-950 text-sm font-normal">$32.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueFeatures;
