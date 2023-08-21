import Card1 from "@/components/Card1";
import Hero from "@/components/home/Hero";
import Image from "next/image";
import Container from "./../components/Container";
import { chairs1 } from "@/constants/contants";
import ContainerBody from "@/components/ContainerBody";
import CarouselItem from "@/components/home/CarouselItem";
import FeaturedProducts from "@/components/home/FeaturedProducts";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <FeaturedProducts />
      <div className="mt-10"></div>
    </main>
  );
}
