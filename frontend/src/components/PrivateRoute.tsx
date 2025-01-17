import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  element: JSX.Element;
}
//   const isAuthenticated = !!localStorage.getItem("user"); // Check if user is logged in
//   return isAuthenticated ? element : <Navigate to="/login" />;
const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
	const isAuthenticated = true; // Temporary for testing
	return isAuthenticated ? element : <Navigate to="/login" />;
};
export default PrivateRoute;