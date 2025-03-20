import React from "react";
import { TrailerOfWeekEditProps } from "../../interfaces";

export default function TrailerOfWeek({link} : TrailerOfWeekEditProps) {
  return (
	<div className="relative ">
	<span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-red-900 rounded-lg"></span>
	<div className="relative h-full p-5 bg-white border-2 border-red-900 rounded-lg">
      <h3 className="text-lg font-bold mb-2">🎬 Trailer της Εβδομάδας</h3>
      <iframe
        className="w-full h-[200px]"
        src={link}
        allowFullScreen
        title="Trailer της εβδομάδας"
      ></iframe>
    </div>
	</div>
  );
}
