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
import { PostProps, SoundtrackOfMonthEditProps, TrailerOfWeekEditProps } from "../../../interfaces";

export default function postDetail() {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<PostProps | null>(null);
  const [posts, setPosts] = useState<PostProps[]>([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Split content into sentences
  const sentences = post?.content.match(/[^.!?]+[.!?]+/g) || [];

  // Group sentences into paragraphs of 3 sentences each
  const paragraphs = [];
  for (let i = 0; i < sentences.length; i += 3) {
    paragraphs.push(sentences.slice(i, i + 3).join(" "));
  }

  if (!postId) {
    return <div>Post not found</div>;
  }

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:8080/posts/${postId}`);
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

        setPost(formattedData);
      } catch (error) {
        console.error("Failed to fetch experiences:", error);
      }
    };

    fetchPost();
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
    navigate(`/author/${post?.postedBy}`);
  };

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
            {post?.title}
          </h1>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleNavigateAuthor}
              className="text-gray-900 hover:text-white border border-red-900 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              {post?.postedBy}
            </button>
            <p className="text-xs text-gray-500">{post?.postTime}</p>
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

        <PostSuggested posts={posts} />
      </div>

      <div className="col-span-12 lg:col-span-3 space-y-6 flex flex-col rounded-lg top-20">
        {pinnedPost && <PinnedPost post={pinnedPost} />}
        <SocialMedia />
		{soundtrack && <SoundtrackOfMonth link={soundtrack.link}/> }
        {trailer && <TrailerOfWeek link={trailer.link}/>}
        <MovieSuggestions listOfMovies={[]} />
        <AuthorTeam listOfAuthors={[]} />
        <ContactUs />
      </div>
    </div>
  );
}
