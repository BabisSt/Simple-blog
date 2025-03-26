import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MovieStats from "../MovieStats";
import PinnedPost from "../PinnedPost";
import SocialMedia from "../SocialMedia";
import SoundtrackOfMonth from "../SoundtrackOfMonth";
import TrailerOfWeek from "../TrailerOfWeek";
import AuthorTeam from "../AuthorTeam";
import MovieSuggestions from "../MovieSuggestions";
import { PostProps } from "../../../interfaces";
import { useFetchPosts } from "../../../hooks/useFetchPosts";
import { useFetchSingle } from "../../../hooks/useFetchSingle";
import PopularPosts from "../PopularPosts";

export default function PostDetail() {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<PostProps | null>(null);
  const popularPosts = useFetchPosts("http://localhost:8080/popularPosts");
  const pinnedPost = useFetchSingle(
    "http://localhost:8080/pinnedArticle"
  ) as PostProps;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetch the post by ID
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:8080/posts/${postId}`);
        const data = await response.json();

        const formattedData: PostProps = {
          id: data.id,
          title: data.title,
          postedBy: data.postedBy,
          postedTime: data.postedTime,
          content: data.content,
          photos: Array.isArray(data.photos) ? data.photos : [data.photos],
          tags:
            typeof data.tags === "string" ? data.tags.split(", ") : data.tags,
          state: data.state,
          clicks: data.clicks,
        };

        setPost(formattedData);
      } catch (error) {
        console.error("Failed to fetch experiences:", error);
      }
    };

    fetchPost();
  }, [postId]);

  const handleNavigateAuthor = (event: React.MouseEvent) => {
    event.stopPropagation();
    navigate(`/author/${post?.postedBy}`);
  };

  const sentences = post?.content.match(/[^.!?]+[.!?]+/g) || [];
  const paragraphs = [];
  for (let i = 0; i < sentences.length; i += 3) {
    paragraphs.push(sentences.slice(i, i + 3).join(" "));
  }

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-12 gap-4 p-4">
      {/* Stats Section */}
      <div className="col-span-12 lg:col-span-2 flex flex-col p-4 rounded-lg items-center top-20">
        <MovieStats imdbRating="8.5/10" lbRating="4.3/5" rtRating="83%" />
      </div>

      {/* Main Content Section */}
      <div className="col-span-12 lg:col-span-7 lg:ml-16 mx-auto">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="sm:text-4xl text-2xl mb-4 border-b-4 border-red-900 break-words w-full sm:max-w-[750px] text-center sm:text-left">
            {post.title}
          </h1>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleNavigateAuthor}
              className="text-gray-900 hover:text-white border border-red-900 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              {post.postedBy}
            </button>
            <p className="text-xs text-gray-500">{post.postedTime}</p>
          </div>
        </div>

        {paragraphs.map((paragraph, index) => (
          <div key={index}>
            <p>{paragraph}</p>
            {post?.photos[index] && (
              <img
                className="rounded-lg my-2 w-full"
                src={post.photos[index]}
                alt={`Image ${index + 1}`}
              />
            )}
          </div>
        ))}

        <PopularPosts posts={popularPosts} />
      </div>

      {/* Sidebar */}
      <div className="col-span-12 lg:col-span-3 space-y-6 flex flex-col rounded-lg top-20">
        {pinnedPost && <PinnedPost post={pinnedPost} />}
        <SocialMedia />
        <SoundtrackOfMonth />
        <TrailerOfWeek />
        <MovieSuggestions listOfMovies={[]} />
        <AuthorTeam listOfAuthors={[]} />
      </div>
    </div>
  );
}
