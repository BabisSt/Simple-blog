import React, { useState, useEffect, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize-module-react";
import BlotFormatter from "quill-blot-formatter";

// Register necessary Quill modules
Quill.register("modules/imageResize", ImageResize);
Quill.register("modules/blotFormatter", BlotFormatter);

export default function ArticleEditor() {
  const { articleId } = useParams();
  const location = useLocation();
  const article = location.state?.article;

  const [editorContent, setEditorContent] = useState<string>(
    article?.content || ""
  );
  const quillRef = useRef<ReactQuill | null>(null);

  const [tags, setTags] = useState<string[]>(article?.tags || []);
  const [postDate, setPostDate] = useState<string>(article?.date || "");
  const [isPublished, setIsPublished] = useState<boolean>(
    article?.state || false
  ); // Track if published

  const handleChangeTags = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputTags = e.target.value.split(",").map((tag) => tag.trim());
    setTags(inputTags.slice(0, 3)); // Limit to 3 tags
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
        setPostDate(parsedArticle.date);
        setIsPublished(parsedArticle.state);
      }
    }
  }, [articleId, article]);

  // Toggle between Published and Draft state
  const handleTogglePublish = () => {
    setIsPublished((prevState) => !prevState);
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
    clipboard: { matchVisual: false },
    imageResize: {
      parchment: Quill.import("parchment"),
      modules: ["Resize", "DisplaySize"],
    },
    blotFormatter: {},
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
      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          onClick={handleTogglePublish} // Toggle between published and draft
          className="mt-4 w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"
        >
          {isPublished ? "Επαναφορά στο Πρόχειρο" : "Ανάρτηση"}
        </button>

        <div className="inline-flex items-center justify-center pt-6 pb-2">
          <span
            className={`text-xl font-semibold p-5 rounded-full ${
              isPublished
                ? "text-green-600 bg-green-100"
                : "text-red-600 bg-red-100"
            }`}
          >
            {isPublished ? "Αναρτημένο" : "Στο Πρόχειρο"}
          </span>
        </div>
      </div>

      <h3 className="text-lg text-black font-bold mt-2">Τίτλος</h3>
      <input
        type="text"
        placeholder="Τίτλος..."
        defaultValue={article?.title || ""}
        className="w-full text-2xl font-bold text-gray-900 border rounded-md my-4 p-2"
      />

      <h3 className="text-lg text-black font-bold mt-2">
        Ημερομηνία Ανάρτησης
      </h3>
      <input
        type="date"
        value={postDate}
        onChange={(e) => setPostDate(e.target.value)}
        className="w-full p-2 border border-slate-300 rounded-md mb-4"
      />

      <h3 className="text-lg text-black font-bold mt-2">Tags</h3>
      <div className="flex flex-wrap gap-2 pt-6 pb-2 mb-4">
        <textarea
          value={tags.join(",")}
          onChange={handleChangeTags}
          placeholder="Μέχρι 3 tags χωρισμένα με κόμματα"
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

      <div className="quill-container">
        <ReactQuill
          ref={quillRef}
          value={editorContent}
          onChange={handleChange}
          modules={quillModules}
          formats={quillFormats}
          className="h-[500px] mb-16"
          placeholder="Κείμενο..."
        />
      </div>
    </div>
  );
}
