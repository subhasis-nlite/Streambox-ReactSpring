package com.streambox.media.dto;

import com.streambox.media.entity.MediaType;
import jakarta.validation.constraints.*;

public class MediaRequest {

    @NotBlank(message = "Title is required")
    @Size(max = 255, message = "Title must not exceed 255 characters")
    private String title;

    @NotBlank(message = "Description is required")
    @Size(max = 2000, message = "Description must not exceed 2000 characters")
    private String description;

    @NotBlank(message = "Poster URL is required")
    private String posterUrl;

    @NotBlank(message = "Banner URL is required")
    private String bannerUrl;

    @NotBlank(message = "Thumbnail URL is required")
    private String thumbnailUrl;

    @NotBlank(message = "Video URL is required")
    private String videoUrl;

    private String trailerUrl;

    @NotBlank(message = "Genre is required")
    private String genre;

    @NotBlank(message = "Category is required")
    private String category;

    @NotNull(message = "Type is required")
    private MediaType type;

    @NotBlank(message = "Language is required")
    private String language;

    @NotBlank(message = "Maturity rating is required")
    private String maturityRating;

    @NotNull(message = "Featured flag is required")
    private Boolean featured;

    @NotNull(message = "Rating is required")
    @DecimalMin(value = "0.0", inclusive = true, message = "Rating must be at least 0")
    @DecimalMax(value = "10.0", inclusive = true, message = "Rating must be at most 10")
    private Double rating;

    @NotNull(message = "Release year is required")
    @Min(value = 1900, message = "Release year must be at least 1900")
    @Max(value = 2100, message = "Release year must not exceed 2100")
    private Integer releaseYear;

    @NotNull(message = "Duration is required")
    @Min(value = 1, message = "Duration must be at least 1 minute")
    private Integer durationMinutes;

    public MediaRequest() {
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getPosterUrl() {
        return posterUrl;
    }

    public String getBannerUrl() {
        return bannerUrl;
    }

    public String getThumbnailUrl() {
        return thumbnailUrl;
    }

    public String getVideoUrl() {
        return videoUrl;
    }

    public String getTrailerUrl() {
        return trailerUrl;
    }

    public String getGenre() {
        return genre;
    }

    public String getCategory() {
        return category;
    }

    public MediaType getType() {
        return type;
    }

    public String getLanguage() {
        return language;
    }

    public String getMaturityRating() {
        return maturityRating;
    }

    public Boolean getFeatured() {
        return featured;
    }

    public Double getRating() {
        return rating;
    }

    public Integer getReleaseYear() {
        return releaseYear;
    }

    public Integer getDurationMinutes() {
        return durationMinutes;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setPosterUrl(String posterUrl) {
        this.posterUrl = posterUrl;
    }

    public void setBannerUrl(String bannerUrl) {
        this.bannerUrl = bannerUrl;
    }

    public void setThumbnailUrl(String thumbnailUrl) {
        this.thumbnailUrl = thumbnailUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
    }

    public void setTrailerUrl(String trailerUrl) {
        this.trailerUrl = trailerUrl;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setType(MediaType type) {
        this.type = type;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public void setMaturityRating(String maturityRating) {
        this.maturityRating = maturityRating;
    }

    public void setFeatured(Boolean featured) {
        this.featured = featured;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public void setReleaseYear(Integer releaseYear) {
        this.releaseYear = releaseYear;
    }

    public void setDurationMinutes(Integer durationMinutes) {
        this.durationMinutes = durationMinutes;
    }
}