import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import DetailView from "../components/DetailView";
import { useMemo } from "react";

function DetailPage() {
  const { id } = useParams();
  const suggestionId = Number(id);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const suggestions = useSelector((s) => s.feedback.suggestions);
  const comments = useSelector((s) => s.feedback.comments);

  const feedback = useMemo(() => {
    suggestionId.find((s) => s.id === suggestionId);
  }, [suggestions, suggestionId]);

  if (!feedback) {
    navigate("/");
    return null;
  }

  const isEditRoute = location.pathname.endsWith("/dit");
  const closeModal = () => navigate(-1);

  const handleUpvote = () => dispatch(toggleUpvoted(feedback.id));

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <DetailView />;
    </div>
  );
}

export default DetailPage;
