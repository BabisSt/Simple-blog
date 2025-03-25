package com.example.backend.dao;

import com.example.backend.model.Posts;
import java.util.List;

public interface PostsInterface {
	List<Posts> getAllPosts();

	List<Posts> getPopularPosts();

	Posts getPostById(String PostId);

	boolean addPost(Posts post);

	int deletePostById(String id);

}
