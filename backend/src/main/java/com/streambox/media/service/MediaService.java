package com.streambox.media.service;

import com.streambox.media.dto.MediaResponse;
import com.streambox.media.entity.Media;
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
                .orElseThrow(() -> new RuntimeException("Media not found with id: " + id));

        return mapToResponse(media);
    }

    private MediaResponse mapToResponse(Media media) {
        return new MediaResponse(
                media.getId(),
                media.getTitle(),
                media.getDescription(),
                media.getPosterUrl(),
                media.getBannerUrl(),
                media.getVideoUrl(),
                media.getGenre(),
                media.getReleaseYear(),
                media.getDurationMinutes()
        );
    }
}