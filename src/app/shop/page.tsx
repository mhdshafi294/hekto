"use client";

import { useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

import ContainerBody from "@/components/ContainerBody";
import PageTitle from "@/components/PageTitle";
import TitleHeader from "@/components/TitleHeader";

import CardShop from "@/components/CardShop";
import Brands from "@/components/Brands";
import CardShopHorz from "@/components/CardShopHorz";

import { products1, products2 } from "@/constants/constants";
import SearchPrice from "@/components/SearchPrice";
import SideFilter from "@/components/SideFilter";

const Shop = () => {
  const [listView, setListView] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  const toggleBar = () => {
    setSideBar((prev) => !prev);
  };

  const { register, handleSubmit } = useForm<FieldValues>({
    defaultValues: { email: "" },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  // const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log("change", event.target.value);
  // };

  return (
    <div>
      <PageTitle title="Shop Grid Default" />
      <TitleHeader listView={listView} setListView={setListView} />
      <ContainerBody>
        <button
          className="w-[50px] h-full bg-pink-500 rounded-[3px] flex justify-center items-center text-indigo-50 text-base font-medium mb-[30px]"
          onClick={toggleBar}
        >
          Filter
        </button>
        <div className="flex justify-start items-start">
          {sideBar && (
            <div
              className={`${
                sideBar ? "w-[300px] " : "hidden w-0 "
              } duration-500 `}
            >
              <SideFilter />
            </div>
          )}
          {!listView && (
            <div
              className={` ${
                sideBar
                  ? "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
                  : "grid-cols-1 lg:grid-cols-3 xl:grid-cols-4"
              } w-full grid  gap-[37px] duration-700`}
            >
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
                    sideBar={sideBar}
                    link="/"
                  />
                );
              })}
            </div>
          )}
        </div>
        <Brands />
      </ContainerBody>
    </div>
  );
};

export default Shop;
