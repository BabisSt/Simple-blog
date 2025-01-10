import React from "react";
import { useParams } from "react-router-dom";

// TODO : data will be fetched from the backend
export default function PostDetail() {
  const { postId } = useParams<{ postId: string }>();

  // Sample post data (replace with fetched data)
  const samplePost = {
    id: postId,
    title: "Exploring the Marvels of Modern Cinema",
    author: "John Doe",
    authorAvatar: "https://via.placeholder.com/50",
    date: "January 7, 2025",
    image:
      "https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?q=80&w=2940&auto=format&fit=crop",
    content_1: `
      Modern cinema has brought a revolution in storytelling, with diverse narratives and groundbreaking visuals.
      In this article, we explore the impact of contemporary filmmakers who push boundaries to create memorable cinematic experiences.
      From the emotional depth of indie films to the grandeur of blockbusters, cinema continues to evolve as a powerful medium.
    `,
	content_2: `
	Modern cinema has brought a revolution in storytelling, with diverse narratives and groundbreaking visuals.
	In this article, we explore the impact of contemporary filmmakers who push boundaries to create memorable cinematic experiences.
	From the emotional depth of indie films to the grandeur of blockbusters, cinema continues to evolve as a powerful medium.
  `,
  };

  // Movie stats (replace with fetched data)
  const movieStats = {
    director: "Jane Smith",
    imdbRating: "8.5/10",
    revenue: "$150M",
    releaseDate: "December 15, 2024",
  };

  return (
    <div className="container grid grid-cols-6 gap-4 p-4 pt-32">
      {/* Stats Section */}
      <div className="col-span-6 lg:col-span-1 lg:row-span-1 lg:sticky lg:top-1/4 flex justify-center lg:items-center p-4 rounded-lg">
        <div >
          <h2 className="text-lg font-semibold mb-4 text-left">Movie Stats</h2>
          <ul className="space-y-2 text-left">
            <li>
              <strong>Director:</strong> {movieStats.director}
            </li>
            <li>
              <strong>IMDb Rating:</strong> {movieStats.imdbRating}
            </li>
            <li>
              <strong>Revenue:</strong> {movieStats.revenue}
            </li>
            <li>
              <strong>Release Date:</strong> {movieStats.releaseDate}
            </li>
          </ul>
        </div>
      </div>

      {/* Article Section */}
      <div className="col-span-6 lg:col-span-4">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-4xl mb-4">{samplePost.title}</h1>
          <div className="flex items-center space-x-3">
            <img
              src={samplePost.authorAvatar}
              alt="Author"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-semibold">{samplePost.author}</p>
              <p className="text-xs text-gray-500">{samplePost.date}</p>
            </div>
          </div>
        </div>


        {/* Article Content */}
        <div className="prose lg:prose-xl max-w-none mb-6">
          <p>{samplePost.content_1}</p>
        </div>

		{/* Article Image */}
		<div className="grid grid-cols-2 gap-4">

		<div className="col-span-2 sm:col-span-1 mb-6">
          <img
            src={samplePost.image}
            alt="Article"
            className="flex object-left h-auto rounded-lg"
          />
        </div>
		<div className="col-span-2 sm:col-span-1 mb-6">
          <img
            src={samplePost.image}
            alt="Article"
            className="flex object-left h-auto rounded-lg"
          />
        </div>
		</div>
		        {/* Article Content */}
				<div className="prose lg:prose-xl max-w-none mb-6">
          <p>{samplePost.content_2}</p>
        </div>
      </div>
    </div>
  );
}
