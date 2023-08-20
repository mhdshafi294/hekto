import Card1 from "@/components/home/Card1";
import Hero from "@/components/home/Hero";
import Image from "next/image";
import Container from "./../components/Container";
import { chairs1 } from "@/constants/contants";
import ContainerBody from "@/components/ContainerBody";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <ContainerBody>
        <h2 className="text-violet-950 text-[42px] font-bold mt-[129px] mb-[48px] text-center">
          Featured Products
        </h2>
        <div className="flex items-center justify-between gap-[29px]">
          {chairs1.map((chair, index) => {
            return (
              <Card1
                img={chair.img}
                name={chair.name}
                code={chair.code}
                price={chair.price}
              />
            );
          })}
        </div>
      </ContainerBody>
      <div className="mt-10"></div>
    </main>
  );
}
