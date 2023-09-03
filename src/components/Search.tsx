"use client";

import React from "react";
import { LuSearch } from "react-icons/lu";

const Search = () => {
  return (
    <div className="flex gap-0">
      <div className="w-80 h-10 border border-gray-200 ">
        <input
          className="w-full h-full px-2"
          type="search"
          placeholder=""
          onChange={() => {}}
        />
      </div>
      <div className="w-12 h-10 group bg-pink-500 hover:bg-pink-600 duration-200 flex justify-center items-center text-white cursor-pointer">
        <LuSearch className=" group-hover:scale-110 duration-200" />
      </div>
    </div>
  );
};

export default Search;
