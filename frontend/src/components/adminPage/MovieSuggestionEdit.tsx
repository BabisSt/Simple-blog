import React, { useEffect, useState } from "react";
import { Movie, MovieSuggestionEditProps } from "../../interfaces";

export default function MovieSuggestionEdit({
  listOfMovies,
}: MovieSuggestionEditProps) {
  const [edit, setEdit] = useState(false);
  const [movies, setMovies] = useState<Movie[]>(listOfMovies);
  const [newMovie, setNewMovie] = useState("");

  useEffect(() => {
    setMovies(listOfMovies);
  }, [listOfMovies]);
  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleDelete = async (MovieToDelete: string) => {
    try {
      const response = await fetch(
        `http://localhost:8080/deleteMovieById/${MovieToDelete}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setMovies(movies.filter((Movie) => Movie.id !== MovieToDelete));
        console.log("Movie deleted successfully");
      } else {
        const errorMsg = await response.text();
        console.error("Failed to delete Movie:", errorMsg);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleAddMovie = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/insertMovie/${newMovie}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: newMovie }),
        }
      );

      if (response.ok) {
        setMovies([...movies, { id: crypto.randomUUID(), name: newMovie }]);
        setNewMovie("");
        console.log("Movie inserted successfully");
      } else {
        const errorMsg = await response.text();
        console.error("Failed to insert Movie:", errorMsg);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="shadow-md rounded-lg px-4 py-1 bg-blue-900 w-full h-[300px]">
        <h3 className="text-lg text-white font-bold mb-2">
          Προτάσεις ταινιών του μήνα
        </h3>
        <div className="shadow-md rounded-lg bg-blue-900 mt-2 p-4">
          <ul className="max-w-md space-y-1 list-disc list-inside text-white">
            {movies.map((movie) => (
              <li key={movie.id} className="flex justify-between items-center">
                <span>{movie.name}</span>
                {edit && (
                  <button
                    onClick={() => handleDelete(movie.id)}
                    className="ml-2 bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                  >
                    ❌
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {edit && (
        <div className="flex items-center mt-4">
          <input
            type="text"
            value={newMovie}
            onChange={(e) => setNewMovie(e.target.value)}
            className="p-2 rounded-md border w-full"
            placeholder="Προσθήκη ταινίας..."
          />
          <button
            onClick={handleAddMovie}
            className="ml-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            ➕
          </button>
        </div>
      )}

      <div className="flex justify-center mt-4">
        <button
          type="button"
          onClick={handleEdit}
          className={`py-2 px-6 rounded-lg transition ${
            edit
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-indigo-500 text-white hover:bg-indigo-600"
          }`}
        >
          {edit ? "Αποθήκευση" : "Επεξεργασία"}
        </button>
      </div>
    </div>
  );
}
