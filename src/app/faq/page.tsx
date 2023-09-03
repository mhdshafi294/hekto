"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import PageTitle from "@/components/PageTitle";
import ContainerBody from "@/components/ContainerBody";

import { lato } from "../layout";
import Brands from "@/components/Brands";

type Inputs = {
  name: string;
  subject: string;
  massage: string;
};

const FAQ = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div>
      <PageTitle title="Contact Us" />
      <ContainerBody>
        <div className="flex justify-between w-full">
          <div className="w-[500px]">
            <h1 className=" text-blue-900 text-4xl font-bold mb-[64px]">
              Generel Information
            </h1>
            <h3 className="text-blue-900 text-[17px] font-bold mb-[15px]">
              Eu dictumst cum at sed euismood condimentum?
            </h3>
            <p className=" text-slate-400 text-base font-normal mb-[60px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              sed tristique mollis vitae, consequat gravida sagittis.
            </p>
            <h3 className="text-blue-900 text-[17px] font-bold mb-[15px]">
              Magna bibendum est fermentum eros.
            </h3>
            <p className=" text-slate-400 text-base font-normal mb-[60px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              sed tristique mollis vitae, consequat gravida sagittis.
            </p>
            <h3 className="text-blue-900 text-[17px] font-bold mb-[15px]">
              Odio muskana hak eris conseekin sceleton?
            </h3>
            <p className=" text-slate-400 text-base font-normal mb-[60px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              sed tristique mollis vitae, consequat gravida sagittis.
            </p>
            <h3 className="text-blue-900 text-[17px] font-bold mb-[15px]">
              Elit id blandit sabara boi velit gua mara?
            </h3>
            <p className=" text-slate-400 text-base font-normal mb-[60px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              sed tristique mollis vitae, consequat gravida sagittis.
            </p>
          </div>
          <div className="w-[566px] h-[738px] bg-slate-50 px-[42px] pt-[66px]">
            <h2 className=" text-blue-900 text-2xl font-bold mb-[114px]">
              Ask a Question
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col ml-1"
            >
              <div
                className={`${lato.className} w-full h-[45px] border-opacity-70 pl-[9px] flex items-center bg-white rounded-[5px] border border-gray-300 `}
              >
                <input
                  defaultValue=""
                  {...register("name")}
                  className="w-[80%] focus:outline-none"
                  placeholder="Your Name*"
                />
              </div>
              <div
                className={`${lato.className} w-full h-[45px]  border-opacity-70 pl-[9px] flex items-center mt-[35px] mb-[45px] bg-white rounded-[5px] border border-gray-300`}
              >
                <input
                  defaultValue=""
                  {...register("subject")}
                  className="w-[80%] focus:outline-none"
                  placeholder="Subject"
                />
              </div>
              <div
                className={`${lato.className}  h-[166px] flex items-start gap-[6px] px-[9px] py-[25px] bg-white rounded-[5px] border border-gray-300`}
              >
                <textarea
                  defaultValue=""
                  {...register("massage")}
                  className="w-[95%] h-[90%] whitespace-pre-wrap focus:outline-none"
                  placeholder="Write your massage*"
                ></textarea>
              </div>
              <button
                className="w-[157px] h-11 bg-pink-500 hover:bg-pink-600 rounded-sm flex justify-center items-center text-white text-lg font-semibold mt-[41px] "
                type="submit"
              >
                Send Mail
              </button>
            </form>
          </div>
        </div>
      </ContainerBody>
      <Brands />
    </div>
  );
};

export default FAQ;
