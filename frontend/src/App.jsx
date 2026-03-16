import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MediaDetailsPage from "./pages/MediaDetailsPage";

function App() {
  return (
    <div>
      <header className="app-header">
        <div className="app-header-content">
          <Link to="/" className="logo">
            StreamBox
          </Link>
        </div>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/media/:id" element={<MediaDetailsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
