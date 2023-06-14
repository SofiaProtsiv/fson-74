import { NavLink, useLocation } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductsCard";
import { ProductList } from "../../components/ProductsList/productsList.styled";
import { useStateContext } from "../../context/StateContext";

export default function FavoritesScreen() {
  const { favorites } = useStateContext();
  const location = useLocation();

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
