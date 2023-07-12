import { NavLink, useLocation } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductsCard";
import { ProductList } from "../../components/ProductsList/productsList.styled";
import { useSelector } from "react-redux";

export default function FavoritesScreen() {
  const { favorites } = useSelector((state) => state.favorites);

  const location = useLocation();

  return (
    <>
      <NavLink to={location.state?.from || "/"}>Go back</NavLink>

      <ProductList>
        {favorites.length ? (
          favorites.map(({ uid, image, title, price }) => (
            <ProductCard
              key={uid}
              uid={uid}
              title={title}
              price={price}
              image={image}
            />
          ))
        ) : (
          <p>Your favorites is empty</p>
        )}
      </ProductList>
    </>
  );
}
