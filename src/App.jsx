import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import RoadmapPage from "./pages/RoadmapPage";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
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
