import React, { useState } from "react";
import Carousel from "../Carousel";
import Post from "../Post";
import PinnedPost from "../PinnedPost";
import SocialMedia from "../SocialMedia";
import SoundtrackOfMonth from "../SoundtrackOfMonth";
import TrailerOfWeek from "../TrailerOfWeek";
import PopularPosts from "../PopularPosts";
import MovieSuggestions from "../MovieSuggestions";
import AuthorTeam from "../AuthorTeam";
import ContactUs from "../ContactUs";
import { PostProps } from "../../../interfaces";
import { useFetchPosts } from "../../../hooks/useFetchPosts";
import { useFetchSingle } from "../../../hooks/useFetchSingle";

export default function HomePage() {
  const [visiblePosts, setVisiblePosts] = useState(5);

  // Using custom hooks
  const posts = useFetchPosts("http://localhost:8080/posts");
  const popularPosts = useFetchPosts("http://localhost:8080/popularPosts");
  const pinnedPost = useFetchSingle(
    "http://localhost:8080/pinnedArticle"
  ) as PostProps;

  const handleShowMore = () => {
    setVisiblePosts((prev) => prev + 5);
  };

  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-center pb-4">
        <img
          className="w-auto h-auto"
          src="/raportoLogo.png"
          alt="Raporto Logo"
        />
      </div>

      <Carousel />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 p-4">
        {/* Posts Section */}
        <div className="flex flex-col gap-6 flex-grow">
          {posts.slice(0, visiblePosts).map((data) => (
            <div key={data.id}>
              <Post
                id={data.id}
                title={data.title}
                postedBy={data.postedBy}
                postTime={data.postTime}
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
          <ContactUs />
        </div>
      </div>

      {visiblePosts < posts.length && (
        <div className="text-center mt-6">
          <button
            onClick={handleShowMore}
            className="text-gray-900 font-bold hover:text-white border border-red-900 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-xl px-8 py-4 text-center mb-4"
          >
            Περισσότερα άρθρα
          </button>
        </div>
      )}

      <div className="w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto mb-10">
        <PopularPosts posts={popularPosts} />
      </div>
    </div>
  );
}
