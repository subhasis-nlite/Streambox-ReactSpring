import { Link } from "react-router-dom";

function MediaCard({ media }) {
  return (
    <Link to={`/media/${media.id}`} className="media-card">
      <img
        src={media.thumbnailUrl || media.posterUrl}
        alt={media.title}
        className="media-poster"
      />

      <div className="media-card-body">
        <h3 className="media-title">{media.title}</h3>
        <p className="media-meta">{media.genre}</p>
        <p className="media-meta">{media.releaseYear}</p>
      </div>
    </Link>
  );
}

export default MediaCard;
