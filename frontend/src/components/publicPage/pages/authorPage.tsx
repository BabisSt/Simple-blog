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
import { PostProps, SoundtrackOfMonthEditProps, TrailerOfWeekEditProps } from "../../../interfaces";

export default function AuthorPage() {
  const { postedBy } = useParams<{ postedBy: string }>();
  const [visiblePosts, setVisiblePosts] = useState(5);
  const [posts, setPosts] = useState<PostProps[]>([]);

  const [pinnedPost, setPinnedPost] = useState<PostProps>();
  useEffect(() => {
    const fetchPinnedPost = async () => {
      try {
        // First fetch to get the link
        const linkResponse = await fetch("http://localhost:8080/pinnedArticle");
        const linkData = await linkResponse.json();
        const link = linkData.link;

        const apiLink = link.replace("5173/post", "8080/posts");
        const response = await fetch(apiLink);
        const data = await response.json();

        const formattedData: PostProps = {
          id: data.id,
          title: data.title,
          postedBy: data.postedBy,
          postTime: data.postTime,
          content: data.content,
          photos: Array.isArray(data.photos) ? data.photos : [data.photos],
          tags:
            typeof data.tags === "string" ? data.tags.split(", ") : data.tags,
          state: data.state,
          clicks: data.clicks,
        };

        setPinnedPost(formattedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPinnedPost();
  }, []);

	const [soundtrack, setSoundtrack] = useState<SoundtrackOfMonthEditProps>();
	useEffect(() => {
		const fetchSoundtrack = async () => {
		try {
			// First fetch to get the link
			const linkResponse = await fetch("http://localhost:8080/soundtrack");
			const linkData = await linkResponse.json();
			const link = linkData.link;

			const apiLink = link.replace("5173/post", "8080/posts");
			const response = await fetch(apiLink);
			const data = await response.json();


			setSoundtrack(data);
		} catch (error) {
			console.error(error);
		}
		};

		fetchSoundtrack();
	}, []);
	

	const [trailer, setTrailer] = useState<TrailerOfWeekEditProps>();
	useEffect(() => {
		const fetchTrailer = async () => {
		try {
			// First fetch to get the link
			const linkResponse = await fetch("http://localhost:8080/trailer");
			const linkData = await linkResponse.json();
			const link = linkData.link;
	
			const apiLink = link.replace("5173/post", "8080/posts");
			const response = await fetch(apiLink);
			const data = await response.json();
	
	
			setTrailer(data);
		} catch (error) {
			console.error(error);
		}
		};
	
		fetchTrailer();
	}, []);
		
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
          {soundtrack && <SoundtrackOfMonth link={soundtrack.link}/> }
          {trailer && <TrailerOfWeek link={trailer.link}/>}
          <MovieSuggestions listOfMovies={[]} />
          <AuthorTeam listOfAuthors={[]} />
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
