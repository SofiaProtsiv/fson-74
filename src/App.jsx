import ProductList from "./components/ProductList";
import { products } from "./assets/products";
import Title from "./components/ui/Title";

export default function App() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <Title title="Customers also purchased" />
        <ProductList data={products} />
        {/* {productList(products)} */}
      </div>
    </div>
  );
}
