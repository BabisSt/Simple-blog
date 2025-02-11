import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { tagMappings } from "../public/tagMappings";

import HomePage from "./components/publicPage/pages/homePage";
import PostDetail from "./components/publicPage/pages/postDetail";
import ArticleEditor from "./components/adminPage/pages/articleEditor";
import NavBarAdmin from "./components/adminPage/NavBarAdmin";
import AdminPanel from "./components/adminPage/pages/adminPanel";
import Login from "./components/adminPage/pages/login";
import PrivateRoute from "./components/PrivateRoute";
import NavBarPublic from "./components/publicPage/NavBarPublic";
import Footer from "./components/publicPage/Footer";
import News from "./components/publicPage/pages/news";
import BecomeAuthor from "./components/publicPage/pages/becomeAuthor";
import About from "./components/publicPage/pages/about";

//TODO : tags on backend
export interface Comment {
  id: string;
  content: string;
  name: string;
  postTime: string;
  postId: string;
}
export interface ArticleProps {
  id: string;
  title: string;
  postedBy: string;
  postTime: string;
  content: string;
  photo: string;
  tags: string[];
  state: boolean;
}

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

  const allowedTags = Object.values(tagMappings);
  const tagPathRegex = new RegExp(`^\\/(${allowedTags.join("|")})$`);

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
		  <Route path="/article/:articleId" element={<ArticleEditor />} />
          <Route path="/news" element={<News />} />
          <Route path="/become_author" element={<BecomeAuthor />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      {showFooterPublic && <Footer />}
    </div>
  );
}
