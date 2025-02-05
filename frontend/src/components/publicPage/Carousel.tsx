import React from "react";
import { useNavigate } from "react-router-dom";

interface Post {
  id: string;
  title: string;
  postedBy: string;
  postTime: string;
  content: string;
  photo: string;
}

interface BetterCarouselProps {
  posts: Post[];
}

export default function BetterCarousel({ posts }: BetterCarouselProps) {
  const navigate = useNavigate();

  const handleNavigatePost = (id: string) => {
    navigate(`/post/${id}`);
  };

  return (
    <section>
      <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6 mb-10">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
          Προβαλλόμενα Άρθρα
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 h-full">
          {posts.slice(0, 4).map((post) => (
            <div
              key={post.id}
              className="relative flex flex-col bg-gray-50 h-auto md:h-full transition-transform duration-300 peer"
            >
              <button
                onClick={() => handleNavigatePost(post.id)}
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow transition-transform duration-300 transform peer-hover:scale-90 hover:scale-105"
              >
                <img
                  src={post.photo}
                  alt={post.title}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-85 transition-opacity flex justify-center items-center">
                  <span className="text-white text-lg font-bold text-center px-2">
                    {post.title}
                  </span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
