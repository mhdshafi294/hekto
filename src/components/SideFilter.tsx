import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import SearchPrice from "./SearchPrice";

const SideFilter = () => {
  const { register, handleSubmit } = useForm<FieldValues>({
    defaultValues: { email: "" },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  return (
    <form
      className={`flex w-full duration-500  flex-col justify-start items-start gap-10`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col justify-start items-start gap-2">
        <h2 className="text-violet-950 text-xl font-bold underline">
          Product Brand
        </h2>
        <div className="text-slate-500 text-base font-normal flex justify-start items-center gap-[9px] group">
          <div className="check-box-indigo relative w-4 h-4">
            <input
              {...register("Brand")}
              type="checkbox"
              value="Coaster Furniture"
              id="Coaster Furniture"
              name="Brand"
              className="hidden"
              // onChange={onChange}
            />
            <label
              htmlFor="Coaster Furniture"
              className="w-4 h-4 absolute top-0 cursor-pointer duration-500 bg-slate-600 "
            ></label>
          </div>
          <p className=" group-hover:translate-x-1 duration-500 cursor-default">
            Coaster Furniture
          </p>
        </div>
        <div className=" text-slate-500 text-base font-normal flex justify-start items-center gap-[9px] group">
          <div className="check-box-indigo relative w-4 h-4">
            <input
              {...register("Brand")}
              type="checkbox"
              value="Fusion Dot High Fashion"
              id="Fusion Dot High Fashion"
              name="Brand"
              className="hidden"
              // onChange={onChange}
            />
            <label
              htmlFor="Fusion Dot High Fashion"
              className="w-4 h-4 absolute top-0 cursor-pointer duration-500 bg-slate-600 "
            ></label>
          </div>
          <p className=" group-hover:translate-x-1 duration-500 cursor-default">
            Fusion Dot High Fashion
          </p>
        </div>
        <div className="text-slate-500 text-base font-normal flex justify-start items-center gap-[9px] group">
          <div className="check-box-indigo relative w-4 h-4">
            <input
              {...register("Brand")}
              type="checkbox"
              value="Unique Furnitture Restor"
              id="Unique Furnitture Restor"
              name="Brand"
              className="hidden"
              // onChange={onChange}
            />
            <label
              htmlFor="Unique Furnitture Restor"
              className="w-4 h-4 absolute top-0 cursor-pointer duration-500 bg-slate-600 "
            ></label>
          </div>
          <p className=" group-hover:translate-x-1 duration-500 cursor-default">
            Unique Furnitture Restor
          </p>
        </div>
        <div className=" text-slate-500 text-base font-normal flex justify-start items-center gap-[9px] group">
          <div className="check-box-indigo relative w-4 h-4">
            <input
              {...register("Brand")}
              type="checkbox"
              value="Dream Furnitture Flipping"
              id="Dream Furnitture Flipping"
              name="Brand"
              className="hidden"
              // onChange={onChange}
            />
            <label
              htmlFor="Dream Furnitture Flipping"
              className="w-4 h-4 absolute top-0 cursor-pointer duration-500 bg-slate-600 "
            ></label>
          </div>
          <p className=" group-hover:translate-x-1 duration-500 cursor-default">
            Dream Furnitture Flipping
          </p>
        </div>
        <div className="text-slate-500 text-base font-normal flex justify-start items-center gap-[9px] group">
          <div className="check-box-indigo relative w-4 h-4">
            <input
              {...register("Brand")}
              type="checkbox"
              value="Young Repurposed"
              id="Young Repurposed"
              name="Brand"
              className="hidden"
              // onChange={onChange}
            />
            <label
              htmlFor="Young Repurposed"
              className="w-4 h-4 absolute top-0 cursor-pointer duration-500 bg-slate-600 "
            ></label>
          </div>
          <p className=" group-hover:translate-x-1 duration-500 cursor-default">
            Young Repurposed
          </p>
        </div>
        <div className=" text-slate-500 text-base font-normal flex justify-start items-center gap-[9px] group">
          <div className="check-box-indigo relative w-4 h-4">
            <input
              {...register("Brand")}
              type="checkbox"
              value="Green DIY furniture"
              id="Green DIY furniture"
              name="Brand"
              className="hidden"
              // onChange={onChange}
            />
            <label
              htmlFor="Green DIY furniture"
              className="w-4 h-4 absolute top-0 cursor-pointer duration-500 bg-slate-600 "
            ></label>
          </div>
          <p className=" group-hover:translate-x-1 duration-500 cursor-default">
            Green DIY furniture
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start gap-2">
        <h2 className="text-violet-950 text-xl font-bold underline">
          Discount Offer
        </h2>
        <div className=" text-slate-500 text-base font-normal flex justify-start items-center gap-[9px] group">
          <div className="check-box-pink relative w-4 h-4">
            <input
              {...register("Brand")}
              type="checkbox"
              value="20% Cashback"
              id="20% Cashback"
              name="Brand"
              className="hidden"
              // onChange={onChange}
            />
            <label
              htmlFor="20% Cashback"
              className="w-4 h-4 absolute top-0 cursor-pointer duration-500 bg-slate-600 "
            ></label>
          </div>
          <p className=" group-hover:translate-x-1 duration-500 cursor-default">
            20% Cashback
          </p>
        </div>
        <div className="text-slate-500 text-base font-normal flex justify-start items-center gap-[9px] group">
          <div className="check-box-pink relative w-4 h-4">
            <input
              {...register("Brand")}
              type="checkbox"
              value="5% Cashback Offer"
              id="5% Cashback Offer"
              name="Brand"
              className="hidden"
              // onChange={onChange}
            />
            <label
              htmlFor="5% Cashback Offer"
              className="w-4 h-4 absolute top-0 cursor-pointer duration-500 bg-slate-600 "
            ></label>
          </div>
          <p className=" group-hover:translate-x-1 duration-500 cursor-default">
            5% Cashback Offer
          </p>
        </div>
        <div className=" text-slate-500 text-base font-normal flex justify-start items-center gap-[9px] group">
          <div className="check-box-pink relative w-4 h-4">
            <input
              {...register("Brand")}
              type="checkbox"
              value="25% Cashback Offer"
              id="25% Cashback Offer"
              name="Brand"
              className="hidden"
              // onChange={onChange}
            />
            <label
              htmlFor="25% Cashback Offer"
              className="w-4 h-4 absolute top-0 cursor-pointer duration-500 bg-slate-600 "
            ></label>
          </div>
          <p className=" group-hover:translate-x-1 duration-500 cursor-default">
            25% Cashback Offer
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start gap-2">
        <h2 className="text-violet-950 text-xl font-bold underline">
          Rating Item
        </h2>
        <div className=" text-slate-500 text-base font-normal flex justify-start items-center gap-[9px] group">
          <div className="check-box-yellow relative w-4 h-4">
            <input
              {...register("Brand")}
              type="checkbox"
              value="4"
              id="4"
              name="Brand"
              className="hidden"
              // onChange={onChange}
            />
            <label
              htmlFor="4"
              className="w-4 h-4 absolute top-0 cursor-pointer duration-500 bg-slate-600 "
            ></label>
          </div>
          <div className=" group-hover:translate-x-1 duration-500 cursor-default flex gap-[2px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M10.6415 4.13792L7.66615 3.7055L6.33608 1.00901C6.29975 0.935185 6.23998 0.875419 6.16615 0.839091C5.981 0.747685 5.756 0.823857 5.66342 1.00901L4.33334 3.7055L1.35795 4.13792C1.27592 4.14964 1.20092 4.18831 1.1435 4.2469C1.07408 4.31826 1.03582 4.41425 1.03714 4.51379C1.03846 4.61333 1.07924 4.70828 1.15053 4.77776L3.30326 6.87659L2.79467 9.84026C2.78274 9.9092 2.79037 9.98011 2.81669 10.0449C2.84301 10.1098 2.88697 10.1659 2.94358 10.207C3.00019 10.2481 3.06719 10.2726 3.13697 10.2776C3.20676 10.2825 3.27655 10.2679 3.33842 10.2352L5.99975 8.83597L8.66108 10.2352C8.73373 10.2739 8.81811 10.2867 8.89897 10.2727C9.10287 10.2375 9.23998 10.0442 9.20483 9.84026L8.69623 6.87659L10.849 4.77776C10.9076 4.72034 10.9462 4.64534 10.958 4.56331C10.9896 4.35823 10.8466 4.16839 10.6415 4.13792Z"
                fill="#FFC107"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M10.6415 4.13792L7.66615 3.7055L6.33608 1.00901C6.29975 0.935185 6.23998 0.875419 6.16615 0.839091C5.981 0.747685 5.756 0.823857 5.66342 1.00901L4.33334 3.7055L1.35795 4.13792C1.27592 4.14964 1.20092 4.18831 1.1435 4.2469C1.07408 4.31826 1.03582 4.41425 1.03714 4.51379C1.03846 4.61333 1.07924 4.70828 1.15053 4.77776L3.30326 6.87659L2.79467 9.84026C2.78274 9.9092 2.79037 9.98011 2.81669 10.0449C2.84301 10.1098 2.88697 10.1659 2.94358 10.207C3.00019 10.2481 3.06719 10.2726 3.13697 10.2776C3.20676 10.2825 3.27655 10.2679 3.33842 10.2352L5.99975 8.83597L8.66108 10.2352C8.73373 10.2739 8.81811 10.2867 8.89897 10.2727C9.10287 10.2375 9.23998 10.0442 9.20483 9.84026L8.69623 6.87659L10.849 4.77776C10.9076 4.72034 10.9462 4.64534 10.958 4.56331C10.9896 4.35823 10.8466 4.16839 10.6415 4.13792Z"
                fill="#FFC107"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M10.6415 4.13792L7.66615 3.7055L6.33608 1.00901C6.29975 0.935185 6.23998 0.875419 6.16615 0.839091C5.981 0.747685 5.756 0.823857 5.66342 1.00901L4.33334 3.7055L1.35795 4.13792C1.27592 4.14964 1.20092 4.18831 1.1435 4.2469C1.07408 4.31826 1.03582 4.41425 1.03714 4.51379C1.03846 4.61333 1.07924 4.70828 1.15053 4.77776L3.30326 6.87659L2.79467 9.84026C2.78274 9.9092 2.79037 9.98011 2.81669 10.0449C2.84301 10.1098 2.88697 10.1659 2.94358 10.207C3.00019 10.2481 3.06719 10.2726 3.13697 10.2776C3.20676 10.2825 3.27655 10.2679 3.33842 10.2352L5.99975 8.83597L8.66108 10.2352C8.73373 10.2739 8.81811 10.2867 8.89897 10.2727C9.10287 10.2375 9.23998 10.0442 9.20483 9.84026L8.69623 6.87659L10.849 4.77776C10.9076 4.72034 10.9462 4.64534 10.958 4.56331C10.9896 4.35823 10.8466 4.16839 10.6415 4.13792Z"
                fill="#FFC107"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M10.6415 4.13792L7.66615 3.7055L6.33608 1.00901C6.29975 0.935185 6.23998 0.875419 6.16615 0.839091C5.981 0.747685 5.756 0.823857 5.66342 1.00901L4.33334 3.7055L1.35795 4.13792C1.27592 4.14964 1.20092 4.18831 1.1435 4.2469C1.07408 4.31826 1.03582 4.41425 1.03714 4.51379C1.03846 4.61333 1.07924 4.70828 1.15053 4.77776L3.30326 6.87659L2.79467 9.84026C2.78274 9.9092 2.79037 9.98011 2.81669 10.0449C2.84301 10.1098 2.88697 10.1659 2.94358 10.207C3.00019 10.2481 3.06719 10.2726 3.13697 10.2776C3.20676 10.2825 3.27655 10.2679 3.33842 10.2352L5.99975 8.83597L8.66108 10.2352C8.73373 10.2739 8.81811 10.2867 8.89897 10.2727C9.10287 10.2375 9.23998 10.0442 9.20483 9.84026L8.69623 6.87659L10.849 4.77776C10.9076 4.72034 10.9462 4.64534 10.958 4.56331C10.9896 4.35823 10.8466 4.16839 10.6415 4.13792Z"
                fill="#FFC107"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M10.6415 4.13792L7.66615 3.7055L6.33608 1.00901C6.29975 0.935185 6.23998 0.875419 6.16615 0.839091C5.981 0.747685 5.756 0.823857 5.66342 1.00901L4.33334 3.7055L1.35795 4.13792C1.27592 4.14964 1.20092 4.18831 1.1435 4.2469C1.07408 4.31826 1.03582 4.41425 1.03714 4.51379C1.03846 4.61333 1.07924 4.70828 1.15053 4.77776L3.30326 6.87659L2.79467 9.84026C2.78274 9.9092 2.79037 9.98011 2.81669 10.0449C2.84301 10.1098 2.88697 10.1659 2.94358 10.207C3.00019 10.2481 3.06719 10.2726 3.13697 10.2776C3.20676 10.2825 3.27655 10.2679 3.33842 10.2352L5.99975 8.83597L8.66108 10.2352C8.73373 10.2739 8.81811 10.2867 8.89897 10.2727C9.10287 10.2375 9.23998 10.0442 9.20483 9.84026L8.69623 6.87659L10.849 4.77776C10.9076 4.72034 10.9462 4.64534 10.958 4.56331C10.9896 4.35823 10.8466 4.16839 10.6415 4.13792Z"
                fill="#B2B2B2"
              />
            </svg>
            <p className="text-center text-black text-xs font-normal pl-[1px]">
              (2341)
            </p>
          </div>
        </div>
        <div className=" text-slate-500 text-base font-normal flex justify-start items-center gap-[9px] group">
          <div className="check-box-yellow relative w-4 h-4">
            <input
              {...register("Brand")}
              type="checkbox"
              value="4"
              id="4"
              name="Brand"
              className="hidden"
              // onChange={onChange}
            />
            <label
              htmlFor="4"
              className="w-4 h-4 absolute top-0 cursor-pointer duration-500 bg-slate-600 "
            ></label>
          </div>
          <div className=" group-hover:translate-x-1 duration-500 cursor-default flex gap-[2px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M10.6415 4.13792L7.66615 3.7055L6.33608 1.00901C6.29975 0.935185 6.23998 0.875419 6.16615 0.839091C5.981 0.747685 5.756 0.823857 5.66342 1.00901L4.33334 3.7055L1.35795 4.13792C1.27592 4.14964 1.20092 4.18831 1.1435 4.2469C1.07408 4.31826 1.03582 4.41425 1.03714 4.51379C1.03846 4.61333 1.07924 4.70828 1.15053 4.77776L3.30326 6.87659L2.79467 9.84026C2.78274 9.9092 2.79037 9.98011 2.81669 10.0449C2.84301 10.1098 2.88697 10.1659 2.94358 10.207C3.00019 10.2481 3.06719 10.2726 3.13697 10.2776C3.20676 10.2825 3.27655 10.2679 3.33842 10.2352L5.99975 8.83597L8.66108 10.2352C8.73373 10.2739 8.81811 10.2867 8.89897 10.2727C9.10287 10.2375 9.23998 10.0442 9.20483 9.84026L8.69623 6.87659L10.849 4.77776C10.9076 4.72034 10.9462 4.64534 10.958 4.56331C10.9896 4.35823 10.8466 4.16839 10.6415 4.13792Z"
                fill="#FFC107"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M10.6415 4.13792L7.66615 3.7055L6.33608 1.00901C6.29975 0.935185 6.23998 0.875419 6.16615 0.839091C5.981 0.747685 5.756 0.823857 5.66342 1.00901L4.33334 3.7055L1.35795 4.13792C1.27592 4.14964 1.20092 4.18831 1.1435 4.2469C1.07408 4.31826 1.03582 4.41425 1.03714 4.51379C1.03846 4.61333 1.07924 4.70828 1.15053 4.77776L3.30326 6.87659L2.79467 9.84026C2.78274 9.9092 2.79037 9.98011 2.81669 10.0449C2.84301 10.1098 2.88697 10.1659 2.94358 10.207C3.00019 10.2481 3.06719 10.2726 3.13697 10.2776C3.20676 10.2825 3.27655 10.2679 3.33842 10.2352L5.99975 8.83597L8.66108 10.2352C8.73373 10.2739 8.81811 10.2867 8.89897 10.2727C9.10287 10.2375 9.23998 10.0442 9.20483 9.84026L8.69623 6.87659L10.849 4.77776C10.9076 4.72034 10.9462 4.64534 10.958 4.56331C10.9896 4.35823 10.8466 4.16839 10.6415 4.13792Z"
                fill="#FFC107"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M10.6415 4.13792L7.66615 3.7055L6.33608 1.00901C6.29975 0.935185 6.23998 0.875419 6.16615 0.839091C5.981 0.747685 5.756 0.823857 5.66342 1.00901L4.33334 3.7055L1.35795 4.13792C1.27592 4.14964 1.20092 4.18831 1.1435 4.2469C1.07408 4.31826 1.03582 4.41425 1.03714 4.51379C1.03846 4.61333 1.07924 4.70828 1.15053 4.77776L3.30326 6.87659L2.79467 9.84026C2.78274 9.9092 2.79037 9.98011 2.81669 10.0449C2.84301 10.1098 2.88697 10.1659 2.94358 10.207C3.00019 10.2481 3.06719 10.2726 3.13697 10.2776C3.20676 10.2825 3.27655 10.2679 3.33842 10.2352L5.99975 8.83597L8.66108 10.2352C8.73373 10.2739 8.81811 10.2867 8.89897 10.2727C9.10287 10.2375 9.23998 10.0442 9.20483 9.84026L8.69623 6.87659L10.849 4.77776C10.9076 4.72034 10.9462 4.64534 10.958 4.56331C10.9896 4.35823 10.8466 4.16839 10.6415 4.13792Z"
                fill="#FFC107"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M10.6415 4.13792L7.66615 3.7055L6.33608 1.00901C6.29975 0.935185 6.23998 0.875419 6.16615 0.839091C5.981 0.747685 5.756 0.823857 5.66342 1.00901L4.33334 3.7055L1.35795 4.13792C1.27592 4.14964 1.20092 4.18831 1.1435 4.2469C1.07408 4.31826 1.03582 4.41425 1.03714 4.51379C1.03846 4.61333 1.07924 4.70828 1.15053 4.77776L3.30326 6.87659L2.79467 9.84026C2.78274 9.9092 2.79037 9.98011 2.81669 10.0449C2.84301 10.1098 2.88697 10.1659 2.94358 10.207C3.00019 10.2481 3.06719 10.2726 3.13697 10.2776C3.20676 10.2825 3.27655 10.2679 3.33842 10.2352L5.99975 8.83597L8.66108 10.2352C8.73373 10.2739 8.81811 10.2867 8.89897 10.2727C9.10287 10.2375 9.23998 10.0442 9.20483 9.84026L8.69623 6.87659L10.849 4.77776C10.9076 4.72034 10.9462 4.64534 10.958 4.56331C10.9896 4.35823 10.8466 4.16839 10.6415 4.13792Z"
                fill="#B2B2B2"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M10.6415 4.13792L7.66615 3.7055L6.33608 1.00901C6.29975 0.935185 6.23998 0.875419 6.16615 0.839091C5.981 0.747685 5.756 0.823857 5.66342 1.00901L4.33334 3.7055L1.35795 4.13792C1.27592 4.14964 1.20092 4.18831 1.1435 4.2469C1.07408 4.31826 1.03582 4.41425 1.03714 4.51379C1.03846 4.61333 1.07924 4.70828 1.15053 4.77776L3.30326 6.87659L2.79467 9.84026C2.78274 9.9092 2.79037 9.98011 2.81669 10.0449C2.84301 10.1098 2.88697 10.1659 2.94358 10.207C3.00019 10.2481 3.06719 10.2726 3.13697 10.2776C3.20676 10.2825 3.27655 10.2679 3.33842 10.2352L5.99975 8.83597L8.66108 10.2352C8.73373 10.2739 8.81811 10.2867 8.89897 10.2727C9.10287 10.2375 9.23998 10.0442 9.20483 9.84026L8.69623 6.87659L10.849 4.77776C10.9076 4.72034 10.9462 4.64534 10.958 4.56331C10.9896 4.35823 10.8466 4.16839 10.6415 4.13792Z"
                fill="#B2B2B2"
              />
            </svg>
            <p className="text-center text-black text-xs font-normal pl-[1px]">
              (1726)
            </p>
          </div>
        </div>
        <div className=" text-slate-500 text-base font-normal flex justify-start items-center gap-[9px] group">
          <div className="check-box-yellow relative w-4 h-4">
            <input
              {...register("Brand")}
              type="checkbox"
              value="4"
              id="4"
              name="Brand"
              className="hidden"
              // onChange={onChange}
            />
            <label
              htmlFor="4"
              className="w-4 h-4 absolute top-0 cursor-pointer duration-500 bg-slate-600 "
            ></label>
          </div>
          <div className=" group-hover:translate-x-1 duration-500 cursor-default flex gap-[2px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M10.6415 4.13792L7.66615 3.7055L6.33608 1.00901C6.29975 0.935185 6.23998 0.875419 6.16615 0.839091C5.981 0.747685 5.756 0.823857 5.66342 1.00901L4.33334 3.7055L1.35795 4.13792C1.27592 4.14964 1.20092 4.18831 1.1435 4.2469C1.07408 4.31826 1.03582 4.41425 1.03714 4.51379C1.03846 4.61333 1.07924 4.70828 1.15053 4.77776L3.30326 6.87659L2.79467 9.84026C2.78274 9.9092 2.79037 9.98011 2.81669 10.0449C2.84301 10.1098 2.88697 10.1659 2.94358 10.207C3.00019 10.2481 3.06719 10.2726 3.13697 10.2776C3.20676 10.2825 3.27655 10.2679 3.33842 10.2352L5.99975 8.83597L8.66108 10.2352C8.73373 10.2739 8.81811 10.2867 8.89897 10.2727C9.10287 10.2375 9.23998 10.0442 9.20483 9.84026L8.69623 6.87659L10.849 4.77776C10.9076 4.72034 10.9462 4.64534 10.958 4.56331C10.9896 4.35823 10.8466 4.16839 10.6415 4.13792Z"
                fill="#FFC107"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M10.6415 4.13792L7.66615 3.7055L6.33608 1.00901C6.29975 0.935185 6.23998 0.875419 6.16615 0.839091C5.981 0.747685 5.756 0.823857 5.66342 1.00901L4.33334 3.7055L1.35795 4.13792C1.27592 4.14964 1.20092 4.18831 1.1435 4.2469C1.07408 4.31826 1.03582 4.41425 1.03714 4.51379C1.03846 4.61333 1.07924 4.70828 1.15053 4.77776L3.30326 6.87659L2.79467 9.84026C2.78274 9.9092 2.79037 9.98011 2.81669 10.0449C2.84301 10.1098 2.88697 10.1659 2.94358 10.207C3.00019 10.2481 3.06719 10.2726 3.13697 10.2776C3.20676 10.2825 3.27655 10.2679 3.33842 10.2352L5.99975 8.83597L8.66108 10.2352C8.73373 10.2739 8.81811 10.2867 8.89897 10.2727C9.10287 10.2375 9.23998 10.0442 9.20483 9.84026L8.69623 6.87659L10.849 4.77776C10.9076 4.72034 10.9462 4.64534 10.958 4.56331C10.9896 4.35823 10.8466 4.16839 10.6415 4.13792Z"
                fill="#FFC107"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M10.6415 4.13792L7.66615 3.7055L6.33608 1.00901C6.29975 0.935185 6.23998 0.875419 6.16615 0.839091C5.981 0.747685 5.756 0.823857 5.66342 1.00901L4.33334 3.7055L1.35795 4.13792C1.27592 4.14964 1.20092 4.18831 1.1435 4.2469C1.07408 4.31826 1.03582 4.41425 1.03714 4.51379C1.03846 4.61333 1.07924 4.70828 1.15053 4.77776L3.30326 6.87659L2.79467 9.84026C2.78274 9.9092 2.79037 9.98011 2.81669 10.0449C2.84301 10.1098 2.88697 10.1659 2.94358 10.207C3.00019 10.2481 3.06719 10.2726 3.13697 10.2776C3.20676 10.2825 3.27655 10.2679 3.33842 10.2352L5.99975 8.83597L8.66108 10.2352C8.73373 10.2739 8.81811 10.2867 8.89897 10.2727C9.10287 10.2375 9.23998 10.0442 9.20483 9.84026L8.69623 6.87659L10.849 4.77776C10.9076 4.72034 10.9462 4.64534 10.958 4.56331C10.9896 4.35823 10.8466 4.16839 10.6415 4.13792Z"
                fill="#B2B2B2"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M10.6415 4.13792L7.66615 3.7055L6.33608 1.00901C6.29975 0.935185 6.23998 0.875419 6.16615 0.839091C5.981 0.747685 5.756 0.823857 5.66342 1.00901L4.33334 3.7055L1.35795 4.13792C1.27592 4.14964 1.20092 4.18831 1.1435 4.2469C1.07408 4.31826 1.03582 4.41425 1.03714 4.51379C1.03846 4.61333 1.07924 4.70828 1.15053 4.77776L3.30326 6.87659L2.79467 9.84026C2.78274 9.9092 2.79037 9.98011 2.81669 10.0449C2.84301 10.1098 2.88697 10.1659 2.94358 10.207C3.00019 10.2481 3.06719 10.2726 3.13697 10.2776C3.20676 10.2825 3.27655 10.2679 3.33842 10.2352L5.99975 8.83597L8.66108 10.2352C8.73373 10.2739 8.81811 10.2867 8.89897 10.2727C9.10287 10.2375 9.23998 10.0442 9.20483 9.84026L8.69623 6.87659L10.849 4.77776C10.9076 4.72034 10.9462 4.64534 10.958 4.56331C10.9896 4.35823 10.8466 4.16839 10.6415 4.13792Z"
                fill="#B2B2B2"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M10.6415 4.13792L7.66615 3.7055L6.33608 1.00901C6.29975 0.935185 6.23998 0.875419 6.16615 0.839091C5.981 0.747685 5.756 0.823857 5.66342 1.00901L4.33334 3.7055L1.35795 4.13792C1.27592 4.14964 1.20092 4.18831 1.1435 4.2469C1.07408 4.31826 1.03582 4.41425 1.03714 4.51379C1.03846 4.61333 1.07924 4.70828 1.15053 4.77776L3.30326 6.87659L2.79467 9.84026C2.78274 9.9092 2.79037 9.98011 2.81669 10.0449C2.84301 10.1098 2.88697 10.1659 2.94358 10.207C3.00019 10.2481 3.06719 10.2726 3.13697 10.2776C3.20676 10.2825 3.27655 10.2679 3.33842 10.2352L5.99975 8.83597L8.66108 10.2352C8.73373 10.2739 8.81811 10.2867 8.89897 10.2727C9.10287 10.2375 9.23998 10.0442 9.20483 9.84026L8.69623 6.87659L10.849 4.77776C10.9076 4.72034 10.9462 4.64534 10.958 4.56331C10.9896 4.35823 10.8466 4.16839 10.6415 4.13792Z"
                fill="#B2B2B2"
              />
            </svg>
            <p className="text-center text-black text-xs font-normal pl-[1px]">
              (258)
            </p>
          </div>
        </div>
        <div className=" text-slate-500 text-base font-normal flex justify-start items-center gap-[9px] group">
          <div className="check-box-yellow relative w-4 h-4">
            <input
              {...register("Brand")}
              type="checkbox"
              value="4"
              id="4"
              name="Brand"
              className="hidden"
              // onChange={onChange}
            />
            <label
              htmlFor="4"
              className="w-4 h-4 absolute top-0 cursor-pointer duration-500 bg-slate-600 "
            ></label>
          </div>
          <div className=" group-hover:translate-x-1 duration-500 cursor-default flex gap-[2px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M10.6415 4.13792L7.66615 3.7055L6.33608 1.00901C6.29975 0.935185 6.23998 0.875419 6.16615 0.839091C5.981 0.747685 5.756 0.823857 5.66342 1.00901L4.33334 3.7055L1.35795 4.13792C1.27592 4.14964 1.20092 4.18831 1.1435 4.2469C1.07408 4.31826 1.03582 4.41425 1.03714 4.51379C1.03846 4.61333 1.07924 4.70828 1.15053 4.77776L3.30326 6.87659L2.79467 9.84026C2.78274 9.9092 2.79037 9.98011 2.81669 10.0449C2.84301 10.1098 2.88697 10.1659 2.94358 10.207C3.00019 10.2481 3.06719 10.2726 3.13697 10.2776C3.20676 10.2825 3.27655 10.2679 3.33842 10.2352L5.99975 8.83597L8.66108 10.2352C8.73373 10.2739 8.81811 10.2867 8.89897 10.2727C9.10287 10.2375 9.23998 10.0442 9.20483 9.84026L8.69623 6.87659L10.849 4.77776C10.9076 4.72034 10.9462 4.64534 10.958 4.56331C10.9896 4.35823 10.8466 4.16839 10.6415 4.13792Z"
                fill="#FFC107"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M10.6415 4.13792L7.66615 3.7055L6.33608 1.00901C6.29975 0.935185 6.23998 0.875419 6.16615 0.839091C5.981 0.747685 5.756 0.823857 5.66342 1.00901L4.33334 3.7055L1.35795 4.13792C1.27592 4.14964 1.20092 4.18831 1.1435 4.2469C1.07408 4.31826 1.03582 4.41425 1.03714 4.51379C1.03846 4.61333 1.07924 4.70828 1.15053 4.77776L3.30326 6.87659L2.79467 9.84026C2.78274 9.9092 2.79037 9.98011 2.81669 10.0449C2.84301 10.1098 2.88697 10.1659 2.94358 10.207C3.00019 10.2481 3.06719 10.2726 3.13697 10.2776C3.20676 10.2825 3.27655 10.2679 3.33842 10.2352L5.99975 8.83597L8.66108 10.2352C8.73373 10.2739 8.81811 10.2867 8.89897 10.2727C9.10287 10.2375 9.23998 10.0442 9.20483 9.84026L8.69623 6.87659L10.849 4.77776C10.9076 4.72034 10.9462 4.64534 10.958 4.56331C10.9896 4.35823 10.8466 4.16839 10.6415 4.13792Z"
                fill="#B2B2B2"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M10.6415 4.13792L7.66615 3.7055L6.33608 1.00901C6.29975 0.935185 6.23998 0.875419 6.16615 0.839091C5.981 0.747685 5.756 0.823857 5.66342 1.00901L4.33334 3.7055L1.35795 4.13792C1.27592 4.14964 1.20092 4.18831 1.1435 4.2469C1.07408 4.31826 1.03582 4.41425 1.03714 4.51379C1.03846 4.61333 1.07924 4.70828 1.15053 4.77776L3.30326 6.87659L2.79467 9.84026C2.78274 9.9092 2.79037 9.98011 2.81669 10.0449C2.84301 10.1098 2.88697 10.1659 2.94358 10.207C3.00019 10.2481 3.06719 10.2726 3.13697 10.2776C3.20676 10.2825 3.27655 10.2679 3.33842 10.2352L5.99975 8.83597L8.66108 10.2352C8.73373 10.2739 8.81811 10.2867 8.89897 10.2727C9.10287 10.2375 9.23998 10.0442 9.20483 9.84026L8.69623 6.87659L10.849 4.77776C10.9076 4.72034 10.9462 4.64534 10.958 4.56331C10.9896 4.35823 10.8466 4.16839 10.6415 4.13792Z"
                fill="#B2B2B2"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M10.6415 4.13792L7.66615 3.7055L6.33608 1.00901C6.29975 0.935185 6.23998 0.875419 6.16615 0.839091C5.981 0.747685 5.756 0.823857 5.66342 1.00901L4.33334 3.7055L1.35795 4.13792C1.27592 4.14964 1.20092 4.18831 1.1435 4.2469C1.07408 4.31826 1.03582 4.41425 1.03714 4.51379C1.03846 4.61333 1.07924 4.70828 1.15053 4.77776L3.30326 6.87659L2.79467 9.84026C2.78274 9.9092 2.79037 9.98011 2.81669 10.0449C2.84301 10.1098 2.88697 10.1659 2.94358 10.207C3.00019 10.2481 3.06719 10.2726 3.13697 10.2776C3.20676 10.2825 3.27655 10.2679 3.33842 10.2352L5.99975 8.83597L8.66108 10.2352C8.73373 10.2739 8.81811 10.2867 8.89897 10.2727C9.10287 10.2375 9.23998 10.0442 9.20483 9.84026L8.69623 6.87659L10.849 4.77776C10.9076 4.72034 10.9462 4.64534 10.958 4.56331C10.9896 4.35823 10.8466 4.16839 10.6415 4.13792Z"
                fill="#B2B2B2"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M10.6415 4.13792L7.66615 3.7055L6.33608 1.00901C6.29975 0.935185 6.23998 0.875419 6.16615 0.839091C5.981 0.747685 5.756 0.823857 5.66342 1.00901L4.33334 3.7055L1.35795 4.13792C1.27592 4.14964 1.20092 4.18831 1.1435 4.2469C1.07408 4.31826 1.03582 4.41425 1.03714 4.51379C1.03846 4.61333 1.07924 4.70828 1.15053 4.77776L3.30326 6.87659L2.79467 9.84026C2.78274 9.9092 2.79037 9.98011 2.81669 10.0449C2.84301 10.1098 2.88697 10.1659 2.94358 10.207C3.00019 10.2481 3.06719 10.2726 3.13697 10.2776C3.20676 10.2825 3.27655 10.2679 3.33842 10.2352L5.99975 8.83597L8.66108 10.2352C8.73373 10.2739 8.81811 10.2867 8.89897 10.2727C9.10287 10.2375 9.23998 10.0442 9.20483 9.84026L8.69623 6.87659L10.849 4.77776C10.9076 4.72034 10.9462 4.64534 10.958 4.56331C10.9896 4.35823 10.8466 4.16839 10.6415 4.13792Z"
                fill="#B2B2B2"
              />
            </svg>
            <p className="text-center text-black text-xs font-normal pl-[1px]">
              (25)
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start gap-2">
        <h2 className="text-violet-950 text-xl font-bold underline">
          Categories
        </h2>
        <div className=" text-slate-500 text-base font-normal flex justify-start items-center gap-[9px] group">
          <div className="check-box-pink relative w-4 h-4">
            <input
              {...register("Brand")}
              type="checkbox"
              value="Prestashop"
              id="Prestashop"
              name="Brand"
              className="hidden"
              // onChange={onChange}
            />
            <label
              htmlFor="Prestashop"
              className="w-4 h-4 absolute top-0 cursor-pointer duration-500 bg-slate-600 "
            ></label>
          </div>
          <p className=" group-hover:translate-x-1 duration-500 cursor-default">
            Prestashop
          </p>
        </div>
        <div className="text-slate-500 text-base font-normal flex justify-start items-center gap-[9px] group">
          <div className="check-box-pink relative w-4 h-4">
            <input
              {...register("Brand")}
              type="checkbox"
              value="Magento"
              id="Magento"
              name="Brand"
              className="hidden"
              // onChange={onChange}
            />
            <label
              htmlFor="Magento"
              className="w-4 h-4 absolute top-0 cursor-pointer duration-500 bg-slate-600 "
            ></label>
          </div>
          <p className=" group-hover:translate-x-1 duration-500 cursor-default">
            Magento
          </p>
        </div>
        <div className=" text-slate-500 text-base font-normal flex justify-start items-center gap-[9px] group">
          <div className="check-box-pink relative w-4 h-4">
            <input
              {...register("Brand")}
              type="checkbox"
              value="Bigcommerce"
              id="Bigcommerce"
              name="Brand"
              className="hidden"
              // onChange={onChange}
            />
            <label
              htmlFor="Bigcommerce"
              className="w-4 h-4 absolute top-0 cursor-pointer duration-500 bg-slate-600 "
            ></label>
          </div>
          <p className=" group-hover:translate-x-1 duration-500 cursor-default">
            Bigcommerce
          </p>
        </div>
        <div className=" text-slate-500 text-base font-normal flex justify-start items-center gap-[9px] group">
          <div className="check-box-pink relative w-4 h-4">
            <input
              {...register("Brand")}
              type="checkbox"
              value="osCommerce"
              id="osCommerce"
              name="Brand"
              className="hidden"
              // onChange={onChange}
            />
            <label
              htmlFor="osCommerce"
              className="w-4 h-4 absolute top-0 cursor-pointer duration-500 bg-slate-600 "
            ></label>
          </div>
          <p className=" group-hover:translate-x-1 duration-500 cursor-default">
            osCommerce
          </p>
        </div>
        <div className=" text-slate-500 text-base font-normal flex justify-start items-center gap-[9px] group">
          <div className="check-box-pink relative w-4 h-4">
            <input
              {...register("Brand")}
              type="checkbox"
              value="3dcart"
              id="3dcart"
              name="Brand"
              className="hidden"
              // onChange={onChange}
            />
            <label
              htmlFor="3dcart"
              className="w-4 h-4 absolute top-0 cursor-pointer duration-500 bg-slate-600 "
            ></label>
          </div>
          <p className=" group-hover:translate-x-1 duration-500 cursor-default">
            3dcart
          </p>
        </div>
        <div className=" text-slate-500 text-base font-normal flex justify-start items-center gap-[9px] group">
          <div className="check-box-pink relative w-4 h-4">
            <input
              {...register("Brand")}
              type="checkbox"
              value="Bags"
              id="Bags"
              name="Brand"
              className="hidden"
              // onChange={onChange}
            />
            <label
              htmlFor="Bags"
              className="w-4 h-4 absolute top-0 cursor-pointer duration-500 bg-slate-600 "
            ></label>
          </div>
          <p className=" group-hover:translate-x-1 duration-500 cursor-default">
            Bags
          </p>
        </div>
        <div className=" text-slate-500 text-base font-normal flex justify-start items-center gap-[9px] group">
          <div className="check-box-pink relative w-4 h-4">
            <input
              {...register("Brand")}
              type="checkbox"
              value="Accessories"
              id="Accessories"
              name="Brand"
              className="hidden"
              // onChange={onChange}
            />
            <label
              htmlFor="Accessories"
              className="w-4 h-4 absolute top-0 cursor-pointer duration-500 bg-slate-600 "
            ></label>
          </div>
          <p className=" group-hover:translate-x-1 duration-500 cursor-default">
            Accessories
          </p>
        </div>
        <div className=" text-slate-500 text-base font-normal flex justify-start items-center gap-[9px] group">
          <div className="check-box-pink relative w-4 h-4">
            <input
              {...register("Brand")}
              type="checkbox"
              value="Jewellery"
              id="Jewellery"
              name="Brand"
              className="hidden"
              // onChange={onChange}
            />
            <label
              htmlFor="Jewellery"
              className="w-4 h-4 absolute top-0 cursor-pointer duration-500 bg-slate-600 "
            ></label>
          </div>
          <p className=" group-hover:translate-x-1 duration-500 cursor-default">
            Jewellery
          </p>
        </div>
        <div className=" text-slate-500 text-base font-normal flex justify-start items-center gap-[9px] group">
          <div className="check-box-pink relative w-4 h-4">
            <input
              {...register("Brand")}
              type="checkbox"
              value="Watches"
              id="Watches"
              name="Brand"
              className="hidden"
              // onChange={onChange}
            />
            <label
              htmlFor="Watches"
              className="w-4 h-4 absolute top-0 cursor-pointer duration-500 bg-slate-600 "
            ></label>
          </div>
          <p className=" group-hover:translate-x-1 duration-500 cursor-default">
            Watches
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start gap-2">
        <h2 className="text-violet-950 text-xl font-bold underline">
          Price Filter
        </h2>
        <div className=" text-slate-500 text-base font-normal flex justify-start items-center gap-[9px] group">
          <div className="check-box-pink relative w-4 h-4">
            <input
              {...register("Brand")}
              type="checkbox"
              value="$0.00 - $150.00"
              id="$0.00 - $150.00"
              name="Brand"
              className="hidden"
              // onChange={onChange}
            />
            <label
              htmlFor="$0.00 - $150.00"
              className="w-4 h-4 absolute top-0 cursor-pointer duration-500 bg-slate-600 "
            ></label>
          </div>
          <p className=" group-hover:translate-x-1 duration-500 cursor-default">
            $0.00 - $150.00
          </p>
        </div>
        <div className="text-slate-500 text-base font-normal flex justify-start items-center gap-[9px] group">
          <div className="check-box-pink relative w-4 h-4">
            <input
              {...register("Brand")}
              type="checkbox"
              value="$150.00 - $350.00"
              id="$150.00 - $350.00"
              name="Brand"
              className="hidden"
              // onChange={onChange}
            />
            <label
              htmlFor="$150.00 - $350.00"
              className="w-4 h-4 absolute top-0 cursor-pointer duration-500 bg-slate-600 "
            ></label>
          </div>
          <p className=" group-hover:translate-x-1 duration-500 cursor-default">
            $150.00 - $350.00
          </p>
        </div>
        <div className=" text-slate-500 text-base font-normal flex justify-start items-center gap-[9px] group">
          <div className="check-box-pink relative w-4 h-4">
            <input
              {...register("Brand")}
              type="checkbox"
              value="$150.00 - $504.00"
              id="$150.00 - $504.00"
              name="Brand"
              className="hidden"
              // onChange={onChange}
            />
            <label
              htmlFor="$150.00 - $504.00"
              className="w-4 h-4 absolute top-0 cursor-pointer duration-500 bg-slate-600 "
            ></label>
          </div>
          <p className=" group-hover:translate-x-1 duration-500 cursor-default">
            $150.00 - $504.00
          </p>
        </div>
        <div className=" text-slate-500 text-base font-normal flex justify-start items-center gap-[9px] group">
          <div className="check-box-pink relative w-4 h-4">
            <input
              {...register("Brand")}
              type="checkbox"
              value="$450.00 +"
              id="$450.00 +"
              name="Brand"
              className="hidden"
              // onChange={onChange}
            />
            <label
              htmlFor="$450.00 +"
              className="w-4 h-4 absolute top-0 cursor-pointer duration-500 bg-slate-600 "
            ></label>
          </div>
          <p className=" group-hover:translate-x-1 duration-500 cursor-default">
            $450.00 +
          </p>
        </div>
        <SearchPrice />
      </div>
      <div className="flex flex-col justify-start items-start gap-2">
        <h2 className="text-violet-950 text-xl font-bold underline">
          Filter By Color
        </h2>
        <div className="grid grid-cols-3 gap-y-2 w-[250px]">
          <div className=" text-slate-500 text-base font-normal flex justify-start items-center gap-[4px] group">
            <div className="check-box relative w-4 h-4 ">
              <input
                {...register("Brand")}
                type="checkbox"
                value="Blue"
                id="Blue"
                name="Brand"
                className="hidden"
                // onChange={onChange}
              />
              <label
                htmlFor="Blue"
                className="w-4 h-4 absolute top-0 cursor-pointer duration-500 bg-indigo-600 rounded-full"
              ></label>
            </div>
            <p className="text-slate-500 text-[15px] font-normal group-hover:translate-x-1 duration-500 cursor-default translate-y-[1px]">
              Blue
            </p>
          </div>
          <div className=" text-slate-500 text-base font-normal flex justify-start items-center gap-[4px] group">
            <div className="check-box relative w-4 h-4 ">
              <input
                {...register("Brand")}
                type="checkbox"
                value="Orange"
                id="Orange"
                name="Brand"
                className="hidden"
                // onChange={onChange}
              />
              <label
                htmlFor="Orange"
                className="w-4 h-4 absolute top-0 cursor-pointer duration-500 bg-orange-600 rounded-full"
              ></label>
            </div>
            <p className="text-slate-500 text-[15px] font-normal group-hover:translate-x-1 duration-500 cursor-default translate-y-[1px]">
              Orange
            </p>
          </div>
          <div className=" text-slate-500 text-base font-normal flex justify-start items-center gap-[3px] group">
            <div className="check-box relative w-4 h-4 ">
              <input
                {...register("Brand")}
                type="checkbox"
                value="Brown"
                id="Brown"
                name="Brand"
                className="hidden"
                // onChange={onChange}
              />
              <label
                htmlFor="Brown"
                className="w-4 h-4 absolute top-0 cursor-pointer duration-500 bg-orange-300 rounded-full"
              ></label>
            </div>
            <p className="text-slate-500 text-[15px] font-normal group-hover:translate-x-1 duration-500 cursor-default translate-y-[1px]">
              Brown
            </p>
          </div>
          <div className=" text-slate-500 text-base font-normal flex justify-start items-center gap-[3px] group">
            <div className="check-box relative w-4 h-4 ">
              <input
                {...register("Brand")}
                type="checkbox"
                value="Green"
                id="Green"
                name="Brand"
                className="hidden"
                // onChange={onChange}
              />
              <label
                htmlFor="Green"
                className="w-4 h-4 absolute top-0 cursor-pointer duration-500 bg-green-500 rounded-full"
              ></label>
            </div>
            <p className="text-slate-500 text-[15px] font-normal group-hover:translate-x-1 duration-500 cursor-default translate-y-[1px]">
              Green
            </p>
          </div>
          <div className=" text-slate-500 text-base font-normal flex justify-start items-center gap-[3px] group">
            <div className="check-box relative w-4 h-4 ">
              <input
                {...register("Brand")}
                type="checkbox"
                value="Purple"
                id="Purple"
                name="Brand"
                className="hidden"
                // onChange={onChange}
              />
              <label
                htmlFor="Purple"
                className="w-4 h-4 absolute top-0 cursor-pointer duration-500 bg-purple-500 rounded-full"
              ></label>
            </div>
            <p className="text-slate-500 text-[15px] font-normal group-hover:translate-x-1 duration-500 cursor-default translate-y-[1px]">
              Purple
            </p>
          </div>
          <div className=" text-slate-500 text-base font-normal flex justify-start items-center gap-[3px] group">
            <div className="check-box relative w-4 h-4 ">
              <input
                {...register("Brand")}
                type="checkbox"
                value="Sky"
                id="Sky"
                name="Brand"
                className="hidden"
                // onChange={onChange}
              />
              <label
                htmlFor="Sky"
                className="w-4 h-4 absolute top-0 cursor-pointer duration-500 bg-blue-300 rounded-full"
              ></label>
            </div>
            <p className="text-slate-500 text-[15px] font-normal group-hover:translate-x-1 duration-500 cursor-default translate-y-[1px]">
              Sky
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SideFilter;
