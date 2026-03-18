import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MediaDetailsPage from "./pages/MediaDetailsPage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <div>
      <header className="app-header">
        <div className="app-header-content">
          <Link to="/" className="logo">
            StreamBox
          </Link>

          <nav className="app-nav">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/admin" className="nav-link">
              Admin
            </Link>
          </nav>
        </div>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/media/:id" element={<MediaDetailsPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
