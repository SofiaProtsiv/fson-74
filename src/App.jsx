import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomeScreen from "./screens/HomeScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import NotFoundScreen from "./screens/NotFoundScreen";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeScreen />} />
        <Route path="product/:productId" element={<ProductDetailsScreen/>} />
        <Route path="favorites" element={<FavoritesScreen />} />
        <Route path="*" element={<NotFoundScreen/>}/>
      </Route>
    </Routes>
  );
}
