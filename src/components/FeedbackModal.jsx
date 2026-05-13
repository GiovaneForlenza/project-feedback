import { X } from "lucide-react";
import React from "react";

function FeedbackModal() {
  return (
    <div className="fixed inset-0 backdrop-blur-xs bg-gray-900/90   flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-lg w-full p-6 max-h-[900vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Create New Feedback
          </h2>
          <button className="text-gray-400 hover:text-gray-600">
            <X size={24} className="cursor-pointer" />
          </button>
        </div>
        <form action="">
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
            ></textarea>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-all cursor-pointer">
              Delete
            </button>
            <button className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-semibold transition-all cursor-pointer">
              Cancel
            </button>

            <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-all cursor-pointer">
              Add Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FeedbackModal;
