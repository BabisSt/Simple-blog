import React, { useEffect } from "react";

interface instagramEmbedProps {
  permalink: string;
}

export default function InstagramEmbed({ permalink }: instagramEmbedProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <blockquote
        className="instagram-media bg-black"
        data-instgrm-captioned
        data-instgrm-permalink={permalink}
        data-instgrm-version="14"
      >
        <div style={{ padding: "16px" }}>
          <a href={permalink} target="_blank" rel="noopener noreferrer"></a>
        </div>
      </blockquote>
    </div>
  );
}
