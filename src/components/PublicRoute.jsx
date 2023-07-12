import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

//------------  V6 REACT-ROUTER-DOM  ------------ //
export default function PublicRoute({ restricted = false, redirectTo = "/" }) {
  const { token } = useSelector((state) => state.auth);

  const shouldRedirect = token && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet />;
}


//------------  V5 REACT-ROUTER-DOM  ------------ //
// import { useSelector } from "react-redux";
// import { Route, Redirect } from "react-router-dom";

// export default function PublicRoute({
//   children,
//   restricted = false,
//   redirectTo = "/",
//   ...routeProps
// }) {
//   const { token } = useSelector((state) => state.auth);

//   const shouldRedirect = token && restricted;

//   return (
//     <Route {...routeProps}>
//       {shouldRedirect ? <Redirect to={redirectTo} /> : children}
//     </Route>
//   );
// }
