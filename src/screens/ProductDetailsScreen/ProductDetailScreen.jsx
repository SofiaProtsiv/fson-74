import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import { getProductById } from "../../api";
import {
  ProductDetailsWrapper,
  ProductImage,
  ProductPrice,
  ProductCategory,
  ProductRating,
  ProductStock,
  ProductBrand,
  ProductDescription,
  ProductTitle,
} from "./productDetailScreen.styled";

const STATUS = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default function ProductDetailsScreen() {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState(null);
  const [productDetails, setProductDetails] = useState({});

  const { productId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setStatus(STATUS.PENDING);
      try {
        const data = await getProductById(productId);

        setProductDetails(data);
        setStatus(STATUS.RESOLVED);
        setError(null);
      } catch (error) {
        setStatus(STATUS.REJECTED);
        setError(error.message);
      }
    };

    fetchData();
  }, [productId]);

  if (status === STATUS.PENDING) {
    return <p>Loading...</p>;
  }

  if (status === STATUS.RESOLVED) {
    const {
      id,
      images,
      price,
      category,
      rating,
      stock,
      brand,
      description,
      title,
    } = productDetails;
    return (
      <ProductDetailsWrapper id={id}>
        <ProductImage src={images[0]} alt={title} />
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>Price: ${price}</ProductPrice>
        <ProductCategory>Category: {category}</ProductCategory>
        <ProductRating>Rating: {rating}</ProductRating>
        <ProductStock>Stock: {stock}</ProductStock>
        <ProductBrand>Brand: {brand}</ProductBrand>
        <ProductDescription>Description: {description}</ProductDescription>
      </ProductDetailsWrapper>
    );
  }

  if (status === STATUS.REJECTED) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }
}
