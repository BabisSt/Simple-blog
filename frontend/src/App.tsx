import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import HomePage from "./components/publicPage/homePage";
import NavBarAdmin from "./components/adminPage/NavBarAdmin";
import AdminPanel from "./components/adminPage/adminPanel";
import Login from "./components/adminPage/login";
import PrivateRoute from "./components/PrivateRoute";
import NavBarPublic from "./components/publicPage/NavBarPublic";

export default function App() {
  const [showNavAdmin, setShowNavAdmin] = useState(false);
  const [showNavPublic, setShowNavPublic] = useState(false);
  const location = useLocation();

  // Manage navbar visibility based on the route

  const publicPaths = ["/", "/news", "/reviews", "/festival"];
  useEffect(() => {
    if (publicPaths.includes(location.pathname)) {
      setShowNavPublic(true);
      setShowNavAdmin(false);
    } else if (location.pathname === "/login") {
      setShowNavPublic(false);
      setShowNavAdmin(false);
    } else {
      setShowNavPublic(false);
      setShowNavAdmin(true);
    }
  }, [location]);

  return (
    <div className="app-container">
      {showNavAdmin && <NavBarAdmin />}
      {showNavPublic && <NavBarPublic />}
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/adminPanel"
            element={<PrivateRoute element={<AdminPanel />} />}
          />
        </Routes>
      </div>
    </div>
  );
}
