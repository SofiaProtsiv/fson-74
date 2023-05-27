import React from "react";
import { TopBlock, Title, MainSection } from "./app.styled";
import Container from "./components/ui/Container";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import ProductsList from "./components/ProductsList";
import AuthForm from "./components/Form/AuthForm";
import Search from "./components/Search";
import OrderForm from "./components/OrderForm/OrderForm";

import debounce from "lodash.debounce";

import products from "./assets/products";

export default class App extends React.Component {
  state = {
    products,
    cart: [],
    searchQuery: "",
    isCartModalOpen: false,
    isAuthModalOpen: false,
  };

  addToCart = (productId) => {
    const isProductInCart = this.state.cart.find(
      (product) => product.id === productId
    );

    if (!isProductInCart) {
      const product = this.state.products.find(
        (product) => product.id === productId
      );

      this.setState((prevState) => ({
        cart: [...prevState.cart, { ...product, quantity: 1 }],
      }));
    }
  };

  handleIncrementProduct = (productId) => {
    const product = this.state.cart.find((product) => product.id === productId);

    const updatedCart = this.state.cart.map((item) => {
      if (product.id === item.id) {
        return { ...item, quantity: (item.quantity += 1) };
      }
      return item;
    });

    this.setState({ cart: updatedCart });
  };

  handleDecrementProduct = (productId) => {
    const product = this.state.cart.find((product) => product.id === productId);

    if (product.quantity <= 1) {
      this.removeFromCart(productId);
      return;
    }

    const updatedCart = this.state.cart.map((item) => {
      if (product.id === item.id) {
        return { ...item, quantity: (item.quantity -= 1) };
      }
      return item;
    });

    this.setState({ cart: updatedCart });
  };

  removeFromCart = (productId) => {
    const updatedCart = this.state.cart.filter(
      (product) => product.id !== productId
    );
    this.setState({ cart: updatedCart });
  };

  getProductQuantity = (productId) => {
    const product = this.state.cart.find((product) => product.id === productId);
    return product?.quantity;
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

  onSubmit = (data) => {
    console.log(data);
  };

  changeSearchQuery = debounce(({ target }) => {
    this.setState({
      searchQuery: target.value,
    });
  }, 300);

  getProductsBySearchQuery = () => {
    const normalizedSearchQuery = this.state.searchQuery.toLowerCase();

    const filteredProducts = this.state.products.filter((product) =>
      product.name.toLowerCase().includes(normalizedSearchQuery)
    );

    return filteredProducts;
  };

  render() {
    return (
      <Container>
        <Header
          cart={this.state.cart}
          handleCartModal={this.handleCartModal}
          handleAuthModal={this.handleAuthModal}
        />

        {/* <OrderForm onSubmit={this.onSubmit}/> */}

        <MainSection>
          <TopBlock>
            <Title>Products</Title>
            <Search
              value={this.state.searchQuery}
              onChange={this.changeSearchQuery}
            />
          </TopBlock>
          {this.getProductsBySearchQuery().length ? (
            <ProductsList
              products={this.getProductsBySearchQuery()}
              cart={this.state.cart}
              addToCart={this.addToCart}
            />
          ) : (
            <p>No matches found</p>
          )}
        </MainSection>

        {this.state.isCartModalOpen && (
          <Cart
            cart={this.state.cart}
            removeFromCart={this.removeFromCart}
            handleCartModal={this.handleCartModal}
            handleDecrementProduct={this.handleDecrementProduct}
            handleIncrementProduct={this.handleIncrementProduct}
          />
        )}

        {this.state.isAuthModalOpen && (
          <AuthForm
            onSubmit={this.onSubmit}
            handleAuthModal={this.handleAuthModal}
          />
        )}
      </Container>
    );
  }
}
