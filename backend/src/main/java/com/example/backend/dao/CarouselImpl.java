package com.example.backend.dao;

import org.springframework.stereotype.Component;
import com.example.backend.model.Carousel;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Component
public class CarouselImpl implements CarouselInterface {

    // Database connection details
    private static final String DB_URL = "jdbc:mysql://localhost:3306/raporto";
    private static final String DB_USERNAME = "root";
    private static final String DB_PASSWORD = "1234";

    // @Override
    // public Carousel getAllCarousel() {
    // String[] carousel = null;

    // try (Connection conn = DriverManager.getConnection(DB_URL, DB_USERNAME,
    // DB_PASSWORD);
    // Statement stmt = conn.createStatement();
    // ResultSet rs = stmt.executeQuery("SELECT link FROM Carousel ");) {
    // while (rs.next()) {
    // carousel = mapResultSetToCarousel(rs);
    // }
    // } catch (SQLException e) {
    // e.printStackTrace();
    // }

    // return carousel;
    // }

    // private Trailer mapResultSetToCarousel(ResultSet rs) throws SQLException {
    // String link = rs.getString("link");

    // return new Carousel(link);
    // }
}