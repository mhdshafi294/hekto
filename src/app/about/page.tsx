"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import CardValues from "@/components/CardValues";
import ContainerBody from "@/components/ContainerBody";
import PageTitle from "@/components/PageTitle";
import { ourValues } from "@/constants/constants";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= 3) {
      newIndex = 2;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div>
      <PageTitle title="About Us" />
      <ContainerBody>
        <div className="flex justify-between items-center gap-[30px] h-[409px] w-full">
          <div className=" relative w-[570px] h-full">
            <div className="w-[552px] h-[409px] bg-blue-800 rounded-md absolute left-0 top-0"></div>
            <div className="w-[555px] h-[390px] absolute top-0 right-0 rounded-md shadow-blue-800 shadow">
              <Image
                src="/about1.jpeg"
                fill={true}
                alt=""
                className=" "
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="w-[550px] flex flex-col items-start justify-center">
            <h2 className="text-violet-950 text-4xl font-bold leading-[48px]">
              Know About Our Ecomerce
              <br />
              Business, History
            </h2>
            <div className=" text-slate-400 text-base font-semibold leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </div>
            <Link
              href="/contact"
              className="text-white text-lg font-semibold leading-relaxed w-[145px] h-11 bg-pink-500 rounded-[3px] mt-[100px] flex justify-center items-center hover:bg-pink-600"
            >
              Contact us
            </Link>
          </div>
        </div>
        <h2 className="text-violet-950 text-[42px] font-bold mt-[141px] mb-[64px] text-center">
          Our Features
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-[37px]">
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
      <div className="w-full h-[503px] bg-slate-50 mt-[133px] pt-[71px] pb-[77px] flex flex-col justify-start items-center">
        <h2 className="text-black text-[42px] font-bold leading-relaxed">
          Our Client Say!
        </h2>
        <div className="flex justify-center items-center gap-[13px] mt-[30px]">
          <div className="w-[55px] h-[55px] relative">
            <Image
              src="/client1.jpeg"
              fill={true}
              alt=""
              className={`${
                activeIndex === 0 ? " -translate-y-3" : ""
              } duration-500`}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-[55px] h-[55px] relative">
            <Image
              src="/client2.jpeg"
              fill={true}
              alt=""
              className={`${
                activeIndex === 1 ? " -translate-y-3" : ""
              } duration-500`}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-[55px] h-[55px] relative">
            <Image
              src="/client3.jpeg"
              fill={true}
              alt=""
              className={`${
                activeIndex === 2 ? " -translate-y-3" : ""
              } duration-500`}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="w-[689px] h-full overflow-hidden flex flex-col justify-start mt-[25px]">
          <div
            className="whitespace-nowrap duration-1000 "
            style={{ transform: `translate(-${activeIndex * 100}%)` }}
          >
            <div className="inline-flex flex-col items-center justify-start  w-full ">
              <h2 className="text-[22px] font-semibold">Charles Leclerc</h2>
              <h5 className="text-slate-400 text-[10px] font-semibold">
                F1 Driver at Ferrari
              </h5>
              <p className="w-[689px] text-center text-slate-400 text-base font-bold mt-[14px] whitespace-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam
                vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices
                dolor aliquam lacus volutpat praesent.
              </p>
            </div>
            <div className="inline-flex flex-col items-center justify-start  w-full ">
              <h2 className="text-[22px] font-semibold">Selina Gomez</h2>
              <h5 className="text-slate-400 text-[10px] font-semibold">
                Ceo At Webecy Digital
              </h5>
              <p className="w-[689px] text-center text-slate-400 text-base font-bold mt-[14px] whitespace-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam
                vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices
                dolor aliquam lacus volutpat praesent.
              </p>
            </div>
            <div className="inline-flex flex-col items-center justify-start  w-full ">
              <h2 className="text-[22px] font-semibold">Mattia Binotto</h2>
              <h5 className="text-slate-400 text-[10px] font-semibold">
                GM At Alpine
              </h5>
              <p className="w-[689px] text-center text-slate-400 text-base font-bold mt-[14px] whitespace-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam
                vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices
                dolor aliquam lacus volutpat praesent.
              </p>
            </div>
          </div>
        </div>
        <div className="h-1 flex justify-start items-center gap-[5px] ">
          <button
            className={` h-1 rounded-[10px] hover:w-[21px] hover:bg-pink-400 duration-300 ${
              activeIndex === 0
                ? "w-[27px] bg-pink-500"
                : "w-[18px] bg-pink-300"
            }`}
            onClick={() => {
              updateIndex(0);
            }}
          />
          <button
            className={`h-1 rounded-[10px] hover:w-[21px] hover:bg-pink-400 duration-300 ${
              activeIndex === 1
                ? "w-[27px] bg-pink-500"
                : "w-[18px] bg-pink-300"
            }`}
            onClick={() => {
              updateIndex(1);
            }}
          />
          <button
            className={` h-1 rounded-[10px] hover:w-[21px] hover:bg-pink-400 duration-300 ${
              activeIndex === 2
                ? "w-[27px] bg-pink-500"
                : "w-[18px] bg-pink-300"
            }`}
            onClick={() => {
              updateIndex(2);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
