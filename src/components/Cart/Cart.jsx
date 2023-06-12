import React, { useMemo } from "react";
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
import { useStateContext } from "../../context/StateContext";

export default function Cart() {
  const { cart, setCart, isCartModalOpen, setIsCartModalOpen } =
    useStateContext();

  const handleBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      setIsCartModalOpen(!isCartModalOpen);
    }
  };

  const totalPrice = useMemo(
    () =>
      cart.reduce((total, { price, quantity }) => total + price * quantity, 0),
    [cart]
  );

  const handleIncrementProduct = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrementProduct = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  return (
    <Backdrop onClick={handleBackdrop}>
      <Modal>
        <CloseButton>
          <AiOutlineClose
            onClick={() => setIsCartModalOpen(!isCartModalOpen)}
          />
        </CloseButton>

        <ModalContent>
          <Title>Cart</Title>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <CartList>
              {cart.map(({ id, images, price, quantity, title }) => (
                <CartItem key={id}>
                  <Wrapper>
                    <ProductImage src={images[0]} alt={title} />
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
