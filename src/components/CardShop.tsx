"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { BsCart2 } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart, AiOutlineZoomIn } from "react-icons/ai";

interface CardShopProps {
  img: string;
  name: string;
  price: number;
  oldPrice: number;
  link: string;
}

const CardShop: React.FC<CardShopProps> = ({
  img,
  name,
  price,
  oldPrice,
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
    <div className="w-[290px] h-[363px] relative flex flex-col justify-between items-center group">
      <div className="w-[270px] h-[280px] bg-slate-50 flex justify-center items-center px-10 group-hover:bg-teal-50">
        <Image
          src={img}
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-auto max-w-full"
          alt=""
        />
        <div className=" absolute left-[18px] bottom-[106px] hidden group-hover:flex flex-col justify-end items-center gap-[10px]">
          <Link
            href={link}
            className=" hover:scale-125 duration-300 w-[30px] h-[30px] bg-white rounded-full shadow flex justify-center items-center"
          >
            <BsCart2 />
          </Link>
          <button className=" hover:scale-125 duration-300  w-4 h-4 justify-center items-center flex">
            <AiOutlineZoomIn />
          </button>
          {!isFavorite && (
            <button
              className=" hover:scale-125 duration-300 w-4 h-4  justify-center items-center flex"
              onClick={toggleFavorite}
            >
              <AiOutlineHeart />
            </button>
          )}
          {isFavorite && (
            <button
              className=" hover:scale-125 duration-300 w-4 h-4  justify-center items-center flex"
              onClick={toggleFavorite}
            >
              <AiFillHeart />
            </button>
          )}
        </div>
      </div>
      <Link
        href={link}
        className="text-center text-violet-950 text-lg font-bold mt-[18px]"
      >
        {name}
      </Link>
      <div className="w-[42px] h-2.5 flex justify-between items-center">
        <div className="w-2.5 h-2.5  bg-orange-400 rounded-full" />
        <div className="w-2.5 h-2.5  bg-pink-500 rounded-full" />
        <div className="w-2.5 h-2.5  bg-violet-500 rounded-full" />
      </div>
      <div className="flex justify-center gap-[10px] items-center mt-[15px]">
        <p className="text-center text-violet-950 text-sm font-normal">
          {formatter.format(price)}
        </p>
        <p className="text-center text-pink-500 text-sm font-normal line-through">
          {formatter.format(oldPrice)}
        </p>
      </div>
    </div>
  );
};

export default CardShop;
