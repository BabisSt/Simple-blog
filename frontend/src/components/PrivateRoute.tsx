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
        const response = await fetch("http://localhost:8080/auth/validate", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to authenticate");
        }

        const data = await response.json();
        // Assuming your backend returns { authenticated: true } or similar
        setIsAuthenticated(data.authenticated); // Update the state with the response
      } catch (error) {
        console.error("Error checking authentication:", error);
        setIsAuthenticated(false); // If there's an error, set as unauthenticated
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Show loading state while checking auth
  }

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
