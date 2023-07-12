import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

//------------  V6 REACT-ROUTER-DOM  ------------ //
export default function PrivateRoute({ redirectTo = "/" }) {
  const { token } = useSelector((state) => state.auth);

  return token ? <Outlet /> : <Navigate to={redirectTo} />;
}


//------------  V5 REACT-ROUTER-DOM  ------------ //
// import { useSelector } from "react-redux";
// import { Route, Redirect } from "react-router-dom";

// export default function PrivateRoute({
//   children,
//   redirectTo = "/",
//   ...routeProps
// }) {
//   const { token } = useSelector((state) => state.auth);

//   return (
//     <Route {...routeProps}>
//       {token ? children : <Redirect to={redirectTo} />}
//     </Route>
//   );
// }
