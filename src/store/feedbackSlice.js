import { createSlice } from "@reduxjs/toolkit";
import { initialComments, initialFeedbacks } from "../data/initialData";

const initialState = {
  suggestions: initialFeedbacks,
  comments: initialComments,
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
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
      const updated = action.payload;
      const idx = state.suggestions.findIndex((s) => s.id === updated.id);

      if (idx !== -1) {
        state.suggestions[idx] = { ...state.suggestions[idx], ...updated };
      }
    },

    deleteSuggestion: (state, action) => {
      const id = action.payload;
      state.suggestions = state.suggestions.filter((s) => s.id !== id);
      delete state.comments[id];
    },

    toggleUpvote: (state, action) => {
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
      const { suggestionId, comment } = action.payload;
      if (!state.comments[suggestionId]) state.comments[suggestionId] = [];
      state.comments[suggestionId].push(comment);

      const item = state.suggestions.find((s) => s.id === suggestionId);
      if (item) item.comments = (item.comments || 0) + 1;
    },

    replaceAll: (state, action) => {
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
