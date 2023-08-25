"use client";

import { useState } from "react";

import ContainerBody from "@/components/ContainerBody";
import PageTitle from "@/components/PageTitle";
import TitleHeader from "@/components/TitleHeader";

import { products1, products2 } from "@/constants/constants";
import CardShop from "@/components/CardShop";
import Brands from "@/components/Brands";
import CardShopHorz from "@/components/CardShopHorz";

const Shop = () => {
  const [listView, setListView] = useState(false);

  return (
    <div>
      <PageTitle title="Shop Grid Default" />
      <TitleHeader listView={listView} setListView={setListView} />
      <ContainerBody>
        {!listView && (
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-[37px]">
            {products1.map((product, index) => {
              return (
                <CardShop
                  key={index}
                  img={product.img}
                  name={product.name}
                  price={product.price}
                  oldPrice={product.oldPrice}
                  link="/"
                />
              );
            })}
          </div>
        )}
        {listView && (
          <div className="w-full flex flex-col justify-start items-start gap-[33px]">
            {products2.map((product, index) => {
              return (
                <CardShopHorz
                  key={index}
                  img={product.img}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  oldPrice={product.oldPrice}
                  rate={product.rate}
                  link="/"
                />
              );
            })}
          </div>
        )}
        <Brands />
      </ContainerBody>
    </div>
  );
};

export default Shop;
