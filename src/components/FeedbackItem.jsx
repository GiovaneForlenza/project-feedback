import { ChevronUp, MessageSquare } from "lucide-react";
import React from "react";

function FeedbackItem({ suggestion, onUpvote, onView }) {
  return (
    <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow shadow-md">
      <div className="flex items-start gap-6 ">
        <button
          className={`flex flex-col items-center gap-1 rounded-lg px-3 py-2 transition-all cursor-pointer ${suggestion.upvoted ? "bg-purple-100 text-purple-700" : "bg-gray-50 text-gray-600 hover:bg-purple-50"}`}
          onClick={(e) => {
            e.stopPropagation();
            onUpvote && onUpvote(suggestion.id);
          }}
        >
          <ChevronUp size={16} />
          <span className="font-bold text-sm">{suggestion.upvotes}</span>
        </button>
        <div
          className="flex-1 cursor-pointer"
          onClick={() => onView && onView(suggestion)}
        >
          <h3 className="font-bold text-lg text-purple-800 mb-1 hover:text-purple-600 transition-all">
            {suggestion.title}
          </h3>

          <div className="text-gray-600 mb-3">{suggestion.description}</div>
          <span className="inline-block bg-purple-100 text-purple-600 px-4 py-1 rounded-lg text-sm font-semibold">
            {suggestion.category}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MessageSquare className="text-purple-800" size={18} />
          <span className="font-bold text-purple-900">
            {suggestion.comments}
          </span>
        </div>
      </div>
    </div>
  );
}

export default FeedbackItem;
