"use client";

import ContainerBody from "../ContainerBody";
import Card2 from "../Card2";

import Link from "next/link";
import Card3 from "../Card3";
import { ourValues } from "@/constants/constants";

const ShopexOffer = () => {
  return (
    <ContainerBody>
      <h2 className="text-violet-950 text-[42px] font-bold mt-[71px] mb-[48px] text-center">
        What Shopex Offer!
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-[37px] ">
        {ourValues.map((value, index) => {
          return (
            <Card3
              key={index}
              img={value.img}
              title={value.title}
              description={value.description}
            />
          );
        })}
      </div>
    </ContainerBody>
  );
};

export default ShopexOffer;
