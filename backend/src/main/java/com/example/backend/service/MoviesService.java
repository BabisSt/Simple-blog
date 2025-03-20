package com.example.backend.service;

import com.example.backend.dao.MoviesInterface;
import com.example.backend.model.Movies;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MoviesService {

    private MoviesInterface moviesInterface;

    public MoviesService(MoviesInterface moviesInterface) {
        this.moviesInterface = moviesInterface;
    }

    public List<Movies> getAllMovies() {
        return moviesInterface.getAllMovies();
    }
}
