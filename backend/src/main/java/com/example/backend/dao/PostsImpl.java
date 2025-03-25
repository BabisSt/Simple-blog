package com.example.backend.dao;

import org.springframework.stereotype.Component;
import com.example.backend.model.Posts;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Component
public class PostsImpl implements PostsInterface {

    // Database connection details
    private static final String DB_URL = "jdbc:mysql://localhost:3306/raporto";
    private static final String DB_USERNAME = "root";
    private static final String DB_PASSWORD = "1234";

    @Override
    public List<Posts> getAllPosts() {
        List<Posts> Posts = new ArrayList<>();

        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD);
                Statement stmt = conn.createStatement();
                ResultSet rs = stmt.executeQuery("SELECT * FROM Post");) {
            while (rs.next()) {
                Posts post = mapResultSetToPost(rs);
                Posts.add(post);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return Posts;
    }

    @Override
    public List<Posts> getPopularPosts() {
        List<Posts> Posts = new ArrayList<>();

        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD);
                Statement stmt = conn.createStatement();
                ResultSet rs = stmt.executeQuery("SELECT * FROM post ORDER BY clicks DESC LIMIT 3");) {
            while (rs.next()) {
                Posts post = mapResultSetToPost(rs);
                Posts.add(post);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return Posts;
    }

    @Override
    public Posts getPostById(String PostId) {
        Posts postsList = null;
        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD);
                PreparedStatement stmt = conn.prepareStatement("SELECT * FROM Post WHERE id = ?")) {

            stmt.setString(1, PostId);
            try (ResultSet rs = stmt.executeQuery()) {
                while (rs.next()) {
                    Posts post = mapResultSetToPost(rs);
                    postsList = post;
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return postsList;
    }

    @Override
    public boolean addPost(Posts post) {
        String insertSQL = "INSERT INTO Post (title, postedBy, postedTime, photos, clicks, tags, content, state, author_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD);
                PreparedStatement stmt = conn.prepareStatement(insertSQL)) {

            stmt.setString(1, post.getTitle());
            stmt.setString(2, post.getPostedBy());
            stmt.setString(3, post.getPostedTime());
            stmt.setString(4, post.getPhotos());
            stmt.setString(5, post.getClicks());
            stmt.setString(6, post.getTags());
            stmt.setString(7, post.getContent());
            stmt.setString(8, post.getState());
            stmt.setString(9, post.getAuthorId());

            int rowsAffected = stmt.executeUpdate();
            return rowsAffected > 0; // Return true if post was successfully added
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return false;
    }

    @Override
    public int deletePostById(String id) {
        int rowsAffected = 0;

        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD);
                PreparedStatement stmt = conn.prepareStatement("DELETE FROM Post WHERE id = ?")) {

            stmt.setString(1, id);
            rowsAffected = stmt.executeUpdate();

            if (rowsAffected > 0) {
                System.out.println("Post with ID " + id + " deleted successfully.");
            } else {
                System.out.println("No Post found with ID " + id);
            }
        } catch (SQLException e) {
            e.printStackTrace(); // This will log the full stack trace to identify the issue
        }
        return rowsAffected;
    }

    private Posts mapResultSetToPost(ResultSet rs) throws SQLException {
        String id = String.valueOf(rs.getInt("id"));
        String title = rs.getString("title");
        String postedBy = rs.getString("postedBy");
        String postedTime = rs.getString("postedTime");
        String photos = rs.getString("photos");
        String clicks = rs.getString("clicks");
        String tags = rs.getString("tags");
        String content = rs.getString("content");
        String state = rs.getString("state");
        String author_id = rs.getString("author_id");

        return new Posts(id, title, postedBy, postedTime, photos, clicks, tags, content, state, author_id);
    }

}