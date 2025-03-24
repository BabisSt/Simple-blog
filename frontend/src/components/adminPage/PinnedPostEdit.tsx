import React, { useState } from "react";
import { PinnedPostEditProps } from "../../interfaces";

export default function PinnedPostEdit({ link }: PinnedPostEditProps) {
  const [edit, setEdit] = useState(true);
  const [editLink, setEditLink] = useState(link);

  const handleEdit = async () => {
    if (!edit && editLink !== link) {
      try {
        const response = await fetch(
          `http://localhost:8080/pinnedArticle/updatePinnedArticle`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              oldLink: link,
              newLink: editLink,
            }),
          }
        );

        if (response.ok) {
          console.log("Το άρθρο ενημερώθηκε με επιτυχία!");
        } else {
          console.log("Σφάλμα κατά την ενημέρωση του άρθρου.");
        }
      } catch (error) {
        console.error("Error updating pinned article:", error);
        alert("Κάτι πήγε στραβά με το δίκτυο.");
      }
    }
    setEdit(!edit);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditLink(e.target.value);
  };
  const getInputClass = () => (edit === true ? "bg-gray-50" : "bg-white");

  const getButtonClass = () =>
    edit
      ? "bg-indigo-500 text-white hover:bg-indigo-600 bg-opacity-100"
      : "bg-green-500 text-black hover:bg-green-600 bg-opacity-100";

  return (
    <div>
      <div className="shadow-md rounded-lg p-4 bg-blue-900 w-full h-[270px]">
        <h3 className="text-lg  text-white font-bold mb-2">
          📌 Κορυφαίο Άρθρο
        </h3>
        <div className="shadow-md rounded-lg bg-blue-900 mt-2">
          <textarea
            onChange={handleChangeInput}
            className={`${getInputClass} ${"text-center py-2 border-blue-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full "}`}
            value={editLink}
            disabled={edit === true ? true : false}
          />
        </div>
        <div className="flex justify-center mt-4">
          <a
            target="_blank"
            type="button"
            href={editLink}
            rel="noreferrer"
            className=" bg-indigo-500 text-white hover:bg-indigo-600 bg-opacity-100 py-2 px-6 rounded-lg transition bg-opacity-100"
          >
            Προβολή Άρθρου
          </a>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button
          type="button"
          onClick={handleEdit}
          className={`${getButtonClass()} py-2 px-6 rounded-lg transition bg-opacity-100`}
        >
          {edit ? "Επεξεργασία" : "Αποθήκευση"}
        </button>
      </div>
    </div>
  );
}
