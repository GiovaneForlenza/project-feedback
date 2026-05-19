import React, { useEffect } from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({
  suggestions,
  filterCategory,
  sortBy,
  onView,
  onUpvoted,
  setSuggestionCount,
}) {
  // Filters the suggestions based on the selected category. If the category is "All", it includes all suggestions; otherwise, it filters to include only those that match the selected category.
  const filtered = suggestions.filter(
    (s) => filterCategory === "All" || s.category === filterCategory,
  );

  // Sorts the filtered suggestions based on the selected sorting criteria (Most Upvotes, Least Upvotes, Most Comments, Least Comments). It creates a new sorted array to avoid mutating the original filtered array.
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "Most Upvotes") {
      return b.upvotes - a.upvotes;
    }
    if (sortBy === "Least Upvotes") {
      return a.upvotes - b.upvotes;
    }
    if (sortBy === "Most Comments") {
      return b.comments - a.comments;
    }
    if (sortBy === "Least Comments") {
      return a.comments - b.comments;
    }
    return 0;
  });

  // Uses the useEffect hook to update the suggestion count whenever the sorted suggestions change. It sets the suggestion count to the length of the sorted array, which reflects the number of suggestions currently being displayed based on the applied filters and sorting.
  useEffect(() => {
    setSuggestionCount(sorted.length);

    return () => {
      0;
    };
  }, [sorted]);

  // If there are no suggestions to display after filtering and sorting, it renders a message encouraging the user to add a new suggestion. Otherwise, it maps over the sorted suggestions and renders a FeedbackItem component for each one, passing the suggestion data and the onView handler as props.
  if (sorted.length === 0) {
    return (
      <div className="bg-white rounded-xl p-12 text-center shadow-md">
        <p className="text-gray-500 text-lg">
          No suggestions found. How about adding one!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 ">
      {sorted.map((suggestion) => (
        <FeedbackItem
          key={suggestion.id}
          suggestion={suggestion}
          onView={onView}
          onUpvoted={onUpvoted}
        />
      ))}
    </div>
  );
}

export default FeedbackList;
