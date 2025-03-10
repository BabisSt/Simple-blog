import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostSuggested from "../PostSuggested";
import MovieStats from "../MovieStats";
import PinnedPost from "../PinnedPost";
import SocialMedia from "../SocialMedia";
import SoundtrackOfMonth from "../SoundtrackOfMonth";
import TrailerOfWeek from "../TrailerOfWeek";
import AuthorTeam from "../AuthorTeam";
import MovieSuggestions from "../MovieSuggestions";
import ContactUs from "../ContactUs";
import { PostProps } from "../../../interfaces";

export default function postDetail() {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!postId) {
    return <div>Post not found</div>;
  }

  // Sample post data (replace with fetched data)
  const samplePost = {
    id: postId,
    title:
      "Ο Κύκλος Προβολών ''Σινεμά Ψ 2025'' ξεκινά στο Τριανόν με το πολυβραβευμένο ''Joyland'' του Saim Sadiq",
    postedBy: "John Doe",
    postTime: "2 hours ago",
    photos: [
      "https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?q=80&w=2940&auto=format&fit=crop",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlr6zACmI4cG2PDI-gTDd3fXLHMHqH5Enu99se4AFosf9HAJC_LmcVbEV-rUZS8BqvrIM1jSHIdMKI08rrQqytqWiD8rCxqrSXxB_LgMfgd_CmUiMPJD4xTL0TJH_eDrmilQgvcjLBBhKnbsehkOl1Scd4tqeG2yPVDW_w48FuVNVTaLD7lEKqQmcx8hI/w640-h436-rw/Joyland-Still-2.png",
    ],
    content: `
      Modern cinema has brought a revolution in storytelling, with diverse narratives and groundbreaking visuals.
      In this article, we explore the impact of contemporary filmmakers who push boundaries to create memorable cinematic experiences.
      From the emotional depth of indie films to the grandeur of blockbusters, cinema continues to evolve as a powerful medium.
	  Modern cinema has brought a revolution in storytelling, with diverse narratives and groundbreaking visuals.
      In this article, we explore the impact of contemporary filmmakers who push boundaries to create memorable cinematic experiences.
      From the emotional depth of indie films to the grandeur of blockbusters, cinema continues to evolve as a powerful medium.
    `,
  };

  // Split content into sentences
  const sentences = samplePost.content.match(/[^.!?]+[.!?]+/g) || [];

  // Group sentences into paragraphs of 3 sentences each
  const paragraphs = [];
  for (let i = 0; i < sentences.length; i += 3) {
    paragraphs.push(sentences.slice(i, i + 3).join(" "));
  }

  const [posts, setPosts] = useState<PostProps[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:8080/posts");
        const data = await response.json();

        const formattedData: PostProps[] = data.map((post: PostProps) => ({
          id: post.id,
          title: post.title,
          postedBy: post.postedBy,
          postTime: post.postTime,
          content: post.content,
          photos: Array.isArray(post.photos) ? post.photos : [post.photos],
          tags:
            typeof post.tags === "string" ? post.tags.split(", ") : post.tags,
        }));
        setPosts(formattedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  const movieStats = {
    imdbRating: "8.5/10",
    lbRating: "4.3/5",
    rtRating: "83%",
  };

  const handleNavigateAuthor = (event: React.MouseEvent) => {
    event.stopPropagation();
    navigate(`/author/${samplePost.postedBy}`);
  };

  return (
    <div className="grid grid-cols-12 gap-4 p-4">
      {/* Stats Section */}
      <div className="col-span-12 lg:col-span-2  flex flex-col p-4 rounded-lg items-center top-20">
        <MovieStats
          imdbRating={movieStats.imdbRating}
          lbRating={movieStats.lbRating}
          rtRating={movieStats.rtRating}
        />
      </div>

      {/* Main Content Section - Made Larger */}
      <div className="col-span-12 lg:col-span-7  lg:ml-16 mx-auto">
        {/* Article Header */}
        <div className="mb-8">
          <h1 className="sm:text-4xl text-2xl mb-4 border-b-4 border-red-900 break-words w-full sm:max-w-[750px] text-center sm:text-left">
            {samplePost.title}
          </h1>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleNavigateAuthor}
              className="text-gray-900 hover:text-white border border-red-900 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              {samplePost.postedBy}
            </button>
            <p className="text-xs text-gray-500">{samplePost.postTime}</p>
          </div>
        </div>

        {paragraphs.map((paragraph, index) => (
          <div key={index}>
            <p>{paragraph}</p>
            {samplePost.photos[index] && (
              <img
                className="rounded-lg my-2 w-full"
                src={samplePost.photos[index]}
                alt={`Image ${index + 1}`}
              />
            )}
          </div>
        ))}

        <PostSuggested posts={posts} />
      </div>

      <div className="col-span-12 lg:col-span-3 space-y-6 flex flex-col rounded-lg top-20">
        <PinnedPost post={posts[0]} />
        <SocialMedia />
        <SoundtrackOfMonth />
        <TrailerOfWeek />
        <MovieSuggestions />
        <AuthorTeam />
        <ContactUs />
      </div>
    </div>
  );
}
