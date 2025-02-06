import React from "react";

export default function TrailerOfWeek() {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-bold mb-2">🎬 Trailer της Εβδομάδας</h3>
      <iframe
        className="w-full h-[200px]"
        src="https://www.youtube.com/embed/7xALolZzhSM?si=fqdoM_Cx_CC17UDT"
        allowFullScreen
        title="Trailer της εβδομάδας"
      ></iframe>
    </div>
  );
}
