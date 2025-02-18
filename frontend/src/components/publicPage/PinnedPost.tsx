import React from "react";
import { useNavigate } from "react-router-dom";


//TODO : call a regular post
interface Post {
	id: string;
	title: string;
	postedBy: string;
	postTime: string;
	content: string;
	photos: string[];
	tags: string[];
  }
  
  interface pinnedPostProps {
	posts: Post[];
  }
  
  export default function PinnedPost({ posts }: pinnedPostProps) {
	const navigate = useNavigate();
	const handleNavigatePost = (id: string) => {
		navigate(`/post/${id}`);
	  };

return (
	<div className="relative ">
		<span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-red-900 rounded-lg"></span>
		<div className="relative h-full p-5 bg-white border-2 border-red-900 rounded-lg">
			<h2 className="text-xl font-bold mb-2">📌 Κορυφαίο Άρθρο</h2>
			<div className="relative">
			<img
				src={posts[0].photos[0]}
				alt="Pinned Article"
				className="rounded-lg w-full object-cover h-48"
			/>
			<div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white p-2 rounded-md">
				{posts[0].tags.map((tag) => (
				<span key={tag} className="text-sm font-medium px-2 py-1 mr-2 bg-gray-800 rounded">
					#{tag}
				</span>
				))}
			</div>
			</div>
			<h3 className="text-lg font-semibold mt-3">{posts[0].title}</h3>
			<p className="text-gray-600 text-sm">{posts[0].postTime} | {posts[0].postedBy}</p>
			<p className="text-gray-700 mt-2 text-sm">{posts[0].content.substring(0, 100)}...</p>
			<button onClick={() => handleNavigatePost(posts[0].id)} className=" mt-2 text-gray-900 p-2 text-sm hover:text-white border border-red-900 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg">Διαβάστε περισσότερα</button>
		</div>
	</div>
)

}