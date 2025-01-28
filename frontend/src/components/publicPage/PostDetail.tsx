import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostSuggested from "./PostSuggested";
import MovieStats from "./MovieStats";

export default function PostDetail() {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top-left corner of the page
  }, []);

  if (!postId) {
    return <div>Post not found</div>;
  }

  // Sample post data (replace with fetched data)
  const samplePost = {
    id: postId,
    title: "Exploring the Marvels of Modern Cinema",
    author: "John Doe",
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
    comments: [
      { id: "1", content: "Nice post!", name: "Jane", postTime: "10/01/2025", postId: postId },
      { id: "2", content: "Wow", name: "John", postTime: "11/01/2025", postId: postId },
    ],
  };

  const movieStats = {
    director: "Jane Smith",
    imdbRating: "8.5/10",
    revenue: "$150M",
    releaseDate: "December 15, 2024",
  };

  const handleNavigateAuthor = (event: React.MouseEvent) => {
    event.stopPropagation();
    navigate(`/author/${samplePost.author}`);
  };

  return (
    <div className="container grid grid-cols-6 gap-4 p-4">
      {/* Stats Section */}
      <div className="col-span-6 lg:col-span-1 flex flex-col justify-start p-4 rounded-lg">
        {/* MovieStats Component */}
        <MovieStats
          director={movieStats.director}
          imdbRating={movieStats.imdbRating}
          revenue={movieStats.revenue}
          releaseDate={movieStats.releaseDate}
        />
      </div>

      {/* Article Section */}
      <div className="col-span-6 lg:col-span-5">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-4xl mb-4 border-b-4 border-red-800">{samplePost.title}</h1>
          <div className="flex items-center space-x-3">
            <div>
              <button
                onClick={handleNavigateAuthor}
                type="button"
                className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 sm:mb-0 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
              >
                {samplePost.author}
              </button>
              <p className="text-xs text-gray-500">{samplePost.date}</p>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose lg:prose-xl max-w-none mb-6">
          <p>{samplePost.content_1}</p>
        </div>

        {/* Article Images */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="col-span-2 sm:col-span-1">
            <img
              src={samplePost.image}
              alt="Article"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <img
              src={samplePost.image}
              alt="Article"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Article Content Continued */}
        <div className="prose lg:prose-xl max-w-none mb-6">
          <p>{samplePost.content_2}</p>
        </div>

        <div>
          <PostSuggested />
        </div>
      </div>
    </div>
  );
}
