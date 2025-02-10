import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize-module-react";
import BlotFormatter from "quill-blot-formatter";

// Register necessary Quill modules
Quill.register("modules/imageResize", ImageResize);
Quill.register("modules/blotFormatter", BlotFormatter);

interface Article {
  id: string;
  title: string;
  postedBy: string;
  postTime: string;
  content: string;
  photo: string;
  tags: string[];
  state: boolean;
}

interface ArticleEditorProps {
  article: Article;
}

export default function ArticleEditor({ article }: ArticleEditorProps) {
  const navigate = useNavigate();
  const [editorContent, setEditorContent] = useState(article.content);
  const quillRef = useRef<ReactQuill | null>(null);

  // Initialize tags as an array
  const [tags, setTags] = useState<string[]>(article.tags);

  const handleChangeTags = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Split the input by commas and trim spaces to create an array of tags
    const inputTags = e.target.value
      .split(",") // Split by commas
      .map((tag) => tag.trim()); // Trim spaces from each tag

    // Limit to 3 tags and update state
    if (inputTags.length <= 3) {
      setTags(inputTags); // Set the tags state to the array of tags
    } else {
      setTags(inputTags.slice(0, 3)); // If there are more than 3, limit it to the first 3
    }
  };

  const handleChange = (value: string) => {
    setEditorContent(value);
  };

  useEffect(() => {
    setEditorContent(article.content);
    setTags(article.tags);
  }, [article.content, article.tags]);

  const handleNavigateArticle = () => {
    navigate(`/article/${article.id}`);
  };

  const quillModules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
    imageResize: {
      parchment: Quill.import("parchment"),
      modules: ["Resize", "DisplaySize"],
    },
    blotFormatter: {}, // Added BlotFormatter module
  };

  const quillFormats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
      <div className="grid grid-cols-2 gap-4 ">
        <button
          type="button"
          onClick={handleNavigateArticle}
          className="mt-4 w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"
        >
          {article.state ? "Επιστροφή στο πρόχειρο" : "Ανάρτηση"}
        </button>

        <div className="mt-4">
          <span
            className={`text-xl font-semibold p-5 rounded-full ${
              article.state
                ? "text-green-600 bg-green-100"
                : "text-red-600 bg-red-100"
            }`}
          >
            {article.state ? "Αναρτημένο" : "Στο πρόχειρο"}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 pt-6 pb-2">
        <textarea
          value={tags}
          onChange={handleChangeTags} // Update the tags state as an array
          placeholder="Enter up to 3 tags, separated by commas"
          className="w-full p-2 border border-slate-300 rounded-md"
          rows={3}
        />

        <div className="text-sm text-slate-600 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-full mr-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <input
        type="text"
        placeholder="Enter title..."
        defaultValue={article.title}
        className="w-full text-2xl font-bold text-gray-900 border-b mb-4 p-2 focus:outline-none"
      />
      <div className="quill-container">
        <ReactQuill
          ref={quillRef}
          value={editorContent}
          onChange={handleChange}
          modules={quillModules}
          formats={quillFormats}
          className="h-[500px] mb-16"
          placeholder="Start typing here..."
        />
      </div>
    </div>
  );
}
