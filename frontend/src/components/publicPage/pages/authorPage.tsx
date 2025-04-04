import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../Post";
import PinnedPost from "../PinnedPost";
import SocialMedia from "../SocialMedia";
import SoundtrackOfMonth from "../SoundtrackOfMonth";
import TrailerOfWeek from "../TrailerOfWeek";
import MovieSuggestions from "../MovieSuggestions";
import AuthorTeam from "../AuthorTeam";
import { PostProps } from "../../../interfaces";
import { useFetchSingle } from "../../../hooks/useFetchSingle";

export default function AuthorPage() {
  const { postedBy } = useParams<{ postedBy: string }>();
  const [visiblePosts, setVisiblePosts] = useState(5);
  const [posts, setPosts] = useState<PostProps[]>([]);

  const pinnedPost = useFetchSingle(
    "http://localhost:8080/pinnedArticle"
  ) as PostProps;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:8080/posts");
        const data = await response.json();

        const formattedData: PostProps[] = data.map((post: PostProps) => ({
          id: post.id,
          title: post.title,
          postedBy: post.postedBy,
          postedTime: post.postedTime,
          content: post.content,
          photos: Array.isArray(post.photos) ? post.photos : [post.photos],
          tags: post.tags
            ? typeof post.tags === "string"
              ? post.tags.split(", ")
              : post.tags
            : [], // Default to an empty array if tags is null or undefined
        }));

        setPosts(formattedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  const handleShowMore = () => {
    setVisiblePosts((prev) => prev + 5);
  };
  const filteredPosts = posts.filter((post) => postedBy === post.postedBy);

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 p-4">
        {/* Posts Section */}
        <div className="flex flex-col gap-6 flex-grow">
          {filteredPosts.slice(0, visiblePosts).map((data) => (
            <div key={data.id}>
              <Post
                id={data.id}
                title={data.title}
                postedBy={data.postedBy}
                postedTime={data.postedTime}
                content={data.content}
                photos={data.photos}
                tags={data.tags}
                state={false}
                clicks={""}
              />
            </div>
          ))}
        </div>
        {/* Sidebar */}
        <div className="flex flex-col p-4 space-y-6 w-full lg:w-[350px]">
          {pinnedPost && <PinnedPost post={pinnedPost} />}
          <SocialMedia />
          <SoundtrackOfMonth />
          <TrailerOfWeek />
          <MovieSuggestions listOfMovies={[]} />
          <AuthorTeam listOfAuthors={[]} />
        </div>
      </div>

      {visiblePosts < filteredPosts.length && (
        <div className="text-center mt-6">
          <button
            onClick={handleShowMore}
            className="text-gray-900 font-bold hover:text-white border border-red-900 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-xl px-8 py-4 text-center mb-4"
          >
            Περισσότερα άρθρα
          </button>
        </div>
      )}
    </div>
  );
}
