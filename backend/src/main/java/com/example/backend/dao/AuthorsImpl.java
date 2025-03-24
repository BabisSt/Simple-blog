package com.example.backend.dao;

import org.springframework.stereotype.Component;
import com.example.backend.model.Authors;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Component
public class AuthorsImpl implements AuthorsInterface {

    // Database connection details
    private static final String DB_URL = "jdbc:mysql://localhost:3306/raporto";
    private static final String DB_USERNAME = "root";
    private static final String DB_PASSWORD = "1234";

    @Override
    public List<Authors> getAllAuthors() {
        List<Authors> Authors = new ArrayList<>();

        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD);
                Statement stmt = conn.createStatement();
                ResultSet rs = stmt.executeQuery("SELECT * FROM authors");) {
            while (rs.next()) {
                Authors author = mapResultSetToAuthor(rs);
                Authors.add(author);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        System.out.println(Authors);
        return Authors;
    }

    @Override
    public Authors getAuthorById(String id) {
        Authors author = null;
        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD);
                PreparedStatement stmt = conn.prepareStatement("SELECT * FROM Authors WHERE id = ?")) {
            stmt.setString(1, id);
            try (ResultSet rs = stmt.executeQuery()) {
                if (rs.next()) {
                    author = mapResultSetToAuthor(rs);
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return author;
    }

    @Override
    public int insertAuthor(String name) {

        int rowsAffected = 0;

        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD)) {

            // Insert new row if userId is not found
            String insertQuery = "INSERT INTO authors (name) VALUES (?)";
            try (PreparedStatement insertStmt = conn.prepareStatement(insertQuery)) {
                insertStmt.setString(1, name);
                rowsAffected = insertStmt.executeUpdate();
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return rowsAffected;

    }

    @Override
    public int deleteAuthorById(String id) {
        int rowsAffected = 0;

        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD);
                PreparedStatement stmt = conn
                        .prepareStatement("DELETE FROM authors WHERE id = ?");) {
            stmt.setString(1, id);

            rowsAffected = stmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return rowsAffected;
    }

    private Authors mapResultSetToAuthor(ResultSet rs) throws SQLException {
        String id = String.valueOf(rs.getInt("id"));
        String name = rs.getString("name");

        return new Authors(id, name);
    }

}