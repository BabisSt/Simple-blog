import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthorTeam() {
  const navigate = useNavigate();

  const handleNavigateAuthor = (authorName: string) => {
    navigate(`/author/${authorName}`);
  };
    const [authors, setAuthors] = useState<[]>([]);
	useEffect(() => {

  
	  const fetchAuthors = async () => {
		try {
		  const response = await fetch(
			`http://localhost:8080/authors`
		  );
		  if (!response.ok) {
			throw new Error(`Error: ${response.status} ${response.statusText}`);
		  }
		  const data = await response.json();
		  setAuthors(data)
		} catch (error) {
		  console.error("Error fetching authors:", error);
		}
	  };
  
	fetchAuthors();  
	}, []);

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
