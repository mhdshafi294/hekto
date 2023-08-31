"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import PageTitle from "@/components/PageTitle";
import Brands from "@/components/Brands";
import Link from "next/link";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div>
      <PageTitle title="Hekto Demo" />
      <div className="flex justify-center items-center">
        <div className="w-[544px] h-[520px] bg-white shadow py-[50px] px-[55px] flex flex-col justify-between items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-between items-center"
          >
            <h1 className="text-black text-[32px] font-bold mb-[7px]">Login</h1>
            <p className="text-slate-400 text-[17px] font-normal">
              Please login using account detail bellow.
            </p>
            <div className="flex flex-col items-start justify-start">
              <input
                defaultValue=""
                {...register("email")}
                className="w-[432px] h-[52px] bg-white rounded-sm border border-slate-300 mt-[37px] p-[13px] focus:border-slate-500 focus:outline-none focus:scale-[102%] duration-500"
                placeholder="Email Address"
              />
              <input
                defaultValue=""
                {...register("password")}
                className="w-[432px] h-[52px] bg-white rounded-sm border border-slate-300 mt-[32px] mb-[13px] p-[13px] focus:border-slate-500 focus:outline-none focus:scale-[102%] duration-500"
                placeholder="Password"
              />
              <Link
                href="/"
                className="text-slate-400 text-[17px] font-normal hover:text-slate-500"
              >
                Forgot your password?
              </Link>
              <button
                type="submit"
                className="text-white text-[17px] font-bold w-[432px] h-[47px] bg-pink-500 rounded-[3px] mt-[23px] mb-[28px] flex justify-center items-center hover:bg-pink-600"
              >
                Sign In
              </button>
            </div>
            <p className="text-slate-400 text-[17px] font-normal text-center">
              Don’t have an Account? <Link href="/">Create account</Link>
            </p>
          </form>
        </div>
      </div>
      <Brands />
    </div>
  );
};

export default Login;
