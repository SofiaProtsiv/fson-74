import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import Skeleton from "../Skeleton";
import ErrorMessage from "../ErrorMessage";
import { Button, ProductList } from "./productsList.styled";
import { getProducts } from "../../api";
import { useStateContext } from "../../context/StateContext";

const STATUS = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default function ProductsList() {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 30;

  const { products, setProducts, searchParams } = useStateContext();
  const searchQuery = searchParams.get("query") ?? "";

  useEffect(() => {
    fetchProducts();
  }, [searchQuery, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
    setProducts([]);
  }, [searchQuery]);

  const fetchProducts = async () => {
    const skip = (currentPage - 1) * limit;
    setStatus(STATUS.PENDING);

    try {
      const data = await getProducts({ searchQuery, limit, skip });

      if (!data.products.length) {
        throw new Error("No matches found");
      }

      setProducts((prevProducts) => [...prevProducts, ...data.products]);
      setTotalPages(Math.ceil(data.total / limit));
      setStatus(STATUS.RESOLVED);
      setError(null);
    } catch (error) {
      setError(error.message);
      setStatus(STATUS.REJECTED);
    }
  };

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const showLoadMoreButton = products.length !== 0 && currentPage < totalPages;

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

        {showLoadMoreButton && (
          <Button onClick={handleLoadMore} disabled={status === STATUS.PENDING}>
            {status === STATUS.PENDING ? "Loading..." : "Load More"}
          </Button>
        )}
      </ProductList>
    );
  }

  if (status === STATUS.REJECTED) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }
}
