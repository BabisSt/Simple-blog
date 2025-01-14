import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import HomePage from "./components/publicPage/homePage";
import PostDetail from "./components/publicPage/PostDetail";
import NavBarAdmin from "./components/adminPage/NavBarAdmin";
import AdminPanel from "./components/adminPage/adminPanel";
import Login from "./components/adminPage/login";
import PrivateRoute from "./components/PrivateRoute";
import NavBarPublic from "./components/publicPage/NavBarPublic";
import Footer from "./components/publicPage/Footer";
import News from "./components/publicPage/News";

export interface Comment {
	id: string;
	content: string;
	name: string;
	postTime: string;
	postId: string;
  }

  

export default function App() {
  const [showNavAdmin, setShowNavAdmin] = useState(false);
  const [showNavPublic, setShowNavPublic] = useState(false);
  const [showFooterPublic, setShowFooterPublic] = useState(false);
  const location = useLocation();

  // Manage navbar visibility based on the route

  const publicPaths = ["/", "/news", "/reviews", "/festival"];
  const postPathRegex = /^\/post\/\d+$/;
  const authoPathRegex = /^\/author\/.+$/;
  useEffect(() => {
    if (
      publicPaths.includes(location.pathname) ||
      postPathRegex.test(location.pathname) ||
      authoPathRegex.test(location.pathname)
    ) {
      setShowNavPublic(true);
      setShowFooterPublic(true);
      setShowNavAdmin(false);
    } else if (location.pathname === "/login") {
      setShowNavPublic(false);
      setShowNavAdmin(false);
    } else {
      setShowNavPublic(false);
      setShowFooterPublic(false);
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
          <Route path="/post/:postId" element={<PostDetail />} />
		  <Route path="/news" element={<News />} />
        </Routes>
        {showFooterPublic && <Footer />}
      </div>
    </div>
  );
}
