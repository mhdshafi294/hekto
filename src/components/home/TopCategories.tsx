"use client";

import { useRef, useState } from "react";

import { category } from "@/constants/constants";
import CardFeatured from "../CardFeatured";
import TopCategoryItem from "../TopCategoryItem";
import ContainerBody from "../ContainerBody";

const TopCategories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= 3) {
      newIndex = 2;
    }

    setActiveIndex(newIndex);
  };

  return (
    <ContainerBody>
      <h2 className="text-violet-950 text-[42px] font-bold mt-[129px] mb-[48px] text-center">
        Top Categories
      </h2>
      <div className="w-fulls overflow-hidden flex flex-col justify-center">
        <div
          className="whitespace-nowrap duration-1000 "
          style={{
            transform: ` translateX(calc(-${activeIndex * 100}%) )`,
          }}
        >
          <div className="inline-flex items-center justify-center gap-[29px] w-[1168px] h-[365px] px-2">
            {category.map((chair, index) => {
              return (
                <TopCategoryItem
                  key={index}
                  img={chair.img}
                  name={chair.name}
                  price={chair.price}
                  link="/"
                />
              );
            })}
          </div>
          <div className="inline-flex items-center justify-center gap-[29px] w-[1168px] h-[365px] ">
            {category.map((chair, index) => {
              return (
                <TopCategoryItem
                  key={index}
                  img={chair.img}
                  name={chair.name}
                  price={chair.price}
                  link="/"
                />
              );
            })}
          </div>
          <div className="inline-flex items-center justify-center gap-[29px] w-[1168px] h-[365px] px-2">
            {category.map((chair, index) => {
              return (
                <TopCategoryItem
                  key={index}
                  img={chair.img}
                  name={chair.name}
                  price={chair.price}
                  link="/"
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className=" w-auto h-1 mt-[53px] mx-auto flex justify-center items-center gap-2">
        <button
          className={` w-2.5 h-[9.89px] -rotate-45 rounded-[50px] ${
            activeIndex === 0 ? "bg-pink-500" : "border border-pink-500"
          }`}
          onClick={() => {
            updateIndex(0);
          }}
        />
        <button
          className={`w-2.5 h-[9.89px]  -rotate-45 rounded-[50px]   ${
            activeIndex === 1 ? "bg-pink-500" : "border border-pink-500"
          }`}
          onClick={() => {
            updateIndex(1);
          }}
        />
        <button
          className={`w-2.5 h-[9.89px]  -rotate-45 rounded-[50px]  ${
            activeIndex === 2 ? "bg-pink-500" : "border border-pink-500"
          }`}
          onClick={() => {
            updateIndex(2);
          }}
        />
      </div>
    </ContainerBody>
  );
};

export default TopCategories;
