import React, { useState } from "react";
import { CarouselEditProps } from "../../interfaces";

export default function CarouselEdit({
  first_link,
  second_link,
  third_link,
  forth_link,
}: CarouselEditProps) {
  const [edit, setEdit] = useState(true);
  const [editFirstLink, setEditFirstLink] = useState(first_link);
  const [editSecondLink, setEditSecondLink] = useState(second_link);
  const [editThirdLink, setEditThirdLink] = useState(third_link);
  const [editForthLink, setEditForthLink] = useState(forth_link);
  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleFirstChangeInput = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setEditFirstLink(e.target.value);
  };
  const handleSecondChangeInput = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setEditSecondLink(e.target.value);
  };
  const handleThirdChangeInput = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setEditThirdLink(e.target.value);
  };
  const handleForthChangeInput = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setEditForthLink(e.target.value);
  };
  const getInputClass = () => (edit === true ? "bg-gray-50" : "bg-white");

  const getButtonClass = () =>
    edit
      ? "bg-indigo-500 text-white hover:bg-indigo-600 bg-opacity-100"
      : "bg-green-500 text-black hover:bg-green-600 bg-opacity-100";

  return (
    <div>
      <div className="shadow-md rounded-lg px-4 py-1 bg-blue-900 w-full h-[300px]">
        <h3 className="text-lg  text-white font-bold mb-2">Άρθρα Carousel</h3>
        <div className="shadow-md rounded-lg bg-blue-900 mt-2">
          <textarea
            onChange={handleFirstChangeInput}
            className={`${getInputClass} ${"text-center py-2 border-blue-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full "}`}
            value={editFirstLink}
            disabled={edit === true ? true : false}
          />
        </div>
        <div className="shadow-md rounded-lg bg-blue-900 mt-2">
          <textarea
            onChange={handleSecondChangeInput}
            className={`${getInputClass} ${"text-center py-2 border-blue-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full "}`}
            value={editSecondLink}
            disabled={edit === true ? true : false}
          />
        </div>
        <div className="shadow-md rounded-lg bg-blue-900 mt-2">
          <textarea
            onChange={handleThirdChangeInput}
            className={`${getInputClass} ${"text-center py-2 border-blue-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full "}`}
            value={editThirdLink}
            disabled={edit === true ? true : false}
          />
        </div>
        <div className="shadow-md rounded-lg bg-blue-900 mt-2">
          <textarea
            onChange={handleForthChangeInput}
            className={`${getInputClass} ${"text-center py-2 border-blue-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full "}`}
            value={editForthLink}
            disabled={edit === true ? true : false}
          />
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
