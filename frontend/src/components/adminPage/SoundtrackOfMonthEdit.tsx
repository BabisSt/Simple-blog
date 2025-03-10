import React, { useState } from "react";
import { SoundtrackOfMonthEditProps } from "../../interfaces";

export default function TrailerOfWeekEdit({
  link,
}: SoundtrackOfMonthEditProps) {
  const [edit, setEdit] = useState(true);
  const [editLink, setEditLink] = useState(link);

  const handleEdit = () => {
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
      <div className="shadow-md rounded-lg p-4 bg-blue-900">
        <h3 className="text-lg  text-white font-bold mb-2">
          🎵 Soundtrack του Μήνα
        </h3>
        <iframe
          src="https://open.spotify.com/embed/track/69cGlmgNyMf2K6AvmLBuRD"
          className="w-full h-[200px]"
          loading="lazy"
          title="Soundtrack του μήνα"
        ></iframe>
      </div>
      <div className="shadow-md rounded-lg bg-blue-900 mt-2">
        <textarea
          onChange={handleChangeInput}
          className={`${getInputClass} ${"text-center py-2 border-blue-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full "}`}
          value={editLink}
          disabled={edit === true ? true : false}
        />
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
