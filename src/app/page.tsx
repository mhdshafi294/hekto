import Image from "next/image";

import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import LeatestProducts from "@/components/home/LeatestProducts";
import ShopexOffer from "@/components/home/ShopexOffer";
import UniqueFeatures from "@/components/home/UniqueFeatures";
import TrendingProducts from "@/components/home/TrendingProducts";
import DiscountItem from "@/components/home/DiscountItem";
import TopCategories from "@/components/home/TopCategories";
import Subscribe from "@/components/home/Subscribe";
import LeatestBlog from "@/components/home/LeatestBlog";

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
      <TopCategories />
      <Subscribe />
      <Image
        src="/brands.png"
        width={904}
        height={93}
        alt=""
        className="my-[96px] mx-auto "
      />
      <LeatestBlog />
      <div className="mt-10"></div>
    </main>
  );
}
