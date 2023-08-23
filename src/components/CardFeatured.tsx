"use client";

import Image from "next/image";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineZoomIn } from "react-icons/ai";
import Link from "next/link";

interface CardFeaturedProps {
  img: string;
  name: string;
  code: string;
  price: number;
  link: string;
}

const CardFeatured: React.FC<CardFeaturedProps> = ({
  img,
  name,
  code,
  price,
  link,
}) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 2, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 2, // (causes 2500.99 to be printed as $2,501)
  });

  return (
    <div className="group w-[270px] h-[361px] relative bg-white hover:bg-indigo-700 shadow flex flex-col items-center justify-start gap-3">
      <div className="w-[270px] h-[236px] bg-slate-50 flex justify-center items-center relative">
        <Image
          src={img}
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-auto "
          alt=""
        />
        <Link
          href={link}
          className="hidden group-hover:flex justify-center items-center absolute bottom-[9px] left-[95px] w-[94px] h-[29px] bg-green-500 rounded-sm text-white text-xs font-medium "
        >
          View Details
        </Link>
        <div
          className="hidden group-hover:flex w-[30px] h-[30px] bg-indigo-50 rounded-full shadow absolute top-[11px] left-[11px]  justify-center items-center text-[#2F1AC4] cursor-pointer"
          onClick={() => {}}
        >
          <BsCart2 />
        </div>
        <div
          className="opacity-0 group-hover:opacity-100 flex absolute top-[18px] left-[57px]  justify-center items-center cursor-pointer"
          onClick={() => {}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            className=""
          >
            <path
              d="M14.28 3.26539C13.528 2.51314 12.531 2.05578 11.4702 1.97649C10.4095 1.8972 9.35555 2.20123 8.50003 2.8333C7.59879 2.16296 6.47703 1.859 5.36064 1.98262C4.24426 2.10624 3.21618 2.64827 2.48343 3.49955C1.75068 4.35083 1.3677 5.44813 1.4116 6.57048C1.4555 7.69283 1.92303 8.75686 2.72003 9.5483L7.99712 14.8254C8.06296 14.8918 8.14131 14.9445 8.22762 14.9804C8.31394 15.0164 8.40652 15.0349 8.50003 15.0349C8.59354 15.0349 8.68612 15.0164 8.77244 14.9804C8.85876 14.9445 8.9371 14.8918 9.00295 14.8254L14.28 9.5483C14.6927 9.13586 15.0201 8.64613 15.2435 8.1071C15.4669 7.56808 15.5819 6.99032 15.5819 6.40684C15.5819 5.82337 15.4669 5.24561 15.2435 4.70659C15.0201 4.16756 14.6927 3.67783 14.28 3.26539ZM13.2813 8.54955L8.50003 13.3237L3.71878 8.54955C3.29745 8.12646 3.01043 7.58838 2.89374 7.00279C2.77704 6.41721 2.83587 5.8102 3.06283 5.25792C3.2898 4.70564 3.67479 4.23268 4.16953 3.89837C4.66426 3.56406 5.2467 3.38328 5.84378 3.37872C6.64145 3.38067 7.40573 3.69912 7.96878 4.26414C8.03463 4.33053 8.11297 4.38322 8.19929 4.41918C8.28561 4.45515 8.37819 4.47366 8.4717 4.47366C8.56521 4.47366 8.65779 4.45515 8.74411 4.41918C8.83042 4.38322 8.90877 4.33053 8.97462 4.26414C9.55426 3.76184 10.3031 3.49853 11.0695 3.52749C11.836 3.55644 12.5628 3.87551 13.1029 4.4201C13.643 4.9647 13.956 5.69415 13.9786 6.46081C14.0012 7.22748 13.7317 7.97409 13.2246 8.54955H13.2813Z"
              fill="url(#paint0_linear_928_1740)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_928_1740"
                x1="1.4082"
                y1="1.95563"
                x2="14.4454"
                y2="16.0837"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1389FF" />
                <stop offset="1" stopColor="#1DB4E7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div
          className="opacity-0 group-hover:opacity-100 flex absolute top-[18px] left-[90px]  justify-center items-center cursor-pointer"
          onClick={() => {}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <path
              d="M9.37512 6.25H7.50012V4.375C7.50012 4.20924 7.43428 4.05027 7.31707 3.93306C7.19985 3.81585 7.04088 3.75 6.87512 3.75C6.70936 3.75 6.55039 3.81585 6.43318 3.93306C6.31597 4.05027 6.25012 4.20924 6.25012 4.375V6.25H4.37512C4.20936 6.25 4.05039 6.31585 3.93318 6.43306C3.81597 6.55027 3.75012 6.70924 3.75012 6.875C3.75012 7.04076 3.81597 7.19973 3.93318 7.31694C4.05039 7.43415 4.20936 7.5 4.37512 7.5H6.25012V9.375C6.25012 9.54076 6.31597 9.69973 6.43318 9.81694C6.55039 9.93415 6.70936 10 6.87512 10C7.04088 10 7.19985 9.93415 7.31707 9.81694C7.43428 9.69973 7.50012 9.54076 7.50012 9.375V7.5H9.37512C9.54088 7.5 9.69985 7.43415 9.81707 7.31694C9.93428 7.19973 10.0001 7.04076 10.0001 6.875C10.0001 6.70924 9.93428 6.55027 9.81707 6.43306C9.69985 6.31585 9.54088 6.25 9.37512 6.25ZM13.5689 12.6813L11.2501 10.3813C12.1502 9.25901 12.5861 7.83456 12.4681 6.40081C12.3502 4.96706 11.6874 3.63299 10.6161 2.6729C9.54473 1.71282 8.14625 1.1997 6.7082 1.23905C5.27015 1.2784 3.90182 1.86723 2.88459 2.88446C1.86735 3.9017 1.27852 5.27003 1.23917 6.70808C1.19982 8.14613 1.71294 9.54461 2.67303 10.616C3.63311 11.6873 4.96719 12.3501 6.40094 12.468C7.83468 12.5859 9.25913 12.1501 10.3814 11.25L12.6814 13.55C12.7395 13.6086 12.8086 13.6551 12.8848 13.6868C12.9609 13.7185 13.0426 13.7349 13.1251 13.7349C13.2076 13.7349 13.2893 13.7185 13.3655 13.6868C13.4416 13.6551 13.5108 13.6086 13.5689 13.55C13.6815 13.4335 13.7445 13.2777 13.7445 13.1156C13.7445 12.9535 13.6815 12.7978 13.5689 12.6813ZM6.87512 11.25C6.00983 11.25 5.16397 10.9934 4.4445 10.5127C3.72504 10.0319 3.16428 9.34867 2.83315 8.54924C2.50202 7.74981 2.41538 6.87015 2.58419 6.02148C2.753 5.17281 3.16968 4.39326 3.78153 3.78141C4.39339 3.16955 5.17294 2.75288 6.0216 2.58407C6.87027 2.41526 7.74994 2.50189 8.54936 2.83303C9.34879 3.16416 10.0321 3.72492 10.5128 4.44438C10.9935 5.16385 11.2501 6.00971 11.2501 6.875C11.2501 8.03532 10.7892 9.14812 9.96872 9.96859C9.14824 10.7891 8.03545 11.25 6.87512 11.25Z"
              fill="url(#paint0_linear_928_1742)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_928_1742"
                x1="1.23706"
                y1="1.23694"
                x2="13.735"
                y2="13.7444"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1389FF" />
                <stop offset="1" stopColor="#1DB4E7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <h6 className="text-pink-500 text-lg font-bold group-hover:text-white">
        {name}
      </h6>
      <div className="w-[52px] h-1 relative">
        <div className="w-[14px] h-1 left-0 top-0 absolute bg-teal-400 rounded-[10px]" />
        <div className="w-[14px] h-1 left-[19px] top-0 absolute bg-pink-600 rounded-[10px]" />
        <div className="w-[14px] h-1 left-[38px] top-0 absolute bg-blue-900 group-hover:bg-amber-100 rounded-[10px]" />
      </div>
      <p className="text-violet-950 text-sm font-normal group-hover:text-white">
        Code - {code}
      </p>
      <p className="text-violet-950 text-sm font-normal mb-4 group-hover:text-white">
        {formatter.format(price)}
      </p>
    </div>
  );
};

export default CardFeatured;
