import React from "react";
import { useNavigate } from "react-router-dom";

export default function AuthorTeam() {
  const navigate = useNavigate();

  const handleNavigateAuthor = (authorName: string) => {
    navigate(`/author/${authorName}`);
  };

  const authors = ["Giorgos", "Mpampis", "John Doe"];

  return (
    <div className="relative">
      <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-red-900 rounded-lg"></span>
      <div className="relative h-full p-5 bg-white border-2 border-red-900 rounded-lg">
        <h3 className="text-lg font-bold mb-2"> 🎭 Οι συντάκτες μας</h3>
        <ul className="max-w-md space-y-1 list-none text-black">
          {authors.map((author) => (
            <li key={author}>
              <button
                onClick={() => handleNavigateAuthor(author)}
                className="w-full text-gray-900 font-bold hover:text-white border border-red-900 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-sm px-4 py-2"
              >
                {author}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
