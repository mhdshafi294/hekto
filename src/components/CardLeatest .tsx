"use client";

import Image from "next/image";
import { BsCart2 } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart, AiOutlineZoomIn } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";

interface CardLeatestProps {
  img: string;
  name: string;
  code: string;
  price: number;
  oldPrice: number;
  link: string;
}

const CardLeatest: React.FC<CardLeatestProps> = ({
  img,
  name,
  code,
  oldPrice,
  price,
  link,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 2, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 2, // (causes 2500.99 to be printed as $2,501)
  });

  return (
    <div className="group w-[360px] h-[306px] flex flex-col justify-start gap-[16px] ">
      <div className="w-[360px] h-[269.96px] relative bg-neutral-100 flex justify-center group-hover:bg-white duration-300">
        <Image
          src={img}
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-auto scale-75 translate-y-5"
          alt=""
        />
        {price < oldPrice && (
          <div className="w-[84.87px] h-[56.73px] left-[18px] top-[25px] absolute hidden group-hover:flex hover:scale-110 duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="87"
              height="59"
              viewBox="0 0 87 59"
              fill="none"
            >
              <path
                d="M1.09968 44.7253C1.49968 50.3253 4.93301 55.7253 6.59968 57.7253C7.09975 52.2253 19.5996 48.7253 22.0996 48.7253C24.0996 48.7253 37.9329 44.7253 44.5996 42.7253C53.9329 39.7253 75.0996 32.6254 85.0996 28.2254C88.5996 10.7254 79.0996 -0.774631 78.5996 1.22537C78.1996 2.82537 65.7663 7.55868 59.5996 9.72535C47.4329 14.2253 21.0996 23.5253 13.0996 24.7253C5.09961 25.9253 2.43299 28.892 2.09968 30.2253C1.59968 32.7253 0.69968 39.1253 1.09968 44.7253Z"
                fill="#3F509E"
                stroke="#3F509E"
              />
            </svg>
            <p className="origin-top-left rotate-[-18.12deg] text-indigo-50 text-sm font-semibold left-[27px] top-[25.71px] absolute">
              Sale
            </p>
          </div>
        )}

        <div className="absolute left-[15px] top-[146px] hidden group-hover:flex flex-col justify-start items-center gap-[16px]">
          <Link
            href={link}
            className=" hover:scale-125 duration-300 w-[30px] h-[30px] bg-indigo-50 rounded-full shadow text-[#2F1AC4]  justify-center items-center flex"
          >
            <BsCart2 />
          </Link>
          {!isFavorite && (
            <button
              className=" hover:scale-125 duration-300 text-[#2F1AC4]  justify-center items-center flex"
              onClick={toggleFavorite}
            >
              <AiOutlineHeart />
            </button>
          )}
          {isFavorite && (
            <button
              className=" hover:scale-125 duration-300 text-[#2F1AC4]  justify-center items-center flex"
              onClick={toggleFavorite}
            >
              <AiFillHeart />
            </button>
          )}
          <button className=" hover:scale-125 duration-300 text-[#2F1AC4]  justify-center items-center flex">
            <AiOutlineZoomIn />
          </button>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <p className="  text-violet-950 text-base font-normal">{name}</p>
        <div className="flex justify-end items-center gap-[10px]">
          <p className=" text-violet-950 text-sm font-normal">
            {formatter.format(price)}
          </p>
          <p className="text-rose-600 text-xs font-normal line-through">
            {formatter.format(oldPrice)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardLeatest;
