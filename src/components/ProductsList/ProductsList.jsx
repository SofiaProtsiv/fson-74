import {
  ProductList,
  ProductItem,
  ProductPrice,
  ProductName,
  Button,
  ContentWrapper,
  Wrapper,
  ProductImage,
} from "./productsList.styled";

export default function ProductsList({ products }) {
  return (
    <ProductList>
      {products.map(({ id, images, title, price }) => {
        return (
          <ProductItem key={id}>
            <ProductImage image={images[0]} ></ProductImage>
            <ContentWrapper>
              <ProductName>{title}</ProductName>
              <Wrapper>
                <ProductPrice>${price}</ProductPrice>
                <Button
                >
                  Add to Cart
                </Button>
              </Wrapper>
            </ContentWrapper>
          </ProductItem>
        );
      })}
    </ProductList>
  );
}
