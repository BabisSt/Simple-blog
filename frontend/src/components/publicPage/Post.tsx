import React from "react";
import { useNavigate } from "react-router-dom";
import { tagMappings } from "../../../public/tagMappings";

// TODO: Backend should create a table for tags
interface postDataProps {
  id: string;
  name: string;
  title: string;
  postTime: string;
  content: string;
  photo?: string;
  tags: string[];
}

export default function Post({
  id,
  name,
  title,
  postTime,
  content,
  photo,
  tags,
}: postDataProps) {
  const navigate = useNavigate();

  const handleNavigatePost = () => {
    navigate(`/post/${id}`);
  };

  const handleNavigateAuthor = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent click from propagating to parent button
    navigate(`/author/${name}`);
  };

  const handleNavigateTag = (event: React.MouseEvent, data: string) => {
    event.stopPropagation();

    const englishTag = tagMappings[data];
    if (englishTag) {
      navigate(`/${englishTag}`);
    } else {
      console.warn(`No mapping found for tag: ${data}`);
    }
  };

  return (
    <button
      type="button"
      className="flex flex-col shadow-lg rounded-lg bg-slate-300 sm:center-items sm:justify-center w-[400px] md:w-[500px] lg:w-[500px] xl:w-[750px] h-[450px] transform transition-transform duration-500 ease-in-out group hover:scale-105"
      onClick={handleNavigatePost}
    >
      {/* Photo Section */}
      {photo && (
        <div className="w-full h-2/5">
          <img
            src={photo}
            alt="Post"
            className="object-cover w-full h-full rounded-t-lg"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="p-4 flex flex-col justify-between h-3/5">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 text-center break-words line-clamp-2">
          {title}
        </h2>

        {/* Posted Date */}
        <p className="text-gray-500 text-sm text-center mt-1">{postTime}</p>

        <hr className="my-2" />

        {/* Post Content */}
        <p className="text-gray-700 mt-2 line-clamp-3 overflow-hidden">
          {content}
        </p>

        {/* Actions */}
        <div className="mt-4 flex flex-col sm:flex-row sm:justify-between items-center">
          {/* Author Button */}
          <button
            onClick={handleNavigateAuthor}
            type="button"
            className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 sm:mb-0 "
          >
            {name}
          </button>

          {/* Tags Section */}
          <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
            {tags.map((data) => (
              <button
                key={data}
                onClick={(e) => handleNavigateTag(e, data)}
                type="button"
                className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                {data}
              </button>
            ))}
          </div>
        </div>
      </div>
    </button>
  );
}
