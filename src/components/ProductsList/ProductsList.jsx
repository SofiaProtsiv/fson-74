import React from "react";
import ProductCard from "../ProductCard";
import Skeleton from "../Skeleton";
import ErrorMessage from "../ErrorMessage";
import { ProductList } from "./productsList.styled";
import { useGetProductsQuery } from "../../redux/products";

export default function ProductsList() {
 const { data: products, error, isFetching, isError, isSuccess } = useGetProductsQuery()

  if (isFetching) {
    return <Skeleton />;
  }

  if (isSuccess) {
    return (
      <ProductList>
        {products?.map(({ uid, image, title, price }) => (
          <ProductCard
            key={uid}
            uid={uid}
            title={title}
            price={price}
            image={image}
          />
        ))}
      </ProductList>
    );
  }

  if (isError) {
    return <ErrorMessage>{error.error}</ErrorMessage>;
  }
}