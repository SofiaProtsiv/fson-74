import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ProductBrand,
  ProductCategory,
  ProductDescription,
  ProductRating,
  ProductStock,
} from "./productCharacteristic.styled";
import { getProductById } from "../../api";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const STATUS = {
    IDLE: "idle",
    PENDING: "pending",
    RESOLVED: "resolved",
    REJECTED: "rejected",
  };

export default function ProductCharacteristic() {
    const [status, setStatus] = useState(STATUS.IDLE);
    const [error, setError] = useState(null);
    const [productDetails, setProductDetails] = useState({});
  
    const { productId } = useParams();
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      setStatus(STATUS.PENDING);
      try {
        const data = await getProductById(productId);
  
        setProductDetails(data);
        setStatus(STATUS.RESOLVED);
        setError(null);
      } catch (error) {
        setError(error.message);
        setStatus(STATUS.REJECTED);
      }
    };

  const { category, rating, stock, brand, description } = productDetails;
    
  if (status === STATUS.PENDING) {
    return <p>Loading...</p>;
  }
  if (status === STATUS.RESOLVED) {
  return (
    <>
      <ProductCategory>Category: {category}</ProductCategory>
      <ProductRating>Rating: {rating}</ProductRating>
      <ProductStock>Stock: {stock}</ProductStock>
      <ProductBrand>Brand: {brand}</ProductBrand>
      <ProductDescription>Description: {description}</ProductDescription>
    </>
  );
  }
  if (status === STATUS.REJECTED) {
    return  <ErrorMessage>{error}</ErrorMessage>;
  }
}
