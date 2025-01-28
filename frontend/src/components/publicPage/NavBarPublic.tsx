import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface NavItem {
  path: string;
  label: string;
  icon: string | null;
}

interface NavButtonProps {
  path: string;
  label: string;
  icon: string | null;
}

export default function NavBarPublic() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { path: "/", label: "Αρχική", icon: null },
    { path: "/news", label: "Νέα", icon: "/internet.png" },
    { path: "/reviews", label: "Κριτικές", icon: "/review.png" },
    { path: "/tributes", label: "Αφιερώματα", icon: "/review.png" },
    { path: "/festival", label: "Φεστιβάλ", icon: "/confetti.png" },
    { path: "/screenings", label: "Προβολές", icon: "/confetti.png" },
    { path: "/tv", label: "TV", icon: "/confetti.png" },
  ];

  const getButtonClass = (path: string) =>
    location.pathname === path
      ? "font-bold bg-red-700 p-2.5 text-white rounded-lg shadow-md "
      : "bg-inherit text-black p-2.5";

  const hoverClass =
    "hover:bg-black hover:rounded-lg hover:text-white hover:shadow-[0_0_10px_2px_rgba(255,0,0,0.8)]";

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const NavButton: React.FC<NavButtonProps> = ({ path, label, icon }) => (
    <button
      onClick={() => {
        navigate(path);
        closeMenu();
      }}
      className={`${getButtonClass(path)} ${hoverClass} flex items-center`}
    >
      {icon && (
        <img
          src={icon}
          alt={`${label} Icon`}
          className={`inline-block mr-2 w-6 h-6 ${
            location.pathname === path ? "text-white" : "text-black"
          }`}
        />
      )}
      {label}
    </button>
  );

  return (
    <div className="pb-20">
      <nav className="bg-red-800 fixed w-full z-20 top-0 start-0 shadow border-b border-gray-600">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          {/* Logo or Home Button */}
          <button
            className="flex items-center text-white text-2xl font-semibold"
            onClick={() => {
              navigate("/");
              closeMenu();
            }}
          >
            Ραπόρτο
          </button>

          {/* Hamburger Button */}
          <button
            className="text-white text-2xl md:hidden"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-between w-auto">
            <ul className=" font-bold flex space-x-8 rounded-lg ">
              {navItems.map(({ path, label, icon }) => (
                <li  key={path}>
                  <NavButton path={path} label={label} icon={icon} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-red-800 text-white p-4 fixed top-16 left-0 right-0 z-10 shadow-lg">
            <ul className="flex flex-col space-y-4">
              {navItems.map(({ path, label, icon }) => (
                <li key={path}>
                  <NavButton path={path} label={label} icon={icon} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
