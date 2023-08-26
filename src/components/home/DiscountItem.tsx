"use client";

import { useState } from "react";

import ContainerBody from "../ContainerBody";
import Link from "next/link";
import Image from "next/image";

const DiscountItem = () => {
  const [activeType, setActiveType] = useState(0);

  return (
    <ContainerBody>
      <h2 className="text-violet-950 text-[42px] font-bold mt-[71px] mb-[48px] text-center">
        Discount Item
      </h2>
      <ul className="flex justify-center items-center gap-[26px] mx-auto mb-[58px] w-[527px]">
        <button
          className={`flex justify-start items-center hover:text-pink-500 text-lg font-normal text-[16px] ${
            activeType === 0 ? "underline text-pink-400" : "text-violet-950"
          }`}
          onClick={() => {
            setActiveType(0);
          }}
        >
          <li>Wood Chair</li>
          {activeType === 0 && (
            <div className="w-[5px] h-[5px] bg-pink-500 rounded-full ml-[7px]"></div>
          )}
        </button>
        <button
          className={`flex justify-start items-center hover:text-pink-500 text-lg font-normal text-[16px] ${
            activeType === 1 ? "text-pink-400 underline" : "text-violet-950"
          }`}
          onClick={() => {
            setActiveType(1);
          }}
        >
          <li>Plastic Chair</li>
          {activeType === 1 && (
            <div className="w-[5px] h-[5px] bg-pink-500 rounded-full ml-[7px]"></div>
          )}
        </button>
        <button
          className={`flex justify-start items-center hover:text-pink-500 text-lg font-normal text-[16px] ${
            activeType === 2 ? "text-pink-400 underline" : "text-violet-950"
          }`}
          onClick={() => {
            setActiveType(2);
          }}
        >
          <li>Sofa Colletion</li>
          {activeType === 2 && (
            <div className="w-[5px] h-[5px] bg-pink-500 rounded-full ml-[7px]"></div>
          )}
        </button>
      </ul>
      <div className="w-[1214px] h-[597px] flex justify-center items-center relative">
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-violet-950 text-[35px] font-bold leading-[46.20px] tracking-wide mb-4">
            20% Discount Of All Products
          </h2>
          <h5 className="text-pink-500 text-[21px] font-normal leading-7 tracking-tight mb-5">
            Eams Sofa Compact
          </h5>
          <p className="w-[523px] h-[49px] text-neutral-300 text-[17px] font-normal leading-[30px] tracking-tight mb-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>
          <div className="grid grid-cols-2 gap-11 gap-x-11 gap-y-[10px]">
            <p className="text-slate-300 text-base font-normal leading-[30px] tracking-tight flex justify-start items-center gap-[6px] hover:-translate-y-2 duration-500">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="13"
                  viewBox="0 0 18 13"
                  fill="none"
                >
                  <path
                    d="M17 1L6 12L1 7"
                    stroke="#7569B2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Material expose like metals
            </p>
            <p className="text-slate-300 text-base font-normal leading-[30px] tracking-tight flex justify-start items-center gap-[6px] hover:-translate-y-2 duration-500">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="13"
                  viewBox="0 0 18 13"
                  fill="none"
                >
                  <path
                    d="M17 1L6 12L1 7"
                    stroke="#7569B2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Material expose like metals
            </p>
            <p className="text-slate-300 text-base font-normal leading-[30px] tracking-tight flex justify-start items-center gap-[6px] hover:-translate-y-2 duration-500">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="13"
                  viewBox="0 0 18 13"
                  fill="none"
                >
                  <path
                    d="M17 1L6 12L1 7"
                    stroke="#7569B2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Material expose like metals
            </p>
            <p className="text-slate-300 text-base font-normal leading-[30px] tracking-tight flex justify-start items-center gap-[6px] hover:-translate-y-2 duration-500">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="13"
                  viewBox="0 0 18 13"
                  fill="none"
                >
                  <path
                    d="M17 1L6 12L1 7"
                    stroke="#7569B2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Material expose like metals
            </p>
          </div>
          <Link
            href="/"
            className="w-[200px] h-[57px] bg-pink-500 rounded-sm text-white text-[17px] font-normal tracking-tight mt-[37px] flex justify-center items-center hover:bg-pink-600 duration-500"
          >
            Shop Now
          </Link>
        </div>
        <div className="flex justify-center items-center bg-[url('/Ellipse64.svg')] bg-no-repeat bg-center">
          <Image src="/chair19.png" width={699} height={597} alt="" />
        </div>
      </div>
    </ContainerBody>
  );
};

export default DiscountItem;
