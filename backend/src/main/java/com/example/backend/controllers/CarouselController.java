package com.example.backend.controllers;

import com.example.backend.dao.CarouselImpl;
import com.example.backend.model.Carousel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/carousel")
public class CarouselController {

    @Autowired
    private CarouselImpl carouselService;

    @GetMapping("/getAll")
    public ResponseEntity<Carousel> getAllCarousel() {
        Carousel carousel = carouselService.getAllCarousel();
        return ResponseEntity.ok(carousel);
    }

    @PutMapping("/updateCarousel")
    public ResponseEntity<String> updateCarousel(@RequestBody List<String> links) {
        int rowsAffected = carouselService.updateCarousel(links);

        if (rowsAffected > 0) {
            return ResponseEntity.ok("Carousel links updated successfully!");
        } else {
            return ResponseEntity.status(500).body("Failed to update carousel links.");
        }
    }

}
