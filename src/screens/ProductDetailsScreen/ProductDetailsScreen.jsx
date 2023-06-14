import { Suspense, useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import { getProductById } from "../../api";
import {
  ProductDetailsWrapper,
  ProductImage,
  ProductPrice,
  DetailsWrapper,
  ProductsDetailsBtn,
  ProductTitle,
} from "./productDetailsScreen.styled";

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
  const location = useLocation();

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

  if (status === STATUS.PENDING) {
    return <p>Loading...</p>;
  }

  if (status === STATUS.RESOLVED) {
    const { id, images, price, title } = productDetails;
    return (
      <>
        <NavLink to={location.state?.from || "/"}>Go Back</NavLink>
        <ProductDetailsWrapper id={id}>
          <ProductImage src={images[0]} alt={title} />
          <DetailsWrapper>
            <ProductTitle>{title}</ProductTitle>
            <ProductPrice>Price: ${price}</ProductPrice>

            <ProductsDetailsBtn>
              <NavLink to="characteristic">More characteristic</NavLink>
            </ProductsDetailsBtn>

            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </DetailsWrapper>
        </ProductDetailsWrapper>
      </>
    );
  }

  if (status === STATUS.REJECTED) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }
}
