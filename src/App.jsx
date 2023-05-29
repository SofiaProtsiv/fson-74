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
    filteredProducts: products,
    cart: [],
    searchQuery: "",
    category: "",
    isCartModalOpen: false,
    isAuthModalOpen: false,
  };

  componentDidMount() {
    const cartLS = JSON.parse(localStorage.getItem("cart"));
    if (cartLS) {
      this.setState({ cart: cartLS });
    }
  }

  componentDidUpdate(_, prevState) {
    const { products, cart, searchQuery, category } = this.state;

    if (prevState.cart !== cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    if (prevState.searchQuery !== searchQuery) {
      const normalizedSearchQuery = searchQuery.toLowerCase();

      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(normalizedSearchQuery)
      );

      this.setState({ filteredProducts, category: "" });
    }

    if (prevState.category !== category) {
      const normalizedSearchQuery = category.toLowerCase();

      const filteredProducts = products.filter((product) =>
        product.category.toLowerCase().includes(normalizedSearchQuery)
      );

      this.setState({ filteredProducts });
    }
  }

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

  render() {
    const {
      cart,
      searchQuery,
      category,
      isCartModalOpen,
      isAuthModalOpen,
      filteredProducts,
    } = this.state;
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
            currentCategory={category}
            onClick={this.changeCategoryFilter}
          />

          {filteredProducts.length ? (
            <ProductsList
              products={filteredProducts}
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
