import React from "react";
import PropTypes from "prop-types";
import {
  ProductContainer,
  ImageWrapper,
  ProductImage,
  InfoWrapper,
  ProductName,
  ProductStock,
  ProductPrice,
} from "./productCard.styled.js";

export default function ProductCardStyledComponents({
  id,
  price,
  title,
  thumbnail,
  stock,
}) {
  return (
    <ProductContainer id={id}>
      <ImageWrapper>
        <ProductImage src={thumbnail} alt={title} />
      </ImageWrapper>
      <InfoWrapper>
        <div>
          <ProductName>{title}</ProductName>
          <ProductStock stock={stock}>
            {stock > 40 ? "In stock" : " Low on stock"}
          </ProductStock>
        </div>
        <ProductPrice>${price}</ProductPrice>
      </InfoWrapper>
    </ProductContainer>
  );
}

ProductCardStyledComponents.propTypes = {
  id: PropTypes.number,
  price: PropTypes.number,
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  stock: PropTypes.number,
};
