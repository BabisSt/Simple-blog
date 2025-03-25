package com.example.backend.controllers;

import com.example.backend.model.Posts;

import com.example.backend.service.PostsService;

import com.example.backend.dao.PostsImpl;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/posts")
public class PostController {

    private final PostsService postsService;
    private final PostsImpl postsImpl;

    public PostController(PostsService postsService, PostsImpl postsImpl) {
        this.postsService = postsService;
        this.postsImpl = postsImpl;
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/add")
    public boolean addPost(@RequestBody Posts post) {
        return postsImpl.addPost(post);
    }

    @DeleteMapping("/deletePostById/{id}")
    public ResponseEntity<String> deletePost(@PathVariable("id") String id) {
        int result = postsImpl.deletePostById(id);
        if (result > 0) {
            return ResponseEntity.ok("Post deleted successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting Post.");
        }
    }
}
