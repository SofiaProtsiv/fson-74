import React from "react";
import { TopBlock, Title, MainSection } from "./app.styled";
import Container from "./components/ui/Container";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import AuthForm from "./components/AuthForm";
import Search from "./components/Search";
import CategoryFilter from "./components/CategoryFilter";
import debounce from "lodash.debounce";
import products from "./assets/products";

export default class App extends React.Component {
  state = {
    products,
    cart: [],
    searchQuery: "",
    category: "",
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

  changeCategoryFilter = (selectedCategory) => {
    this.setState({ category: selectedCategory });
  };

  getProductsBySearchQuery = () => {
    const normalizedSearchQuery = this.state.searchQuery.toLowerCase();

    const filteredProducts = this.state.products.filter((product) =>
      product.name.toLowerCase().includes(normalizedSearchQuery)
    );

    return filteredProducts;
  };

  render() {
    const { cart, searchQuery, isCartModalOpen, isAuthModalOpen } = this.state;
    return (
      <Container>
        <Header
          cart={cart}
          handleCartModal={this.handleCartModal}
          handleAuthModal={this.handleAuthModal}
        />

        <MainSection>
          <TopBlock>
            <Title>Products</Title>
            <Search value={searchQuery} onChange={this.changeSearchQuery} />
          </TopBlock>

          <CategoryFilter
            currentCategory={this.state.category}
            onClick={this.changeCategoryFilter}
          />

          {this.getProductsBySearchQuery().length ? (
            <ProductsList
              products={this.getProductsBySearchQuery()}
              cart={cart}
              addToCart={this.addToCart}
            />
          ) : (
            <p>No matches found</p>
          )}
        </MainSection>

        {isCartModalOpen && (
          <Cart
            cart={cart}
            removeFromCart={this.removeFromCart}
            handleCartModal={this.handleCartModal}
            handleDecrementProduct={this.handleDecrementProduct}
            handleIncrementProduct={this.handleIncrementProduct}
          />
        )}

        {isAuthModalOpen && (
          <AuthForm
            onSubmit={this.onSubmit}
            handleAuthModal={this.handleAuthModal}
          />
        )}
      </Container>
    );
  }
}
