import React from "react";
import {
  ProductList,
  ProductItem,
  ProductImage,
  ProductPrice,
  Button,
  Wrapper,
  CounterWrapper,
  ProductQuantity,
} from "./example.styled";

function ProductCard({ id, name, price, image }) {
  return (
    <ProductItem id={id}>
      <ProductImage>{image}</ProductImage>
      <Wrapper>
        <ProductPrice>${price}</ProductPrice>
        <CounterWrapper>
          <Button>-</Button>
          <ProductQuantity>0</ProductQuantity>
          <Button>+</Button>
        </CounterWrapper>
      </Wrapper>
    </ProductItem>
  );
}

export default function Example() {
  return (
    <ProductList>
      <ProductCard key="1" id="1" price="12" image="🍔" name="Burger" />
    </ProductList>
  );
}
