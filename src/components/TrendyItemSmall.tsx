"use client";

import Image from "next/image";
import Link from "next/link";

interface TrendyItemSmallProps {
  img: string;
  name: string;
  oldPrice: number;
}

const TrendyItemSmall: React.FC<TrendyItemSmallProps> = ({
  img,
  name,
  oldPrice,
}) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return (
    <div className="group w-[267px] h-[74px] relative flex justify-start items-center gap-[9px] hover:-translate-x-2 hover:scale-110 duration-500">
      <div className="w-[107px] h-[74px] bg-neutral-100 flex justify-center items-center px-[22px] py-[2px] group-hover:bg-white">
        <Image src={img} width={67} height={67} alt="" />
      </div>
      <div className="flex flex-col items-start justify-center gap-[5px]">
        <Link
          href="/"
          className="text-center text-violet-950 text-base font-semibold"
        >
          {name}
        </Link>
        <p className="text-center text-violet-950 text-xs font-normal line-through">
          {formatter.format(oldPrice)}
        </p>
      </div>
    </div>
  );
};

export default TrendyItemSmall;
