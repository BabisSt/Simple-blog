import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostProps } from "../../interfaces";

export default function Carousel() {
  const navigate = useNavigate();

  const handleNavigatePost = (id: string) => {
    navigate(`/post/${id}`);
  };

  const [carousel, setCarousel] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchCarousel = async () => {
      try {
        const linkResponse = await fetch("http://localhost:8080/carousel");
        const linkData = await linkResponse.json();
        const links: string[] = linkData.links;

        const apiLinks = links.map((l) =>
          l.replace("localhost:5173", "localhost:8080")
        );

        console.log("API Links being called: ", apiLinks);

        // Fetch all posts in parallel
        const responses = await Promise.all(
          apiLinks.map((apiLink) => fetch(apiLink))
        );

        // Convert responses to JSON
        const dataArray = await Promise.all(responses.map((res) => res.json()));

        // Format all data into PostProps[]
        const formattedData: PostProps[] = dataArray.map((data) => ({
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
        }));

        setCarousel(formattedData);
      } catch (e) {
        console.error("Error" + e);
      }
    };

    fetchCarousel();
  }, []);

  return (
    <section className="w-full max-w-screen-xl mx-auto py-4 px-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {carousel.map((post) => (
          <div
            key={post.id}
            className="relative transition-all duration-500 ease-in-out group border-b-4 border-t-4 border-red-900 rounded-lg
            h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] overflow-hidden"
          >
            <button
              onClick={() => handleNavigatePost(post.id)}
              className="relative w-full h-full overflow-hidden rounded-lg transition-all duration-500 transform 
              hover:scale-105 hover:z-10"
            >
              <img
                src={post.photos[0]}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/75 p-2 rounded-md">
                <span className="text-white text-sm md:text-md font-bold text-center">
                  {post.title}
                </span>
              </div>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
