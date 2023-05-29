import { BsHeartFill } from "react-icons/bs";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import {
  HeaderWrapper,
  Logo,
  NavigationContainer,
  NavigationWrapper,
  NavigationItem,
} from "./header.styled";

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo>E-commerse</Logo>

      <NavigationContainer>
        <NavigationWrapper>
          <NavigationItem>
            <BsHeartFill />
          </NavigationItem>

          <NavigationItem>
            <FaShoppingCart />0
          </NavigationItem>

          <NavigationItem>
            <FaUserCircle />
          </NavigationItem>
        </NavigationWrapper>
      </NavigationContainer>
    </HeaderWrapper>
  );
}
