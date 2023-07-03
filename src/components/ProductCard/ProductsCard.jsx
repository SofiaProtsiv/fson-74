import {
  ProductItem,
  ProductPrice,
  ProductName,
  Button,
  ContentWrapper,
  Wrapper,
  ProductImage,
  Icon,
} from "./productCard.styled";
import { AiFillHeart } from "react-icons/ai";

export default function ProductCard({ id, images, title, price }) {
  return (
    <ProductItem key={id}>
      <ProductImage image={images[0]}></ProductImage>
      <ContentWrapper>
        <ProductName>{title}</ProductName>
        <Wrapper>
          <ProductPrice>${price}</ProductPrice>
          <Button>Add to Cart</Button>
        </Wrapper>
      </ContentWrapper>
      <Icon>
        <AiFillHeart />
      </Icon>
    </ProductItem>
  );
}
