import React from "react";

export default function SocialMedia() {
  return (
	<div className="relative ">
	<span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-red-900 rounded-lg"></span>
	<div className="relative h-full p-5 bg-white border-2 border-red-900 rounded-lg">
      <h3 className="text-lg font-bold mb-2">Ακολουθήστε μας</h3>
      <div className="flex flex-col space-y-2">
        <button
          onClick={() =>
            window.open("https://www.facebook.com/cineraporto", "_blank")
          }
          className="text-gray-900 p-2 text-sm hover:text-white border border--800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg flex items-center space-x-2"
        >
          <svg
            className="w-6 h-6  hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
              clipRule="evenodd"
            />
          </svg>

          <span>Facebook</span>
        </button>
        <button
          onClick={() =>
            window.open("https://www.instagram.com/cineraporto/", "_blank")
          }
          className="text-gray-900 p-2 text-sm hover:text-white border border-red-900 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg flex items-center space-x-2"
        >
          <svg
            className="w-6 h-6  hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
              clipRule="evenodd"
            />
          </svg>

          <span>Instagram</span>
        </button>
      </div>
    </div>
	</div>
  );
}
