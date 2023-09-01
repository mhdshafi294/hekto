import Brands from "@/components/Brands";
import ContainerBody from "@/components/ContainerBody";
import PageTitle from "@/components/PageTitle";
import CardProductDetails from "@/components/shop/product/CardProductDetails";
import CardRelated from "@/components/shop/product/CardRelated";
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
      <ContainerBody>
        <h3 className=" text-indigo-950 text-2xl font-bold mb-[47px]">
          Related Products
        </h3>
        <div className="flex justify-between items-start">
          {productsDetails.related.map((related, index) => (
            <CardRelated related={related} />
          ))}
        </div>
      </ContainerBody>
      <Brands />
    </div>
  );
};

export default ProductPage;
