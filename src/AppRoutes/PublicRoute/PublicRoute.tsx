import { Route, Navigate } from "react-router-dom";

const PublicRoute = ({ path, element }: any) => {
  return <Route path={path} element={element} />;
};

export default PublicRoute;