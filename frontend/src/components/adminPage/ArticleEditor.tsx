import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Article {
  title: string;
  author: string;
  date: string;
  content1: string;
  content2: string;
  image: string;
}

export default function ArticleEditor() {
  const { articleId } = useParams<{ articleId: string }>();
  const [article, setArticle] = useState<Article>({
    title: "",
    author: "",
    date: new Date().toISOString().split("T")[0],
    content1: "",
    content2: "",
    image: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (articleId) {
      // Simulating an API call to fetch the article details
      // Replace this with your actual API call
      setTimeout(() => {
        const fetchedArticle = {
          title: "Exploring the Marvels of Modern Cinema",
          author: "John Doe",
          date: "2025-01-07",
          content1: `
            Modern cinema has brought a revolution in storytelling, with diverse narratives and groundbreaking visuals.
            In this article, we explore the impact of contemporary filmmakers who push boundaries to create memorable cinematic experiences.
            From the emotional depth of indie films to the grandeur of blockbusters, cinema continues to evolve as a powerful medium.
          `,
          content2: `
            Technological advancements such as CGI and immersive soundscapes have changed the way we experience stories.
            Modern directors use these tools to build worlds that were once only imagined, bringing stories to life in unprecedented ways.
          `,
          image:
            "https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?q=80&w=2940&auto=format&fit=crop",
        };
        setArticle(fetchedArticle);
        setIsLoading(false);
      }, 1000); // Simulating a delay
    }
  }, [articleId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setArticle((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Saved article:", article);
    alert("Article saved!");
    // Replace this with a POST/PUT request to save the updated article to your backend
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container grid grid-cols-6 gap-4 p-4">
      {/* Editor Section */}
      <div className="col-span-6 lg:col-span-5">
        {/* Article Title */}
        <div className="mb-6">
          <input
            type="text"
            name="title"
            value={article.title}
            onChange={handleChange}
            placeholder="Enter the article title..."
            className="w-full text-4xl font-bold mb-4 border-b-2 focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Author and Date */}
        <div className="flex items-center space-x-4 mb-6">
          <input
            type="text"
            name="author"
            value={article.author}
            onChange={handleChange}
            placeholder="Author name"
            className="text-sm font-semibold border-b-2 focus:outline-none focus:border-indigo-500"
          />
          <input
            type="date"
            name="date"
            value={article.date}
            onChange={handleChange}
            className="text-sm text-gray-500 border-b-2 focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Article Content */}
        <div className="prose lg:prose-xl max-w-none mb-6">
          <textarea
            name="content1"
            value={article.content1}
            onChange={handleChange}
            placeholder="Write the first part of your content here..."
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
            rows={6}
          />
        </div>

        {/* Article Images */}
        <div className="mb-6">
          <input
            type="text"
            name="image"
            value={article.image}
            onChange={handleChange}
            placeholder="Paste the image URL here..."
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
          />
          {article.image && (
            <img
              src={article.image}
              alt="Preview"
              className="w-full h-auto mt-4 rounded-lg"
            />
          )}
        </div>

        {/* Article Content Continued */}
        <div className="prose lg:prose-xl max-w-none mb-6">
          <textarea
            name="content2"
            value={article.content2}
            onChange={handleChange}
            placeholder="Write the second part of your content here..."
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
            rows={6}
          />
        </div>

        {/* Save Button */}
        <div>
          <button
            type="button"
            onClick={handleSave}
            className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition"
          >
            Save Article
          </button>
        </div>
      </div>
    </div>
  );
}
