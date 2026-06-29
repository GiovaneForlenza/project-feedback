import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function FeedbackModal({
  isOpen,
  onClose,
  onAdd,
  onUpdate,
  onDelete,
  editingFeedback,
}) {
  // Initializes the formData state with default values for the feedback form. This state will hold the current values of the form fields (title, category, status, description) and will be updated as the user interacts with the form. The initial values are set to empty strings for title and description, and default values for category and status. This allows the form to be pre-filled with existing feedback data when editing, or start with blank fields when creating new feedback.
  const [formData, setFormData] = useState({
    title: "",
    category: "Feature",
    status: "Planned",
    description: "",
  });
  const navigate = useNavigate();

  // This useEffect hook runs whenever the editingFeedback prop or the isOpen state changes. If there is an editingFeedback object (indicating that the modal is in edit mode), it sets the formData state to the values of the existing feedback, allowing the form to be pre-filled with the current feedback details. If there is no editingFeedback (indicating that the modal is in create mode), it resets the formData to the default values, ensuring that the form starts with blank fields for new feedback creation. This logic ensures that the modal behaves correctly for both creating new feedback and editing existing feedback.
  useEffect(() => {
    if (editingFeedback) {
      setFormData({
        title: editingFeedback.title || "",
        category: editingFeedback.category || "Feature",
        status: editingFeedback.status || "Planned",
        description: editingFeedback.description || "",
      });
    } else {
      setFormData({
        title: "",
        category: "Feature",
        status: "Planned",
        description: "",
      });
    }
  }, [editingFeedback, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingFeedback) {
      onUpdate && onUpdate({ ...editingFeedback, ...formData });
    } else {
      onAdd && onAdd(formData);
    }
  };

  const handleDelete = () => {
    if (!editingFeedback) return;
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      onDelete && onDelete(editingFeedback.id);
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 z-50 no-scrollbar">
      <div
        className="w-full h-full bg-gray-900/90 absolute top-0 left-0 "
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-xl max-w-lg w-full p-6 max-h-[900vh] overflow-y-auto z-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {editingFeedback ? "Edit Feedback" : "Create New Feedback"}
          </h2>
          <button
            className="text-gray-400 hover:text-gray-600"
            onClick={onClose}
          >
            <X size={24} className="cursor-pointer" />
          </button>
        </div>
        <form action="" onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-4">
            <label
              htmlFor=""
              className="block text-sm font-bold text-gray-700 mb-2"
            >
              Feedback Title
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Add a short, descriptive headline"
              value={formData.title}
              onChange={(e) => {
                setFormData({ ...formData, title: e.target.value });
              }}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor=""
              className="block text-sm font-bold text-gray-700 mb-2"
            >
              Category
            </label>
            <select
              name=""
              id=""
              className="w-full px-4 py-3 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.category}
              onChange={(e) => {
                setFormData({ ...formData, category: e.target.value });
              }}
            >
              <option value="Feature">Feature</option>
              <option value="UI">UI</option>
              <option value="UX">UX</option>
              <option value="Enhancement">Enhancement</option>
              <option value="Bug">Bug</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor=""
              className="block text-sm font-bold text-gray-700 mb-2"
            >
              Status
            </label>
            <select
              name=""
              id=""
              className="w-full px-4 py-3 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.status}
              onChange={(e) => {
                setFormData({ ...formData, status: e.target.value });
              }}
            >
              <option value="Planned">Planned</option>
              <option value="In Progress">In Progress</option>
              <option value="Live">Live</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor=""
              className="block text-sm font-bold text-gray-700 mb-2"
            >
              Feedback Details
            </label>
            <textarea
              name=""
              id=""
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus: ring-2 focus:ring-blue-500"
              value={formData.description}
              onChange={(e) => {
                setFormData({ ...formData, description: e.target.value });
              }}
            ></textarea>
          </div>

          <div className="flex gap-2 md:gap-4 flex-col md:flex-row">
            {editingFeedback && (
              <button
                className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 md:py-3 rounded-lg font-semibold transition-all cursor-pointer"
                onClick={() => onDelete && onDelete(editingFeedback.id)}
              >
                Delete
              </button>
            )}
            <button
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 md:py-3 rounded-lg font-semibold transition-all cursor-pointer"
              onClick={onClose}
            >
              Cancel
            </button>

            <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 md:py-3 rounded-lg font-semibold transition-all cursor-pointer">
              {editingFeedback ? "Save Feedback" : "Add Feedback"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FeedbackModal;
