import { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
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
import { useSelector } from "react-redux";

export default function Header() {
  const { cart } = useSelector((state) => state.cart);

  const { setIsCartModalOpen } = useStateContext();

  const totalItems = useMemo(
    () => cart.reduce((total, { quantity }) => total + quantity, 0),
    [cart]
  );

  const handleCartModal = () => {
    setIsCartModalOpen((prevState) => ({
      isCartModalOpen: !prevState.isCartModalOpen,
    }));
  };

  const location = useLocation();

  return (
    <HeaderWrapper>
      <NavLink to="/">
        <Logo>E-commerse</Logo>
      </NavLink>

      <NavigationContainer>
        <NavigationWrapper>
          <NavLink to="/favorites" state={{ from: location }}>
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
            <NavigationItem>
              <FaUserCircle />
            </NavigationItem>
          </NavLink>
        </NavigationWrapper>
      </NavigationContainer>
    </HeaderWrapper>
  );
}
