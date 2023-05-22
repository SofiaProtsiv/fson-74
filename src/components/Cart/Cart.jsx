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
  ProductName,
  Wrapper,
  ProductPrice,
  ProductQuantity,
  TotalPrice,
  TotalPriceWrapper,
  Text,
} from "./cart.styled";

export default function Cart({ cart, handleBackdrop, handleToogleCart }) {;
  
  const totalPrice = cart.reduce(
    (total, product) => (total += product.quantity * product.price),
    0
  );

  return (
    <Backdrop onClick={handleBackdrop}>
      <Modal>
        <CloseButton onClick={handleToogleCart}>
          <AiOutlineClose />
        </CloseButton>

        <ModalContent>
          <Title>Cart</Title>

          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <CartList>
              {cart.map(({ id, image, price, quantity }) => (
                <CartItem key={id}>
                  <ProductName>{image}</ProductName>
                  <Wrapper>
                    <ProductQuantity>{quantity}</ProductQuantity>X
                    <ProductPrice>${price}</ProductPrice>
                  </Wrapper>
                  <button>Remove</button>
                </CartItem>
              ))}
            </CartList>
          )}

          <TotalPriceWrapper>
            <Text>Total:</Text>
            <TotalPrice>${totalPrice}</TotalPrice>
          </TotalPriceWrapper>
        </ModalContent>
      </Modal>
    </Backdrop>
  );
}
