import ProductCard from "../../components/ProductCard/ProductsCard";
import ProductsList from "../../components/ProductsList";
import { useStateContext } from "../../context/StateContext";

export default function FavoritesScreen() {
  const { favorites } = useStateContext();
  
  if (!favorites.length) {
    return <p>Your favorites is empty</p>;
  }

  return (
    <ul>
      {favorites.map(({ id, images, title, price }) => (
        <ProductCard
          key={id}
          id={id}
          title={title}
          price={price}
          images={images}
        />
      ))}
    </ul>
  );
}
