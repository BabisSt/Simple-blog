import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate("/");
  };

  return (
    <footer className="bg-sky-800 shadow w-full z-20 border-b border-gray-600">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm  sm:text-center text-gray-400">
          © 2025{" "}
          <button
            className="text-sm  sm:text-center text-gray-400"
            onClick={routeChange}
          >
            <span className="text-sm  sm:text-center text-gray-400">
              Raporto
            </span>
          </button>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}