package com.example.backend.dao;

import com.example.backend.model.Posts;
import java.util.List;

public interface PostsInterface {
    List<Posts> getAllPosts();

	List<Posts> getPostsById(String Id);

	List<Posts> getPostsByAuthorId(String authorId);
}
