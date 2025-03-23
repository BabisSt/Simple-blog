package com.example.backend.controllers;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dao.MoviesImpl;
import com.example.backend.model.Movies;
import com.example.backend.service.MoviesService;

@RestController
public class MoviesController {

    private final MoviesService moviesService;
    private final MoviesImpl moviesImpl;

    public MoviesController(MoviesService moviesService, MoviesImpl moviesImpl) {
        this.moviesService = moviesService;
        this.moviesImpl = moviesImpl;
    }

    @RequestMapping(method = RequestMethod.POST, path = "/insertMovie/{name}")
    public ResponseEntity<String> insertMovie(@PathVariable("name") String name,
            @RequestBody Movies Movie) {
        MoviesImpl moviesImpl = new MoviesImpl();
        int result = moviesImpl.insertMovie(name);
        if (result > 0) {
            return ResponseEntity.ok("Movie inserted successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error inserting Movie.");
        }
    }

    @DeleteMapping("/deleteMovieById/{id}")
    public ResponseEntity<String> deleteMovie(@PathVariable("id") String id) {
        int result = moviesImpl.deleteMovieById(id);
        if (result > 0) {
            return ResponseEntity.ok("Movie deleted successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting Movie.");
        }
    }

}