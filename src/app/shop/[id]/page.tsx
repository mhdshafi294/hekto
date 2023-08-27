import Brands from "@/components/Brands";
import ContainerBody from "@/components/ContainerBody";
import PageTitle from "@/components/PageTitle";
import CardProductDetails from "@/components/shop/product/CardProductDetails";
import React from "react";

const ProductPage = (props: any) => {
  const { params, searchParams } = props;

  return (
    <div>
      <PageTitle title="Product Details" />
      <div className="mt-[121px]" />
      <ContainerBody>
        <CardProductDetails />
      </ContainerBody>
      <Brands />
    </div>
  );
};

export default ProductPage;
