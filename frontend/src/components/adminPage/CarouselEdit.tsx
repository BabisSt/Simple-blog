import React, { useEffect, useState } from "react";
import { CarouselEditProps } from "../../interfaces";

export default function CarouselEdit({ links }: CarouselEditProps) {
  const [edit, setEdit] = useState(true);
  const [editLinks, setEditLinks] = useState<string[]>([]);

  useEffect(() => {
    if (Array.isArray(links)) {
      setEditLinks(links);
    } else {
      console.error("Links are not an array!", links);
    }
  }, [links]);

  const handleEdit = async () => {
    if (!edit) {
      try {
        const response = await fetch(
          "http://localhost:8080/carousel/updateCarousel",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(editLinks), // Directly send the array of links
          }
        );

        if (response.ok) {
          alert("Τα άρθρα του Carousel ενημερώθηκαν με επιτυχία!");
        } else {
          alert("Σφάλμα κατά την ενημέρωση των άρθρων.");
        }
      } catch (error) {
        console.error(error);
        alert("Κάτι πήγε στραβά με το δίκτυο.");
      }
    }
    setEdit(!edit);
  };

  const handleChangeInput = (
    index: number,
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newLinks = [...editLinks];
    newLinks[index] = e.target.value;
    setEditLinks(newLinks);
  };

  const getInputClass = () => (edit ? "bg-gray-50" : "bg-white");

  const getButtonClass = () =>
    edit
      ? "bg-indigo-500 text-white hover:bg-indigo-600 bg-opacity-100"
      : "bg-green-500 text-black hover:bg-green-600 bg-opacity-100";

  return (
    <div>
      <div className="shadow-md rounded-lg px-4 py-1 bg-blue-900 w-full h-[300px]">
        <h3 className="text-lg text-white font-bold mb-2">Άρθρα Carousel</h3>
        {editLinks.map((link, index) => (
          <div key={index} className="shadow-md rounded-lg bg-blue-900 mt-2">
            <textarea
              onChange={(e) => handleChangeInput(index, e)}
              className={`${getInputClass} ${"text-center py-2 border-blue-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full "}`}
              value={link}
              disabled={edit}
            />
          </div>
        ))}
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
