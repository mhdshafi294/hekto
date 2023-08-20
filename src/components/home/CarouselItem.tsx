"use client";

import Image from "next/image";
import Container from "../Container";

interface CarouselItemProps {
  title?: string;
  description?: string;
  image1?: string;
  image2?: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  title,
  description,
  image1,
  image2,
}) => {
  return (
    <div className="w-full h-[764px] bg-violet-50 relative inline-flex">
      <Image
        src="/lamp.png"
        width={387}
        height={387}
        alt=""
        className=" absolute top-0 left-[70px]"
      />
      <div className="w-[15px] h-[15px] bg-pink-500 rounded-full absolute left-[184px] top-[503px]" />
      <div className="w-[651px] h-[651px] bg-purple-200 bg-opacity-30 rounded-full absolute right-[173px] top-[39px]" />
      <div className="w-[648px] h-[648px] bg-purple-200 bg-opacity-30 rounded-full absolute right-[231px] top-[80px]" />
      <Image
        src="/chair.svg"
        width={629}
        height={629}
        alt=""
        className="absolute right-[240px] top-[99px]"
      />
      <div className="w-[136.56px] h-[138.49px] absolute right-[185px] top-[94px] flex justify-center items-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="139"
          height="140"
          viewBox="0 0 139 140"
          fill="none"
        >
          <path
            d="M39.665 132.813C-10.335 104.813 1.88843 82.5 3.38879 66.5C3.38879 56.9 26.8315 11.9793 35.6648 5.31264C41.1648 1.14598 58.8647 -3.68736 85.6647 10.3126C146.865 35.9126 141.498 79.3126 131.165 97.8126C123.665 118.479 94.8648 154.413 39.665 132.813Z"
            fill="#00C1FE"
            stroke="#00C1FE"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p className="right-[33px] top-[30px] absolute text-white text-[35px] font-bold text-center">
          50%
          <br />
          off
        </p>
      </div>
      <Container>
        <div className=" pt-[203px] flex flex-col justify-center items-start">
          <p className="text-pink-500 text-base font-bold leading-7">
            Best Furniture For Your Castle....
          </p>
          <h1 className="text-black text-[40px] font-bold tracking-wide">
            New Furniture Collection
            <br />
            Trends in 2020
          </h1>
          <p className="text-slate-400 text-base font-bold leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Magna in est adipiscing in phasellus non in justo.
          </p>
          <button className="w-[163px] h-[50px] bg-pink-500 rounded-sm text-white text-[17px] font-semibold tracking-tight mt-10">
            Shop Now
          </button>
        </div>
      </Container>
    </div>
  );
};

export default CarouselItem;
