import {
  Title,
  ProductList,
  ProductItem,
  ProductImage,
  ProductPrice,
  Button,
  Wrapper,
} from "./productsList.styled";

export default function ProductsList({products}) {
  return (
    <>
      <Title>Products</Title>
      <ProductList>
        {products.map((product) => (
          <ProductItem key={product.id}>
            <ProductImage>{product.image}</ProductImage>
            <Wrapper>
              <ProductPrice>${product.price}</ProductPrice>
              <Button>Add to Cart</Button>
            </Wrapper>
          </ProductItem>
        ))}
      </ProductList>
    </>
  );
}
