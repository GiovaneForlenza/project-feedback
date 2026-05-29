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

function DetailPage() {
  const { id } = useParams();
  const suggestionId = Number(id);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const suggestions = useSelector((s) => s.feedback.suggestions);
  const allComments = useSelector((s) => s.feedback.comments);
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
        comments={comments || []}
        onBack={() => navigate("/")}
        onUpvote={handleUpvoted}
        onOpenEdit={() => navigate(`/feedback/${feedback.id}/edit`)}
        onAddComment={handleAddComments}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default DetailPage;
