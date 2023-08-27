"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  AiFillFacebook,
  AiFillHeart,
  AiFillInstagram,
  AiOutlineHeart,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";

import { productsDetails } from "@/constants/constants";

const CardProductDetails = (props: any) => {
  const { params, searchParams } = props;

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="w-[1170px] h-[509px] bg-white rounded-sm shadow p-[13px] pb-[9px] relative overflow-hidden flex justify-start items-center gap-10">
      <div className="flex justify-start items-stretch gap-[21px]">
        <div className="flex flex-col justify-between items-center gap-[11px]">
          {productsDetails.imgs.map((img) => {
            return (
              <div
                key={img}
                className="w-[151px] h-[155px] overflow-hidden relative"
              >
                <Image
                  src={img}
                  fill={true}
                  alt=""
                  className="max-h-[487px] max-w-[151px] overflow-hidden"
                  style={{ objectFit: "cover" }}
                />
              </div>
            );
          })}
        </div>
        <Image
          src={productsDetails.img}
          width={375}
          height={487}
          alt=""
          className=" max-h-[487px]"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className=" max-w-[549px]">
        <h2 className="text-indigo-950 text-4xl font-semibold mb-2">
          {productsDetails.name}
        </h2>
        <div className=" duration-500 cursor-default flex justify-start items-center gap-[2px] mb-[7px]">
          {productsDetails.rate >= 1 && (
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
          {!(productsDetails.rate >= 1) && (
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
          {productsDetails.rate >= 2 && (
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
          {!(productsDetails.rate >= 2) && (
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
          {productsDetails.rate >= 3 && (
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
          {!(productsDetails.rate >= 3) && (
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
          {productsDetails.rate >= 4 && (
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
          {!(productsDetails.rate >= 4) && (
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
          {productsDetails.rate >= 5 && (
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
          {!(productsDetails.rate >= 5) && (
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
          <p className="text-violet-950 text-sm font-normal capitalize pl-[1px]">
            (22)
          </p>
        </div>
        <div className="flex justify-start items-center gap-[18px] mb-[14px]">
          <p className="text-violet-950 text-base font-normal capitalize">
            {formatter.format(productsDetails.price)}
          </p>
          <p className="text-pink-500 text-base font-normal line-through capitalize">
            {formatter.format(productsDetails.oldPrice)}
          </p>
        </div>
        <div className="flex justify-start items-center gap-[22px] mb-[14px]">
          <p className="text-indigo-950 text-base font-semibold">Color</p>
          <div className="w-3 h-3 bg-violet-950 rounded-full" />
          <div className="w-3 h-3 bg-black rounded-full" />
          <div className="w-3 h-3 bg-green-900 rounded-full" />
        </div>
        <p className="text-slate-400 text-base font-semibold mb-[18px]">
          {productsDetails.shortDescription}
        </p>
        <div className="flex ml-[75px] items-center gap-5 mb-[18px]">
          <button
            className="text-violet-950 text-base font-normal capitalize hover:text-pink-600"
            onClick={() => {}}
          >
            Add To cart
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
          <div></div>
        </div>
        <div className="flex justify-start items-center gap-[16px] mb-[14px]">
          <p className="text-violet-950 text-base font-semibold mr-2">
            Categories:
          </p>
          {productsDetails.categories.map((item) => (
            <Link
              href={`/${item}`}
              className="text-violet-900 text-xs font-semibold shadow-sm bg-slate-100 px-1 py-0.5 hover:bg-slate-200"
              key={item}
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="flex justify-start items-center gap-[16px] mb-[14px]">
          <p className="text-violet-950 text-base font-semibold mr-2">Tags</p>
          {productsDetails.tags.map((item) => (
            <Link
              href={`/${item}`}
              className="text-violet-900 text-xs font-semibold rounded-lg shadow-sm bg-slate-100 px-1 py-1 hover:bg-slate-200"
              key={item}
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex">
          <p className="text-violet-950 text-base font-semibold ">Share</p>
          <div className="ml-[18px] flex justify-start items-center gap-[10px]">
            <Link
              href="/"
              className="w-3 h-3 bg-blue-950 rounded-full text-[9px] flex justify-center items-center text-white hover:scale-125 duration-300"
            >
              <BiLogoFacebook />
            </Link>
            <Link
              href="/"
              className="w-3 h-3 bg-pink-500 rounded-full text-[8px] flex justify-center items-center text-white hover:scale-125 duration-300"
            >
              <AiFillInstagram />
            </Link>
            <Link
              href="/"
              className="w-3 h-3 bg-blue-400 rounded-full text-[9px] flex justify-center items-center text-white hover:scale-125 duration-300"
            >
              <AiOutlineTwitter />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductDetails;
