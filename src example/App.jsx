import { useSelector } from "react-redux";
import ProductCard from "./components/ProductCard";
import Filters from "./components/Filters";
import { ProductList } from "./app.styled";
import { getFilteredProducts } from "./redux/selectors";

export default function App() {
  const visibleProducts = useSelector(getFilteredProducts);
  console.log(visibleProducts);
  return (
    <>
      <Filters />
      <ProductList>
        {visibleProducts.map(({ id, image }) => (
          <ProductCard key={id} id={id} image={image} />
        ))}
      </ProductList>
    </>
  );
}
