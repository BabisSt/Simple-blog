import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function NavBarPublic() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const routeHome = () => {
    navigate("/");
    setIsMenuOpen(false);
  };

  const routeNews = () => {
    navigate("/news");
    setIsMenuOpen(false);
  };

  const routeReviews = () => {
    navigate("/reviews");
    setIsMenuOpen(false);
  };

  const routeTributes = () => {
    navigate("/tributes");
    setIsMenuOpen(false);
  };

  const routeFestival = () => {
    navigate("/festival");
    setIsMenuOpen(false);
  };
  const routeScreenings = () => {
    navigate("/screenings");
    setIsMenuOpen(false);
  };
  const routeTV = () => {
    navigate("/tv");
    setIsMenuOpen(false);
  };

  const getButtonClass = (path: string) =>
    location.pathname === path
      ? "font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-2.5 text-center transition-transform transform"
      : "block font-semibold p-2.5 rounded text-white hover:bg-cyan-950";

  const getIconColor = (path: string) =>
    location.pathname === path ? "text-black" : "text-white";

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="pb-24">
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
                  <img
                    src="/internet.png"
                    alt="News Icon"
                    className={`inline-block mr-2 w-6 h-6 ${getIconColor(
                      "/news"
                    )}`}
                  />
                  Νέα
                </button>
              </li>
              <li>
                <button
                  onClick={routeReviews}
                  className={getButtonClass("/reviews")}
                >
                  <img
                    src="/review.png"
                    alt="Reviews Icon"
                    className={`inline-block mr-2 w-6 h-6 ${getIconColor(
                      "/reviews"
                    )}`}
                  />
                  Κριτικές
                </button>
              </li>
              <li>
                <button
                  onClick={routeTributes}
                  className={getButtonClass("/tributes")}
                >
                  <img
                    src="/review.png"
                    alt="Reviews Icon"
                    className={`inline-block mr-2 w-6 h-6 ${getIconColor(
                      "/tributes"
                    )}`}
                  />
                  Αφιερώματα
                </button>
              </li>
              <li>
                <button
                  onClick={routeFestival}
                  className={getButtonClass("/festival")}
                >
                  <img
                    src="/confetti.png"
                    alt="confetti Icon"
                    className={`inline-block mr-2 w-6 h-6 ${getIconColor(
                      "/festival"
                    )}`}
                  />
                  Φεστιβάλ
                </button>
              </li>
              <li>
                <button
                  onClick={routeScreenings}
                  className={getButtonClass("/screenings")}
                >
                  <img
                    src="/confetti.png"
                    alt="confetti Icon"
                    className={`inline-block mr-2 w-6 h-6 ${getIconColor(
                      "/screenings"
                    )}`}
                  />
                  Προβολές
                </button>
              </li>
              <li>
                <button onClick={routeTV} className={getButtonClass("/tv")}>
                  <img
                    src="/confetti.png"
                    alt="confetti Icon"
                    className={`inline-block mr-2 w-6 h-6 ${getIconColor(
                      "/tv"
                    )}`}
                  />
                  Προβολές
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
                  <img
                    src="/internet.png"
                    alt="News Icon"
                    className={`inline-block mr-2 w-6 h-6 ${getIconColor(
                      "/news"
                    )}`}
                  />
                  Νέα
                </button>
              </li>
              <li>
                <button
                  onClick={routeReviews}
                  className={getButtonClass("/reviews")}
                >
                  <img
                    src="/review.png"
                    alt="Reviews Icon"
                    className={`inline-block mr-2 w-6 h-6 ${getIconColor(
                      "/reviews"
                    )}`}
                  />
                  Κριτικές
                </button>
              </li>
              <li>
                <button
                  onClick={routeTributes}
                  className={getButtonClass("/tributes")}
                >
                  <img
                    src="/review.png"
                    alt="Reviews Icon"
                    className={`inline-block mr-2 w-6 h-6 ${getIconColor(
                      "/tribues"
                    )}`}
                  />
                  Κριτικές
                </button>
              </li>
              <li>
                <button
                  onClick={routeFestival}
                  className={getButtonClass("/festival")}
                >
                  <img
                    src="/confetti.png"
                    alt="confetti Icon"
                    className={`inline-block mr-2 w-6 h-6 ${getIconColor(
                      "/festival"
                    )}`}
                  />
                  Φεστιβάλ
                </button>
              </li>
              <li>
                <button
                  onClick={routeScreenings}
                  className={getButtonClass("/screenings")}
                >
                  <img
                    src="/confetti.png"
                    alt="confetti Icon"
                    className={`inline-block mr-2 w-6 h-6 ${getIconColor(
                      "/screenings"
                    )}`}
                  />
                  Προβολές
                </button>
              </li>
              <li>
                <button onClick={routeTV} className={getButtonClass("/tv")}>
                  <img
                    src="/confetti.png"
                    alt="confetti Icon"
                    className={`inline-block mr-2 w-6 h-6 ${getIconColor(
                      "/tv"
                    )}`}
                  />
                  TV
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
