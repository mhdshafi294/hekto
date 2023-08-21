"use client";

import { useRef, useState } from "react";

import { chairs1 } from "@/constants/contants";
import Card1 from "../Card1";
import ContainerBody from "../ContainerBody";

const FeaturedProducts = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= 4) {
      newIndex = 3;
    }

    setActiveIndex(newIndex);
  };

  return (
    <ContainerBody>
      <h2 className="text-violet-950 text-[42px] font-bold mt-[129px] mb-[48px] text-center">
        Featured Products
      </h2>
      <div className="w-fulls overflow-hidden flex flex-col justify-center"></div>
    </ContainerBody>
  );
};

export default FeaturedProducts;
