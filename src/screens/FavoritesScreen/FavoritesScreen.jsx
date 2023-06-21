import { NavLink, useLocation } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductsCard";
import { ProductList } from "../../components/ProductsList/productsList.styled";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function FavoritesScreen() {
  const location = useLocation();

  const { favorites } = useSelector((state) => state.favorites);
  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [cart, favorites]);

  return (
    <>
      <NavLink to={location.state?.from || "/"}>Go back</NavLink>

      <ProductList>
        {favorites.length ? (
          favorites.map(({ id, images, title, price }) => (
            <ProductCard
              key={id}
              id={id}
              title={title}
              price={price}
              images={images}
            />
          ))
        ) : (
          <p>Your favorites is empty</p>
        )}
      </ProductList>
    </>
  );
}
