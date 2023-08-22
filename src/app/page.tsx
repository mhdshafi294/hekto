import Image from "next/image";

import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import LeatestProducts from "@/components/home/LeatestProducts";
import ShopexOffer from "@/components/home/ShopexOffer";
import UniqueFeatures from "@/components/home/UniqueFeatures";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <FeaturedProducts />
      <LeatestProducts />
      <ShopexOffer />
      <UniqueFeatures />
      <div className="mt-10"></div>
    </main>
  );
}
