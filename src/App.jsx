import ProductList from "./components/ProductList";
import { products } from "./assets/products";
import Title from "./components/ui/Title";

// робота з картинками та svg
import bgSRC from "./images/bg.jpeg";
import { BsBookmarkFill } from "react-icons/bs";
import { Icon } from "./assets/icons";


export default function App() {
  return (
    <div className="bg-white">
      
       {/* робота з картинками та svg */}
      <BsBookmarkFill />
      <img src="./logo192.png" alt="" />
      <img src={bgSRC} alt="" />
      <Icon id="logo"/>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <Title title="Customers also purchased" />
        <ProductList data={products} />
      </div>
    </div>
  );
}
