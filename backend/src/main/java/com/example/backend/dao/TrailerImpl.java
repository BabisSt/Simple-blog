package com.example.backend.dao;

import org.springframework.stereotype.Component;
import com.example.backend.model.Trailer;

import java.sql.*;

@Component
public class TrailerImpl implements TrailerInterface {

    // Database connection details
    private static final String DB_URL = "jdbc:mysql://localhost:3306/raporto";
    private static final String DB_USERNAME = "root";
    private static final String DB_PASSWORD = "1234";

    @Override
    public Trailer getTrailer() {
        Trailer trailer = null;

        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD);
                Statement stmt = conn.createStatement();
                ResultSet rs = stmt.executeQuery("SELECT link FROM Trailer ");) {
            while (rs.next()) {
                trailer = mapResultSetToTrailer(rs);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return trailer;
    }

    private Trailer mapResultSetToTrailer(ResultSet rs) throws SQLException {
        String link = rs.getString("link");

        return new Trailer(link);
    }
}