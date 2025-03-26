import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  element: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Make a request to your backend to verify if the user is authenticated
        const response = await fetch("http://localhost:8080/api/auth/validate", {
          method: "GET",
          credentials: "include", // This ensures cookies (like session) are sent with the request
        });

        // Assuming the backend returns a boolean value indicating authentication status
        const data = await response.json();
        setIsAuthenticated(data);
      } catch (error) {
        console.error("Error checking authentication:", error);
        setIsAuthenticated(false); // If the request fails, assume the user is not authenticated
      }
    };

    checkAuth();
  }, []);

  // If still loading or authentication status is unknown, render a loading state
  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  // If authenticated, render the protected component; otherwise, redirect to login
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
