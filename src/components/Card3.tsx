"use client";

import Image from "next/image";

interface Card3Props {
  img: string;
  title: string;
  description: string;
}

const Card3: React.FC<Card3Props> = ({ img, title, description }) => {
  return (
    <div className="w-[270px] h-80 flex-col justify-center items-center inline-flex bg-white shadow pt-[56px] pb-[45px] duration-300 hover:-translate-y-2">
      <Image src={img} width={65} height={65} alt="" />
      <p className="text-violet-950 text-[22px] font-semibold mt-[27px] mb-[20px]">
        {title}
      </p>
      <p className="w-[217px] h-[85px] text-center text-violet-950 text-opacity-30 text-base font-bold leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default Card3;
