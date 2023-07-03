import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import Skeleton from "../Skeleton";
import ErrorMessage from "../ErrorMessage";
import { ProductList } from "./productsList.styled";
import { getProducts } from "../../api";
import { useStateContext } from "../../context/StateContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/products/slice";

const STATUS = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default function ProductsList() {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts())  }, [dispatch]);

  if (status === STATUS.PENDING) {
    return <Skeleton />;
  }

  if (status === STATUS.RESOLVED) {
    return (
      <ProductList>
        {products.map(({ id, images, title, price }) => (
          <ProductCard
            key={id}
            id={id}
            title={title}
            price={price}
            images={images}
          />
        ))}
      </ProductList>
    );
  }

  if (status === STATUS.REJECTED) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }
}
