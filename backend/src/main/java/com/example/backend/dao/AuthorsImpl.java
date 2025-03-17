package com.example.backend.dao;

import org.springframework.stereotype.Component;
import com.example.backend.model.Authors;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

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

    private Authors mapResultSetToAuthor(ResultSet rs) throws SQLException {
        String id = String.valueOf(rs.getInt("id"));
        String name = rs.getString("name");

        return new Authors(id, name);
    }

}