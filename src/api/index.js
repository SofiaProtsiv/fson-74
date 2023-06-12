const BASE_URL = "https://dummyjson.com";

export const getProducts = async ({ searchQuery, limit, skip }) => {

  const params = new URLSearchParams({
    limit,
    skip,
    q: searchQuery,
  });

  const response = await fetch(`${BASE_URL}/products/search?${params}`);

  if (!response.ok) {
    throw new Error("Smth went wrong");
  }
  
  return response.json();
};

export const getProductById = async (id) => {

  const response = await fetch(`${BASE_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error("Smth went wrong");
  }
  
  return response.json();
};