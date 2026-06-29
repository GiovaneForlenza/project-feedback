import { ArrowLeft, ChevronUp, MessageSquare } from "lucide-react";
import { useState } from "react";

function DetailView({
  feedback,
  comments,
  onBack,
  onUpvote,
  onOpenEdit,
  onAddComment,
  onUpdate,
  onDelete,
}) {
  const [newComment, setNewComment] = useState("");
  const handlePost = () => {
    if (!newComment.trim()) return;
    const comment = {
      id: Date.now(),
      feedbackId: feedback.id,
      name: "current user",
      username: "@currentuser",
      avatar: "https://i.pravatar.cc/150?img=1",
      text: newComment,
      date: "Just now",
    };
    onAddComment(feedback.id, comment);
    setNewComment("");
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex justify-between items-center flex-col sm:flex-row">
        <button
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-semibold cursor-pointer"
          onClick={onBack}
        >
          <ArrowLeft />
          Go Back
        </button>
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all cursor-pointer w-full sm:w-fit mt-2 sm:mt-0"
          onClick={onOpenEdit}
        >
          Edit Feedback
        </button>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-md">
        <div className="flex items-start flex-col sm:flex-row gap-6">
          <button
            className={`flex flex-col items-center gap-1 rounded-lg px-3 py-2 transition-all cursor-pointer ${feedback.upvoted ? "bg-purple-100 text-purple-700" : "bg-gray-50 text-gray-600 hover:bg-purple-50"}`}
            onClick={(e) => {
              e.stopPropagation();
              onUpvote && onUpvote(feedback.id);
            }}
          >
            <ChevronUp size={16} />
            <span className="font-bold text-sm">{feedback.upvotes}</span>
          </button>
          <div className="flex-1">
            <h2 className="font-bold text-gray-800 text-xl mb-2">
              {feedback.title}
            </h2>
            <p className="text-gray-600 mb-3">{feedback.description}</p>
            <span className="inline-block bg-purple-50 text-purple-600 px-4 py-2 rounded-lg text-sm font-semibold">
              {feedback.category}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare size={18} className="text-gray-400" />
            <span className="font-bold text-gray-800">{feedback.comments}</span>
          </div>
        </div>
      </div>

      {comments && comments.length > 0 && (
        <div className="bg-white rounded-xl p-3 sm:p-6">
          <h3 className="font-bold text-gray-800 text-lg mb-6">
            {comments.length} Comments
          </h3>
          <div className="space-y-6">
            {comments.map((comment, idx) => {
              return (
                <>
                  <div
                    className="flex gap-2 sm:gap-4  flex-col sm:flex-row"
                    key={idx}
                  >
                    <img
                      src={comment.avatar}
                      alt=""
                      className="sm:w-10 w-8 sm:h-10 h-8 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div className="">
                          <h4 className="font-bold text-gray-800 text-sm">
                            {comment.name}
                          </h4>
                          <p className="text-gray-500">{comment.username}</p>
                        </div>
                        {/* <button className="text-purple-600 font-semibold text-sm hover:underline cursor-pointer">
                          Reply
                        </button> */}
                      </div>
                      <p className="text-gray-600 text-sm leading leading-relaxed">
                        {comment.text}
                      </p>
                    </div>
                  </div>
                  {idx < comments.length - 1 && (
                    <div className="border-b border-gray-100 mt-6"></div>
                  )}
                </>
              );
            })}
          </div>
        </div>
      )}
      <div className="bg-white rounded-xl p-3 sm:p-6">
        <h3 className="font-bold text-gray-800 text-lg mb-4">Add comment</h3>
        <textarea
          name=""
          id=""
          className="w-full border border-gray-200 rounded-lg p-4 text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows={4}
          maxLength={250}
          value={newComment}
          onChange={(e) => {
            setNewComment(e.target.value);
          }}
          placeholder="Type your comment here"
        ></textarea>
        <div className="flex justify-between items-center mt-4 flex-col sm:flex-row">
          <span className="text-gray-500 text-sm">
            {250 - newComment.length} characters left
          </span>
          <button
            className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-semibold transition-all w-full sm:w-fit mt-2 sm:mt-0"
            onClick={handlePost}
            disabled={!newComment.trim()}
          >
            Post Comment
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailView;
