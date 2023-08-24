import Link from "next/link";
import Image from "next/image";

import ContainerBody from "../ContainerBody";
import CardTrending from "../CardTrending";
import { blogs } from "@/constants/constants";
import CardBlog from "../CardBlog";

const LeatestBlog = () => {
  return (
    <ContainerBody>
      <h2 className="text-violet-950 text-[42px] font-bold mt-[71px] mb-[48px] text-center">
        Leatest Blog
      </h2>
      <div className="grid lg:grid-cols-3 gap-[56px] mb-[115px]">
        {blogs.map((item, index) => {
          return (
            <CardBlog
              key={index}
              img={item.img}
              writer={item.writer}
              date={item.date}
              title={item.title}
              abstract={item.abstract}
              link={item.link}
            />
          );
        })}
      </div>
    </ContainerBody>
  );
};

export default LeatestBlog;
