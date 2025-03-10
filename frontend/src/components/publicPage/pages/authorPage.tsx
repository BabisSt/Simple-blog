import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "../Post";
import PinnedPost from "../PinnedPost";
import SocialMedia from "../SocialMedia";
import SoundtrackOfMonth from "../SoundtrackOfMonth";
import TrailerOfWeek from "../TrailerOfWeek";
import MovieSuggestions from "../MovieSuggestions";
import AuthorTeam from "../AuthorTeam";
import ContactUs from "../ContactUs";
import { PostProps } from "../../../interfaces";

export default function AuthorPage() {
  const { postedBy } = useParams<{ postedBy: string }>();
  const [visiblePosts, setVisiblePosts] = useState(5);
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100); // Small delay ensures DOM is fully loaded
  }, []);
  const [posts, setPosts] = useState<PostProps[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:8080/posts");
        const data: PostProps[] = await response.json();
        setPosts(data);
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

  console.log(postedBy);

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
                postTime={data.postTime}
                content={data.content}
                photos={data.photos}
                tags={data.tags}
              />
            </div>
          ))}
        </div>
        {/* Sidebar */}
        <div className="flex flex-col p-4 space-y-6 w-full lg:w-[350px]">
          <PinnedPost post={posts[0]} />
          <SocialMedia />
          <SoundtrackOfMonth />
          <TrailerOfWeek />
          <MovieSuggestions />
          <AuthorTeam />
          <ContactUs />
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
