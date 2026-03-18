package com.streambox.media.service;

import com.streambox.media.dto.MediaRequest;
import com.streambox.media.dto.MediaResponse;
import com.streambox.media.entity.Media;
import com.streambox.media.exception.ResourceNotFoundException;
import com.streambox.media.repository.MediaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MediaService {

    private final MediaRepository mediaRepository;

    public MediaService(MediaRepository mediaRepository) {
        this.mediaRepository = mediaRepository;
    }

    public List<MediaResponse> getAllMedia() {
        return mediaRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    public MediaResponse getMediaById(Long id) {
        Media media = mediaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Media not found with id: " + id));

        return mapToResponse(media);
    }

    public MediaResponse createMedia(MediaRequest request) {
        Media media = new Media();
        mapRequestToEntity(request, media);

        Media savedMedia = mediaRepository.save(media);
        return mapToResponse(savedMedia);
    }

    public MediaResponse updateMedia(Long id, MediaRequest request) {
        Media existingMedia = mediaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Media not found with id: " + id));

        mapRequestToEntity(request, existingMedia);

        Media updatedMedia = mediaRepository.save(existingMedia);
        return mapToResponse(updatedMedia);
    }

    public void deleteMedia(Long id) {
        Media existingMedia = mediaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Media not found with id: " + id));

        mediaRepository.delete(existingMedia);
    }

    private void mapRequestToEntity(MediaRequest request, Media media) {
        media.setTitle(request.getTitle());
        media.setDescription(request.getDescription());
        media.setPosterUrl(request.getPosterUrl());
        media.setBannerUrl(request.getBannerUrl());
        media.setThumbnailUrl(request.getThumbnailUrl());
        media.setVideoUrl(request.getVideoUrl());
        media.setTrailerUrl(request.getTrailerUrl());
        media.setGenre(request.getGenre());
        media.setCategory(request.getCategory());
        media.setType(request.getType());
        media.setLanguage(request.getLanguage());
        media.setMaturityRating(request.getMaturityRating());
        media.setFeatured(request.getFeatured());
        media.setRating(request.getRating());
        media.setReleaseYear(request.getReleaseYear());
        media.setDurationMinutes(request.getDurationMinutes());
    }

    private MediaResponse mapToResponse(Media media) {
        return new MediaResponse(
                media.getId(),
                media.getTitle(),
                media.getDescription(),
                media.getPosterUrl(),
                media.getBannerUrl(),
                media.getThumbnailUrl(),
                media.getVideoUrl(),
                media.getTrailerUrl(),
                media.getGenre(),
                media.getCategory(),
                media.getType(),
                media.getLanguage(),
                media.getMaturityRating(),
                media.getFeatured(),
                media.getRating(),
                media.getReleaseYear(),
                media.getDurationMinutes()
        );
    }
}