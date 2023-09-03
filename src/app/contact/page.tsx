"use client";

import Image from "next/image";

import { useForm, SubmitHandler } from "react-hook-form";

import ContainerBody from "@/components/ContainerBody";
import PageTitle from "@/components/PageTitle";

import { lato } from "../layout";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  massage: string;
};

const Contact = () => {
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
        <div className="flex justify-between">
          <div className="w-[550px]">
            <h2 className="text-violet-950 text-4xl font-bold mb-[13px]">
              Information About us
            </h2>
            <p
              className={`${lato.className} w-[550px] h-[49px] text-slate-400 text-base font-semibold leading-relaxed `}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </p>
            <div className=" flex justify-start items-center gap-[15px] mt-20">
              <div className="w-[25px] h-[25px]  bg-violet-700 rounded-full" />
              <div className="w-[25px] h-[25px]  bg-pink-500 rounded-full" />
              <div className="w-[25px] h-[25px]  bg-cyan-400 rounded-full" />
            </div>
            <h2 className=" text-violet-950 text-4xl font-bold mt-[176px]">
              Get In Touch
            </h2>
            <p
              className={`${lato.className} text-slate-400 text-base font-semibold leading-relaxed mt-5`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices tristique amet erat vitae eget dolor los vitae
              lobortis quis bibendum quam.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-[46px] w-[534px] flex flex-col"
            >
              <div className="flex justify-between w-full">
                <div
                  className={`${lato.className} w-[255px] h-[45px] rounded-[3px] border border-slate-400 border-opacity-70 pl-[9px] flex items-center gap-[6px]`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                  >
                    <path
                      d="M12.2308 12.2865V11.1627C12.2308 10.5666 11.994 9.99488 11.5725 9.57336C11.151 9.15184 10.5793 8.91504 9.98317 8.91504H5.48788C4.89177 8.91504 4.32007 9.15184 3.89855 9.57336C3.47704 9.99488 3.24023 10.5666 3.24023 11.1627V12.2865"
                      fill="#8A8FB9"
                    />
                    <path
                      d="M7.73397 6.6679C8.97532 6.6679 9.98162 5.6616 9.98162 4.42025C9.98162 3.17891 8.97532 2.17261 7.73397 2.17261C6.49263 2.17261 5.48633 3.17891 5.48633 4.42025C5.48633 5.6616 6.49263 6.6679 7.73397 6.6679Z"
                      fill="#8A8FB9"
                    />
                  </svg>
                  <input
                    defaultValue=""
                    {...register("name")}
                    className="w-[80%] focus:outline-none"
                    placeholder="Your Name*"
                  />
                </div>
                <div
                  className={`${lato.className} w-[255px] h-[45px] rounded-[3px] border border-slate-400 border-opacity-70 pl-[9px] flex items-center gap-[6px]`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <path
                      d="M2.84257 2.85767H11.8332C12.4513 2.85767 12.957 3.36339 12.957 3.98149V10.7244C12.957 11.3425 12.4513 11.8483 11.8332 11.8483H2.84257C2.22447 11.8483 1.71875 11.3425 1.71875 10.7244V3.98149C1.71875 3.36339 2.22447 2.85767 2.84257 2.85767Z"
                      fill="#8A8FB9"
                    />
                    <path
                      d="M12.957 3.98108L7.33787 7.91446L1.71875 3.98108"
                      stroke="white"
                      strokeWidth="1.12382"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <input
                    defaultValue=""
                    {...register("email")}
                    className="w-[80%] focus:outline-none"
                    placeholder="Your E-mail"
                  />
                </div>
              </div>
              <div
                className={`${lato.className} w-full h-[45px] rounded-[3px] border border-slate-400 border-opacity-70 pl-[9px] flex items-center gap-[6px] mt-[34px]`}
              >
                <input
                  defaultValue=""
                  {...register("subject")}
                  className="w-[80%] focus:outline-none"
                  placeholder="Subject"
                />
              </div>
              <div
                className={`${lato.className}  h-[166px] mt-[45px] border border-slate-400 flex items-start gap-[6px] px-[20px] py-[25px]`}
              >
                <svg
                  className=" mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M12.0285 6.84475C12.0304 7.5864 11.8571 8.31801 11.5228 8.98001C11.1263 9.77329 10.5168 10.4405 9.76254 10.907C9.00828 11.3734 8.13906 11.6207 7.25222 11.621C6.51057 11.6229 5.77896 11.4497 5.11696 11.1153L1.91406 12.1829L2.98169 8.98001C2.64732 8.31801 2.47404 7.5864 2.47597 6.84475C2.47632 5.95791 2.72356 5.08869 3.19001 4.33443C3.65645 3.58018 4.32368 2.97068 5.11696 2.57422C5.77896 2.23984 6.51057 2.06656 7.25222 2.0685H7.53318C8.7044 2.13311 9.81063 2.62747 10.6401 3.4569C11.4695 4.28634 11.9639 5.39257 12.0285 6.56379V6.84475Z"
                    fill="#8A8FB9"
                  />
                </svg>
                <textarea
                  defaultValue=""
                  {...register("massage")}
                  className="w-[95%] h-[90%] whitespace-pre-wrap focus:outline-none"
                  placeholder="Write your massage*"
                ></textarea>
              </div>
              <button
                className="w-[157px] h-11 bg-pink-500 hover:bg-pink-600 rounded-sm flex justify-center items-center text-white text-lg font-semibold mt-[33px] "
                type="submit"
              >
                Send Mail
              </button>
            </form>
          </div>
          <div className="flex flex-col items-center">
            <h2 className=" text-violet-950 text-4xl font-bold mb-[26px]">
              Contact Way
            </h2>
            <div className="grid grid-cols-2 gap-x-[37px] gap-y-[49px]">
              <div className="flex justify-start items-stretch gap-[15px]">
                <div className="w-[45px] h-[45px] bg-violet-700 rounded-full"></div>
                <div>
                  <div
                    className={`${lato.className} text-slate-400 text-base font-semibold leading-relaxed`}
                  >
                    Tel: 877-67-88-99
                  </div>
                  <div
                    className={`${lato.className} text-slate-400 text-base font-semibold leading-relaxed`}
                  >
                    E-Mail: shop@store.com
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-stretch gap-[15px]">
                <div className="w-[45px] h-[45px] bg-pink-500 rounded-full"></div>
                <div>
                  <div
                    className={`${lato.className} text-slate-400 text-base font-semibold leading-relaxed`}
                  >
                    Support Forum
                  </div>
                  <div
                    className={`${lato.className} text-slate-400 text-base font-semibold leading-relaxed`}
                  >
                    For over 24hr
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-stretch gap-[15px]">
                <div className="w-[45px] h-[45px] bg-orange-300 rounded-full"></div>
                <div>
                  <div
                    className={`${lato.className} text-slate-400 text-base font-semibold leading-relaxed`}
                  >
                    20 Margaret st, London
                  </div>
                  <div
                    className={`${lato.className} text-slate-400 text-base font-semibold leading-relaxed`}
                  >
                    Great britain, 3NM98-LK
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-stretch gap-[15px]">
                <div className="w-[45px] h-[45px] bg-emerald-400 rounded-full"></div>
                <div>
                  <div
                    className={`${lato.className} text-slate-400 text-base font-semibold leading-relaxed`}
                  >
                    Free standard shipping
                  </div>
                  <div
                    className={`${lato.className} text-slate-400 text-base font-semibold leading-relaxed`}
                  >
                    on all orders.
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[723px] h-[692px] mt-[120px]">
              <Image
                src="/contact.svg"
                fill={true}
                alt=""
                className=" "
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </ContainerBody>
    </div>
  );
};

export default Contact;
