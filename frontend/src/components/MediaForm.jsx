import { useEffect, useState } from "react";

const initialFormData = {
  title: "",
  description: "",
  posterUrl: "",
  bannerUrl: "",
  thumbnailUrl: "",
  videoUrl: "",
  trailerUrl: "",
  genre: "",
  category: "",
  type: "MOVIE",
  language: "",
  maturityRating: "",
  featured: false,
  rating: 0,
  releaseYear: new Date().getFullYear(),
  durationMinutes: 1,
};

function MediaForm({
  initialData,
  onSubmit,
  onCancel,
  isSubmitting,
  submitButtonText,
}) {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title ?? "",
        description: initialData.description ?? "",
        posterUrl: initialData.posterUrl ?? "",
        bannerUrl: initialData.bannerUrl ?? "",
        thumbnailUrl: initialData.thumbnailUrl ?? "",
        videoUrl: initialData.videoUrl ?? "",
        trailerUrl: initialData.trailerUrl ?? "",
        genre: initialData.genre ?? "",
        category: initialData.category ?? "",
        type: initialData.type ?? "MOVIE",
        language: initialData.language ?? "",
        maturityRating: initialData.maturityRating ?? "",
        featured: initialData.featured ?? false,
        rating: initialData.rating ?? 0,
        releaseYear: initialData.releaseYear ?? new Date().getFullYear(),
        durationMinutes: initialData.durationMinutes ?? 1,
      });
    } else {
      setFormData(initialFormData);
    }

    setErrors({});
  }, [initialData]);

  function validateForm() {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Title is required.";
    if (!formData.description.trim()) {
      newErrors.description = "Description is required.";
    }
    if (!formData.posterUrl.trim())
      newErrors.posterUrl = "Poster URL is required.";
    if (!formData.bannerUrl.trim())
      newErrors.bannerUrl = "Banner URL is required.";
    if (!formData.thumbnailUrl.trim()) {
      newErrors.thumbnailUrl = "Thumbnail URL is required.";
    }
    if (!formData.videoUrl.trim())
      newErrors.videoUrl = "Video URL is required.";
    if (!formData.genre.trim()) newErrors.genre = "Genre is required.";
    if (!formData.category.trim()) newErrors.category = "Category is required.";
    if (!formData.language.trim()) newErrors.language = "Language is required.";
    if (!formData.maturityRating.trim()) {
      newErrors.maturityRating = "Maturity rating is required.";
    }

    if (Number(formData.rating) < 0 || Number(formData.rating) > 10) {
      newErrors.rating = "Rating must be between 0 and 10.";
    }

    if (
      Number(formData.releaseYear) < 1900 ||
      Number(formData.releaseYear) > 2100
    ) {
      newErrors.releaseYear = "Release year must be between 1900 and 2100.";
    }

    if (Number(formData.durationMinutes) < 1) {
      newErrors.durationMinutes = "Duration must be at least 1 minute.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const payload = {
      ...formData,
      rating: Number(formData.rating),
      releaseYear: Number(formData.releaseYear),
      durationMinutes: Number(formData.durationMinutes),
      featured: Boolean(formData.featured),
    };

    await onSubmit(payload);
  }

  return (
    <form className="media-form" onSubmit={handleSubmit}>
      <div className="admin-form-header">
        <h2>{initialData ? "Edit Media" : "Add New Media"}</h2>
        <p>
          Fill in the media details below. This form is connected to your Spring
          Boot CRUD APIs.
        </p>
      </div>

      <div className="form-grid">
        <div className="form-field form-field-full">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter media title"
          />
          {errors.title && <p className="field-error">{errors.title}</p>}
        </div>

        <div className="form-field form-field-full">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter media description"
          />
          {errors.description && (
            <p className="field-error">{errors.description}</p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="posterUrl">Poster URL</label>
          <input
            id="posterUrl"
            name="posterUrl"
            value={formData.posterUrl}
            onChange={handleChange}
            placeholder="https://..."
          />
          {errors.posterUrl && (
            <p className="field-error">{errors.posterUrl}</p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="bannerUrl">Banner URL</label>
          <input
            id="bannerUrl"
            name="bannerUrl"
            value={formData.bannerUrl}
            onChange={handleChange}
            placeholder="https://..."
          />
          {errors.bannerUrl && (
            <p className="field-error">{errors.bannerUrl}</p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="thumbnailUrl">Thumbnail URL</label>
          <input
            id="thumbnailUrl"
            name="thumbnailUrl"
            value={formData.thumbnailUrl}
            onChange={handleChange}
            placeholder="https://..."
          />
          {errors.thumbnailUrl && (
            <p className="field-error">{errors.thumbnailUrl}</p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="videoUrl">Video URL</label>
          <input
            id="videoUrl"
            name="videoUrl"
            value={formData.videoUrl}
            onChange={handleChange}
            placeholder="https://..."
          />
          {errors.videoUrl && <p className="field-error">{errors.videoUrl}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="trailerUrl">Trailer URL</label>
          <input
            id="trailerUrl"
            name="trailerUrl"
            value={formData.trailerUrl}
            onChange={handleChange}
            placeholder="https://... (optional)"
          />
        </div>

        <div className="form-field">
          <label htmlFor="genre">Genre</label>
          <input
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            placeholder="Sci-Fi, Action..."
          />
          {errors.genre && <p className="field-error">{errors.genre}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="category">Category</label>
          <input
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Trending, Space..."
          />
          {errors.category && <p className="field-error">{errors.category}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="type">Type</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="MOVIE">MOVIE</option>
            <option value="SERIES">SERIES</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="language">Language</label>
          <input
            id="language"
            name="language"
            value={formData.language}
            onChange={handleChange}
            placeholder="English"
          />
          {errors.language && <p className="field-error">{errors.language}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="maturityRating">Maturity Rating</label>
          <input
            id="maturityRating"
            name="maturityRating"
            value={formData.maturityRating}
            onChange={handleChange}
            placeholder="PG-13, TV-14..."
          />
          {errors.maturityRating && (
            <p className="field-error">{errors.maturityRating}</p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="rating">Rating</label>
          <input
            id="rating"
            name="rating"
            type="number"
            step="0.1"
            min="0"
            max="10"
            value={formData.rating}
            onChange={handleChange}
          />
          {errors.rating && <p className="field-error">{errors.rating}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="releaseYear">Release Year</label>
          <input
            id="releaseYear"
            name="releaseYear"
            type="number"
            value={formData.releaseYear}
            onChange={handleChange}
          />
          {errors.releaseYear && (
            <p className="field-error">{errors.releaseYear}</p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="durationMinutes">Duration (minutes)</label>
          <input
            id="durationMinutes"
            name="durationMinutes"
            type="number"
            min="1"
            value={formData.durationMinutes}
            onChange={handleChange}
          />
          {errors.durationMinutes && (
            <p className="field-error">{errors.durationMinutes}</p>
          )}
        </div>

        <div className="form-field checkbox-field">
          <label htmlFor="featured" className="checkbox-label">
            <input
              id="featured"
              name="featured"
              type="checkbox"
              checked={formData.featured}
              onChange={handleChange}
            />
            Featured Content
          </label>
        </div>
      </div>

      <div className="form-actions">
        <button
          type="submit"
          className="primary-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : submitButtonText}
        </button>

        {initialData && (
          <button
            type="button"
            className="secondary-button"
            onClick={onCancel}
            disabled={isSubmitting}
          >
            Cancel Edit
          </button>
        )}
      </div>
    </form>
  );
}

export default MediaForm;
