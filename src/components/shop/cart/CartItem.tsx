"use client";
import { ShopContext } from "@/context/ShopContext";
import Image from "next/image";
import { useContext } from "react";

interface CartItemProps {
  id: number;
  img: string;
  name: string;
  price: number;
  color?: string;
  size?: string;
  rate?: number;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  img,
  name,
  price,
  color,
  size,
  rate,
}) => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    removeAllFromCart,
  } = useContext(ShopContext);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="max-w-[718px] mb-[18px]">
      <div className="flex justify-between items-center relative">
        <div className="flex items-center ">
          <div className="w-[83px] h-[87px] rounded-[3px] relative">
            <Image
              src={img}
              fill={true}
              alt=""
              className=" "
              style={{ objectFit: "cover" }}
            />
            <button
              className=" absolute top-0 right-0 w-3 h-3 flex justify-center items-center translate-x-1/2 -translate-y-1/2"
              onClick={() => removeAllFromCart(id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
                  fill="black"
                />
                <path
                  d="M7.8002 4.19995L4.2002 7.79995"
                  stroke="white"
                  stroke-width="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.2002 4.19995L7.8002 7.79995"
                  stroke="white"
                  stroke-width="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className=" ml-[17px]">
            <h3 className="text-black text-sm font-normal mb-[7px]">{name}</h3>
            <p className="text-slate-400 text-xs font-normal mb-[7px]">
              Color: {color}
            </p>
            <p className="text-slate-400 text-xs font-normal">Size: {size}</p>
          </div>
        </div>
        <div className="flex justify-between relative w-[57%]">
          <p className="text-blue-950 text-sm font-normal">
            {formatter.format(price)}
          </p>
          <div className="w-[51px] h-[15px] bg-zinc-100 flex justify-between items-center absolute right-[45%]">
            <button
              onClick={() => removeFromCart(id)}
              className="w-3 h-[15px] bg-gray-200 flex justify-center items-center"
            >
              -
            </button>
            <input
              value={cartItems[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
              className="bg-zinc-100 focus:outline-none w-[27px] h-[15px] flex justify-center items-center text-center text-stone-700 text-xs font-normal"
            />
            <button
              onClick={() => addToCart(id)}
              className="w-3 h-[15px] bg-gray-200 flex justify-center items-center"
            >
              +
            </button>
          </div>
          <p className="text-blue-950 text-sm font-normal">
            {formatter.format(price * cartItems[id])}
          </p>
        </div>
      </div>
      <hr className="w-full h-[0px] border border-slate-200 mt-[15px]" />
    </div>
  );
};

export default CartItem;
