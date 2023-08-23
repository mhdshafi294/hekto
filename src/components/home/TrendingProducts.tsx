"use client";

import Link from "next/link";
import Image from "next/image";

import ContainerBody from "../ContainerBody";
import CardTrending from "../CardTrending";
import TrendyItemSmall from "../TrendyItemSmall";

import { trendy } from "@/constants/constants";

const trendy1 = trendy.slice(0, 4);
const trendy2 = trendy.slice(4);

const TrendingProducts = () => {
  return (
    <ContainerBody>
      <h2 className="text-violet-950 text-[42px] font-bold mt-[71px] mb-[48px] text-center">
        Trending Products
      </h2>
      <div className=" grid grid-rows-2 gap-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-[37px] ">
          {trendy1.map((item, index) => {
            return (
              <CardTrending
                key={index}
                img={item.img}
                name={item.name}
                price={item.price}
                oldPrice={item.oldPrice}
              />
            );
          })}
        </div>
        <div className="h-[270px] flex justify-between items-stretch">
          <div className="w-[420px] h-[270px] bg-fuchsia-50 shadow relative hover:bg-fuchsia-100 ">
            <div className="flex flex-col justify-start items-start absolute left-[25px] top-[34px]">
              <p className="text-center text-violet-950 text-[26px] font-semibold">
                23% off in all products
              </p>
              <Link
                className="text-center text-pink-500 text-base font-semibold underline"
                href="/shop"
              >
                Shop Now
              </Link>
            </div>
            <Image
              src="/diskClock.png"
              width="0"
              height="0"
              sizes="100vw"
              className="w-auto h-auto absolute right-0 bottom-0"
              alt=""
            />
          </div>
          <div className="w-[420px] h-[270px] bg-indigo-50 shadow relative hover:bg-indigo-100">
            <div className="flex flex-col justify-start items-start absolute left-[25px] top-[34px]">
              <p className="text-center text-violet-950 text-[26px] font-semibold">
                23% off in all products
              </p>
              <Link
                className="text-center text-pink-500 text-base font-semibold underline"
                href="/shop"
              >
                Shop Now
              </Link>
            </div>
            <Image
              src="/diskLong.png"
              width="0"
              height="0"
              sizes="100vw"
              className="w-auto h-auto absolute right-0 bottom-0"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-between items-start gap-[20px]">
            {trendy2.map((item, index) => {
              return (
                <TrendyItemSmall
                  key={index}
                  img={item.img}
                  name={item.name}
                  oldPrice={item.oldPrice}
                />
              );
            })}
          </div>
        </div>
      </div>
    </ContainerBody>
  );
};

export default TrendingProducts;
