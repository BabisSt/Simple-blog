import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Post {
  id: string;
  title: string;
  image: string;
  description: string;
  link: string;
}

interface PostSuggestedProps {
  posts: Post[];
}

export default function PostSuggested({ posts }: PostSuggestedProps) {
  const [isSuggestedVisible, setIsSuggestedVisible] = useState(true);
  const navigate = useNavigate();

  const handleNavigatePost = (id: string) => {
    navigate(`/post/${id}`);
  };

  const toggleSuggestedVisibility = () => {
    setIsSuggestedVisible(!isSuggestedVisible);
  };

  return (
    <div className="p-6">
      <button
        className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 w-full font-medium rounded-lg text-sm py-2.5 text-center mb-4"
        onClick={toggleSuggestedVisibility}
      >
        <h2 className="text-lg font-bold">Προτεινόμενα Άρθρα</h2>
      </button>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isSuggestedVisible ? "max-h-[2000px]" : "max-h-0"
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-1">
          {posts.map((post) => (
            <div key={post.id}>
              <button
                type="button"
                className="group max-w-full transform transition-transform duration-500 ease-in-out shadow-lg 
                bg-slate-300 border border-gray-200 rounded-lg hover:bg-slate-800"
                onClick={() => handleNavigatePost(post.id)}
              >
                <img
                  className="rounded-t-lg w-full h-48 object-cover"
                  src={post.image}
                  alt={post.title}
                />
                <div className="p-5">
                  <a href={post.link}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-white">
                      {post.title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 group-hover:text-white">
                    {post.description}
                  </p>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
