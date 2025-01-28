import React from "react";

interface MovieStatsProps {
  director: string;
  imdbRating: string;
  revenue: string;
  releaseDate: string;
}

const MovieStats: React.FC<MovieStatsProps> = ({ director, imdbRating, revenue, releaseDate }) => {
  return (
    <div className="p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-semibold mb-4">Movie Stats</h2>
      <ul className="space-y-2">
        <li>
          <strong>Director:</strong> {director}
        </li>
        <li>
          <strong>IMDb Rating:</strong> {imdbRating}
        </li>
        <li>
          <strong>Revenue:</strong> {revenue}
        </li>
        <li>
          <strong>Release Date:</strong> {releaseDate}
        </li>
      </ul>
    </div>
  );
};

export default MovieStats;
