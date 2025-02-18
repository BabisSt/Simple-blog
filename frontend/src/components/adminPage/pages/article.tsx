import React from "react";
import {ArticleProps} from "../../../App";

export default function Article({
  title,
  postedBy,
  postTime,
  content,
  photos,
  tags,
  state,
}: ArticleProps) {

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
        <div className="grid grid-cols-2 gap-4 ">
          <div className="font-medium text-indigo-500 pb-4 sm:mb-0">{postedBy}</div>
          <div className="font-medium text-indigo-500 mb-1 sm:mb-0 text-right">
            <span
              className={`text-xs font-semibold p-2 rounded-full ${
                state
                  ? "text-green-600 bg-green-100"
                  : "text-red-600 bg-red-100"
              }`}
            >
              {state ? "Αναρτημένο" : "στο Πρόχειρο"}
            </span>
          </div>
        </div>
		<div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-2.5">
			<time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-24 h-8 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
				{postTime}
			</time>
			<div className="text-xl font-bold text-slate-900">{title}</div>
		</div>
        <div className="text-slate-500">{content}</div>
        <div className="flex flex-wrap gap-2 pt-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-full "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
