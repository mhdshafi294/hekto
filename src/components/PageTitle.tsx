import React from "react";
import ContainerBody from "./ContainerBody";

interface PageTitleProps {
  title?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <div className="w-full h-[286px] bg-violet-50 py-[96px] mb-[131px]">
      <ContainerBody>
        <h2 className=" text-indigo-950 text-4xl font-bold">{title}</h2>
        <p className=" text-black text-base font-medium mt-[9px]">
          Home . Pages . <span className="text-pink-500">{title}</span>
        </p>
      </ContainerBody>
    </div>
  );
};

export default PageTitle;
