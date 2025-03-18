package com.example.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Posts;
import com.example.backend.service.PostsService;
import com.example.backend.model.Authors;
import com.example.backend.service.AuthorsService;
import com.example.backend.model.PinnedArticle;
import com.example.backend.service.PinnedArticleService;

@RestController
@CrossOrigin(origins = "http://localhost:5173", maxAge = 3600, allowCredentials = "true")
@RequestMapping("/")
@SpringBootApplication
public class BackendApplication {

	private final PostsService postsService;
	private final AuthorsService authorsService;
	private final PinnedArticleService pinnedArticleService;

	public BackendApplication(PostsService postsService, AuthorsService authorsService,
			PinnedArticleService pinnedArticleService) {
		this.postsService = postsService;
		this.authorsService = authorsService;
		this.pinnedArticleService = pinnedArticleService;
	}

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@GetMapping("/posts")
	@ResponseBody
	public List<Posts> fetchPosts() {
		return postsService.getAllPosts();
	}

	@GetMapping("/posts/{PostId}")
	@ResponseBody
	public Posts fetchPostById(@PathVariable String PostId) {
		return postsService.getPostById(PostId);
	}

	// @GetMapping("/posts/{authorId}")
	// @ResponseBody
	// public List<Posts> fetchPostsByAuthorId(@PathVariable String authorId) {
	// return postsService.getPostsByAuthorId(authorId);
	// }

	@GetMapping("/authors")
	@ResponseBody
	public List<Authors> fetchAuthors() {
		return authorsService.getAllAuthors();
	}

	@GetMapping("/authors/{Id}")
	@ResponseBody
	public Authors fetchAuthorById(@PathVariable String authorId) {
		return authorsService.getAuthorById(authorId);
	}

	@GetMapping("/pinnedArticle")
	@ResponseBody
	public PinnedArticle fetchPinnedArticle() {
		return pinnedArticleService.getPinnedArticle();
	}

}
