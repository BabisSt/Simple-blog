import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function NavBarPublic() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility

  const routeHome = () => {
    navigate("/");
    setIsMenuOpen(false); // Close menu on navigation
  };

  const routeNews = () => {
    navigate("/news");
    setIsMenuOpen(false); // Close menu on navigation
  };

  const routeReviews = () => {
    navigate("/reviews");
    setIsMenuOpen(false); // Close menu on navigation
  };

  const routeFestival = () => {
    navigate("/festival");
    setIsMenuOpen(false); // Close menu on navigation
  };

  const getButtonClass = (path: string) =>
    location.pathname === path
      ? "font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-2.5 text-center transition-transform transform"
      : "block font-semibold p-2.5 rounded text-white hover:bg-cyan-950";

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <nav className="bg-sky-800 fixed w-full z-20 top-0 start-0 shadow border-b border-gray-600">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          {/* Logo or Home Button */}
          <button
            className="flex items-center text-white text-2xl font-semibold"
            onClick={routeHome}
          >
            Ραπόρτο
          </button>

          {/* Hamburger Button */}
          <button
            className="text-white text-2xl md:hidden"
            onClick={toggleMenu}
          >
            ☰
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-between w-auto">
            <ul className="flex space-x-8 font-medium">
              <li>
                <button onClick={routeHome} className={getButtonClass("/")}>
                  Αρχική
                </button>
              </li>
              <li>
                <button onClick={routeNews} className={getButtonClass("/news")}>
                  Νέα
                </button>
              </li>
              <li>
                <button
                  onClick={routeReviews}
                  className={getButtonClass("/reviews")}
                >
                  Κριτικές
                </button>
              </li>
              <li>
                <button
                  onClick={routeFestival}
                  className={getButtonClass("/festival")}
                >
                  Φεστιβάλ
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-sky-800 text-white p-4 fixed top-16 left-0 right-0 z-10 shadow-lg">
            <ul className="flex flex-col space-y-4">
              <li>
                <button onClick={routeHome} className={getButtonClass("/")}>
                  Αρχική
                </button>
              </li>
              <li>
                <button onClick={routeNews} className={getButtonClass("/news")}>
                  Νέα
                </button>
              </li>
              <li>
                <button
                  onClick={routeReviews}
                  className={getButtonClass("/reviews")}
                >
                  Κριτικές
                </button>
              </li>
              <li>
                <button
                  onClick={routeFestival}
                  className={getButtonClass("/festival")}
                >
                  Φεστιβάλ
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
