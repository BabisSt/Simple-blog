import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { NavButtonProps } from "../../interfaces";

export default function NavBarPublic() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navItems: NavButtonProps[] = [
    { path: "/", label: "Αρχική", icon: "/home.png" },
    { path: "/tag/news", label: "Νέα", icon: "/globe.png" },
    { path: "/tag/reviews", label: "Κριτικές", icon: "/review.png" },
    { path: "/tag/tributes", label: "Αφιερώματα", icon: "/tribute.png" },
    { path: "/tag/festival", label: "Φεστιβάλ", icon: "/festival.png" },
    { path: "/tag/screenings", label: "Προβολές", icon: "/clapperboard.png" },
    { path: "/tag/tv", label: "TV", icon: "/tv.png" },
  ];

  const dropdownItems: NavButtonProps[] = [
    { path: "/tag/greek-cinema", label: "Ελληνικό Σινεμά", icon: null },
    { path: "/tag/great-directors", label: "Μεγάλοι Σκηνοθέτες", icon: null },
    { path: "/tag/interviews", label: "Συνεντεύξεις", icon: null },
    { path: "/tag/cinobo", label: "Cinobo", icon: null },
  ];

  const getButtonClass = (path: string) =>
    location.pathname === path
      ? "font-bold bg-red-700 p-2.5 text-black rounded-lg shadow-md"
      : "text-white p-2.5";

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const NavButton: React.FC<NavButtonProps> = ({ path, label, icon }) => {
    const isActive = location.pathname === path;
    return (
      <button
        onClick={() => {
          navigate(path);
          closeMenu();
        }}
        className={`${getButtonClass(path)} transition-all duration-300 ease-in-out hover:bg-white hover:rounded-lg hover:text-black hover:shadow-md group`}
      >
        {icon && (
          <img
            src={icon}
            alt={`${label} Icon`}
            className={`inline-block mr-2 w-6 h-6 transition-all duration-300 ease-in-out 
              ${isActive ? "filter invert-0" : "filter invert"}
              group-hover:invert-0`}
          />
        )}
        {label}
      </button>
    );
  };

  return (
    <div className="pb-20">
      <nav className="bg-red-900 fixed w-full z-20 top-0 start-0 shadow border-b border-gray-600">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <button
            className="flex items-center text-white text-2xl font-semibold"
            onClick={() => {
              navigate("/");
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
            <ul className="font-bold flex space-x-4 rounded-lg">
              {navItems.map(({ path, label, icon }) => (
                <li key={path}>
                  <NavButton path={path} label={label} icon={icon} />
                </li>
              ))}

              {/* Περισσότερα Dropdown */}
              <li className="relative group">
                <button
                  onClick={toggleDropdown}
                  className="text-white p-2.5 transition-all duration-300 ease-in-out hover:bg-black hover:rounded-lg hover:text-white hover:shadow-md"
                >
                  Περισσότερα ▼
                </button>
                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <ul className="absolute left-0 mt-2 bg-red-900 text-white shadow-lg rounded-lg w-48">
                    {dropdownItems.map(({ path, label }) => (
                      <li
                        key={path}
                        className="border-b border-gray-700 last:border-none"
                      >
                        <NavButton path={path} label={label} icon={null} />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu - Visible when isMenuOpen is true */}
        {isMenuOpen && (
          <div className="lg:hidden bg-red-900 text-white p-4 fixed top-16 left-1/2 transform -translate-x-1/2 z-10 shadow-lg w-auto rounded-lg">
            <ul className="grid md:grid-cols-3 grid-cols-1 gap-4">
              {navItems.map(({ path, label, icon }) => (
                <li key={path}>
                  <NavButton path={path} label={label} icon={icon} />
                </li>
              ))}

              {/* Περισσότερα Dropdown for Mobile */}
              <li>
                <button
                  onClick={toggleDropdown}
                  className="text-white p-2.5 w-full text-left"
                >
                  Περισσότερα ▼
                </button>
                {isDropdownOpen && (
                  <ul className="mt-2 bg-red-900 text-white shadow-lg rounded-lg w-full">
                    {dropdownItems.map(({ path, label }) => (
                      <li
                        key={path}
                        className="border-b border-gray-700 last:border-none"
                      >
                        <NavButton path={path} label={label} icon={null} />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
