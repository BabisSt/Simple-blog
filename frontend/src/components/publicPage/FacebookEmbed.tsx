import React from "react";

interface FacebookEmbedProps {
  src: string;
  width?: string;
  height?: string;
  scale?: number;
}

export default function FacebookEmbed({ src, scale = 1 }: FacebookEmbedProps) {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: "12px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <iframe
        src={src}
        style={{
          width: "500px",
          height: "480px",
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          border: "none",
          justifyContent: "center",
          alignItems: "center",
        }}
        allowFullScreen={true}
        allow="web-share"
      ></iframe>
    </div>
  );
}
