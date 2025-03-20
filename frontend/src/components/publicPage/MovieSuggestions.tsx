import React, { useEffect, useState } from "react";
import { Movie, MovieSuggestionEditProps } from "../../interfaces";

export default function MovieSuggestions({listOfMovies} : MovieSuggestionEditProps) {

	  const [movies, setMovies] = useState<Movie[]>(listOfMovies || []);
	
	  useEffect(() => {
		const fetchMovies = async () => {
		  try {
			const response = await fetch(`http://localhost:8080/movies`);
			if (!response.ok) {
			  throw new Error(`Error: ${response.status} ${response.statusText}`);
			}
			const data = await response.json();
			setMovies(data);
		  } catch (error) {
			console.error("Error fetching authors:", error);
		  }
		};
	
		fetchMovies();
	  }, []);
  return (
	<div className="relative ">
	<span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-red-900 rounded-lg"></span>
	<div className="relative h-full p-5 bg-white border-2 border-red-900 rounded-lg">
	  <h3 className="text-lg font-bold mb-2">🎬 Προτάσεις του Μήνα</h3>
	  <ul className="max-w-md space-y-1  list-disc list-inside text-black">
	  {movies.map((movie) => (
            <li key={movie.id}>
                {movie.name}
            </li>
          ))}
	</ul>
	</div>
	</div>
  );
}
