import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchMediaById } from "../api/mediaApi";

function MediaDetailsPage() {
  const { id } = useParams();
  const [media, setMedia] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadMedia() {
      try {
        const data = await fetchMediaById(id);
        setMedia(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load media details.");
      } finally {
        setLoading(false);
      }
    }

    loadMedia();
  }, [id]);

  if (loading) {
    return <p className="status-text">Loading details...</p>;
  }

  if (error) {
    return <p className="status-text error-text">{error}</p>;
  }

  if (!media) {
    return <p className="status-text">Media not found.</p>;
  }

  return (
    <div className="details-page">
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>

      <img src={media.bannerUrl} alt={media.title} className="details-banner" />

      <div className="details-content">
        <h1 className="details-title">{media.title}</h1>

        <div className="details-meta-row">
          <span>{media.genre}</span>
          <span>{media.releaseYear}</span>
          <span>{media.durationMinutes} mins</span>
        </div>

        <p className="details-description">{media.description}</p>

        <div className="player-section">
          <video className="video-player" controls width="100%">
            <source src={media.videoUrl} type="video/mp4" />
            Your browser does not support video playback.
          </video>
        </div>
      </div>
    </div>
  );
}

export default MediaDetailsPage;
