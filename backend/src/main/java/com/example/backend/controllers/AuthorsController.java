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

import com.example.backend.dao.AuthorsImpl;
import com.example.backend.model.Authors;
import com.example.backend.service.AuthorsService;

@RestController
public class AuthorsController {

    private final AuthorsService authorsService;
    private final AuthorsImpl authorsImpl;

    public AuthorsController(AuthorsService authorsService, AuthorsImpl authorsImpl) {
        this.authorsService = authorsService;
        this.authorsImpl = authorsImpl;
    }

    @RequestMapping(method = RequestMethod.POST, path = "/insertAuthor/{name}")
    public ResponseEntity<String> insertAuthor(@PathVariable("name") String name,
            @RequestBody Authors author) {
        AuthorsImpl authorsImpl = new AuthorsImpl();
        int result = authorsImpl.insertAuthor(name);
        if (result > 0) {
            return ResponseEntity.ok("Author inserted successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error inserting Author.");
        }
    }

    @DeleteMapping("/deleteAuthorById/{id}")
    public ResponseEntity<String> deleteAuthor(@PathVariable("id") String id) {
        int result = authorsImpl.deleteAuthorById(id);
        if (result > 0) {
            return ResponseEntity.ok("Author deleted successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting Author.");
        }
    }

}