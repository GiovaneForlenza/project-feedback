import { createSlice } from "@reduxjs/toolkit";
import { initialComments, initialFeedbacks } from "../data/initialData";

const initialState = {
  suggestions: initialFeedbacks,
  comments: initialComments,
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  // Defines the reducers for handling various actions related to feedback suggestions, such as adding, updating, deleting suggestions, toggling upvotes, and adding comments. Each reducer updates the state accordingly based on the action payload.
  reducer: {
    addSuggestion: (state, action) => {
      const payLoad = action.payLoad;
      const newSuggestions = {
        id: Date.now(),
        title: payLoad.title,
        description: payLoad.description,
        category: payLoad.category || "Feature",
        status: payLoad.status || "Planned",
        upvotes: 0,
        comments: 0,
        upvoted: false,
      };
      state.suggestions.push(newSuggestions);
    },

    updateSuggestion: (state, action) => {
      // Finds the index of the suggestion to be updated based on the ID provided in the action payload. If found, it updates the suggestion with the new data while preserving existing properties.
      const updated = action.payload;
      const idx = state.suggestions.findIndex((s) => s.id === updated.id);

      if (idx !== -1) {
        state.suggestions[idx] = { ...state.suggestions[idx], ...updated };
      }
    },

    deleteSuggestion: (state, action) => {
      // Finds the ID of the suggestion to be deleted from the action payload and filters it out from the suggestions array. Also deletes any comments associated with the deleted suggestion.
      const id = action.payload;
      state.suggestions = state.suggestions.filter((s) => s.id !== id);
      delete state.comments[id];
    },
    toggleUpvoted: (state, action) => {
      // Toggles the upvote status of a suggestion based on the ID provided in the action payload. It updates the upvote count accordingly, ensuring it does not go below zero.
      const id = action.payload;
      const item = state.suggestions.find((s) => s.id === id);

      if (item) {
        item.upvoted = !item.upvoted;
        item.upvoted = item.upvoted
          ? item.upvotes + 1
          : Math.max(0, item.upvotes - 1);
      }
    },

    addComment: (state, action) => {
      // Adds a comment to a specific suggestion based on the suggestion ID and comment data provided in the action payload. It also increments the comment count for the associated suggestion.
      const { suggestionId, comment } = action.payload;
      if (!state.comments[suggestionId]) state.comments[suggestionId] = [];
      state.comments[suggestionId].push(comment);

      const item = state.suggestions.find((s) => s.id === suggestionId);
      if (item) item.comments = (item.comments || 0) + 1;
    },

    replaceAll: (state, action) => {
      // Replaces the entire suggestions array in the state with a new array provided in the action payload. This can be useful for bulk updates or resetting the suggestions.
      return action.payload;
    },
  },
});

export const {
  addSuggestion,
  updateSuggestion,
  deleteSuggestion,
  toggleUpvote,
  addComment,
  replaceAll,
} = feedbackSlice.actions;

export default feedbackSlice.reducer;
