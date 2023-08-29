"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import ContainerBody from "@/components/ContainerBody";
import PageTitle from "@/components/PageTitle";
import { productsCart } from "@/constants/constants";
import CartItem from "@/components/shop/cart/CartItem";
import { useContext } from "react";
import { ShopContext } from "@/context/ShopContext";

type Inputs = {
  city: string;
  address: string;
  postalCode: number;
};

const Cart = () => {
  const { getTotalCartAmount } = useContext(ShopContext);

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
      <PageTitle title="Shopping cart" />
      <ContainerBody>
        <div className="w-full flex justify-between items-start gap-[81px] min-h-[30vh] mb-[147px]">
          <div className="max-w-[718px]">
            <div className="w-full flex justify-between items-baseline">
              <p className="text-blue-900 text-xl font-bold">Product</p>
              <p className="text-blue-900 text-xl font-bold ml-[226px]">
                Price
              </p>
              <p className="text-blue-900 text-xl font-bold ml-[104px] mr-[122px]">
                Quantity
              </p>
              <p className="text-blue-900 text-xl font-bold">Total</p>
            </div>
            <div className="w-full mt-[48px]">
              {productsCart.map((productsCart, index) => (
                <CartItem {...productsCart} />
              ))}
            </div>
          </div>
          <div className="max-w-[371px] flex flex-col justify-start items-center">
            <p className="text-blue-900 text-xl font-bold mb-[42px]">
              Cart Totals
            </p>
            <div className="w-[371px]  bg-violet-50 rounded-[3px] px-[30px] pb-[32px]">
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
                    {formatter.format(getTotalCartAmount() + 300)}
                  </div>
                </div>
                <hr className="w-full h-[0px] border border-slate-200 mt-[13px]" />
              </div>
              <label className="text-slate-400 text-xs font-normal flex justify-start items-center gap-[7px] mt-[31px]">
                <input
                  type="checkbox"
                  className="w-2 h-2 accent-green-500"
                  defaultChecked={true}
                  onChange={() => {}}
                />
                Shipping & taxes calculated at checkout
              </label>
              <button
                className="w-[312px] h-10 bg-green-500 rounded-[3px] flex justify-center items-center text-white text-sm font-bold mt-[35px] hover:bg-green-600"
                onClick={() => {}}
              >
                Proceed To Checkout
              </button>
            </div>
            <p className="text-blue-900 text-xl font-bold mb-[26px] mt-[32px]">
              Calculate Shopping
            </p>
            <div className="w-[371px]  bg-violet-50 rounded-[3px] px-[32px] pb-[21px] pt-[44px]">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-[38px] group">
                  <input
                    defaultValue=""
                    {...register("city")}
                    className="mb-0.5 bg-transparent w-full focus:outline-none "
                    placeholder="Damascus"
                  />
                  <hr className="w-full h-[0px] border border-slate-200 group-focus-within:border-black group-focus-within:scale-105 duration-500" />
                </div>
                <div className="mb-[38px] group">
                  <input
                    {...register("address")}
                    className="mb-0.5 bg-transparent w-full focus:outline-none"
                    placeholder="Abu Rummaneh - 120"
                  />
                  <hr className="w-full h-[0px] border border-slate-200 group-focus-within:border-black group-focus-within:scale-105 duration-500" />
                </div>
                <div className="mb-[38px] group">
                  <input
                    {...register("postalCode")}
                    className="mb-0.5 bg-transparent w-full focus:outline-none "
                    placeholder="3331"
                  />
                  <hr className="w-full h-[0px] border border-slate-200 group-focus-within:border-black group-focus-within:scale-105 duration-500" />
                </div>
                <button
                  className="w-[179px] h-[41px] bg-pink-500 rounded-sm text-white text-base font-semibold flex justify-center items-center hover:bg-pink-600"
                  type="submit"
                >
                  Calculate Shiping
                </button>
              </form>
            </div>
          </div>
        </div>
      </ContainerBody>
    </div>
  );
};

export default Cart;
