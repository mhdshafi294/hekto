"use client";

import React from "react";
import { LuSearch } from "react-icons/lu";

const SearchPrice = () => {
  return (
    <div className="flex items-center w-[203px] h-[31px] bg-white rounded-[3px] border border-slate-300 pr-[14px] gap-2">
      <input
        className="w-full h-full px-3"
        type="search"
        placeholder="$10.00 - 20000$"
        onChange={() => {}}
      />
      <button
        className="flex justify-center items-center text-gray-500"
        onClick={() => {}}
      >
        <LuSearch />
      </button>
    </div>
  );
};

export default SearchPrice;
