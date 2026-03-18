package com.streambox.media.dto;

import com.streambox.media.entity.MediaType;

public class MediaResponse {

    private Long id;
    private String title;
    private String description;
    private String posterUrl;
    private String bannerUrl;
    private String thumbnailUrl;
    private String videoUrl;
    private String trailerUrl;
    private String genre;
    private String category;
    private MediaType type;
    private String language;
    private String maturityRating;
    private Boolean featured;
    private Double rating;
    private Integer releaseYear;
    private Integer durationMinutes;

    public MediaResponse() {
    }

    public MediaResponse(
            Long id,
            String title,
            String description,
            String posterUrl,
            String bannerUrl,
            String thumbnailUrl,
            String videoUrl,
            String trailerUrl,
            String genre,
            String category,
            MediaType type,
            String language,
            String maturityRating,
            Boolean featured,
            Double rating,
            Integer releaseYear,
            Integer durationMinutes
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.posterUrl = posterUrl;
        this.bannerUrl = bannerUrl;
        this.thumbnailUrl = thumbnailUrl;
        this.videoUrl = videoUrl;
        this.trailerUrl = trailerUrl;
        this.genre = genre;
        this.category = category;
        this.type = type;
        this.language = language;
        this.maturityRating = maturityRating;
        this.featured = featured;
        this.rating = rating;
        this.releaseYear = releaseYear;
        this.durationMinutes = durationMinutes;
    }

    public Long getId() {
        return id;
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

    public void setId(Long id) {
        this.id = id;
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