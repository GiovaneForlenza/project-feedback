import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import FeedbackList from "../components/FeedbackList";
import Sidebar from "../components/Sidebar";

function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const suggestions = useSelector((state) => state.feedback.suggestions);
  console.log(suggestions);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Sidebar />

        <div className="lg:col-span-3 space-y-6">
          <div className="bg-gray-800 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-white font-bold">Suggestion Length</span>
              <div className="flex items-center gap-2">
                <span className="text-gray-300 text-sm">Sort by:</span>
                <select
                  name="sort"
                  id="sort"
                  className="bg-transparent text-gray-400 focus:outline-none font-semibold text-sm border-none outline-none cursor-pointer"
                >
                  <option value="Most Upvotes">Most Upvotes</option>
                  <option value="Least Upvotes">Least Upvotes</option>
                  <option value="Most Comments">Most Comments</option>
                  <option value="Least Comments">Least Comments</option>
                </select>
              </div>
            </div>
            <button className=" bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all whitespace-normal">
              + Add Feedback
            </button>
          </div>

          <FeedbackList />
        </div>
      </div>
      {/* <FeedbackModal /> */}
    </div>
  );
}

export default HomePage;
