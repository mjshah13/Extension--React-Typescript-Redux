import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props: any) =>
        sessionStorage.getItem("accessToken") ? (
          <Component {...props} />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;