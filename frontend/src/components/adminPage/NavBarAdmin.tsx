import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { NavButtonProps } from "../../interfaces";

export default function NavBarAdmin() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavButtonProps[] = [
    { path: "/adminPanel", label: "Αρχική", icon: "/home.png" },
    { path: "/adminPanel/widgets", label: "Widgets", icon: "/widgets.png" },
  ];

  const getButtonClass = (path: string) =>
    location.pathname === path
      ? "font-bold bg-blue-700 p-2.5 text-white rounded-lg shadow-md "
      : "text-black p-2.5";

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout logic (e.g., clear session or tokens)
    // Redirect to login page
    navigate("/login");
  };

  // Function to navigate to the public page in a new tab
  const handleViewPage = () => {
    window.open("/", "_blank"); // Opens the public page in a new tab
  };

  const NavButton: React.FC<NavButtonProps> = ({ path, label, icon }) => {
    const isActive = location.pathname === path;
    return (
      <button
        onClick={() => {
          navigate(path);
          closeMenu();
        }}
        className={`${getButtonClass(path)} ${"transition-all duration-300 ease-in-out hover:bg-black hover:rounded-lg hover:text-white hover:shadow-md group"} group`}
      >
        {icon && (
          <img
            src={icon}
            alt={`${label} Icon`}
            className={`inline-block mr-2 w-6 h-6 transition-all duration-300 ease-in-out group-hover:filter ${isActive ? "filter invert" : "group-hover:invert"}`}
          />
        )}
        {label}
      </button>
    );
  };

  return (
    <div className="pb-20">
      <nav className="bg-blue-900 fixed w-full z-20 top-0 start-0 shadow border-b border-gray-600">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          {/* Logo or Home Button */}
          <button
            className="flex items-center text-white text-2xl font-semibold"
            onClick={() => {
              navigate("/adminPanel");
              closeMenu();
            }}
          >
            Ραπόρτο
          </button>

          {/* Hamburger Button - Only visible on lg and smaller screens */}
          <button
            className="text-white text-2xl lg:hidden"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>

          {/* Desktop Menu - Visible on md screens and larger */}
          <div className="hidden lg:flex items-center justify-between w-auto">
            <ul className="font-bold flex space-x-8 rounded-lg">
              {navItems.map(({ path, label, icon }) => (
                <li key={path}>
                  <NavButton path={path} label={label} icon={icon} />
                </li>
              ))}
            </ul>
            {/* View Page Button */}
            <button
              onClick={handleViewPage}
              className={`space-x-8 font-bold transition-all duration-300 ease-in-out hover:bg-black hover:rounded-lg hover:text-white hover:shadow-md p-2.5`}
            >
              Προβολή Σελίδας
            </button>
            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className={`space-x-8 font-bold transition-all duration-300 ease-in-out hover:bg-black hover:rounded-lg hover:text-white hover:shadow-md p-2.5`}
            >
              Logout
            </button>
          </div>
        </div>

        {/* Mobile Menu - Visible when isMenuOpen is true */}
        {isMenuOpen && (
          <div className="lg:hidden bg-blue-900 text-white p-4 fixed top-16 left-1/2 transform -translate-x-1/2 z-10 shadow-lg w-auto rounded-lg">
            <ul className="grid md:grid-cols-3 grid-cols-1 gap-4">
              {navItems.map(({ path, label, icon }) => (
                <li key={path}>
                  <NavButton path={path} label={label} icon={icon} />
                </li>
              ))}
            </ul>
            {/* View Page Button in Mobile Menu */}
            <button
              onClick={handleViewPage}
              className="font-bold mt-4 w-full transition-all duration-300 ease-in-out hover:bg-black hover:rounded-lg hover:text-white hover:shadow-md p-2.5"
            >
              Προβολή Σελίδας
            </button>
            {/* Logout Button in Mobile Menu */}
            <button
              onClick={handleLogout}
              className="font-bold mt-4 w-full transition-all duration-300 ease-in-out hover:bg-black hover:rounded-lg hover:text-white hover:shadow-md p-2.5"
            >
              Logout
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}
