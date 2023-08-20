"use client";

import Image from "next/image";

interface Card1Props {
  img: string;
  name: string;
  code: string;
  price: number;
}

const Card1: React.FC<Card1Props> = ({ img, name, code, price }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 2, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 2, // (causes 2500.99 to be printed as $2,501)
  });

  return (
    <div className="w-[270px] h-[361px] relative bg-white shadow flex flex-col items-center justify-start gap-3">
      <div className="w-[270px] h-[236px] bg-slate-50 flex justify-center items-center">
        <Image src={img} width={178} height={178} alt="" className="" />
      </div>
      <h6 className="text-pink-500 text-lg font-bold">{name}</h6>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="52"
        height="4"
        viewBox="0 0 52 4"
        fill="none"
      >
        <rect width="14" height="4" rx="2" fill="#05E6B7" />
        <rect x="19" width="14" height="4" rx="2" fill="#F701A8" />
        <rect x="38" width="14" height="4" rx="2" fill="#00009D" />
      </svg>
      <p className="text-violet-950 text-sm font-normal">Code - {code}</p>
      <p className="text-violet-950 text-sm font-normal mb-4">
        {formatter.format(price)}
      </p>
    </div>
  );
};

export default Card1;
