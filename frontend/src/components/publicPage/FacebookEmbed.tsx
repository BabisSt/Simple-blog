import React from "react";

interface FacebookEmbedProps {
  src: string;
  style?: {
    width?: string;
    height?: string;
    borderRadius?: string;
  };
}

export default function FacebookEmbed({ src, style }: FacebookEmbedProps) {
  return (
    <iframe
      src={src}
      width={style?.width || "500"}
      height={style?.height || "479"}
      style={{
        border: "none",
        overflow: "hidden",
        borderRadius: style?.borderRadius || "12px",
        ...style,
      }}
      scrolling="no"
      frameBorder="0"
      allowFullScreen={true}
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    ></iframe>
  );
}
