import React from "react";
import { useNavigate } from "react-router-dom";
import { tagMappings } from "../../../public/tagMappings";

// TODO: Backend should create a table for tags
interface postDataProps {
  id: string;
  title: string;
  postedBy: string;
  postTime: string;
  content: string;
  photos: string[];
  tags: string[];
}

export default function Post({
  id,
  title,
  postedBy,
  postTime,
  content,
  photos,
  tags,
}: postDataProps) {
  const navigate = useNavigate();

  const handleNavigatePost = () => {
    navigate(`/post/${id}`);
  };

  const handleNavigateAuthor = (event: React.MouseEvent) => {
    event.stopPropagation(); 
    navigate(`/author/${postedBy}`);
  };

	const handleNavigateTag = (event: React.MouseEvent, tag: string) => {
		event.stopPropagation();
		const englishTag = tagMappings[tag]; // Get mapped tag

		if (englishTag) {
			navigate(`/tag/${englishTag}`); // Navigate using the correct tag
		} else {
			console.warn(`No mapping found for tag: ${tag}`);
		}
	};

  

  return (
	<button
	type="button"
	className="flex flex-col shadow-lg rounded-lg bg-slate-300 w-full lg:w-[500px] xl:w-[750px] h-auto transform transition-transform duration-500 ease-in-out group hover:scale-105"
	onClick={handleNavigatePost}
	>
	{/* Photo Section */}
	{photos && (
		<div className="w-full max-h-64 overflow-hidden">
		<img
			src={photos[0]}
			alt="Post"
			className="object-cover w-full h-full rounded-t-lg"
		/>
		</div>
	)}

	{/* Content Section */}
	<div className="p-4 flex flex-col justify-between flex-grow">
		{/* Title */}
		<h2 className="text-xl font-semibold text-gray-900 text-center break-words">
		{title}
		</h2>

		{/* Posted Date */}
		<p className="text-gray-500 text-sm text-center mt-1">{postTime}</p>

		<hr className="my-2" />

		{/* Post Content */}
		<p className="text-gray-700 mt-2 text-ellipsis overflow-visible">
		{content}
		</p>

		{/* Actions */}
		<div className="mt-4 flex flex-col sm:flex-row sm:justify-between items-center">
		{/* Author Button */}
		<button
			onClick={handleNavigateAuthor}
			type="button"
			className="text-gray-900 hover:text-white border border-red-900 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 sm:mb-0"
		>
			{postedBy}
		</button>

		{/* Tags Section */}
		<div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
		{tags.map((tag) => (
				<button
					key={tag}
					onClick={(e) => handleNavigateTag(e, tag)} // Pass clicked tag
					type="button"
					className="text-gray-900 hover:text-white border border-red-900 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
				>
					{tag}
				</button>
			))}
		</div>
		</div>
	</div>
	</button>
  );
}
