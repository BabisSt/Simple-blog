package com.example.backend.dao;

import org.springframework.stereotype.Component;
import com.example.backend.model.Movies;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Component
public class MoviesImpl implements MoviesInterface {

    // Database connection details
    private static final String DB_URL = "jdbc:mysql://localhost:3306/raporto";
    private static final String DB_USERNAME = "root";
    private static final String DB_PASSWORD = "1234";

    @Override
    public List<Movies> getAllMovies() {
        List<Movies> movies = new ArrayList<>();

        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD);
                Statement stmt = conn.createStatement();
                ResultSet rs = stmt.executeQuery("SELECT * FROM movies");) {
            while (rs.next()) {
                Movies movie = mapResultSetToMovie(rs);
                movies.add(movie);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return movies;
    }

    @Override
    public int insertMovie(String name) {

        int rowsAffected = 0;

        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD)) {

            // Insert new row if id is not found
            String insertQuery = "INSERT INTO movies (name) VALUES (?)";
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
    public int deleteMovieById(String id) {
        int rowsAffected = 0;

        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD);
                PreparedStatement stmt = conn
                        .prepareStatement("DELETE FROM Movies WHERE id = ?");) {
            stmt.setString(1, id);

            rowsAffected = stmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return rowsAffected;
    }

    private Movies mapResultSetToMovie(ResultSet rs) throws SQLException {
        String id = String.valueOf(rs.getInt("id"));
        String name = rs.getString("name");

        return new Movies(id, name);
    }

}