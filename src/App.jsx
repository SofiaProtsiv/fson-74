import React from "react";
import Container from "./components/ui/Container";
import Example from "./example/Example";
// import Cart from "./components/Cart/Cart";
// import Header from "./components/Header/Header";
// import ProductsList from "./components/ProductsList";

// const products = [
//   { id: 1, image: "🍟", price: 8, name: "Fries" },
//   { id: 2, image: "🥤", price: 4, name: "Coca-Cola" },
//   { id: 3, image: "🍔", price: 12, name: "Burger" },
// ]
// const cart = []

export default function App() {
  return (
    <Container>
      <Example/>

      {/* <Header />
      <ProductsList products={products}/>
      <Cart cart={cart}/> */}
    </Container>
  );
}