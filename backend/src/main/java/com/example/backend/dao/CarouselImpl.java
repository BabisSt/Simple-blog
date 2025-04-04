package com.example.backend.dao;

import com.example.backend.model.Carousel;
import org.springframework.stereotype.Component;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Component
public class CarouselImpl implements CarouselInterface {

    // Database connection details
    private static final String DB_URL = "jdbc:mysql://localhost:3306/raporto";
    private static final String DB_USERNAME = "root";
    private static final String DB_PASSWORD = "1234";

    @Override
    public Carousel getAllCarousel() {
        Carousel carousel = null;

        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD);
                Statement stmt = conn.createStatement();
                ResultSet rs = stmt.executeQuery("SELECT links FROM carousel")) {
            while (rs.next()) {
                carousel = mapResultSetToCarousel(rs);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return carousel;
    }

    @Override
    public int updateCarousel(List<String> newLinks) {
        int rowsAffected = 0;
        String linksString = newLinks.toString();

        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD);
                PreparedStatement ps = conn.prepareStatement("UPDATE carousel SET links = ?")) {
            ps.setString(1, linksString);
            rowsAffected = ps.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return rowsAffected;
    }

    private Carousel mapResultSetToCarousel(ResultSet rs) throws SQLException {
        String linksString = rs.getString("links");

        // Remove the brackets and split by comma
        linksString = linksString.replace("[", "").replace("]", "");
        String[] linksArray = linksString.split(",");

        // Trim each link
        List<String> links = new ArrayList<>();
        for (String link : linksArray) {
            links.add(link.trim());
        }

        return new Carousel(links);
    }
}
