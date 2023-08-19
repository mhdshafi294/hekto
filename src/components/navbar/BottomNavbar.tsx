"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import Container from "./../Container";
import DropDownMenu from "../DropDownMenu";
import Search from "./Search";

const BottomNavbar = () => {
  const router = useRouter();

  const pages = [
    {
      name: "Home",
      action: () => {
        router.push("/");
      },
    },
    {
      name: "About",
      action: () => {
        router.push("/about");
      },
    },
  ];

  return (
    <div className="w-full h-11 mt-4">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center gap-11">
            <p
              className="text-indigo-950 text-[34px] font-bold cursor-pointer"
              onClick={() => router.push("/")}
            >
              Hekto
            </p>
            <ul className="flex justify-start items-center gap-4">
              <li>
                <DropDownMenu
                  label={pages[0].name}
                  items={pages}
                  color="text-pink-500"
                  bgColor="bg-white-200 bg-opacity-60 "
                />
              </li>
              <li
                className="text-indigo-950 text-base font-normal leading-tight cursor-pointer"
                onClick={() => {
                  router.push("/pages");
                }}
              >
                Pages
              </li>
              <li
                className="text-indigo-950 text-base font-normal leading-tight cursor-pointer"
                onClick={() => {
                  router.push("/products");
                }}
              >
                Products
              </li>
              <li
                className="text-indigo-950 text-base font-normal leading-tight cursor-pointer"
                onClick={() => {
                  router.push("/blog");
                }}
              >
                Blog
              </li>
              <li
                className="text-indigo-950 text-base font-normal leading-tight cursor-pointer"
                onClick={() => {
                  router.push("/shop");
                }}
              >
                Shop
              </li>
              <li
                className="text-indigo-950 text-base font-normal leading-tight cursor-pointer"
                onClick={() => {
                  router.push("/contact");
                }}
              >
                Contact
              </li>
            </ul>
          </div>
          <div>
            <Search />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BottomNavbar;
