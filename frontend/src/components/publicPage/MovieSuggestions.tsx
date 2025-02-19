import React from "react";

export default function MovieSuggestions() {

	const movies = ["DC (2025)", "Marvel (2025)", "Superman (2025)"];
  return (
	<div className="relative ">
	<span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-red-900 rounded-lg"></span>
	<div className="relative h-full p-5 bg-white border-2 border-red-900 rounded-lg">
	  <h3 className="text-lg font-bold mb-2">🎬 Προτάσεις του Μήνα</h3>
	  <ul className="max-w-md space-y-1  list-disc list-inside text-black">
	  {movies.map((movie) => (
            <li key={movie}>
                {movie}
            </li>
          ))}
	</ul>
	</div>
	</div>
  );
}
