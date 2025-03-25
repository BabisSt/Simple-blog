import React from "react";
import { PostProps } from "../../../interfaces";

export default function Article({
  title,
  postedBy,
  postedTime,
  content,
  photos,
  tags,
  state,
  clicks,
}: PostProps) {
  return (
    <div>
      {photos && (
        <img
          src={photos[0]}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}
      <div className="mb-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="font-medium text-indigo-500 pb-4 sm:mb-0">
            {postedBy}
          </div>
          <div className="font-medium text-indigo-500 mb-1 sm:mb-0 text-right">
            <span
              className={`text-xs font-semibold p-2 rounded-full ${
                state
                  ? "text-green-600 bg-green-100"
                  : "text-red-600 bg-red-100"
              }`}
            >
              {state ? "Αναρτημένο" : "Στο Πρόχειρο"}
            </span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start mb-1">
          <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-24 h-8 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
            {postedTime}
          </time>
          <div className="text-xl font-bold text-slate-900">{title}</div>
        </div>
        <div className="text-slate-500">{content}</div>

        {/* Tags & Clicks */}
        <div className="flex flex-wrap justify-between items-center pt-6">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-slate-600 bg-slate-100 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="text-sm text-gray-500 font-medium">
            <span className="mr-1">Επισκέψεις :</span> {clicks}
          </div>
        </div>
      </div>
    </div>
  );
}
