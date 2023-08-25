"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { BsCart2 } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart, AiOutlineZoomIn } from "react-icons/ai";

import { productRate } from "@/constants/constants";

interface CardShopHorzProps {
  img: string;
  name: string;
  description: string;
  price: number;
  oldPrice: number;
  rate: productRate;
  link: string;
}

const CardShopHorz: React.FC<CardShopHorzProps> = ({
  img,
  name,
  description,
  price,
  oldPrice,
  rate,
  link,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 2, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 2, // (causes 2500.99 to be printed as $2,501)
  });

  return (
    <div className="w-[1141px] h-[254px] bg-white shadow flex justify-start items-center gap-[32px] py-[18px] pl-[20px] group hover:translate-x-2 duration-500">
      <Image
        src={img}
        width={314}
        height={217}
        alt=""
        className=" max-h-[217px]"
        style={{ objectFit: "cover" }}
      />
      <div className="flex flex-col justify-center items-start">
        <div className="flex justify-start items-center gap-[18px]">
          <Link
            href={link}
            className="text-blue-900 text-xl font-bold group-hover:text-pink-500"
          >
            {name}
          </Link>
          <div className="w-[42px] h-2.5 flex justify-between items-center">
            <div className="w-2.5 h-2.5  bg-orange-400 rounded-full" />
            <div className="w-2.5 h-2.5  bg-pink-500 rounded-full" />
            <div className="w-2.5 h-2.5  bg-violet-500 rounded-full" />
          </div>
        </div>
        <div className="flex justify-center gap-[10px] items-center mt-[15px]">
          <p className="text-center text-violet-950 text-sm font-normal">
            {formatter.format(price)}
          </p>
          <p className="text-center text-pink-500 text-sm font-normal line-through">
            {formatter.format(oldPrice)}
          </p>
          <div className="flex justify-start items-center ml-[18px]">
            {rate >= 1 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clipPath="url(#clip0_91_705)">
                  <path
                    d="M11.8742 4.60447L8.58835 4.12692L7.11948 1.14907C7.07936 1.06753 7.01336 1.00153 6.93183 0.961413C6.72735 0.860469 6.47887 0.944589 6.37663 1.14907L4.90776 4.12692L1.6219 4.60447C1.53131 4.61741 1.44848 4.66012 1.38507 4.72482C1.3084 4.80362 1.26616 4.90963 1.26761 5.01956C1.26907 5.12949 1.31411 5.23434 1.39283 5.31108L3.7702 7.62891L3.20854 10.9018C3.19536 10.978 3.20379 11.0563 3.23286 11.1279C3.26192 11.1995 3.31047 11.2615 3.37298 11.3069C3.4355 11.3523 3.50949 11.3793 3.58656 11.3848C3.66363 11.3903 3.7407 11.374 3.80902 11.338L6.74806 9.79274L9.68709 11.338C9.76733 11.3807 9.86051 11.3949 9.9498 11.3794C10.175 11.3406 10.3264 11.127 10.2876 10.9018L9.72591 7.62891L12.1033 5.31108C12.168 5.24766 12.2107 5.16484 12.2236 5.07425C12.2586 4.84777 12.1007 4.63811 11.8742 4.60447Z"
                    fill="#FFC416"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_91_705">
                    <rect
                      width="13.2522"
                      height="13.2522"
                      fill="white"
                      transform="translate(0.121582 0.03479)"
                    />
                  </clipPath>
                </defs>
              </svg>
            )}
            {!(rate >= 1) && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clipPath="url(#clip0_91_709)">
                  <path
                    d="M11.822 4.60447L8.5361 4.12692L7.06723 1.14907C7.02711 1.06753 6.96111 1.00153 6.87958 0.961413C6.6751 0.860469 6.42663 0.944589 6.32439 1.14907L4.85552 4.12692L1.56965 4.60447C1.47906 4.61741 1.39624 4.66012 1.33282 4.72482C1.25616 4.80362 1.21391 4.90963 1.21537 5.01956C1.21682 5.12949 1.26186 5.23434 1.34059 5.31108L3.71795 7.62891L3.15629 10.9018C3.14312 10.978 3.15154 11.0563 3.18061 11.1279C3.20968 11.1995 3.25822 11.2615 3.32074 11.3069C3.38325 11.3523 3.45724 11.3793 3.53431 11.3848C3.61138 11.3903 3.68845 11.374 3.75678 11.338L6.69581 9.79274L9.63484 11.338C9.71508 11.3807 9.80826 11.3949 9.89756 11.3794C10.1227 11.3406 10.2742 11.127 10.2353 10.9018L9.67367 7.62891L12.051 5.31108C12.1157 5.24766 12.1584 5.16484 12.1714 5.07425C12.2063 4.84777 12.0484 4.63811 11.822 4.60447Z"
                    fill="#B2B2B2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_91_709">
                    <rect
                      width="13.2522"
                      height="13.2522"
                      fill="white"
                      transform="translate(0.0693359 0.03479)"
                    />
                  </clipPath>
                </defs>
              </svg>
            )}
            {rate >= 2 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clipPath="url(#clip0_91_705)">
                  <path
                    d="M11.8742 4.60447L8.58835 4.12692L7.11948 1.14907C7.07936 1.06753 7.01336 1.00153 6.93183 0.961413C6.72735 0.860469 6.47887 0.944589 6.37663 1.14907L4.90776 4.12692L1.6219 4.60447C1.53131 4.61741 1.44848 4.66012 1.38507 4.72482C1.3084 4.80362 1.26616 4.90963 1.26761 5.01956C1.26907 5.12949 1.31411 5.23434 1.39283 5.31108L3.7702 7.62891L3.20854 10.9018C3.19536 10.978 3.20379 11.0563 3.23286 11.1279C3.26192 11.1995 3.31047 11.2615 3.37298 11.3069C3.4355 11.3523 3.50949 11.3793 3.58656 11.3848C3.66363 11.3903 3.7407 11.374 3.80902 11.338L6.74806 9.79274L9.68709 11.338C9.76733 11.3807 9.86051 11.3949 9.9498 11.3794C10.175 11.3406 10.3264 11.127 10.2876 10.9018L9.72591 7.62891L12.1033 5.31108C12.168 5.24766 12.2107 5.16484 12.2236 5.07425C12.2586 4.84777 12.1007 4.63811 11.8742 4.60447Z"
                    fill="#FFC416"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_91_705">
                    <rect
                      width="13.2522"
                      height="13.2522"
                      fill="white"
                      transform="translate(0.121582 0.03479)"
                    />
                  </clipPath>
                </defs>
              </svg>
            )}
            {!(rate >= 2) && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clipPath="url(#clip0_91_709)">
                  <path
                    d="M11.822 4.60447L8.5361 4.12692L7.06723 1.14907C7.02711 1.06753 6.96111 1.00153 6.87958 0.961413C6.6751 0.860469 6.42663 0.944589 6.32439 1.14907L4.85552 4.12692L1.56965 4.60447C1.47906 4.61741 1.39624 4.66012 1.33282 4.72482C1.25616 4.80362 1.21391 4.90963 1.21537 5.01956C1.21682 5.12949 1.26186 5.23434 1.34059 5.31108L3.71795 7.62891L3.15629 10.9018C3.14312 10.978 3.15154 11.0563 3.18061 11.1279C3.20968 11.1995 3.25822 11.2615 3.32074 11.3069C3.38325 11.3523 3.45724 11.3793 3.53431 11.3848C3.61138 11.3903 3.68845 11.374 3.75678 11.338L6.69581 9.79274L9.63484 11.338C9.71508 11.3807 9.80826 11.3949 9.89756 11.3794C10.1227 11.3406 10.2742 11.127 10.2353 10.9018L9.67367 7.62891L12.051 5.31108C12.1157 5.24766 12.1584 5.16484 12.1714 5.07425C12.2063 4.84777 12.0484 4.63811 11.822 4.60447Z"
                    fill="#B2B2B2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_91_709">
                    <rect
                      width="13.2522"
                      height="13.2522"
                      fill="white"
                      transform="translate(0.0693359 0.03479)"
                    />
                  </clipPath>
                </defs>
              </svg>
            )}
            {rate >= 3 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clipPath="url(#clip0_91_705)">
                  <path
                    d="M11.8742 4.60447L8.58835 4.12692L7.11948 1.14907C7.07936 1.06753 7.01336 1.00153 6.93183 0.961413C6.72735 0.860469 6.47887 0.944589 6.37663 1.14907L4.90776 4.12692L1.6219 4.60447C1.53131 4.61741 1.44848 4.66012 1.38507 4.72482C1.3084 4.80362 1.26616 4.90963 1.26761 5.01956C1.26907 5.12949 1.31411 5.23434 1.39283 5.31108L3.7702 7.62891L3.20854 10.9018C3.19536 10.978 3.20379 11.0563 3.23286 11.1279C3.26192 11.1995 3.31047 11.2615 3.37298 11.3069C3.4355 11.3523 3.50949 11.3793 3.58656 11.3848C3.66363 11.3903 3.7407 11.374 3.80902 11.338L6.74806 9.79274L9.68709 11.338C9.76733 11.3807 9.86051 11.3949 9.9498 11.3794C10.175 11.3406 10.3264 11.127 10.2876 10.9018L9.72591 7.62891L12.1033 5.31108C12.168 5.24766 12.2107 5.16484 12.2236 5.07425C12.2586 4.84777 12.1007 4.63811 11.8742 4.60447Z"
                    fill="#FFC416"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_91_705">
                    <rect
                      width="13.2522"
                      height="13.2522"
                      fill="white"
                      transform="translate(0.121582 0.03479)"
                    />
                  </clipPath>
                </defs>
              </svg>
            )}
            {!(rate >= 3) && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clipPath="url(#clip0_91_709)">
                  <path
                    d="M11.822 4.60447L8.5361 4.12692L7.06723 1.14907C7.02711 1.06753 6.96111 1.00153 6.87958 0.961413C6.6751 0.860469 6.42663 0.944589 6.32439 1.14907L4.85552 4.12692L1.56965 4.60447C1.47906 4.61741 1.39624 4.66012 1.33282 4.72482C1.25616 4.80362 1.21391 4.90963 1.21537 5.01956C1.21682 5.12949 1.26186 5.23434 1.34059 5.31108L3.71795 7.62891L3.15629 10.9018C3.14312 10.978 3.15154 11.0563 3.18061 11.1279C3.20968 11.1995 3.25822 11.2615 3.32074 11.3069C3.38325 11.3523 3.45724 11.3793 3.53431 11.3848C3.61138 11.3903 3.68845 11.374 3.75678 11.338L6.69581 9.79274L9.63484 11.338C9.71508 11.3807 9.80826 11.3949 9.89756 11.3794C10.1227 11.3406 10.2742 11.127 10.2353 10.9018L9.67367 7.62891L12.051 5.31108C12.1157 5.24766 12.1584 5.16484 12.1714 5.07425C12.2063 4.84777 12.0484 4.63811 11.822 4.60447Z"
                    fill="#B2B2B2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_91_709">
                    <rect
                      width="13.2522"
                      height="13.2522"
                      fill="white"
                      transform="translate(0.0693359 0.03479)"
                    />
                  </clipPath>
                </defs>
              </svg>
            )}
            {rate >= 4 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clipPath="url(#clip0_91_705)">
                  <path
                    d="M11.8742 4.60447L8.58835 4.12692L7.11948 1.14907C7.07936 1.06753 7.01336 1.00153 6.93183 0.961413C6.72735 0.860469 6.47887 0.944589 6.37663 1.14907L4.90776 4.12692L1.6219 4.60447C1.53131 4.61741 1.44848 4.66012 1.38507 4.72482C1.3084 4.80362 1.26616 4.90963 1.26761 5.01956C1.26907 5.12949 1.31411 5.23434 1.39283 5.31108L3.7702 7.62891L3.20854 10.9018C3.19536 10.978 3.20379 11.0563 3.23286 11.1279C3.26192 11.1995 3.31047 11.2615 3.37298 11.3069C3.4355 11.3523 3.50949 11.3793 3.58656 11.3848C3.66363 11.3903 3.7407 11.374 3.80902 11.338L6.74806 9.79274L9.68709 11.338C9.76733 11.3807 9.86051 11.3949 9.9498 11.3794C10.175 11.3406 10.3264 11.127 10.2876 10.9018L9.72591 7.62891L12.1033 5.31108C12.168 5.24766 12.2107 5.16484 12.2236 5.07425C12.2586 4.84777 12.1007 4.63811 11.8742 4.60447Z"
                    fill="#FFC416"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_91_705">
                    <rect
                      width="13.2522"
                      height="13.2522"
                      fill="white"
                      transform="translate(0.121582 0.03479)"
                    />
                  </clipPath>
                </defs>
              </svg>
            )}
            {!(rate >= 4) && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clipPath="url(#clip0_91_709)">
                  <path
                    d="M11.822 4.60447L8.5361 4.12692L7.06723 1.14907C7.02711 1.06753 6.96111 1.00153 6.87958 0.961413C6.6751 0.860469 6.42663 0.944589 6.32439 1.14907L4.85552 4.12692L1.56965 4.60447C1.47906 4.61741 1.39624 4.66012 1.33282 4.72482C1.25616 4.80362 1.21391 4.90963 1.21537 5.01956C1.21682 5.12949 1.26186 5.23434 1.34059 5.31108L3.71795 7.62891L3.15629 10.9018C3.14312 10.978 3.15154 11.0563 3.18061 11.1279C3.20968 11.1995 3.25822 11.2615 3.32074 11.3069C3.38325 11.3523 3.45724 11.3793 3.53431 11.3848C3.61138 11.3903 3.68845 11.374 3.75678 11.338L6.69581 9.79274L9.63484 11.338C9.71508 11.3807 9.80826 11.3949 9.89756 11.3794C10.1227 11.3406 10.2742 11.127 10.2353 10.9018L9.67367 7.62891L12.051 5.31108C12.1157 5.24766 12.1584 5.16484 12.1714 5.07425C12.2063 4.84777 12.0484 4.63811 11.822 4.60447Z"
                    fill="#B2B2B2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_91_709">
                    <rect
                      width="13.2522"
                      height="13.2522"
                      fill="white"
                      transform="translate(0.0693359 0.03479)"
                    />
                  </clipPath>
                </defs>
              </svg>
            )}
            {rate >= 5 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clipPath="url(#clip0_91_705)">
                  <path
                    d="M11.8742 4.60447L8.58835 4.12692L7.11948 1.14907C7.07936 1.06753 7.01336 1.00153 6.93183 0.961413C6.72735 0.860469 6.47887 0.944589 6.37663 1.14907L4.90776 4.12692L1.6219 4.60447C1.53131 4.61741 1.44848 4.66012 1.38507 4.72482C1.3084 4.80362 1.26616 4.90963 1.26761 5.01956C1.26907 5.12949 1.31411 5.23434 1.39283 5.31108L3.7702 7.62891L3.20854 10.9018C3.19536 10.978 3.20379 11.0563 3.23286 11.1279C3.26192 11.1995 3.31047 11.2615 3.37298 11.3069C3.4355 11.3523 3.50949 11.3793 3.58656 11.3848C3.66363 11.3903 3.7407 11.374 3.80902 11.338L6.74806 9.79274L9.68709 11.338C9.76733 11.3807 9.86051 11.3949 9.9498 11.3794C10.175 11.3406 10.3264 11.127 10.2876 10.9018L9.72591 7.62891L12.1033 5.31108C12.168 5.24766 12.2107 5.16484 12.2236 5.07425C12.2586 4.84777 12.1007 4.63811 11.8742 4.60447Z"
                    fill="#FFC416"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_91_705">
                    <rect
                      width="13.2522"
                      height="13.2522"
                      fill="white"
                      transform="translate(0.121582 0.03479)"
                    />
                  </clipPath>
                </defs>
              </svg>
            )}
            {!(rate >= 5) && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clipPath="url(#clip0_91_709)">
                  <path
                    d="M11.822 4.60447L8.5361 4.12692L7.06723 1.14907C7.02711 1.06753 6.96111 1.00153 6.87958 0.961413C6.6751 0.860469 6.42663 0.944589 6.32439 1.14907L4.85552 4.12692L1.56965 4.60447C1.47906 4.61741 1.39624 4.66012 1.33282 4.72482C1.25616 4.80362 1.21391 4.90963 1.21537 5.01956C1.21682 5.12949 1.26186 5.23434 1.34059 5.31108L3.71795 7.62891L3.15629 10.9018C3.14312 10.978 3.15154 11.0563 3.18061 11.1279C3.20968 11.1995 3.25822 11.2615 3.32074 11.3069C3.38325 11.3523 3.45724 11.3793 3.53431 11.3848C3.61138 11.3903 3.68845 11.374 3.75678 11.338L6.69581 9.79274L9.63484 11.338C9.71508 11.3807 9.80826 11.3949 9.89756 11.3794C10.1227 11.3406 10.2742 11.127 10.2353 10.9018L9.67367 7.62891L12.051 5.31108C12.1157 5.24766 12.1584 5.16484 12.1714 5.07425C12.2063 4.84777 12.0484 4.63811 11.822 4.60447Z"
                    fill="#B2B2B2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_91_709">
                    <rect
                      width="13.2522"
                      height="13.2522"
                      fill="white"
                      transform="translate(0.0693359 0.03479)"
                    />
                  </clipPath>
                </defs>
              </svg>
            )}
          </div>
        </div>
        <div className="text-gray-400 text-lg font-normal w-[592px] mt-[11px]">
          {description}
        </div>
        <div className="flex justify-start items-center gap-[21px] mt-[28px]">
          <button className="w-[34.23px] h-[34.23px] bg-white rounded-full shadow justify-center items-center flex hover:scale-110 duration-300">
            <BsCart2 />
          </button>

          {!isFavorite && (
            <button
              className="w-[34.23px] h-[34.23px] bg-white rounded-full shadow justify-center items-center flex hover:scale-110 duration-300"
              onClick={toggleFavorite}
            >
              <AiOutlineHeart />
            </button>
          )}
          {isFavorite && (
            <button
              className="w-[34.23px] h-[34.23px] bg-white rounded-full shadow justify-center items-center flex hover:scale-110 duration-300"
              onClick={toggleFavorite}
            >
              <AiFillHeart />
            </button>
          )}
          <button className="w-[34.23px] h-[34.23px] bg-white rounded-full shadow justify-center items-center flex hover:scale-110 duration-300">
            <AiOutlineZoomIn />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardShopHorz;