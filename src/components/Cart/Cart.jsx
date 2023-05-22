import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  Backdrop,
  ModalContent,
  Modal,
  CloseButton,
  CartItem,
  CartList,
  Title,
  ProductImage,
  Wrapper,
  ProductPrice,
  ProductQuantity,
  TotalPrice,
  TotalPriceWrapper,
  Text,
} from "./cart.styled";

export default function Cart({ handleCartModal, cart, removeFromCart }) {
  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      handleCartModal();
    }
  };

  return (
    <Backdrop onClick={handleBackdropClick}>
      <Modal>
        <CloseButton>
          <AiOutlineClose onClick={handleCartModal} />
        </CloseButton>

        <ModalContent>
          <Title>Cart</Title>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <CartList>
              {cart.map(({ id, name, price, quantity }) => (
                <CartItem key={id}>
                  <ProductImage>{name}</ProductImage>
                  <Wrapper>
                    <ProductQuantity>{quantity}</ProductQuantity>X
                    <ProductPrice>${price}</ProductPrice>
                  </Wrapper>
                  <button onClick={() => removeFromCart(id)}>Remove</button>
                </CartItem>
              ))}
            </CartList>
          )}

          <TotalPriceWrapper>
            <Text>Total:</Text>
            <TotalPrice>
              ${cart.reduce((total, { price, quantity }) => total + price * quantity, 0)}
            </TotalPrice>
          </TotalPriceWrapper>
        </ModalContent>
      </Modal>
    </Backdrop>
  );
}