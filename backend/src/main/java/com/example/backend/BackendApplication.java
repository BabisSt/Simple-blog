package com.example.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;
import java.util.Optional;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.core.env.Environment;

import com.example.backend.model.Posts;
import com.example.backend.service.PostsService;
import com.example.backend.model.Authors;
import com.example.backend.service.AuthorsService;

@RestController
@CrossOrigin(origins = "http://localhost:5173", maxAge = 3600, allowCredentials = "true")
@RequestMapping("/")
@SpringBootApplication
public class BackendApplication {

	private final PostsService postsService;
	private final AuthorsService authorsService;

	public BackendApplication(PostsService postsService,AuthorsService authorsService) {
		this.postsService = postsService;
		this.authorsService = authorsService;
	}

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@GetMapping("/posts")
	@ResponseBody
	public List<Posts> fetchPosts() {
		return postsService.getAllPosts();
	}

	@GetMapping("/posts/{Id}")
	@ResponseBody
	public List<posts> fetchPostsById(@PathVariable String Id) {
		return postsService.getPostsById(Id);
	}

	@GetMapping("/posts/{authorId}")
	@ResponseBody
	public List<posts> fetchPostsByAuthorId(@PathVariable String authorId) {
		return postsService.getPostsByAuthorId(authorId);
	}

	@GetMapping("/authors")
	@ResponseBody
	public List<Authors> fetchAuthors() {
		return authorsService.getAllAuthors();
	}

	@GetMapping("/authors/{Id}")
	@ResponseBody
	public List<Authors> fetchAuthorById(@PathVariable String authorId) {
		return authorsService.getAuthorById(authorId);
	}

}
