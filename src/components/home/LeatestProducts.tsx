"use client";

import { useRef, useState } from "react";

import ContainerBody from "../ContainerBody";
import Card2 from "../Card2";
import { chairs2 } from "@/constants/constants";

const LeatestProducts = () => {
  const [activeType, setActiveType] = useState(0);

  return (
    <ContainerBody>
      <h2 className="text-violet-950 text-[42px] font-bold mt-[71px] mb-[48px] text-center">
        Leatest Products
      </h2>
      <ul className="flex justify-between items-center gap-[60px] mx-auto mb-[58px] w-[527px]">
        <button
          className={`text-violet-950 hover:text-pink-500 text-lg font-normal text-[16px] ${
            activeType === 0 ? "text-pink-400 underline" : ""
          }`}
          onClick={() => {
            setActiveType(0);
          }}
        >
          <li>New Arrival</li>
        </button>
        <button
          className={`text-violet-950 hover:text-pink-500 text-lg font-normal text-[16px] ${
            activeType === 1 ? "text-pink-400 underline" : ""
          }`}
          onClick={() => {
            setActiveType(1);
          }}
        >
          <li>Best Seller</li>
        </button>
        <button
          className={`text-violet-950 hover:text-pink-500 text-lg font-normal text-[16px] ${
            activeType === 2 ? "text-pink-400 underline" : ""
          }`}
          onClick={() => {
            setActiveType(2);
          }}
        >
          <li>Featured</li>
        </button>
        <button
          className={`text-violet-950 hover:text-pink-500 text-lg font-normal text-[16px] ${
            activeType === 3 ? "text-pink-400 underline" : ""
          }`}
          onClick={() => {
            setActiveType(3);
          }}
        >
          <li>Special Offer</li>
        </button>
      </ul>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[37px] ">
        {chairs2.map((chair, index) => {
          return (
            <Card2
              key={index}
              img={chair.img}
              name={chair.name}
              code={chair.code}
              price={chair.price}
              oldPrice={chair.oldPrice}
              link="/"
            />
          );
        })}
      </div>
    </ContainerBody>
  );
};

export default LeatestProducts;
