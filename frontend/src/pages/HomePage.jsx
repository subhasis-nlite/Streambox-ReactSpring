import { useEffect, useState } from "react";
import { fetchMediaList } from "../api/mediaApi";
import MediaCard from "../components/MediaCard";

function HomePage() {
  const [mediaList, setMediaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadMedia() {
      try {
        const data = await fetchMediaList();
        setMediaList(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load media catalog.");
      } finally {
        setLoading(false);
      }
    }

    loadMedia();
  }, []);

  return (
    <div>
      <section className="hero-section">
        <div className="hero-overlay">
          <p className="hero-subtitle">
            Streaming UI + Recommendations Learning Project
          </p>
          <h1 className="hero-title">Welcome to StreamBox</h1>
          <p className="hero-description">
            Browse premium-style media cards powered by a React frontend and
            Spring Boot backend.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="section-header">
          <h2>Featured Titles</h2>
        </div>

        {loading && <p className="status-text">Loading media...</p>}
        {error && <p className="status-text error-text">{error}</p>}

        {!loading && !error && (
          <div className="media-grid">
            {mediaList.map((media) => (
              <MediaCard key={media.id} media={media} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default HomePage;
