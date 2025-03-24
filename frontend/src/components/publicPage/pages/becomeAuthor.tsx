import React, { useEffect } from "react";
import { useFetchPosts } from "../../../hooks/useFetchPosts";
import PopularPosts from "../PopularPosts";

export default function BecomeAuthor() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  }, []);

  const popularPosts = useFetchPosts("http://localhost:8080/popularPosts");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Section */}
      <section className="w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto px-3 pt-24 flex-grow">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
          Γίνε Συντάκτης
        </h2>

        <div className="flex flex-col items-center">
          <button
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/1UADE-4UFuZR6A-eseI3iQ70InVnTfEWaM1GUO4qVtqo/edit",
                "_blank"
              )
            }
            className="text-gray-900 font-bold hover:text-white border border-red-900 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-xl px-8 py-4 text-center"
          >
            📌 Βρείτε τη φόρμα εκδήλωσης ενδιαφέροντος εδώ
          </button>
        </div>
      </section>

      {/* PostSuggested at the Bottom */}
      <div className="w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto mb-10">
        <PopularPosts posts={popularPosts} />
      </div>
    </div>
  );
}
