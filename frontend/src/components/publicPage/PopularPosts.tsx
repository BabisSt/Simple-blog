import React from "react";
import { useNavigate } from "react-router-dom";

interface Post {
  id: string;
  title: string;
  postedBy: string;
  postTime: string;
  content: string;
  photo: string;
  tags: string[];
}

interface PopularPostProps {
  posts: Post[];
}

export default function PostSuggested({ posts }: PopularPostProps) {
  const navigate = useNavigate();

  const handleNavigatePost = (id: string) => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="p-6">
      <h2 className=" text-lg font-bold text-gray-900 w-full  rounded-lg  text-center border-b-4 mb-4 pb-1 border-red-900">
        Δημοφιλή Άρθρα
      </h2>

      <div className={"overflow-hidden max-h-[2000px]"}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-1">
          {posts.slice(0, 3).map((post) => (
            <div
              key={post.id}
              className="h-full flex flex-col justify-between"
              style={{ minHeight: "400px" }}
            >
              <button
                type="button"
                className="group flex flex-col h-full bg-slate-300 border border-gray-200 rounded-lg hover:bg-slate-800"
                onClick={() => handleNavigatePost(post.id)}
              >
                <img
                  className="rounded-t-lg w-full h-48 object-cover"
                  src={post.photo}
                  alt={post.title}
                />
                <div className="p-5 flex flex-col flex-grow">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-white line-clamp-2">
                    {post.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 group-hover:text-white line-clamp-3">
                    {post.content}
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
