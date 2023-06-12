import { useMemo } from "react";
import {
  HeaderWrapper,
  Logo,
  NavigationContainer,
  NavigationWrapper,
  NavigationItem,
} from "./header.styled";
import { BsHeartFill } from "react-icons/bs";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useStateContext } from "../../context/StateContext";

export default function Header() {
  const { cart, setIsCartModalOpen } = useStateContext();

  const totalItems = useMemo(
    () => cart.reduce((total, { quantity }) => total + quantity, 0),
    [cart]
  );

  const handleCartModal = () => {
    setIsCartModalOpen((prevState) => ({
      isCartModalOpen: !prevState.isCartModalOpen,
    }));
  };

  return (
    <HeaderWrapper>
      <Logo>E-commerse</Logo>

      <NavigationContainer>
        <NavigationWrapper>
          <NavigationItem>
            <BsHeartFill />
          </NavigationItem>

          <NavigationItem onClick={handleCartModal}>
            <FaShoppingCart />
            {totalItems}
          </NavigationItem>

          <NavigationItem>
            <FaUserCircle />
          </NavigationItem>
        </NavigationWrapper>
      </NavigationContainer>
    </HeaderWrapper>
  );
}
