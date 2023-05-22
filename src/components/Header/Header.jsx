import { BsHeartFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import {
  HeaderWrapper,
  Logo,
  NavigationContainer,
  NavigationWrapper,
  NavigationItem,
} from "./header.styled";

export default function Header({cart, handleToogleCart}) {
  const totalProducts = cart.reduce(
    (total, product) => (total += product.quantity),
    0
  );

  return (
    <HeaderWrapper>
      <Logo>E-commerse</Logo>

      <NavigationContainer>
        <NavigationWrapper>
          <NavigationItem>
            <BsHeartFill />
          </NavigationItem>

          <NavigationItem onClick={handleToogleCart}>
            {totalProducts}
            <FaShoppingCart />
          </NavigationItem>
        </NavigationWrapper>
      </NavigationContainer>
    </HeaderWrapper>
  );
}
