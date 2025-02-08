import React from "react";

export default function SoundtrackOfMonth() {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-bold mb-2">🎵 Soundtrack του Μήνα</h3>
      <iframe
        src="https://open.spotify.com/embed/track/69cGlmgNyMf2K6AvmLBuRD"
        width="100%"
        height="152"
        loading="lazy"
        title="Soundtrack του μήνα"
      ></iframe>
    </div>
  );
}
