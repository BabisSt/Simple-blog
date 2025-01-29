import React from "react";

import imdbIcon from "/imdb.svg"; 
import letterboxdIcon from "/lb.svg"; 
import rottenTomatoesIcon from "/rt.png"; 

interface MovieStatsProps {
  imdbRating: string;
  lbRating: string;
  rtRating: string;

}

export default function MovieStats({ imdbRating, lbRating, rtRating }: MovieStatsProps) {
  return (
    <div className="p-4 rounded-lg shadow-md bg-white lg:fixed">
      {/* Movie Ratings Title */}
      <h2 className="text-xl font-bold mb-4 text-gray-800 border-b-2 border-gray-300 pb-2">
        Movie Ratings
      </h2>

 

      {/* Ratings Section */}
      <h3 className="text-lg font-semibold mb-2 text-gray-800">Ratings</h3>
      <ul className="p-1">
        {/* IMDb Rating */}
        <li className="py-1 flex items-center space-x-2">
          <img src={imdbIcon} alt="IMDb Icon" className="w-6 h-6" />
          <span className="font-medium">IMDb: {imdbRating}</span>
        </li>

        {/* Rotten Tomatoes Rating */}
        <li className="py-1 flex items-center space-x-2">
          <img src={rottenTomatoesIcon} alt="Rotten Tomatoes Icon" className="w-6 h-6" />
          <span className="font-medium">Rotten Tomatoes: {rtRating}</span>
        </li>

        {/* Letterboxd Rating */}
        <li className="py-1 flex items-center space-x-2">
          <img src={letterboxdIcon} alt="Letterboxd Icon" className="w-6 h-6" />
          <span className="font-medium">Letterboxd: {lbRating}</span>
        </li>
      </ul>
    </div>
  );
}
