import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import FeedbackList from "../components/FeedbackList";
import FeedbackModal from "../components/FeedbackModal";
import Sidebar from "../components/Sidebar";
import { addSuggestion, toggleUpvoted } from "../store/feedbackSlice";

function HomePage() {
  // Uses Redux hooks to access the dispatch function and select state from the store. Also uses React Router hooks to navigate and access the current location.
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // Selects the suggestions from the Redux store
  const suggestions = useSelector((state) => state.feedback.suggestions);

  const [filterCategory, setFilterCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Most Upvotes");

  // State to keep track of the number of suggestions currently being displayed based on the applied filters and sorting. This count is updated in the FeedbackList component whenever the sorted suggestions change, allowing the UI to reflect the correct number of suggestions being shown to the user.
  const [suggestionCount, setSuggestionCount] = useState(0);

  // Determines if the feedback modal should be open based on the current URL path. If the path is "/add", it indicates that the user is trying to add a new suggestion, and the modal should be open.
  const modelOpen = location.pathname === "/add";
  1;

  // Calculates the counts of suggestions in different roadmap categories (Planned, In-Progress, Live) using the useMemo hook to optimize performance. It filters the suggestions based on their status and counts how many fall into each category.
  const roadmapCounts = useMemo(
    () => ({
      planned: suggestions.filter((s) => s.status === "Planned").length,
      inProgress: suggestions.filter((s) => s.status === "In-Progress").length,
      live: suggestions.filter((s) => s.status === "Live").length,
    }),
    [suggestions],
  );


  const openAdd = () => navigate("/add");
  const closeModel = () => navigate(-1); //Goes back to previous route

  const handleAdd = (payload) => {
    closeModel();
    dispatch(addSuggestion(payload));
  };

  const handleUpvoted = (id) => {
    dispatch(toggleUpvoted(id));
  };
  const handleView = (item) => {
    navigate(`/feedback/${item.id}`);
  };

  const handleTeste = () => {};

  return (
    <div className="max-w-6xl mx-auto">
      <button onClick={handleTeste}>TESTE</button>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Sidebar
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
          roadmapCounts={roadmapCounts}
          openRoadmap={() => navigate("/roadmap")}
          openAdd={openAdd}
        />

        <div className="lg:col-span-3 space-y-6">
          <div className="bg-gray-800 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-white font-bold">
                {/* Display the number of suggestions in the displaying category */}
                {suggestionCount} Suggestions
              </span>
              <div className="flex items-center gap-2">
                <span className="text-gray-300 text-sm">Sort by:</span>
                <select
                  name="sort"
                  value={sortBy}
                  id="sort"
                  className="bg-transparent text-gray-400 focus:outline-none font-semibold text-sm border-none outline-none cursor-pointer"
                  // Updates the sortBy state when the user selects a different sorting option from the dropdown menu, allowing the feedback list to be sorted accordingly.
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="Most Upvotes">Most Upvotes</option>
                  <option value="Least Upvotes">Least Upvotes</option>
                  <option value="Most Comments">Most Comments</option>
                  <option value="Least Comments">Least Comments</option>
                </select>
              </div>
            </div>
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all whitespace-normal cursor-pointer"
              onClick={openAdd}
            >
              + Add Feedback
            </button>
          </div>

          <FeedbackList
            suggestions={suggestions}
            filterCategory={filterCategory}
            sortBy={sortBy}
            onView={handleView}
            onUpvote={handleUpvoted}
            setSuggestionCount={setSuggestionCount}
          />
        </div>
      </div>
      <FeedbackModal
        isOpen={modelOpen}
        onClose={closeModel}
        onAdd={handleAdd}
        editingFeedback={null}
        // onDelete={onDelete}
      />
    </div>
  );
}

export default HomePage;
