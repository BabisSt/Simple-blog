package com.example.backend.dao;

import com.example.backend.model.Posts;
import java.util.List;

public interface PostsInterface {
	List<Posts> getAllPosts();

	List<Posts> getPopularPosts();
	
	Posts getPostById(String PostId);

	List<Posts> getPostsByAuthorId(String authorId);

}
