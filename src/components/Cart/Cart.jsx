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
import { useDispatch, useSelector } from "react-redux";
import {
  decrementProduct,
  incrementProduct,
  removeFromCart,
} from "../../redux/cart/actions";

export default function Cart() {
  const { isCartModalOpen, setIsCartModalOpen } = useStateContext();

  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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
    dispatch(incrementProduct(productId));
  };

  const handleDecrementProduct = (productId) => {
    const product = cart.find((product) => product.id === productId);

    if (product.quantity <= 1) {
      dispatch(removeFromCart(productId));
    } else {
      dispatch(decrementProduct(productId));
    }
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  // const handleIncrementProduct = (productId) => {
  //   setCart((prevCart) =>
  //     prevCart.map((item) =>
  //       item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
  //     )
  //   );
  // };

  // const handleDecrementProduct = (productId) => {
  //   const product = cart.find((product) => product.id === productId);

  //   if (product.quantity <= 1) {
  //     removeFromCart(productId);
  //     return;
  //   }

  //   const updatedCart = cart.map((item) => {
  //     if (product.id === item.id) {
  //       return { ...item, quantity: (item.quantity -= 1) };
  //     }
  //     return item;
  //   });

  //   setCart(updatedCart);
  // };

  // const removeFromCart = (productId) => {
  //   setCart((prevCart) =>
  //     prevCart.filter((product) => product.id !== productId)
  //   );
  // };

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
                  <RemoveButton onClick={() => handleRemoveFromCart(id)}>
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
