import React, { useEffect } from "react";

export default function InstagramEmbed() {
  useEffect(() => {
    if (window.instgrm?.Embeds) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <div
      className="embed-container"
      style={{
        width: "325px",
        height: "500px",
        borderRadius: "12px",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f9f9"
      }}
    >
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/p/DDO9TXPMIbD/"
        data-instgrm-version="14"
        style={{
          maxWidth: "100%",
          margin: "auto",
        }}
      ></blockquote>
    </div>
  );
}
