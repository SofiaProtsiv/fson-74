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

export default function Cart({ cart }) {
  return (
    <Backdrop>
      <Modal>
        <CloseButton>
          <AiOutlineClose />
        </CloseButton>

        <ModalContent>
          <Title>Cart</Title>
          
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <CartList>
              {cart.map(({ id, name, price, quantity }) => (
                <CartItem key={id}>
                  <ProductName>{name}</ProductName>
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
            <TotalPrice>$0</TotalPrice>
          </TotalPriceWrapper>
        </ModalContent>
      </Modal>
    </Backdrop>
  );
}
