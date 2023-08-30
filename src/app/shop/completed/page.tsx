import Image from "next/image";
import Link from "next/link";

import PageTitle from "@/components/PageTitle";
import ContainerBody from "@/components/ContainerBody";
import Brands from "@/components/Brands";

const Completed = () => {
  return (
    <div>
      <PageTitle title="Order Completed" />
      <ContainerBody>
        <div className="w-full h-[430px] relative">
          <div className=" mx-auto w-[720px] flex flex-col justify-start items-center">
            <div className="w-[87px] h-[88px] relative">
              <Image
                src="/done.svg"
                fill={true}
                alt=""
                className=" "
                style={{ objectFit: "contain" }}
              />
            </div>
            <h2 className="text-center text-indigo-950 text-4xl font-bold mt-[22px] mb-[28px]">
              Your Order Is Completed!{" "}
            </h2>
            <p className="text-center text-gray-400 text-base font-semibold ">
              Thank you for your order! Your order is being processed and will
              be completed within 3-6
              <br />
              hours. You will receive an email confirmation when your order is
              completed.
              <br />
            </p>
            <Link
              href="/shop"
              className="mt-7 w-52 h-[59px] bg-pink-600 hover:bg-pink-500 rounded-[3px] flex justify-center items-center text-white text-base font-semibold"
            >
              Continue Shopping
            </Link>
          </div>
          <div className="absolute left-0 top-10 flex flex-col justify-start items-center gap-1">
            <div className="w-[94px] h-[94px] relative mb-[11px]">
              <Image
                src="/clock1.svg"
                fill={true}
                alt=""
                className=" "
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="w-[1px] h-[244px] relative">
              <Image
                src="/vertical-dashes.svg"
                fill={true}
                alt=""
                className=" "
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <div className="absolute bottom-0 right-9 flex flex-row-reverse justify-start items-center gap-1">
            <div className="w-[70px] h-[70px] relative ">
              <Image
                src="/checklist1.svg"
                fill={true}
                alt=""
                className=" "
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="w-[1020px] h-[1px] relative">
              <Image
                src="/horizontal-dashes.svg"
                fill={true}
                alt=""
                className=" "
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
        <Brands />
      </ContainerBody>
    </div>
  );
};

export default Completed;
