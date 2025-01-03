import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import HomePage from "./components/publicPage/homePage";
import NavBarAdmin from "./components/adminPage/NavBarAdmin";
import NavBarPublic from "./components/publicPage/NavBarPublic";
import AdminPanel from "./components/adminPage/adminPanel"
import Login from "./components/adminPage/login";
import PrivateRoute from "./components/PrivateRoute"


// TODO : add seperate navbars
export default function App() {
  //to prevent nav, footer appearing in welcomepage
  const [showNavFooter, setShowNavFooter] = useState(
    window.location.pathname !== "/"
  );

  
  const location = useLocation();

  // Update `showNavFooter` based on the current path
  useEffect(() => {
    setShowNavFooter(location.pathname !== "/");
  }, [location]);

 

  return (
    <div className="app-container">

          {showNavFooter && <NavBarAdmin setShowNavFooter={setShowNavFooter} />}
          <div className="content">
            <Routes>
              <Route
                path="/"
                element={<HomePage setShowNavFooter={setShowNavFooter} />}
              />
			  <Route
                path="/login"
                element={<Login setShowNavFooter={setShowNavFooter} />}
              />
			  <Route
                path="/adminPanel"
                element={<PrivateRoute element={<AdminPanel />} />}
              />
            </Routes>
          </div>
    </div>
  );
}