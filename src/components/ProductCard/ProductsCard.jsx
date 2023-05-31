import {
  ProductItem,
  ProductPrice,
  ProductName,
  Button,
  ContentWrapper,
  Wrapper,
  ProductImage,
} from "./productCard.styled";

export default function ProductCard({ id, images, title, price }) {
  return (
    <ProductItem key={id} >
      <ProductImage image={images[0]}></ProductImage>
      <ContentWrapper>
        <ProductName>{title}</ProductName>
        <Wrapper>
          <ProductPrice>${price}</ProductPrice>
          <Button>Add to Cart</Button>
        </Wrapper>
      </ContentWrapper>
    </ProductItem>
  );
}
