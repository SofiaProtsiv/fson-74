import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { TbTrashXFilled } from "react-icons/tb";
import {
  Backdrop,
  ModalContent,
  Modal,
  CloseButton,
  CartItem,
  CartList,
  Title,
  ProductImage,
  ProductPrice,
  PriceWrapper,
  CounterWrapper,
  ProductQuantity,
  Button,
  TotalPrice,
  TotalPriceWrapper,
  Text,
  Wrapper,
  RemoveButton,
  ProductPricePerItem,
  Summary,
  MakeOrderButton,
} from "./cart.styled";

export default function Cart({
  cart,
  handleCartModal,
  removeFromCart,
  handleIncrementProduct,
  handleDecrementProduct,
}) {
  const handleBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      handleCartModal();
    }
  };

  const totalPrice = cart.reduce(
    (total, { price, quantity }) => total + price * quantity,
    0
  );

  return (
    <Backdrop onClick={handleBackdrop}>
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
              {cart.map(({ id, image, price, quantity }) => (
                <CartItem key={id}>
                  <Wrapper>
                    <ProductImage>{image}</ProductImage>
                    <CounterWrapper>
                      <Button onClick={() => handleDecrementProduct(id)}>
                        -
                      </Button>
                      <ProductQuantity>{quantity}</ProductQuantity>
                      <Button onClick={() => handleIncrementProduct(id)}>
                        +
                      </Button>
                    </CounterWrapper>
                    <PriceWrapper>
                      <ProductPrice>${price * quantity}</ProductPrice>
                      <ProductPricePerItem>
                        ${price} / per item
                      </ProductPricePerItem>
                    </PriceWrapper>
                  </Wrapper>
                  <RemoveButton onClick={() => removeFromCart(id)}>
                    <TbTrashXFilled />
                  </RemoveButton>
                </CartItem>
              ))}
            </CartList>
          )}

          {cart.length !== 0 && (
            <Summary>
              <TotalPriceWrapper>
                <Text>Total:</Text>
                <TotalPrice>${totalPrice}</TotalPrice>
              </TotalPriceWrapper>
              <MakeOrderButton>Make order</MakeOrderButton>
            </Summary>
          )}
        </ModalContent>
      </Modal>
    </Backdrop>
  );
}
