import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchPosts } from "../../../hooks/useFetchPosts";
import { useFetchSingle } from "../../../hooks/useFetchSingle";
import { tagMappings } from "../../../../public/tagMappings";
import Post from "../Post";
import Sidebar from "../Sidebar";
import { PostProps } from "../../../interfaces";

export default function TagPage() {
  const { tag } = useParams<{ tag: string }>();
  const [visiblePosts, setVisiblePosts] = useState(5);

  const posts = useFetchPosts("http://localhost:8080/posts");
  const pinnedPost = useFetchSingle(
    "http://localhost:8080/pinnedArticle"
  ) as PostProps;

  const greekTag =
    Object.keys(tagMappings).find((key) => tagMappings[key] === tag) ?? "";

  const filteredPosts = posts.filter(
    (post) => Array.isArray(post.tags) && post.tags.includes(greekTag)
  );

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 p-4">
        {/* Posts Section */}
        <div className="flex flex-col gap-6 flex-grow">
          {filteredPosts.slice(0, visiblePosts).map((data) => (
            <Post key={data.id} {...data} state={false} clicks={""} />
          ))}
        </div>
        <Sidebar pinnedPost={pinnedPost} />
      </div>
      {visiblePosts < filteredPosts.length && (
        <div className="text-center mt-6">
          <button
            onClick={() => setVisiblePosts((prev) => prev + 5)}
            className="text-gray-900 font-bold hover:text-white border border-red-900 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-xl px-8 py-4 text-center mb-4"
          >
            Περισσότερα άρθρα
          </button>
        </div>
      )}
    </div>
  );
}
