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
	navigate(`/post/${id}`) 
  };
  return (
    <button type="button" className="flex mb-4 group" onClick={handleNavigatePost}>
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
		<p className="text-gray-700  mt-2 line-clamp-2">{content}</p>

          {/* Actions (Moved to Bottom) */}
          <div className="mt-4 flex items-center justify-between">
  			{/* First button floated to the left */}
			<div>
				<button
				type="button"
				className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
				>
				{name}
				</button>
			</div>  

  			<button className="flex items-center text-gray-700 text-sm cursor-pointer">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                className="w-5 h-5 mr-1"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Like
            </button>
            <button className="flex items-center text-gray-700 text-sm cursor-pointer">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                className="w-5 h-5 mr-1"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
              Comment
            </button>
            <button className="flex items-center text-gray-700 text-sm cursor-pointer">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                className="w-5 h-5 mr-1"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>
    </button>
  );
}
