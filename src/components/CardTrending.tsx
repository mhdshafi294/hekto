"use client";

import Image from "next/image";
import Link from "next/link";

interface CardTrendingProps {
  img: string;
  name: string;
  price: number;
  oldPrice: number;
}

const CardTrending: React.FC<CardTrendingProps> = ({
  img,
  name,
  price,
  oldPrice,
}) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="group flex flex-col justify-start items-center gap-[15px] w-[270px] h-[350px] relative shadow px-[11px] pt-[11px]">
      <div className="flex justify-center items-center w-[247px] h-[244px] bg-neutral-100 ">
        <Image
          src={img}
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-auto"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-start items-center gap-2">
        <Link
          href="/"
          className="text-center text-violet-950 text-base font-bold leading-relaxed group-hover:text-pink-500"
        >
          {name}
        </Link>
        <div className="flex justify-center items-center gap-2">
          <p className="text-center text-violet-950 text-sm font-normal group-hover:font-bold">
            {formatter.format(price)}
          </p>
          <p className="text-center text-violet-950 text-opacity-30 text-xs font-normal line-through group-hover:text-pink-500">
            {formatter.format(oldPrice)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardTrending;
