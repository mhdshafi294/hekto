"use client";

import { useState } from "react";
import Image from "next/image";

import { lato } from "@/app/layout";

import {
  blogProducts,
  blogsCategories,
  blogsRecent,
  blogsSale,
  blogsTags,
} from "@/constants/constants";
import Link from "next/link";
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const SideBlog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Hobbies");
  const [selectedTag, setSelectedTag] = useState("Atsanil");

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="w-[270px]">
      <h6 className="text-violet-950 text-[22px] font-semibold">Search</h6>
      <div className="w-[270px] h-10 bg-white rounded-sm border border-slate-300 pl-[10px] pr-[26px] py-[11px] flex justify-between items-center mt-[15px]">
        <input
          type="text"
          className=" text-base font-normal pl-2 text-violet-950 placeholder-gray-200"
          placeholder="Search For Posts"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
            stroke="#CBCBE0"
            strokeLinecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.9996 14L11.0996 11.1"
            stroke="#CBCBE0"
            strokeLinecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <h6 className="text-violet-950 text-[22px] font-semibold mt-[52px] mb-[25px]">
        Categories
      </h6>
      <div className="grid grid-cols-2 gap-[10px] capitalize">
        {blogsCategories.map((category) => {
          return (
            <button
              key={category.name}
              onClick={() => {
                setSelectedCategory(category.name);
              }}
              className={`rounded-[3px] flex justify-start items-center p-2 gap-3  text-sm font-normal w-[122px] h-[30px] ${
                category.name === selectedCategory
                  ? ` bg-pink-500 text-white`
                  : `  bg-white text-indigo-800`
              }`}
            >
              {category.name}
              {` (${category.qty})`}
            </button>
          );
        })}
      </div>
      <h6 className="text-violet-950 text-[22px] font-semibold mt-[52px] mb-[25px]">
        Recent Post
      </h6>
      <div>
        {blogsRecent.map((blog) => {
          return (
            <div
              key={blog.id}
              className="flex justify-between items-center mb-[22px]"
            >
              <div className="w-[70px] h-[51px] mr-1 relative rounded-sm">
                <Image
                  src={blog.img}
                  fill={true}
                  alt=""
                  className=" rounded-sm"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <p className="w-[174px] text-indigo-800 text-sm font-normal">
                  {blog.title}
                </p>
                <p
                  className={`${lato.className} text-slate-400 text-[11px] font-semibold`}
                >
                  {blog.date}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <h6 className="text-violet-950 text-[22px] font-semibold mt-[52px] mb-[25px]">
        Sale Product
      </h6>
      <div>
        {blogsSale.map((blog) => {
          return (
            <div
              key={blog.id}
              className="flex justify-between items-center mb-[22px]"
            >
              <div className="w-[70px] h-[51px] mr-1 relative rounded-sm">
                <Image
                  src={blog.img}
                  fill={true}
                  alt=""
                  className=" rounded-sm"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <p className="w-[174px] text-indigo-800 text-sm font-normal">
                  {blog.title}
                </p>
                <p
                  className={`${lato.className} text-slate-400 text-[11px] font-semibold`}
                >
                  {blog.date}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <h6 className="text-violet-950 text-[22px] font-semibold mt-[52px] mb-[25px]">
        Offer product
      </h6>
      <div className="grid grid-cols-2 gap-x-[15px] gap-y-[30px]">
        {blogProducts.map((product) => {
          return (
            <div key={product.id} className="flex flex-col items-center">
              <div className="w-[126px] h-20 mr-1 relative rounded-sm">
                <Image
                  src={product.img}
                  fill={true}
                  alt=""
                  className=" rounded-sm"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <Link
                  href={`/shop/product`}
                  className={`${lato.className} text-center text-violet-950 text-sm font-semibold mt-[9px] mb-[6px]`}
                >
                  {product.name}
                </Link>
                <p
                  className={`${lato.className} text-center text-slate-400 text-xs font-semibold`}
                >
                  {`${formatter.format(product.price)} - ${formatter.format(
                    product.oldPrice
                  )}`}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <h6 className="text-violet-950 text-[22px] font-semibold mt-[52px] mb-[25px]">
        Follow
      </h6>
      <div className="ml-[11px] flex justify-start items-center gap-[14px]">
        <Link
          href="/"
          className="w-[25px] h-[25px] bg-blue-800 rounded-full text-[16px] flex justify-center items-center text-white hover:scale-125 duration-300"
        >
          <BiLogoFacebook />
        </Link>
        <Link
          href="/"
          className="w-[25px] h-[25px] bg-pink-500 rounded-full text-[16px] flex justify-center items-center text-white hover:scale-125 duration-300"
        >
          <AiFillInstagram />
        </Link>
        <Link
          href="/"
          className="w-[25px] h-[25px] bg-blue-400 rounded-full text-[16px] flex justify-center items-center text-white hover:scale-125 duration-300"
        >
          <AiOutlineTwitter />
        </Link>
      </div>
      <h6 className="text-violet-950 text-[22px] font-semibold mt-[52px] mb-[25px]">
        Tags
      </h6>
      <div className="w-full grid grid-cols-3">
        {blogsTags.map((tag) => {
          return (
            <button
              key={tag.name}
              className={` text-base font-normal underline ${
                selectedTag === tag.name ? "text-pink-500" : "text-violet-950"
              }`}
              onClick={() => {
                setSelectedTag(tag.name);
              }}
            >
              {tag.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SideBlog;
