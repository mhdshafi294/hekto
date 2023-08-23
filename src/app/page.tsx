import Image from "next/image";

import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import LeatestProducts from "@/components/home/LeatestProducts";
import ShopexOffer from "@/components/home/ShopexOffer";
import UniqueFeatures from "@/components/home/UniqueFeatures";
import TrendingProducts from "@/components/home/TrendingProducts";
import DiscountItem from "@/components/home/DiscountItem";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <FeaturedProducts />
      <LeatestProducts />
      <ShopexOffer />
      <UniqueFeatures />
      <TrendingProducts />
      <DiscountItem />
      <div className="mt-10"></div>
    </main>
  );
}
