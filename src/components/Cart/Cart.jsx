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
import { useDeleteFromCartMutation, useGetCartQuery } from "../../redux/products";

export default function Cart() {
  const { data: cart } = useGetCartQuery();
    const [deleteFromCart] =
    useDeleteFromCartMutation();

    const { isCartModalOpen, setIsCartModalOpen } =
    useStateContext();

  const handleBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      setIsCartModalOpen(!isCartModalOpen);
    }
  };

  const totalPrice = useMemo(
    () =>
      cart?.reduce((total, { price, quantity }) => total + price * quantity, 0),
    [cart]
  );

  const handleIncrementProduct = (productId) => {
    // setCart((prevCart) =>
    //   prevCart.map((item) =>
    //     item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    //   )
    // );
  };

  const handleDecrementProduct = (productId) => {
    // const product = cart.find((product) => product.id === productId);

    // if (product.quantity <= 1) {
    //   removeFromCart(productId);
    //   return;
    // }

    // const updatedCart = cart.map((item) => {
    //   if (product.id === item.id) {
    //     return { ...item, quantity: (item.quantity -= 1) };
    //   }
    //   return item;
    // });

    // setCart(updatedCart);
  };

  const removeFromCart = (productUid) => {
    const isProductInCart = cart?.find((product) => product.uid === productUid);
    deleteFromCart(isProductInCart.id);
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
              {cart.map(({ uid, image, price, quantity, title }) => (
                <CartItem key={uid}>
                  <Wrapper>
                    <ProductImage src={image} alt={title} />
                    <CounterWrapper>
                      <Button onClick={() => handleDecrementProduct(uid)}>
                        -
                      </Button>
                      <ProductQuantity>{quantity}</ProductQuantity>
                      <Button onClick={() => handleIncrementProduct(uid)}>
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
                  <RemoveButton onClick={() => removeFromCart(uid)}>
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
