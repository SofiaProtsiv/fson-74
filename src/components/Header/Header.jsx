import { useMemo } from "react";
import { NavLink } from "react-router-dom";
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
  const { cart, setIsCartModalOpen, setIsAuthModalOpen } = useStateContext();

  const totalItems = useMemo(
    () => cart.reduce((total, { quantity }) => total + quantity, 0),
    [cart]
  );

  const handleCartModal = () => {
    setIsCartModalOpen((prevState) => ({
      isCartModalOpen: !prevState.isCartModalOpen,
    }));
  };

  const handleAuthModal = () => {
    setIsAuthModalOpen((prevState) => ({
      isAuthModalOpen: !prevState.isAuthModalOpen,
    }));
  };

  return (
    <HeaderWrapper>
      <NavLink to="/">
        <Logo>E-commerse</Logo>
      </NavLink>

      <NavigationContainer>
        <NavigationWrapper>
          <NavLink to="/favorites">
            <NavigationItem>
              <BsHeartFill />
            </NavigationItem>
          </NavLink>

          <NavLink>
            <NavigationItem onClick={handleCartModal}>
              <FaShoppingCart />
              {totalItems}
            </NavigationItem>
          </NavLink>

          <NavLink>
            <NavigationItem onClick={handleAuthModal}>
              <FaUserCircle />
            </NavigationItem>
          </NavLink>
        </NavigationWrapper>
      </NavigationContainer>
    </HeaderWrapper>
  );
}
