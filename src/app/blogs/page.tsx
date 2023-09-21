"use client";

import { useState } from "react";
import Link from "next/link";

import Brands from "@/components/Brands";
import ContainerBody from "@/components/ContainerBody";
import PageTitle from "@/components/PageTitle";
import Blog from "@/components/blogs/Blog";
import SideBlog from "@/components/blogs/SideBlog";

import { blogsDetailed } from "@/constants/constants";

const Blogs = () => {
  const [page, setPage] = useState(1);

  return (
    <div>
      <PageTitle title="Blog Page" />
      <ContainerBody>
        <div className="flex gap-[58px]">
          <div className="w-[870px]">
            {blogsDetailed.map((blog) => (
              <Blog
                key={blog.id}
                id={blog.id}
                img={blog.img}
                writer={blog.writer}
                date={blog.date}
                title={blog.title}
                abstract={blog.abstract}
                link={blog.link}
              />
            ))}
            <div className="mt-[72px] mx-auto w-fit flex justify-center items-center gap-[36px]">
              <Link
                href="/blogs"
                className={`${
                  page === 1
                    ? "bg-pink-500 text-white"
                    : "border border-violet-200  text-violet-200 hover:text-pink-500 hover:border-pink-500"
                } w-8 h-6 rounded-sm justify-center items-center flex  text-base font-semibold`}
                onClick={() => {
                  setPage(1);
                }}
              >
                1
              </Link>
              <Link
                href="/blogs"
                className={`${
                  page === 2
                    ? "bg-pink-500 text-white"
                    : "border border-violet-200 text-violet-200 hover:text-pink-500 hover:border-pink-500"
                } w-8 h-6 rounded-sm justify-center items-center flex  text-base font-semibold`}
                onClick={() => {
                  setPage(2);
                }}
              >
                2
              </Link>
              <Link
                href="/blogs"
                className={`${
                  page === 3
                    ? "bg-pink-500 text-white"
                    : "border border-violet-200 text-violet-200 hover:text-pink-500 hover:border-pink-500"
                } w-8 h-6 rounded-sm justify-center items-center flex  text-base font-semibold`}
                onClick={() => {
                  setPage(3);
                }}
              >
                3
              </Link>
              <Link
                href="/blogs"
                className={`${
                  page === 4
                    ? "bg-pink-500 text-white"
                    : "border border-violet-200 text-violet-200 hover:text-pink-500 hover:border-pink-500"
                } w-8 h-6 rounded-sm justify-center items-center flex  text-base font-semibold`}
                onClick={() => {
                  setPage(4);
                }}
              >
                4
              </Link>
            </div>
          </div>
          <SideBlog />
        </div>
      </ContainerBody>
      <Brands />
    </div>
  );
};

export default Blogs;
