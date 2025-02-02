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
      {
        id: "1",
        content: "Nice post!",
        name: "Jane",
        postTime: "10/01/2025",
        postId: postId,
      },
      {
        id: "2",
        content: "Wow",
        name: "John",
        postTime: "11/01/2025",
        postId: postId,
      },
    ],
  };

  const posts = [
    {
      id: "1",
      title: "Tech Acquisition in 2021",
      image:
        "https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?q=80&w=2940&auto=format&fit=crop",
      description:
        "Here are the biggest technology acquisitions of 2021 so far.",
      link: "#",
    },
    {
      id: "2",
      title: "Space Exploration Update",
      image:
        "https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?q=80&w=2940&auto=format&fit=crop",
      description: "A look at the latest in space exploration missions.",
      link: "#",
    },
    {
      id: "3",
      title: "AI and the Future of Work",
      image:
        "https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?q=80&w=2940&auto=format&fit=crop",
      description:
        "How AI is transforming industries and creating new job opportunities.",
      link: "#",
    },
  ];

  const movieStats = {
    imdbRating: "8.5/10",
    lbRating: "4.3/5",
    rtRating: "83%",
  };

  const handleNavigateAuthor = (event: React.MouseEvent) => {
    event.stopPropagation();
    navigate(`/author/${samplePost.author}`);
  };

  return (
    <div className="grid grid-cols-12 gap-4 p-4">
      {/* Stats Section */}
      <div className="col-span-12 lg:col-span-2  flex flex-col p-4 rounded-lg top-20">
        <MovieStats
          imdbRating={movieStats.imdbRating}
          lbRating={movieStats.lbRating}
          rtRating={movieStats.rtRating}
        />
      </div>

      {/* Main Content Section - Made Larger */}
      <div className="col-span-12 lg:col-span-8  lg:ml-16 mx-auto">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-4xl mb-4 border-b-4 border-red-900">
            {samplePost.title}
          </h1>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleNavigateAuthor}
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              {samplePost.author}
            </button>
            <p className="text-xs text-gray-500">{samplePost.date}</p>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose lg:prose-xl max-w-none mb-6">
          <p>{samplePost.content_1}</p>
        </div>

        {/* Article Images */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <img
            src={samplePost.image}
            alt="Article"
            className="w-full h-auto rounded-lg col-span-2 sm:col-span-1"
          />
          <img
            src={samplePost.image}
            alt="Article"
            className="w-full h-auto rounded-lg col-span-2 sm:col-span-1"
          />
        </div>

        {/* Article Content Continued */}
        <div className="prose lg:prose-xl max-w-none mb-6">
          <p>{samplePost.content_2}</p>
        </div>

        <PostSuggested posts={posts} />
      </div>

      {/* Right-Side Section - Made Smaller */}
      <div className="col-span-12 lg:col-span-2  flex flex-col p-4 rounded-lg top-20">
        <h2 className="text-xl font-bold">New Section</h2>
        <p>Additional content such as related articles, ads, or widgets.</p>
      </div>
    </div>
  );
}
