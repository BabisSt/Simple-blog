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
                ResultSet rs = stmt.executeQuery("SELECT * FROM posts ORDER BY clicks DESC FETCH FIRST 3 ROWS ONLY");) {
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

    // @Override
    // public List<Posts> getPostsByAuthorId(String authorId) {
    // List<Posts> postsList = new ArrayList<>();
    // try (Connection conn = DriverManager.getConnection(DB_URL, DB_USERNAME,
    // DB_PASSWORD);
    // PreparedStatement stmt = conn.prepareStatement("SELECT * FROM Posts WHERE
    // author_id = ?")) {

    // stmt.setString(1, authorId);
    // try (ResultSet rs = stmt.executeQuery()) {
    // while (rs.next()) {
    // Posts post = mapResultSetToPost(rs);
    // postsList.add(post);
    // }
    // }
    // } catch (SQLException e) {
    // e.printStackTrace();
    // }
    // return postsList;
    // }

    private Posts mapResultSetToPost(ResultSet rs) throws SQLException {
        String id = String.valueOf(rs.getInt("id"));
        String title = rs.getString("title");
        String postedBy = rs.getString("postedBy");
        String postedTime = rs.getString("postedTime");
        String photos = rs.getString("photos");
        String clicks = rs.getString("clicks");
        String tags = rs.getString("tags");
        String content = rs.getString("content");

        return new Posts(id, title, postedBy, postedTime, photos, clicks, tags, content);
    }

    @Override
    public List<Posts> getPostsByAuthorId(String authorId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getPostsByAuthorId'");
    }

}