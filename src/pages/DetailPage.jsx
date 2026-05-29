import { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import DetailView from "../components/DetailView";
import {
  addComment,
  deleteSuggestion,
  toggleUpvoted,
  updateSuggestion,
} from "../store/feedbackSlice";
import FeedbackModal from "../components/FeedbackModal";

function DetailPage() {
  const { id } = useParams();
  const suggestionId = Number(id);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const suggestions = useSelector((s) => s.feedback.suggestions);
  const allComments = useSelector((s) => s.feedback.comments);
  console.log(allComments);

  const comments = allComments.filter((c) => c.feedbackId === suggestionId);
  const feedback = useMemo(() => {
    return suggestions.find((s) => s.id === suggestionId);
  }, [suggestions, suggestionId]);

  useEffect(() => {
    if (!feedback) {
      navigate("/");
    }
  }, [feedback, navigate]);

  const isEditRoute = location.pathname.endsWith("/edit");

  const closeModal = () => navigate(-1);

  const handleUpvoted = () => dispatch(toggleUpvoted(feedback.id));
  const handleAddComments = (suggestionId, comment) => {
    dispatch(addComment({ suggestionId, comment }));
  };

  const handleUpdate = (payload) => {
    dispatch(updateSuggestion(payload));
    closeModal();
  };

  const handleDelete = (id) => {
    dispatch(deleteSuggestion(id));
    navigate("/");
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <DetailView
        feedback={feedback}
        // Passes the comments associated with the current feedback item to the DetailView component. If there are no comments, it defaults to an empty array to prevent errors in the DetailView when trying to render comments.
        comments={comments || []}
        onBack={() => navigate("/")}
        onUpvote={handleUpvoted}
        // Defines a handler function for adding comments that dispatches the addComment action to the Redux store. This function is passed down to the DetailView component, allowing it to trigger the addition of new comments when users submit them.
        onOpenEdit={() => navigate(`/feedback/${feedback.id}/edit`)}
        onAddComment={handleAddComments}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
      <FeedbackModal
        isOpen={isEditRoute}
        onClose={closeModal}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        //If the current route is for editing, it passes the existing feedback data to the FeedbackModal component. This allows the modal to pre-fill the form with the current feedback details for editing. If it's not an edit route, it passes null, indicating that the modal should be in "create" mode.
        editingFeedback={isEditRoute ? feedback : null}
      />
    </div>
  );
}

export default DetailPage;
