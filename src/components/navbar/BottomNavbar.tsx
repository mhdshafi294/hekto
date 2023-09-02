"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

import ContainerNav from "../ContainerNav";
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
    {
      name: "Shop",
      action: () => {
        router.push("/shop");
      },
    },
    {
      name: "Demo",
      action: () => {
        router.push("/shop/demo");
      },
    },
  ];

  return (
    <div className="w-full h-11 mt-4 mb-[22px]">
      <ContainerNav>
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center gap-11">
            <Link
              className="text-indigo-950 text-[34px] font-bold cursor-pointer"
              href="/"
            >
              Hekto
            </Link>
            <ul className="flex justify-start items-center gap-4">
              <li>
                <DropDownMenu
                  label={pages[0].name}
                  items={pages}
                  color="text-indigo-950"
                  hoverColor="text-pink-500"
                  bgColor="bg-white bg-opacity-90 "
                />
              </li>
              <Link
                href="/pages"
                className="text-indigo-950 text-base font-normal leading-tight cursor-pointer hover:text-pink-500"
              >
                <li>Pages</li>
              </Link>
              <Link
                href="/products"
                className="text-indigo-950 text-base font-normal leading-tight cursor-pointer hover:text-pink-500"
              >
                <li>Products</li>
              </Link>
              <Link
                href="/blogs"
                className="text-indigo-950 text-base font-normal leading-tight cursor-pointer hover:text-pink-500"
              >
                <li>Blog</li>
              </Link>
              <Link
                href="/shop"
                className="text-indigo-950 text-base font-normal leading-tight cursor-pointer hover:text-pink-500"
              >
                <li>Shop</li>
              </Link>
              <Link
                href="/contact"
                className="text-indigo-950 text-base font-normal leading-tight cursor-pointer hover:text-pink-500"
              >
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <div>
            <Search />
          </div>
        </div>
      </ContainerNav>
    </div>
  );
};

export default BottomNavbar;
