package com.example.backend.dao;

import org.springframework.stereotype.Component;
import com.example.backend.model.PinnedArticle;
import com.example.backend.model.Posts;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Component
public class PinnedArticleImpl implements PinnedArticleInterface {

    // Database connection details
    private static final String DB_URL = "jdbc:mysql://localhost:3306/raporto";
    private static final String DB_USERNAME = "root";
    private static final String DB_PASSWORD = "1234";

    @Override
    public PinnedArticle getPinnedArticle() {
        PinnedArticle pinnedArticle = null;

        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD);
                Statement stmt = conn.createStatement();
                ResultSet rs = stmt.executeQuery("SELECT link FROM pinnedarticle ");) {
            while (rs.next()) {
                pinnedArticle = mapResultSetToPinnedArticle(rs);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return pinnedArticle;
    }

    private PinnedArticle mapResultSetToPinnedArticle(ResultSet rs) throws SQLException {
        String link = rs.getString("link");

        return new PinnedArticle(link);
    }
}