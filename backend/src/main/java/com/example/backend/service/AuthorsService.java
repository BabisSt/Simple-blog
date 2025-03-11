package com.example.backend.service;

import com.example.backend.dao.AuthorsInterface;
import com.example.backend.model.Authors;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthorsService {

    private AuthorsInterface authorsInterface;

    public AuthorsService(AuthorsInterface authorsInterface) {
        this.authorsInterface = authorsInterface;
    }

    public List<Authors> getAllAuthors() {
        return authorsInterface.getAllAuthors();
    }

	public List<Authors> getAuthorById(String authorId) {
        return authorsInterface.getAuthorById(authorId);
    }
}
