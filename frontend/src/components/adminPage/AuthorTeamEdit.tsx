import React, { useEffect, useState } from "react";
import { Author, AuthorTeamEditProps } from "../../interfaces";

export default function AuthorTeamEdit({ listOfAuthors }: AuthorTeamEditProps) {
  const [edit, setEdit] = useState(false);
  const [authors, setAuthors] = useState<Author[]>(listOfAuthors);
  const [newAuthor, setNewAuthor] = useState<Author>();
  const handleEdit = () => {
    setEdit(!edit);
  };
  const handleDelete = (authorToDelete: string) => {
    //  setAuthors(authors.filter((author) => author.id !== authorToDelete));
  };
  const handleAddAuthor = () => {
    // if (newAuthor.trim() !== "" && !authors.includes(newAuthor)) {
    //   setAuthors([...authors, newAuthor.trim()]);
    //   setNewAuthor("");
    // }
  };

  useEffect(() => {
    setAuthors(listOfAuthors);
  }, [listOfAuthors]);
  return (
    <div>
      <div className="shadow-md rounded-lg px-4 py-1 bg-blue-900 w-full h-[300px]">
        <h3 className="text-lg text-white font-bold mb-2">Συντακτικό Team</h3>
        <div className="shadow-md rounded-lg bg-blue-900 mt-2 p-4">
          <ul className="max-w-md space-y-1 list-disc list-inside text-white">
            {authors.map((author) => (
              <li key={author.id} className="flex justify-between items-center">
                <span>{author.name}</span>
                {edit && (
                  <button
                    onClick={() => handleDelete(author.id)}
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
            value={newAuthor}
            onChange={(e) => setNewAuthor(e.target.value)}
            className="p-2 rounded-md border w-full"
            placeholder="Προσθήκη συντάκτη..."
          />
          <button
            onClick={handleAddAuthor}
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
