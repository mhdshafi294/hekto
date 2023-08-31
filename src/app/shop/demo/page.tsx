"use client";

import { useState, useContext, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

import ContainerBody from "@/components/ContainerBody";
import PageTitle from "@/components/PageTitle";
import { ShopContext } from "@/context/ShopContext";
import { products1 } from "@/constants/constants";
import CartItem from "@/components/shop/cart/CartItem";
import CartItem2 from "@/components/shop/cart/CartItem2";

type Inputs = {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  homeType: string;
  city: string;
  country: string;
  postalCode: number;
};

const Demo = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const [shippingAndTax, setShippingAndTax] = useState(true);
  const router = useRouter();

  const toggleShippingAndTax = () => {
    setShippingAndTax((prev) => !prev);
  };

  const shippingAndTaxPrice = useMemo(() => {
    if (shippingAndTax) {
      return 35;
    }
    return 0;
  }, [shippingAndTax]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div>
      <PageTitle title="Hekto Demo" />
      <ContainerBody>
        <h2 className="text-blue-900 text-2xl font-bold mb-[16px]">
          Hekto Demo
        </h2>
        <p className="text-blue-900 text-xs font-normal mb-[25px]">
          Cart/ Information/ Shipping/ Payment
        </p>
        <div className="flex justify-between items-start gap-[30px] mb-[300px]">
          <div className="w-[770px] h-[920px] bg-violet-50 rounded-[3px] p-[30px] pb-[65px]">
            <div className="flex justify-between items-baseline mb-[42px]">
              <h3 className="text-blue-900 text-lg font-bold">
                Contact Information
              </h3>
              <div className="flex justify-end gap-1">
                <p className="text-slate-300 text-sm font-medium tracking-tight">
                  Already have an account?
                </p>
                <Link
                  href="/login"
                  className="text-slate-300 text-sm font-medium tracking-tight hover:text-slate-400"
                >
                  Log in
                </Link>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-[38px] group">
                <input
                  defaultValue=""
                  {...register("email")}
                  className="mb-0.5 bg-transparent w-[698px] focus:outline-none "
                  placeholder="Email or mobile phone number"
                />
                <hr className="w-full h-[0px] border border-slate-200 group-focus-within:border-black  duration-500" />
              </div>
              <label className="text-slate-400 text-xs font-medium tracking-tight flex justify-start items-center gap-[7px] mt-[32px]">
                <input
                  type="checkbox"
                  className="w-[10px] h-[10px] accent-green-500 mb-[3px]"
                  defaultChecked={true}
                  onChange={() => {}}
                />
                Keep me up to date on news and excluive offers
              </label>
              <h2 className="text-blue-900 text-lg font-bold mt-[109px] mb-[43px]">
                Shipping address
              </h2>
              <div className="flex justify-between mb-[40px]">
                <div className="w-[336px]  group">
                  <input
                    defaultValue=""
                    {...register("firstName")}
                    className="mb-0.5 bg-transparent w-[698px] focus:outline-none "
                    placeholder="First name (optional)"
                  />
                  <hr className="w-full h-[0px] border border-slate-200 group-focus-within:border-black  duration-500" />
                </div>
                <div className="w-[336px] group">
                  <input
                    defaultValue=""
                    {...register("lastName", { required: true })}
                    className="mb-0.5 bg-transparent w-[698px] focus:outline-none "
                    placeholder="Last name"
                  />
                  <hr className="w-full h-[0px] border border-slate-200 group-focus-within:border-black  duration-500" />
                </div>
              </div>
              <div className="mb-[41px] group">
                <input
                  defaultValue=""
                  {...register("address", { required: true })}
                  className="mb-0.5 bg-transparent w-[698px] focus:outline-none "
                  placeholder="Address"
                />
                <hr className="w-full h-[0px] border border-slate-200 group-focus-within:border-black  duration-500" />
              </div>
              <div className="mb-[41px] group">
                <input
                  defaultValue=""
                  {...register("homeType")}
                  className="mb-0.5 bg-transparent w-[698px] focus:outline-none "
                  placeholder="Apartment,suit,e.t.c (optional)"
                />
                <hr className="w-full h-[0px] border border-slate-200 group-focus-within:border-black  duration-500" />
              </div>
              <div className="mb-[41px] group">
                <input
                  defaultValue=""
                  {...register("city", { required: true })}
                  className="mb-0.5 bg-transparent w-[698px] focus:outline-none "
                  placeholder="City"
                />
                <hr className="w-full h-[0px] border border-slate-200 group-focus-within:border-black  duration-500" />
              </div>
              <div className="flex justify-between mb-[40px]">
                <div className="w-[336px]  group">
                  <input
                    defaultValue=""
                    {...register("country", { required: true })}
                    className="mb-0.5 bg-transparent w-[698px] focus:outline-none "
                    placeholder="Syria"
                  />
                  <hr className="w-full h-[0px] border border-slate-200 group-focus-within:border-black  duration-500" />
                </div>
                <div className="w-[336px] group">
                  <input
                    defaultValue=""
                    {...register("postalCode", { required: true })}
                    className="mb-0.5 bg-transparent w-[698px] focus:outline-none "
                    placeholder="Postal Code"
                  />
                  <hr className="w-full h-[0px] border border-slate-200 group-focus-within:border-black  duration-500" />
                </div>
              </div>
              <button
                type="submit"
                className="text-white text-base font-semibold w-[182px] h-11 bg-pink-500 rounded-sm mt-[117px]"
              >
                Continue Shipping
              </button>
            </form>
          </div>
          <div className="w-[369px]">
            <div className="w-full mb-[42px]">
              {products1.map((product, index) => {
                if (cartItems[product.id] !== 0) {
                  return <CartItem2 key={index} {...product} />;
                }
              })}
            </div>
            <div className="w-full  bg-violet-50 rounded-[3px] px-[30px] py-[33px]">
              <div className="w-full mt-[34px]">
                <div className="flex justify-between items-center">
                  <p className="text-blue-900 text-lg font-semibold">
                    Subtotals:
                  </p>
                  <div className="text-blue-950 text-base font-normal">
                    {formatter.format(getTotalCartAmount())}
                  </div>
                </div>
                <hr className="w-full h-[0px] border border-slate-200 mt-[13px]" />
              </div>
              <div className="w-full mt-[34px]">
                <div className="flex justify-between items-center">
                  <p className="text-blue-900 text-lg font-semibold">Totals:</p>
                  <div className="text-blue-950 text-base font-normal">
                    {formatter.format(
                      getTotalCartAmount() + shippingAndTaxPrice
                    )}
                  </div>
                </div>
                <hr className="w-full h-[0px] border border-slate-200 mt-[13px]" />
              </div>
              <label className="text-slate-400 text-xs font-normal flex justify-start items-center gap-[7px] mt-[31px]">
                <input
                  type="checkbox"
                  className="w-2 h-2 accent-green-500"
                  defaultChecked={true}
                  onChange={() => toggleShippingAndTax()}
                />
                Shipping & taxes calculated at checkout
              </label>
              <button
                className="w-[312px] h-10 bg-green-500 rounded-[3px] flex justify-center items-center text-white text-sm font-bold mt-[35px] hover:bg-green-600"
                onClick={() => {
                  checkout();
                  router.push("/shop/completed");
                }}
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </ContainerBody>
    </div>
  );
};

export default Demo;
