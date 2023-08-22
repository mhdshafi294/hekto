"use client";

import { useRef, useState } from "react";

import { chairs1 } from "@/constants/contants";
import Card1 from "../Card1";
import ContainerBody from "../ContainerBody";
import Card2 from "../Card2";
import { chairs2 } from "@/constants/contants";

const LeatestProducts = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <ContainerBody>
      <h2 className="text-violet-950 text-[42px] font-bold mt-[71px] mb-[48px] text-center">
        Leatest Products
      </h2>
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
