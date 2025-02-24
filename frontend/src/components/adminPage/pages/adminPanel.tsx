import React, { useState } from "react";
import Article from "./article";
import { useNavigate } from "react-router-dom";
import { ArticleProps } from "../../../App";

export default function AdminPanel() {
  const [posts, setPosts] = useState<ArticleProps[]>([
    {
      id: "1",
      title:
        "Ο Κύκλος Προβολών ''Σινεμά Ψ 2025'' ξεκινά στο Τριανόν με το πολυβραβευμένο ''Joyland'' του Saim Sadiq",
      postedBy: "John Doe",
      postTime: "2 hours ago",
      content:
        "Ο κλάδος «Τέχνη και Ψυχιατρική» της Ελληνικής Ψυχιατρικής Εταιρείας (ΕΨΕ) συνεχίζει για 17η συνεχή χρονιά το πρόγραμμα προβολών στον κινηματογράφο Τριανόν...",
      tags: ["art", "screenings"],
      photos: [
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlr6zACmI4cG2PDI-gTDd3fXLHMHqH5Enu99se4AFosf9HAJC_LmcVbEV-rUZS8BqvrIM1jSHIdMKI08rrQqytqWiD8rCxqrSXxB_LgMfgd_CmUiMPJD4xTL0TJH_eDrmilQgvcjLBBhKnbsehkOl1Scd4tqeG2yPVDW_w48FuVNVTaLD7lEKqQmcx8hI/w640-h436-rw/Joyland-Still-2.png",
      ],
      state: true,
      clicks: "214",
    },
    {
      id: "2",
      title: "Post Title 2",
      postedBy: "Alice Smith",
      postTime: "1 day ago",
      content: "Another example of a post's content.",
      tags: ["news", "reviews"],
      photos: [
        "https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      state: false,
      clicks: "24",
    },
  ]);

  const navigate = useNavigate();

  const handleNavigateArticle = (id: string) => {
    const article = posts.find((post) => post.id === id);
    if (article) {
      navigate(`/adminPanel/article/${id}`, { state: { article } });
    }
  };

  const deleteArticle = (id: string) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
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
                {posts.map((data) => (
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
                        postTime={data.postTime}
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
