import React from "react";
import { SoundtrackOfMonthEditProps } from "../../interfaces";

export default function SoundtrackOfMonth({link} : SoundtrackOfMonthEditProps) {
  return (
	<div className="relative ">
	<span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-red-900 rounded-lg"></span>
	<div className="relative h-full p-5 bg-white border-2 border-red-900 rounded-lg">
      <h3 className="text-lg font-bold mb-2">🎵 Soundtrack του Μήνα</h3>
      <iframe
        src={link}
        width="100%"
        height="152"
        loading="lazy"
        title="Soundtrack του μήνα"
      ></iframe>
    </div>
	</div>
  );
}
