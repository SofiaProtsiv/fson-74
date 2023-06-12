import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import Layout from "./layout/Layout";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeScreen />}/>
        <Route path="product/:productId" element={<ProductDetailsScreen />} />
        <Route path="favorites" element={<FavoritesScreen />} />
        <Route path="*" element={<p>Not Found</p>} />
      </Route>
    </Routes>
  );
}
// 
// export default function App() {
//   return (
//     <Container>
//       <Header />
//       <Routes>
//         <Route path="/" element={<HomeScreen/>}/>
//         <Route path="/favorites" element={<FavoritesScreen/>}/>
//         <Route path="*" element={<p>Not Found</p>}/>
//       </Routes>
//     </Container>
//   );
// }
