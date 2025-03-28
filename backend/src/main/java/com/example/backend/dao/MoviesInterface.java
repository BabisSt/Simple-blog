package com.example.backend.dao;

import com.example.backend.model.Movies;
import java.util.List;

public interface MoviesInterface {
    List<Movies> getAllMovies();

    int insertMovie(String name);

    int deleteMovieById(String id);
}
