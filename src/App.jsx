import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";


//------------  V6 REACT-ROUTER-DOM  ------------ //
export default function App() {
  const HomeScreen = lazy(() => import("./screens/HomeScreen"));
  const FavoritesScreen = lazy(() => import("./screens/FavoritesScreen"));
  const ProductDetailsScreen = lazy(() =>
    import("./screens/ProductDetailsScreen")
  );
  const NotFoundScreen = lazy(() => import("./screens/NotFoundScreen"));

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<HomeScreen />} />
          <Route path="product/:productId" element={<ProductDetailsScreen />} />
        </Route>

        <Route element={<PrivateRoute redirectTo="/login" />}>
          <Route path="favorites" element={<FavoritesScreen />} />
        </Route>

        <Route path="*" element={<NotFoundScreen />} />
      </Route>

      <Route element={<PublicRoute redirectTo="/" restricted/>}>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
      </Route>
    </Routes>
  );
}


//------------  V5 REACT-ROUTER-DOM  ------------ //

// import { lazy } from "react";
// import { Route, Routes } from "react-router-dom";
// import Layout from "./layout/Layout";
// import LoginScreen from "./screens/LoginScreen";
// import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
// import PublicRoute from "./components/PublicRoute";
// import PrivateRoute from "./components/PrivateRoute";

// export default function App() {
//   const HomeScreen = lazy(() => import("./screens/HomeScreen"));
//   const FavoritesScreen = lazy(() => import("./screens/FavoritesScreen"));
//   const ProductDetailsScreen = lazy(() =>
//     import("./screens/ProductDetailsScreen")
//   );
//   const NotFoundScreen = lazy(() => import("./screens/NotFoundScreen"));

//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <PublicRoute exact path="/">
//           <HomeScreen />
//         </PublicRoute>

//         <PublicRoute path="product/:productId">
//           <ProductDetailsScreen />
//         </PublicRoute>

//         <PrivateRoute path="/favorites" redirectTo="/login">
//           <FavoritesScreen />
//         </PrivateRoute>

//         <Route path="*" element={<NotFoundScreen />} />
//       </Route>

//       <PublicRoute exact path="/register" restricted>
//         <RegisterScreen />
//       </PublicRoute>

//       <PublicRoute exact path="/login" redirectTo="/" restricted>
//         <LoginScreen />
//       </PublicRoute>
//     </Routes>
//   );
// }
