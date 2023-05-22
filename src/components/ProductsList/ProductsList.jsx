import {
  Title,
  ProductList,
  ProductItem,
  ProductPrice,
  Button,
  Wrapper,
  ProductImage,
} from "./productsList.styled";

export default function ProductsList({ products, addToCart }){
  return (
    <>
      <Title>Products</Title>
      <ProductList>
        {products.map((product) => (
          <ProductItem key={product.id}>
            <ProductImage>{product.name}</ProductImage>
            <Wrapper>
              <ProductPrice>${product.price}</ProductPrice>
              <Button onClick={() => addToCart(product)}>Add to Cart</Button>
            </Wrapper>
          </ProductItem>
        ))}
      </ProductList>
    </>
  );
}