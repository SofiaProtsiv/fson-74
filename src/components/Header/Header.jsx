import { BsHeartFill } from "react-icons/bs";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import {
  HeaderWrapper,
  Logo,
  NavigationContainer,
  NavigationWrapper,
  NavigationItem,
} from "./header.styled";

export default function Header({ cart, handleCartModal, handleAuthModal }) {
  const totalItems = cart.reduce((total, { quantity }) => total + quantity, 0);
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

          <NavigationItem onClick={handleAuthModal}>
            <FaUserCircle />
          </NavigationItem>
        </NavigationWrapper>
      </NavigationContainer>
    </HeaderWrapper>
  );
}
