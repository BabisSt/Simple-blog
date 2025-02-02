import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const routeChange = () => navigate("/");
  const routeWriter = () => navigate("/writer");
  const routeAbout = () => navigate("/about");

  return (
    <footer className="bg-red-900 text-gray-400 w-full py-8">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* First Column */}
        <div>
          <button
            className="text-white text-2xl font-bold"
            onClick={routeChange}
          >
            Ραπόρτο
          </button>
          <p className="text-sm mt-1">
            Η έγγραφη καταγραφή των πληροφοριών εικόνας και ήχου
          </p>
        </div>

        {/* Second Column */}
        <div className="flex flex-col items-center text-center">
          <button
            className="text-white text-2xl font-bold mb-2 hover:text-black"
            style={{ textShadow: "#000 1px 0 10px" }}
            onClick={routeWriter}
          >
            Γίνε Συντάκτης
          </button>

          <button
            className="text-white text-2xl font-bold hover:text-black"
            onClick={routeAbout}
            style={{ textShadow: "#000 1px 0 10px" }}
          >
            About Us
          </button>
        </div>

        {/* Third Column */}
        <div className="text-sm">
          <p>© 2021 - 2024 Ραπόρτο team. All Rights Reserved.</p>
          <p>raportoproject@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
