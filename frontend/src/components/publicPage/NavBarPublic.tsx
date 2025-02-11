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
    { path: "/", label: "Αρχική", icon: "/home.png" },
    { path: "/news", label: "Νέα", icon: "/globe.png" },
    { path: "/reviews", label: "Κριτικές", icon: "/review.png" },
    { path: "/tributes", label: "Αφιερώματα", icon: "/tribute.png" },
    { path: "/festival", label: "Φεστιβάλ", icon: "/festival.png" },
    { path: "/screenings", label: "Προβολές", icon: "/clapperboard.png" },
    { path: "/tv", label: "TV", icon: "/tv.png" },
  ];

  const getButtonClass = (path: string) =>
    location.pathname === path
      ? "font-bold bg-red-700 p-2.5 text-white rounded-lg shadow-md "
      : "text-black p-2.5";


	

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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
            <ul className=" font-bold flex space-x-8 rounded-lg ">
              {navItems.map(({ path, label, icon }) => (
                <li key={path}>
                  <NavButton path={path} label={label} icon={icon} />
                </li>
              ))}
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
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
