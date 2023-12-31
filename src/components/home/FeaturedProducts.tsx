"use client";

import { useState } from "react";

import { chairs1 } from "@/constants/constants";
import CardFeatured from "../CardFeatured";
import ContainerBody from "../ContainerBody";

const FeaturedProducts = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
      <div className="w-full h-full overflow-hidden flex flex-col justify-center mb-[53px]">
        <div
          className="whitespace-nowrap duration-1000"
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          <div className="inline-flex items-center justify-start gap-[29px] w-[1168px] h-[365px] px-2">
            {chairs1.map((chair, index) => {
              return (
                <CardFeatured
                  key={index}
                  img={chair.img}
                  name={chair.name}
                  code={chair.code}
                  price={chair.price}
                  link="/"
                />
              );
            })}
          </div>
          <div className="inline-flex items-center justify-center gap-[29px] w-[1168px] h-[365px]">
            {chairs1.map((chair, index) => {
              return (
                <CardFeatured
                  key={index}
                  img={chair.img}
                  name={chair.name}
                  code={chair.code}
                  price={chair.price}
                  link="/"
                />
              );
            })}
          </div>
          <div className="inline-flex items-center justify-center gap-[29px] w-[1168px] h-[365px]">
            {chairs1.map((chair, index) => {
              return (
                <CardFeatured
                  key={index}
                  img={chair.img}
                  name={chair.name}
                  code={chair.code}
                  price={chair.price}
                  link="/"
                />
              );
            })}
          </div>
          <div className="inline-flex items-center justify-center gap-[29px] w-[1168px]">
            {chairs1.map((chair, index) => {
              return (
                <CardFeatured
                  key={index}
                  img={chair.img}
                  name={chair.name}
                  code={chair.code}
                  price={chair.price}
                  link="/"
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-[91px] h-1  flex justify-start items-center gap-1 mx-auto">
        <button
          className={` h-1 rounded-[10px] hover:w-5 hover:bg-pink-400 duration-300 ${
            activeIndex === 0 ? "w-6 bg-pink-500" : "w-4 bg-pink-300"
          }`}
          onClick={() => {
            updateIndex(0);
          }}
        />
        <button
          className={`h-1 rounded-[10px] hover:w-5 hover:bg-pink-400 duration-300 ${
            activeIndex === 1 ? "w-6 bg-pink-500" : "w-4 bg-pink-300"
          }`}
          onClick={() => {
            updateIndex(1);
          }}
        />
        <button
          className={` h-1 rounded-[10px] hover:w-5 hover:bg-pink-400 duration-300 ${
            activeIndex === 2 ? "w-6 bg-pink-500" : "w-4 bg-pink-300"
          }`}
          onClick={() => {
            updateIndex(2);
          }}
        />
        <button
          className={` h-1 rounded-[10px] hover:w-5 hover:bg-pink-400 duration-300 ${
            activeIndex === 3 ? "w-6 bg-pink-500" : "w-4 bg-pink-300"
          }`}
          onClick={() => {
            updateIndex(3);
          }}
        />
      </div>
    </ContainerBody>
  );
};

export default FeaturedProducts;
