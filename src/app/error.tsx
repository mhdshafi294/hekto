"use client";

import Brands from "@/components/Brands";
import ContainerBody from "@/components/ContainerBody";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Custom404 = () => {
  return (
    <div>
      <PageTitle title="404 Not Found" />
      <ContainerBody>
        <div className=" relative flex flex-col items-center gap-[16px] -translate-y-14">
          <div className="relative w-[913px] h-[527px] text-slate-50 text-[527px] font-bold -translate-x-16">
            <Image
              src="/errorAll.png"
              fill={true}
              alt=""
              className=" "
              style={{ objectFit: "cover" }}
            />
          </div>
          <Link
            href="/"
            className="w-[165px] h-11 bg-pink-500 hover:bg-pink-600 rounded-[3px] text-white text-base font-normal leading-relaxed flex justify-center items-center mt-14"
          >
            Back To Home
          </Link>
        </div>
      </ContainerBody>
      <Brands />
    </div>
  );
};

export default Custom404;
