import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function NavBarAdmin() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  //   const getLoggedInUser = () => {
  //     const storedUser = localStorage.getItem("user");

  //     if (!storedUser) {
  //       return null;
  //     }

  //     try {
  //       return JSON.parse(storedUser); // Parse JSON safely
  //     } catch (error) {
  //       console.error("Error parsing user data:", error);
  //       return null;
  //     }
  //   };

  //   const loggedInUser = getLoggedInUser();

  const routeHome = () => {
    navigate("/adminPanel");
  };

  const routePages = () => {
    navigate("/pages");
  };

  const routeSettings = () => {
    navigate("/settings");
  };

  const routeStats = () => {
    navigate("/stats");
  };

  const routePublicPage = () => {
    navigate("/");
  };

  const Logout = () => {
    navigate("/");
  };

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getButtonClass = (path: string) =>
    location.pathname === path
      ? " font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-2.5 text-center transition-transform transform"
      : "block font-semibold p-2.5 rounded text-white hover:bg-cyan-950 ";

  return (
    <div>
      <nav className="blue fixed shadow w-full z-20 top-0 start-0 border-b border-gray-200 border-gray-600 pt-1">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <button
            className="flex flex-wrap items-center justify-between"
            onClick={routeHome}
          >
            {/* <img src={logo} className="h-8" alt="LinkedIn Logo" /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Raporto
            </span>
          </button>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
            <button
              type="button"
              className="flex text-sm bg-blue-200 rounded-full md:me-0 ring-2 focus:ring-4 focus:ring-cyan-950 focus:ring-cyan-950"
              id="user-menu-button"
              aria-expanded={isUserMenuOpen}
              onClick={toggleUserMenu}
            >
              <img className="w-8 h-8 rounded-full" />
            </button>

            <div
              ref={userMenuRef}
              className={`absolute ${isUserMenuOpen ? "block" : "hidden"} text-base list-none divide-y rounded-lg shadow bg-sky-700 divide-gray-600  z-50 top-full left-0 left-auto right-0`}
            >
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li className="rounded mx-1 hover:bg-cyan-950">
                  <button
                    onClick={routePublicPage}
                    className=" px-4 py-2 text-sm  text-gray-200 hover:text-white"
                  >
                    Προβολή Ιστολογίου
                  </button>
                </li>
                <li className="rounded mx-1 hover:bg-cyan-950">
                  <button
                    onClick={routeSettings}
                    className=" px-4 py-2 text-sm  text-gray-200 hover:text-white"
                  >
                    Ρυθμίσεις
                  </button>
                </li>
                <li className="rounded mx-1 hover:bg-cyan-950">
                  <button
                    onClick={routePages}
                    className=" px-4 py-2 text-sm  text-gray-200 hover:text-white"
                  >
                    Σελίδες
                  </button>
                </li>
                <li className="rounded mx-1 hover:bg-cyan-950">
                  <button
                    onClick={Logout}
                    className=" px-4 py-2 text-sm text-gray-200 hover:text-white"
                  >
                    Έξοδος
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
              <li className="">
                <button
                  onClick={routeHome}
                  className={getButtonClass("/adminPanel")}
                >
                  Αρχική
                </button>
              </li>
              <li className="">
                <button
                  onClick={routePages}
                  className={getButtonClass("/pages")}
                >
                  Σελίδες
                </button>
              </li>
              <li className="">
                <button
                  onClick={routeSettings}
                  className={getButtonClass("/settings")}
                >
                  Ρυθμίσεις
                </button>
              </li>
              <li className="">
                <button
                  onClick={routeStats}
                  className={getButtonClass("/stats")}
                >
                  Στατιστικά Στοιχεία
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
