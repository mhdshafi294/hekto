"use client";

import { useState } from "react";

import ContainerBody from "@/components/ContainerBody";

const info = ["Description", "Additional Info", "Reviews", "Video"];

interface ProductInfoProps {
  name?: string;
  description?: any;
  additionalInfo?: string[];
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  name,
  description,
  additionalInfo,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= 4) {
      newIndex = 3;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className=" w-full h-[649px] bg-violet-50 mt-[131px] mb-[126px] py-[107px]">
      <ContainerBody>
        <div>
          <div className="flex justify-start items-center gap-[85px] mb-[60px]">
            {info.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`cursor-pointer text-violet-950 text-2xl font-semibold hover:text-violet-800 ${
                    activeIndex === index ? "underline" : ""
                  }`}
                  onClick={() => {
                    updateIndex(index);
                  }}
                >
                  {item}
                </button>
              );
            })}
          </div>
          <div className="w-full overflow-hidden flex flex-col justify-center">
            <div
              className="whitespace-nowrap duration-1000 w-full"
              style={{ transform: `translate(-${activeIndex * 100}%)` }}
            >
              <div className="w-full relative inline-flex flex-col pr-2">
                <h3 className="text-violet-950 text-[22px] font-semibold mb-[14px]">
                  {name}
                </h3>
                <p className="text-slate-400 text-base whitespace-normal w-[1145px]">
                  {description.main}
                </p>
                <h5 className="mt-[36px] mb-[16px] text-violet-950 text-[22px] font-semibold">
                  More details
                </h5>
                {description.more.map((item, index) => (
                  <div
                    className="flex justify-start items-center gap-2 mb-[14px] hover:translate-x-2 duration-700"
                    key={index}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                    >
                      <path
                        d="M1 8L17 8"
                        stroke="#2F1AC4"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 1L17 8L10 15"
                        stroke="#2F1AC4"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="text-slate-400 text-base font-semibold">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <div className="w-full relative inline-flex flex-col pr-2">
                <h5 className="mt-[36px] mb-[16px] text-violet-950 text-[22px] font-semibold">
                  Properties
                </h5>
                {additionalInfo?.map((item, index) => (
                  <div
                    className="flex justify-start items-center gap-2 mb-[14px] mt-3 hover:translate-x-2 duration-700"
                    key={index}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                    >
                      <path
                        d="M1 8L17 8"
                        stroke="#2F1AC4"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 1L17 8L10 15"
                        stroke="#2F1AC4"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="text-slate-400 text-base font-semibold">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <div className="w-full relative inline-flex flex-col pr-2">
                <h5 className="mt-[36px] mb-[16px] text-violet-950 text-[22px] font-semibold">
                  Reviews
                </h5>
                {additionalInfo?.map((item, index) => (
                  <div
                    className="flex justify-start items-center gap-2 mb-[14px] mt-3 hover:translate-x-2 duration-700"
                    key={index}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                    >
                      <path
                        d="M1 8L17 8"
                        stroke="#2F1AC4"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 1L17 8L10 15"
                        stroke="#2F1AC4"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="text-slate-400 text-base font-semibold">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ContainerBody>
    </div>
  );
};

export default ProductInfo;
