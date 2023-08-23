"use client";

import ContainerBody from "../ContainerBody";
import CardValues from "../CardValues";

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
            <CardValues
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
