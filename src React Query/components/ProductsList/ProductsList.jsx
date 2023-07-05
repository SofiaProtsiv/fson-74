import React from "react";
import ProductCard from "../ProductCard";
import Skeleton from "../Skeleton";
import ErrorMessage from "../ErrorMessage";
import { ProductList } from "./productsList.styled";
import { getProducts } from "../../api";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function ProductsList() {
  const queryClient = useQueryClient();
  const {
    isFetching,
    isSuccess,
    isError,
    error,
    data: products,
  } = useQuery(
    {
      queryKey: ["products"],
      queryFn: getProducts,
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["products"]);
      },
    }
  );

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
