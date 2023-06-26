export const getFilteredProducts = (state) => {
  const { cart, products } = state.products;
  const { showInCart, searchQuery } = state.filters;
console.log(state);
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  if (showInCart) {
    const filteredProductsInCart = filteredProducts.filter((product) =>
      cart.some((item) => item.id === product.id)
    );
    return filteredProductsInCart;
  }

  return filteredProducts;
};
