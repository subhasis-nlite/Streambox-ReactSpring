import { useEffect, useState } from "react";
import {
  createMedia,
  deleteMedia,
  fetchMediaList,
  updateMedia,
} from "../api/mediaApi";
import MediaForm from "../components/MediaForm";

function AdminPage() {
  const [mediaList, setMediaList] = useState([]);
  const [editingMedia, setEditingMedia] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    loadMedia();
  }, []);

  async function loadMedia() {
    try {
      setLoading(true);
      setError("");
      const data = await fetchMediaList();
      setMediaList(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load media for admin panel.");
    } finally {
      setLoading(false);
    }
  }

  async function handleCreateMedia(formData) {
    try {
      setIsSubmitting(true);
      setError("");
      setSuccessMessage("");

      const createdMedia = await createMedia(formData);

      setMediaList((currentList) => [createdMedia, ...currentList]);
      setSuccessMessage("Media created successfully.");
    } catch (err) {
      console.error(err);
      setError(getApiErrorMessage(err, "Failed to create media."));
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleUpdateMedia(formData) {
    if (!editingMedia) {
      return;
    }

    try {
      setIsSubmitting(true);
      setError("");
      setSuccessMessage("");

      const updatedMedia = await updateMedia(editingMedia.id, formData);

      setMediaList((currentList) =>
        currentList.map((media) =>
          media.id === updatedMedia.id ? updatedMedia : media,
        ),
      );

      setEditingMedia(null);
      setSuccessMessage("Media updated successfully.");
    } catch (err) {
      console.error(err);
      setError(getApiErrorMessage(err, "Failed to update media."));
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleDeleteMedia(id, title) {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${title}"?`,
    );

    if (!confirmed) {
      return;
    }

    try {
      setError("");
      setSuccessMessage("");

      await deleteMedia(id);

      setMediaList((currentList) =>
        currentList.filter((media) => media.id !== id),
      );

      if (editingMedia && editingMedia.id === id) {
        setEditingMedia(null);
      }

      setSuccessMessage("Media deleted successfully.");
    } catch (err) {
      console.error(err);
      setError(getApiErrorMessage(err, "Failed to delete media."));
    }
  }

  function handleEditClick(media) {
    setEditingMedia(media);
    setSuccessMessage("");
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleCancelEdit() {
    setEditingMedia(null);
    setSuccessMessage("");
    setError("");
  }

  return (
    <div className="admin-page">
      <section className="admin-hero">
        <p className="admin-eyebrow">Version 2 Admin Panel</p>
        <h1>Manage StreamBox Media</h1>
        <p className="admin-intro">
          Create, edit, and delete media records using the backend CRUD APIs you
          built in Spring Boot.
        </p>
      </section>

      {successMessage && (
        <div className="alert-box success-alert">{successMessage}</div>
      )}
      {error && <div className="alert-box error-alert">{error}</div>}

      <div className="admin-layout">
        <section className="admin-form-panel">
          <MediaForm
            initialData={editingMedia}
            onSubmit={editingMedia ? handleUpdateMedia : handleCreateMedia}
            onCancel={handleCancelEdit}
            isSubmitting={isSubmitting}
            submitButtonText={editingMedia ? "Update Media" : "Create Media"}
          />
        </section>

        <section className="admin-list-panel">
          <div className="admin-list-header">
            <h2>Existing Media</h2>
            <p>{mediaList.length} item(s) in catalog</p>
          </div>

          {loading && <p className="status-text">Loading admin catalog...</p>}

          {!loading && mediaList.length === 0 && (
            <p className="status-text">No media available yet.</p>
          )}

          {!loading && mediaList.length > 0 && (
            <div className="admin-media-list">
              {mediaList.map((media) => (
                <article key={media.id} className="admin-media-card">
                  <img
                    src={media.thumbnailUrl || media.posterUrl}
                    alt={media.title}
                    className="admin-media-thumb"
                  />

                  <div className="admin-media-content">
                    <div className="admin-media-top">
                      <h3>{media.title}</h3>
                      <span className="type-badge">{media.type}</span>
                    </div>

                    <div className="admin-media-meta">
                      <span>{media.genre}</span>
                      <span>{media.category}</span>
                      <span>{media.releaseYear}</span>
                      <span>⭐ {media.rating}</span>
                    </div>

                    <p className="admin-media-description">
                      {media.description}
                    </p>

                    <div className="admin-media-actions">
                      <button
                        className="secondary-button"
                        onClick={() => handleEditClick(media)}
                      >
                        Edit
                      </button>

                      <button
                        className="danger-button"
                        onClick={() => handleDeleteMedia(media.id, media.title)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function getApiErrorMessage(error, fallbackMessage) {
  const validationErrors = error?.response?.data?.validationErrors;

  if (Array.isArray(validationErrors) && validationErrors.length > 0) {
    return validationErrors.join(" | ");
  }

  return error?.response?.data?.message || fallbackMessage;
}

export default AdminPage;
