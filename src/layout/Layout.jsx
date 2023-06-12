import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Container from "../components/ui/Container";
import Cart from "../components/Cart/Cart";
import { useStateContext } from "../context/StateContext";

export default function Layout() {
  const { isCartModalOpen } = useStateContext();

  return (
    <Container>
      <Header />
      <Outlet />
      {isCartModalOpen && <Cart />}
    </Container>
  );
}
