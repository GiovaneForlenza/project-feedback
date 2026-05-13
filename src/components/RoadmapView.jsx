import { ArrowLeft } from "lucide-react";
import React from "react";

function RoadmapView() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-gray-800 rounded-xl p-4 flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-white hover:text-gray-300 font-semibold">
            <ArrowLeft size={20}/>
            Go Back

          </button>
        </div>
      </div>
    </div>
  );
}

export default RoadmapView;













