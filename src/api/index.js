const BASE_URL = "https://dummyjson.com";

export const getProducts = async ({ limit, skip }) => {
  const response = await fetch(
    `${BASE_URL}/products?limit=${limit}&skip=${skip}`
  );

  if (!response.ok) {
    throw new Error("Smth went wrong");
  }

  return response.json();
};

export const getProductsBySearchQuery = async ({ searchQuery, limit, skip }) => {
  const response = await fetch(
    `${BASE_URL}/products/search?q=${searchQuery}&limit=${limit}&skip=${skip}`
  );

  if (!response.ok) {
    throw new Error("Smth went wrong");
  }

  return response.json();
};
