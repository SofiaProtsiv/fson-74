import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";

export default function App() {
  const HomeScreen = lazy(() => import("./screens/HomeScreen"));
  const FavoritesScreen = lazy(() => import("./screens/FavoritesScreen"));
  const ProductDetailsScreen = lazy(() =>
    import("./screens/ProductDetailsScreen")
  );
  const NotFoundScreen = lazy(() => import("./screens/NotFoundScreen"));
  const ProductCharacteristic = lazy(() =>
    import("./components/ProductCharacteristic")
  );

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeScreen />} />
        <Route path="product/:productId" element={<ProductDetailsScreen />}>
          <Route path="characteristic" element={<ProductCharacteristic />} />
        </Route>
        <Route path="favorites" element={<FavoritesScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Route>
    </Routes>
  );
}
