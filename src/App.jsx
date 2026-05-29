import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { initialComments, initialFeedbacks } from "./data/initialData";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import RoadmapPage from "./pages/RoadmapPage";

function App() {
  useEffect(() => {
    if (!localStorage.getItem("feedbacks"))
      localStorage.setItem("feedbacks", JSON.stringify(initialFeedbacks));
    if (!localStorage.getItem("comments"))
      localStorage.setItem("comments", JSON.stringify(initialComments));
  }, []);

  const location = useLocation();

  const isEditRoute =
    location.pathname.endsWith("/edit") || location.pathname === "/add";
  return (
    <div
      className={`min-h-screen ${isEditRoute ? "h-screen overflow-hidden" : ""} bg-gray-50 p-4 md:p-8`}
    >
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/feedback/:id" element={<DetailPage />} />
          <Route path="/feedback/:id/edit" element={<DetailPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/add" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
