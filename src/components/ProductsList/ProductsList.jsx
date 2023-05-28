import {
  ProductList,
  ProductItem,
  ProductPrice,
  Button,
  Wrapper,
  ProductImage
} from "./productsList.styled";

export default function ProductsList({ products, addToCart, cart }) {
  return (
      <ProductList>
        {products.map(({ id, image, price }) => {
          const isProductInCart = cart.find((product) => product.id === id);
          return (
            <ProductItem key={id}>
              <ProductImage>{image}</ProductImage>
              <Wrapper>
                <ProductPrice>${price}</ProductPrice>
                  <Button
                    isProductInCart={isProductInCart}
                    onClick={() => addToCart(id)}
                  >
                    {isProductInCart ? "In Cart" : "Add to Cart"}
                  </Button>
              </Wrapper>
            </ProductItem>
          );
        })}
      </ProductList>
  );
}
