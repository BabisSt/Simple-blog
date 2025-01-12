import React from "react";
import { useNavigate } from "react-router-dom";

interface postDataProps {
  id: string;
  name: string;
  title: string;
  avatar: string;
  postTime: string; // Posted date
  content: string;
  likes: string;
  numberOfComments: string;
  photo?: string;
  comments: Comment[];
}

export default function Post({
  id,
  name,
  title,
  avatar,
  postTime,
  content,
  likes: initialLikes,
  numberOfComments,
  photo,
}: postDataProps) {
  const navigate = useNavigate();

  const handleNavigatePost = () => {
    navigate(`/post/${id}`);
  };

  const handleNavigateAuthor = (event: React.MouseEvent) => {
    // Stop the click from propagating to the parent button
    event.stopPropagation();
    navigate(`/author/${name}`);
  };

  return (
    <button
      type="button"
      className="flex mb-4 group"
      onClick={handleNavigatePost}
    >
      <div className="flex flex-col lg:flex-row shadow-lg rounded-lg bg-slate-300 h-[300px] w-full max-w-4xl h-auto transform transition-transform duration-500 ease-in-out group-hover:scale-105">
        {/* Photo Section */}
        <div className="w-full lg:w-1/4">
          <img
            src={photo}
            alt="Post"
            className="h-full w-full object-cover rounded-t-lg lg:rounded-l-lg"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-3/4 p-4 flex flex-col justify-between">
          {/* Title */}
          <h2 className="text-2xl font-semibold py-2 text-gray-900 break-words flex justify-center w-full">
            {title}
          </h2>

          {/* Posted Date */}
          <p className="text-gray-500 text-sm text-center">{postTime}</p>
          <hr className="my-2" />

          {/* Post Content */}
          <p className="text-gray-700 mt-2 line-clamp-2">{content}</p>

          {/* Actions (Moved to Bottom) */}
          <div className="mt-4 flex items-center justify-between">
            {/* Author Button */}
            <div>
              <button
                onClick={handleNavigateAuthor}
                type="button"
                className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
              >
                {name}
              </button>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
