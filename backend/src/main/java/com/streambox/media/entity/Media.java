package com.streambox.media.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "media")
public class Media {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(length = 2000, nullable = false)
    private String description;

    @Column(name = "poster_url", nullable = false)
    private String posterUrl;

    @Column(name = "banner_url", nullable = false)
    private String bannerUrl;

    @Column(name = "thumbnail_url", nullable = false)
    private String thumbnailUrl;

    @Column(name = "video_url", nullable = false)
    private String videoUrl;

    @Column(name = "trailer_url")
    private String trailerUrl;

    @Column(nullable = false)
    private String genre;

    @Column(nullable = false)
    private String category;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private MediaType type;

    @Column(nullable = false)
    private String language;

    @Column(name = "maturity_rating", nullable = false)
    private String maturityRating;

    @Column(nullable = false)
    private Boolean featured = false;

    @Column(nullable = false)
    private Double rating;

    @Column(name = "release_year", nullable = false)
    private Integer releaseYear;

    @Column(name = "duration_minutes", nullable = false)
    private Integer durationMinutes;

    public Media() {
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