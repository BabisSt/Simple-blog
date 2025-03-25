import React, { useEffect, useState } from "react";
import Article from "./article";
import { useNavigate } from "react-router-dom";
import { useFetchPosts } from "../../../hooks/useFetchPosts";

export default function AdminPanel() {
  const posts = useFetchPosts("http://localhost:8080/posts");

  const [allPosts, setAllPosts] = useState(posts);
  const navigate = useNavigate();

  const handleNavigateArticle = (id: string) => {
    const article = posts.find((post) => post.id === id);
    if (article) {
      navigate(`/adminPanel/article/${id}`, { state: { article } });
    }
  };

  useEffect(() => {
    setAllPosts(posts);
  }, [posts.length]);
  const deleteArticle = async (PostToDelete: string) => {
    try {
      const response = await fetch(
        `http://localhost:8080/posts/deletePostById/${PostToDelete}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setAllPosts(allPosts.filter((Post) => Post.id !== PostToDelete));
      } else {
        const errorMsg = await response.text();
        console.error("Failed to delete Post:", errorMsg);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col bg-slate-50 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
          <button
            className="mt-4 w-full bg-indigo-500 text-white text-xl font-bold py-2 rounded-lg hover:bg-indigo-600 transition"
            type="button"
            onClick={() => navigate(`/adminPanel/article/new`)}
          >
            Νέα Ανάρτηση
          </button>

          <div>
            <div className="-my-6">
              <div className="relative pl-8 sm:pl-32 py-6 group">
                {allPosts.map((data) => (
                  <div
                    key={data.id}
                    className="flex justify-between items-center"
                  >
                    <button
                      type="button"
                      onClick={() => handleNavigateArticle(data.id)}
                      className="block w-full text-left bg-white border border-gray-200 rounded-lg shadow-md p-4 mb-4 hover:shadow-lg hover:bg-gray-50 transition"
                    >
                      <Article
                        id={data.id}
                        title={data.title}
                        postedBy={data.postedBy}
                        postedTime={data.postedTime}
                        content={data.content}
                        photos={data.photos}
                        tags={data.tags}
                        state={data.state}
                        clicks={data.clicks}
                      />
                    </button>
                    <button
                      onClick={() => deleteArticle(data.id)}
                      className="ml-4 px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 transition"
                    >
                      Διαγραφή
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
