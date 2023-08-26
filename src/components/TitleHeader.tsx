"use client";

import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

import ContainerBody from "./ContainerBody";

enum SortEnum {
  name = "name",
  date = "date",
  price = "price",
  rate = "rate",
  discount = "discount",
}

interface IFormInput {
  page: number;
  sortBy: SortEnum;
  search: string;
}

interface ShopHeaderProps {
  listView: boolean;
  setListView: any;
}

const TitleHeader: React.FC<ShopHeaderProps> = ({ listView, setListView }) => {
  const { register, handleSubmit } = useForm<IFormInput>({
    defaultValues: { page: 1, sortBy: SortEnum.rate, search: "" },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  return (
    <div className="mb-[77px] mt-[124px]">
      <ContainerBody>
        <div className="w-full flex justify-between items-center ">
          <div>
            <h3 className="text-violet-950 text-[22px] font-bold mb-2">
              Ecommerce Acceories & Fashion item{" "}
            </h3>
            <p className="text-slate-400 text-xs font-normal">
              About 9,620 results (0.62 seconds)
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex justify-end items-center"
          >
            <label className="text-indigo-800 text-base font-normal mr-2">
              Per Page:{" "}
            </label>
            <input
              {...register("page")}
              className="w-[55px] h-[25px] border border-gray-200 mr-6"
            />
            <label className="text-indigo-800 text-base font-normal mr-2">
              Sort By:{" "}
            </label>
            <select
              {...register("sortBy")}
              className="w-24 h-7 border border-gray-200 text-slate-400 text-xs font-normal leading-[18px] mr-6"
            >
              <option value="name">name</option>
              <option value="date">date</option>
              <option value="price">price</option>
              <option value="rate">rate</option>
              <option value="discount">discount</option>
            </select>
            <label className="text-indigo-800 text-base font-normal mr-2">
              View:{" "}
            </label>
            <button
              onClick={() => {
                setListView(false);
              }}
              className="mr-[5px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M4.66683 1.33337H2.00016C1.63197 1.33337 1.3335 1.63185 1.3335 2.00004V4.66671C1.3335 5.0349 1.63197 5.33337 2.00016 5.33337H4.66683C5.03502 5.33337 5.3335 5.0349 5.3335 4.66671V2.00004C5.3335 1.63185 5.03502 1.33337 4.66683 1.33337Z"
                  fill="#151875"
                />
                <path
                  d="M9.99984 1.33337H7.33317C6.96498 1.33337 6.6665 1.63185 6.6665 2.00004V4.66671C6.6665 5.0349 6.96498 5.33337 7.33317 5.33337H9.99984C10.368 5.33337 10.6665 5.0349 10.6665 4.66671V2.00004C10.6665 1.63185 10.368 1.33337 9.99984 1.33337Z"
                  fill="#151875"
                />
                <path
                  d="M4.66683 6.66663H2.00016C1.63197 6.66663 1.3335 6.9651 1.3335 7.33329V9.99996C1.3335 10.3681 1.63197 10.6666 2.00016 10.6666H4.66683C5.03502 10.6666 5.3335 10.3681 5.3335 9.99996V7.33329C5.3335 6.9651 5.03502 6.66663 4.66683 6.66663Z"
                  fill="#151875"
                />
                <path
                  d="M9.99984 6.66663H7.33317C6.96498 6.66663 6.6665 6.9651 6.6665 7.33329V9.99996C6.6665 10.3681 6.96498 10.6666 7.33317 10.6666H9.99984C10.368 10.6666 10.6665 10.3681 10.6665 9.99996V7.33329C10.6665 6.9651 10.368 6.66663 9.99984 6.66663Z"
                  fill="#151875"
                />
              </svg>
            </button>
            <button
              onClick={() => {
                setListView(true);
              }}
              className="mr-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <g clipPath="url(#clip0_1047_353)">
                  <path
                    d="M1.875 8.625H0.375C0.275544 8.625 0.180161 8.66451 0.109835 8.73483C0.0395088 8.80516 0 8.90054 0 9L0 10.5C0 10.5995 0.0395088 10.6948 0.109835 10.7652C0.180161 10.8355 0.275544 10.875 0.375 10.875H1.875C1.97446 10.875 2.06984 10.8355 2.14016 10.7652C2.21049 10.6948 2.25 10.5995 2.25 10.5V9C2.25 8.90054 2.21049 8.80516 2.14016 8.73483C2.06984 8.66451 1.97446 8.625 1.875 8.625ZM1.875 1.125H0.375C0.275544 1.125 0.180161 1.16451 0.109835 1.23483C0.0395088 1.30516 0 1.40054 0 1.5L0 3C0 3.09946 0.0395088 3.19484 0.109835 3.26516C0.180161 3.33549 0.275544 3.375 0.375 3.375H1.875C1.97446 3.375 2.06984 3.33549 2.14016 3.26516C2.21049 3.19484 2.25 3.09946 2.25 3V1.5C2.25 1.40054 2.21049 1.30516 2.14016 1.23483C2.06984 1.16451 1.97446 1.125 1.875 1.125ZM1.875 4.875H0.375C0.275544 4.875 0.180161 4.91451 0.109835 4.98484C0.0395088 5.05516 0 5.15054 0 5.25L0 6.75C0 6.84946 0.0395088 6.94484 0.109835 7.01517C0.180161 7.08549 0.275544 7.125 0.375 7.125H1.875C1.97446 7.125 2.06984 7.08549 2.14016 7.01517C2.21049 6.94484 2.25 6.84946 2.25 6.75V5.25C2.25 5.15054 2.21049 5.05516 2.14016 4.98484C2.06984 4.91451 1.97446 4.875 1.875 4.875ZM11.625 9H4.125C4.02554 9 3.93016 9.03951 3.85984 9.10983C3.78951 9.18016 3.75 9.27554 3.75 9.375V10.125C3.75 10.2245 3.78951 10.3198 3.85984 10.3902C3.93016 10.4605 4.02554 10.5 4.125 10.5H11.625C11.7245 10.5 11.8198 10.4605 11.8902 10.3902C11.9605 10.3198 12 10.2245 12 10.125V9.375C12 9.27554 11.9605 9.18016 11.8902 9.10983C11.8198 9.03951 11.7245 9 11.625 9ZM11.625 1.5H4.125C4.02554 1.5 3.93016 1.53951 3.85984 1.60984C3.78951 1.68016 3.75 1.77554 3.75 1.875V2.625C3.75 2.72446 3.78951 2.81984 3.85984 2.89016C3.93016 2.96049 4.02554 3 4.125 3H11.625C11.7245 3 11.8198 2.96049 11.8902 2.89016C11.9605 2.81984 12 2.72446 12 2.625V1.875C12 1.77554 11.9605 1.68016 11.8902 1.60984C11.8198 1.53951 11.7245 1.5 11.625 1.5ZM11.625 5.25H4.125C4.02554 5.25 3.93016 5.28951 3.85984 5.35984C3.78951 5.43016 3.75 5.52554 3.75 5.625V6.375C3.75 6.47446 3.78951 6.56984 3.85984 6.64017C3.93016 6.71049 4.02554 6.75 4.125 6.75H11.625C11.7245 6.75 11.8198 6.71049 11.8902 6.64017C11.9605 6.56984 12 6.47446 12 6.375V5.625C12 5.52554 11.9605 5.43016 11.8902 5.35984C11.8198 5.28951 11.7245 5.25 11.625 5.25Z"
                    fill="#151875"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1047_353">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <input
              className="w-[162px] h-[30px] border border-gray-200"
              type="text"
              placeholder=""
              {...register("search")}
            />
          </form>
        </div>
      </ContainerBody>
    </div>
  );
};

export default TitleHeader;
