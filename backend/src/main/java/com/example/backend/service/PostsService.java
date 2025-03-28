package com.example.backend.service;

import com.example.backend.dao.PostsInterface;
import com.example.backend.model.Posts;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostsService {

    private PostsInterface postsInterface;

    public PostsService(PostsInterface postsInterface) {
        this.postsInterface = postsInterface;
    }

    public List<Posts> getAllPosts() {
        return postsInterface.getAllPosts();
    }

	public List<Posts> getPopularPosts() {
        return postsInterface.getPopularPosts();
    }


    public Posts getPostById(String PostId) {
        return postsInterface.getPostById(PostId);
    }

    // public List<Posts> getPostsByAuthorId(String authorId) {
    // return postsInterface.getPostsByAuthorId(authorId);
    // }
}
