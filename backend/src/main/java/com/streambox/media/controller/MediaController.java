package com.streambox.media.controller;

import com.streambox.media.dto.MediaRequest;
import com.streambox.media.dto.MediaResponse;
import com.streambox.media.service.MediaService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/media")
@CrossOrigin(origins = "http://localhost:5173")
public class MediaController {

    private final MediaService mediaService;

    public MediaController(MediaService mediaService) {
        this.mediaService = mediaService;
    }

    @GetMapping
    public List<MediaResponse> getAllMedia() {
        return mediaService.getAllMedia();
    }

    @GetMapping("/{id}")
    public MediaResponse getMediaById(@PathVariable Long id) {
        return mediaService.getMediaById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public MediaResponse createMedia(@Valid @RequestBody MediaRequest request) {
        return mediaService.createMedia(request);
    }

    @PutMapping("/{id}")
    public MediaResponse updateMedia(@PathVariable Long id, @Valid @RequestBody MediaRequest request) {
        return mediaService.updateMedia(id, request);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteMedia(@PathVariable Long id) {
        mediaService.deleteMedia(id);
    }
}