package com.example.backend.dao;

import org.springframework.stereotype.Component;
import com.example.backend.model.Soundtrack;
import com.example.backend.model.Posts;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Component
public class SoundtrackImpl implements SoundtrackInterface {

    // Database connection details
    private static final String DB_URL = "jdbc:mysql://localhost:3306/raporto";
    private static final String DB_USERNAME = "root";
    private static final String DB_PASSWORD = "1234";

    @Override
    public Soundtrack getSoundtrack() {
        Soundtrack soundtrack = null;

        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD);
                Statement stmt = conn.createStatement();
                ResultSet rs = stmt.executeQuery("SELECT link FROM soundtrack ");) {
            while (rs.next()) {
                soundtrack = mapResultSetToSoundtrack(rs);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return soundtrack;
    }

    private Soundtrack mapResultSetToSoundtrack(ResultSet rs) throws SQLException {
        String link = rs.getString("link");

        return new Soundtrack(link);
    }
}