import Brands from "@/components/Brands";
import ContainerBody from "@/components/ContainerBody";
import PageTitle from "@/components/PageTitle";
import CardProductDetails from "@/components/shop/product/CardProductDetails";
import ProductInfo from "@/components/shop/product/ProductInfo";

import { productsDetails } from "@/constants/constants";

const ProductPage = (props: any) => {
  const { params, searchParams } = props;

  return (
    <div>
      <PageTitle title="Product Details" />
      <div className="mt-[121px]" />
      <ContainerBody>
        <CardProductDetails productsDetails={productsDetails} />
      </ContainerBody>
      <ProductInfo
        name={productsDetails.name}
        description={productsDetails.description}
        additionalInfo={productsDetails.additionalInfo}
      />
      <Brands />
    </div>
  );
};

export default ProductPage;
