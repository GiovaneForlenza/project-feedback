import React from "react";
import RoadmapView from "../components/RoadmapView";
import { useSelector } from "react-redux";

function RoadmapPage() {
  const suggestions = useSelector((s) => s.feedback.suggestions);

  return (
    <div className="max-w-6xl mx-auto">
      <RoadmapView />
    </div>
  );
}

export default RoadmapPage;
