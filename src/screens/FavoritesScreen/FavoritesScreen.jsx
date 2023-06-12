import ProductCard from "../../components/ProductCard/ProductsCard";
import { ProductList } from "../../components/ProductsList/productsList.styled";
import { useStateContext } from "../../context/StateContext";

export default function FavoritesScreen() {
  const { favorites } = useStateContext();

  if (!favorites.length) {
    return <p>Your favorites is empty</p>;
  }

  return (
    <ProductList>
      {favorites.map(({ id, images, title, price }) => (
        <ProductCard
          key={id}
          id={id}
          title={title}
          price={price}
          images={images}
        />
      ))}
    </ProductList>
  );
}
