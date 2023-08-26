"use client";

import Image from "next/image";
import Link from "next/link";

interface TopCategoryItemProps {
  img: string;
  name: string;
  price: number;
  link: string;
}

const TopCategoryItem: React.FC<TopCategoryItemProps> = ({
  img,
  name,
  price,
  link,
}) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return (
    <div className="w-[269px] h-[345px] duration-500 hover:w-[260px] hover:h-[340px] hover:translate-x-1 relative flex-col justify-start items-center flex gap-[27px] group">
      <div className="hidden group-hover:block duration-500 w-[260px] group-hover:w-[270px] h-[260px] bg-violet-400 rounded-full shadow absolute top-[0px] group-hover:left-[-10px] -z-10 opacity-0 group-hover:opacity-100"></div>
      <div className="w-[269px] h-[269px] bg-slate-50 rounded-full shadow flex justify-center items-center relative">
        <Image src={img} width={178} height={178} alt="" />
        <Link
          href={link}
          className="hidden group-hover:flex justify-center items-center w-[94px] h-[29px] bg-green-500 rounded-sm text-white text-xs font-medium absolute bottom-[21px] "
        >
          View Details
        </Link>
      </div>
      <div className="flex-col justify-start items-center flex gap-[13px]">
        <p className="text-violet-950 text-xl font-normal">{name}</p>
        <p className="text-violet-950 text-base font-normal">
          {formatter.format(price)}
        </p>
      </div>
    </div>
  );
};

export default TopCategoryItem;
