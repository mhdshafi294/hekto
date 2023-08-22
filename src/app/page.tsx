import Card1 from "@/components/Card1";
import Hero from "@/components/home/Hero";
import Image from "next/image";
import Container from "./../components/Container";
import { chairs1 } from "@/constants/constants";
import ContainerBody from "@/components/ContainerBody";
import CarouselItem from "@/components/home/CarouselItem";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import LeatestProducts from "@/components/home/LeatestProducts";
import ShopexOffer from "@/components/home/ShopexOffer";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <FeaturedProducts />
      <LeatestProducts />
      <ShopexOffer />
      <div className="mt-10"></div>
    </main>
  );
}
