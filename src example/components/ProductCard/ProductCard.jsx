import React from "react";
import { ProductItem, ProductImage, Button, Wrapper } from "../../app.styled";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../../redux/actions";

export default function ProductCard({ id, image }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.products);

  const isProductInCart = cart.find((product) => product.id === id);

  const handleAddProduct = () => {
    dispatch(addProduct({ id, image }));
  };

  const handleRemoveProduct = (productId) => {
    dispatch(removeProduct(productId));
  };
  return (
    <ProductItem id={id}>
      <ProductImage>{image}</ProductImage>
      <Wrapper>
        {isProductInCart ? (
          <Button action="delete" onClick={() => handleRemoveProduct(id)}>
            Remove from cart
          </Button>
        ) : (
          <Button action="add" onClick={handleAddProduct}>
            Add to cart
          </Button>
        )}
      </Wrapper>
    </ProductItem>
  );
}
