package com.example.backend.dao;

import com.example.backend.model.Authors;
import java.util.List;

public interface AuthorsInterface {
    List<Authors> getAllAuthors();

    Authors getAuthorById(String id);
}
