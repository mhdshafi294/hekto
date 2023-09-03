import { lato } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";

interface CardOtherBlogProps {
  id: number;
  img: string;
  date: string;
  title: string;
  abstract: string;
}

const CardOtherBlog: React.FC<CardOtherBlogProps> = ({
  id,
  img,
  date,
  title,
  abstract,
}) => {
  return (
    <div className="w-[668px] h-[137px] bg-white shadow mb-[30px] px-[14px] py-[12px] flex items-center gap-[15px] hover:translate-x-1 duration-200">
      <div className="w-[103px] h-[107px] relative">
        <Image
          src={img}
          fill={true}
          alt=""
          className=" "
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col justify-center gap-2">
        <div className="flex justify-between items-center gap-3 w-[250px]">
          <Link
            href={`/blog/${id}`}
            className=" text-indigo-900 text-lg font-semibold tracking-tight hover:text-pink-500"
          >
            {title}
          </Link>
          <div className="text-gray-400 text-xs font-normal">{date}</div>
        </div>
        <p className={`${lato.className} text-gray-400 text-xs font-normal`}>
          {abstract}
        </p>
      </div>
    </div>
  );
};

export default CardOtherBlog;
