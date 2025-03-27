package com.example.backend.dao;

import org.springframework.stereotype.Component;
import com.example.backend.model.Posts;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
    public int updatePostById(String Id, Posts post) {
        int rowsAffected = 0;

        // Fetch the current user details from the database
        Optional<Posts> currentPostOpt = Optional.ofNullable(selectPostById(Id));
        if (!currentPostOpt.isPresent()) {
            return 0;
        }
        Posts currentPost = currentPostOpt.get();

        if (post.getTitle() != null) {
            currentPost.setTitle(post.getTitle());
        }

        if (post.getPostedBy() != null) {
            currentPost.setPostedBy(post.getPostedBy());
        }

        if (post.getPostedTime() != null) {
            currentPost.setPostedTime(post.getPostedTime());
        }

        if (post.getPhotos() != null) {
            currentPost.setPhotos(post.getPhotos());
        }

        if (post.getClicks() != null) {
            currentPost.setClicks(post.getClicks());
        }

        if (post.getTags() != null) {
            currentPost.setTags(post.getTags());
        }

        if (post.getContent() != null) {
            currentPost.setContent(post.getContent());
        }

        if (post.getState() != null) {
            currentPost.setState(post.getState());
        }

        if (post.getAuthorId() != null) {
            currentPost.setAuthorId(post.getAuthorId());
        }

        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD);
                PreparedStatement stmt = conn.prepareStatement(
                        "UPDATE post SET title = ?, postedby = ? , postedtime = ? , content = ? , photos = ? , state = ? , clicks = ? , tags = ? ,author_id ? WHERE id = ?");) {
            stmt.setString(1, currentPost.getTitle());
            stmt.setString(2, currentPost.getPostedBy());
            stmt.setString(3, currentPost.getPostedTime());
            stmt.setString(4, currentPost.getContent());
            stmt.setString(5, currentPost.getPhotos());
            stmt.setString(6, currentPost.getState());
            stmt.setString(7, currentPost.getClicks());
            stmt.setString(8, currentPost.getTags());
            stmt.setString(9, currentPost.getAuthorId());
            stmt.setString(10, Id);

            rowsAffected = stmt.executeUpdate();

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return rowsAffected;
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
    public Posts selectPostById(String PostId) {
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
    public Posts getPostById(String postId) {
        Posts post = null;
        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD)) {
            // Fetch the post
            try (PreparedStatement stmt = conn.prepareStatement("SELECT * FROM Post WHERE id = ?")) {
                stmt.setString(1, postId);
                try (ResultSet rs = stmt.executeQuery()) {
                    if (rs.next()) {
                        post = mapResultSetToPost(rs);
                    }
                }
            }

            // If post exists, update the clicks count
            if (post != null) {
                try (PreparedStatement updateStmt = conn
                        .prepareStatement("UPDATE Post SET clicks = clicks + 1 WHERE id = ?")) {
                    updateStmt.setString(1, postId);
                    updateStmt.executeUpdate();
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return post;
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