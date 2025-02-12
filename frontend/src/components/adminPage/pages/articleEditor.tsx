import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize-module-react";
import BlotFormatter from "quill-blot-formatter";

// Register necessary Quill modules
Quill.register("modules/imageResize", ImageResize);
Quill.register("modules/blotFormatter", BlotFormatter);

export default function ArticleEditor() {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();  // Get location object to access the state
  const article = location.state?.article;  // Get the article from the passed state

  const [editorContent, setEditorContent] = useState<string>(article?.content || "");
  const quillRef = useRef<ReactQuill | null>(null);

  const [tags, setTags] = useState<string[]>(article?.tags || []);

  const handleChangeTags = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputTags = e.target.value
      .split(",")
      .map((tag) => tag.trim());

    if (inputTags.length <= 3) {
      setTags(inputTags);
    } else {
      setTags(inputTags.slice(0, 3));
    }
  };

  const handleChange = (value: string) => {
    setEditorContent(value);
  };

  useEffect(() => {
    if (articleId && !article) {
      const savedArticle = localStorage.getItem(`article-${articleId}`);
      if (savedArticle) {
        const parsedArticle = JSON.parse(savedArticle);
        setEditorContent(parsedArticle.content);
        setTags(parsedArticle.tags);
      }
    }
  }, [articleId, article]);

  const handleNavigateArticle = () => {
    navigate(`/adminPanel/article/${articleId}`);
  };

  const quillModules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
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
    blotFormatter: {},
  };

  const quillFormats = [
    "header", "font", "size", "bold", "italic", "underline", "strike", "blockquote",
    "list", "bullet", "indent", "link", "image", "video",
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          onClick={handleNavigateArticle}
          className="mt-4 w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"
        >
          {article?.state ? "Επιστροφή στο πρόχειρο" : "Ανάρτηση"}
        </button>

        <div className="inline-flex items-center justify-center mt-4">
          <span
            className={`text-xl font-semibold p-5 rounded-full ${
              article?.state ? "text-green-600 bg-green-100" : "text-red-600 bg-red-100"
            }`}
          >
            {article?.state ? "Αναρτημένο" : "Στο πρόχειρο"}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 pt-6 pb-2">
        <textarea
          value={tags.join(", ")}
          onChange={handleChangeTags}
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
        defaultValue={article?.title || ""}
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
