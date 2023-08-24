"use client";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

const EnterEmail = () => {
  const { register, handleSubmit } = useForm<FieldValues>({
    defaultValues: { email: "" },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[377px] h-11 bg-white rounded-[3px] relative p-[2px] flex justify-between items-center"
    >
      <input
        className=" text-base font-normal pl-5 py-[11px]"
        type="email"
        placeholder="Enter Email Address"
        {...register("email", { required: true })}
      />
      <button
        className="w-[135px] h-full bg-pink-500 rounded-[3px] flex justify-center items-center text-indigo-50 text-base font-medium"
        type="submit"
      >
        Sign Up
      </button>
    </form>
  );
};

export default EnterEmail;
