import React from "react";
import Container from "./components/ui/Container";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import ProductsList from "./components/ProductsList";
import AuthForm from "./components/Form/AuthForm";

export default class App extends React.Component {
  state = {
    products: [
      { id: 1, name: "🍟", price: 8 },
      { id: 2, name: "🥤", price: 4 },
      { id: 3, name: "🍔", price: 12 },
    ],
    cart: [],
    isCartModalOpen: false,
    isAuthModalOpen: false,
  };

  addToCart = (product) => {
    const { cart } = this.state;
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      this.setState({ cart: updatedCart });
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      this.setState({ cart: updatedCart });
    }
  };

  removeFromCart = (productId) => {
    const { cart } = this.state;
    const updatedCart = cart.filter((product) => product.id !== productId);
    this.setState({ cart: updatedCart });
  };

  handleCartModal = () => {
    this.setState((prevState) => ({
      isCartModalOpen: !prevState.isCartModalOpen,
    }));
  };

  handleAuthModal = () => {
    this.setState((prevState) => ({
      isAuthModalOpen: !prevState.isAuthModalOpen,
    }));
  };

  handleForm = (data) => {
    console.log(data);
  };
  
  render() {
    return (
      <Container>
        <Header
          cart={this.state.cart}
          handleCartModal={this.handleCartModal}
          handleAuthModal={this.handleAuthModal}
        />
        <ProductsList
          products={this.state.products}
          cart={this.state.cart}
          addToCart={this.addToCart}
        />
        {this.state.isCartModalOpen && (
          <Cart
            cart={this.state.cart}
            removeFromCart={this.removeFromCart}
            handleCartModal={this.handleCartModal}
          />
        )}
        {this.state.isAuthModalOpen && (
          <AuthForm
            onSubmit={this.handleForm}
            handleAuthModal={this.handleAuthModal}
          />
        )}
      </Container>
    );
  }
}
