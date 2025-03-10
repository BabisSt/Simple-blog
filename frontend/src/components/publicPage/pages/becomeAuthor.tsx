import React, { useState, useEffect } from "react";
import PostSuggested from "../PopularPosts";
import { PostProps } from "../../../interfaces";

export default function BecomeAuthor() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  }, []);

  const [posts, setPosts] = useState<PostProps[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:8080/posts");
        const data = await response.json();

        const formattedData: PostProps[] = data.map((post: PostProps) => ({
          id: post.id,
          title: post.title,
          postedBy: post.postedBy,
          postTime: post.postTime,
          content: post.content,
          photos: Array.isArray(post.photos) ? post.photos : [post.photos],
          tags:
            typeof post.tags === "string" ? post.tags.split(", ") : post.tags,
        }));
        setPosts(formattedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

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
        <PostSuggested posts={posts} />
      </div>
    </div>
  );
}
