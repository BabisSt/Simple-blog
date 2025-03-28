import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import HomePage from "./components/publicPage/pages/homePage";
import PostDetail from "./components/publicPage/pages/postDetail";
import ArticleEditor from "./components/adminPage/pages/articleEditor";
import NavBarAdmin from "./components/adminPage/NavBarAdmin";
import AdminPanel from "./components/adminPage/pages/adminPanel";
import Login from "./components/adminPage/pages/login";
import Widgets from "./components/adminPage/pages/widgets";
import PrivateRoute from "./components/PrivateRoute";
import NavBarPublic from "./components/publicPage/NavBarPublic";
import Footer from "./components/publicPage/Footer";
import BecomeAuthor from "./components/publicPage/pages/becomeAuthor";
import About from "./components/publicPage/pages/about";
import TagPage from "./components/publicPage/pages/tagPage";
import AuthorPage from "./components/publicPage/pages/authorPage";

export default function App() {
  const [showNavAdmin, setShowNavAdmin] = useState(false);
  const [showNavPublic, setShowNavPublic] = useState(false);
  const [showFooterPublic, setShowFooterPublic] = useState(false);
  const location = useLocation();

  // Manage navbar visibility based on the route
  const publicPaths = [
    "/",
    "/news",
    "/reviews",
    "/festival",
    "/become_author",
    "/about",
    "/tributes",
    "/screenings",
    "/tv",
  ];
  const postPathRegex = /^\/post\/\d+$/;
  const authoPathRegex = /^\/author\/.+$/;

  const tagPathRegex = /^\/tag\/.+$/;

  useEffect(() => {
    if (
      publicPaths.includes(location.pathname) ||
      postPathRegex.test(location.pathname) ||
      authoPathRegex.test(location.pathname) ||
      tagPathRegex.test(location.pathname)
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
    <div className="app-container flex flex-col min-h-screen">
      {showNavAdmin && <NavBarAdmin />}
      {showNavPublic && <NavBarPublic />}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/adminPanel"
            element={<PrivateRoute element={<AdminPanel />} />}
          />
          <Route path="/post/:postId" element={<PostDetail />} />
          <Route
            path="/adminPanel/article/:articleId"
            element={<ArticleEditor />}
          />
          <Route
            path="/adminPanel/widgets"
            element={<PrivateRoute element={<Widgets />} />}
          />
          <Route path="/become_author" element={<BecomeAuthor />} />
          <Route path="/about" element={<About />} />
          <Route path="/tag/:tag" element={<TagPage />} />
          <Route path="/author/:postedBy" element={<AuthorPage />} />
        </Routes>
      </div>
      {showFooterPublic && <Footer />}
    </div>
  );
}
