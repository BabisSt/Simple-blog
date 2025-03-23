package com.example.backend.dao;

import org.springframework.stereotype.Component;
import com.example.backend.model.PinnedArticle;

import java.sql.*;

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

    @Override
    public int updatePinnedArticle(String oldLink, String newLink) {
        int rowsAffected = 0;

        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD);
                PreparedStatement stmt = conn.prepareStatement(
                        "UPDATE pinnedarticle SET link = ? WHERE link = ?")) {

            stmt.setString(1, newLink);
            stmt.setString(2, oldLink);

            rowsAffected = stmt.executeUpdate();

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return rowsAffected;
    }

    private PinnedArticle mapResultSetToPinnedArticle(ResultSet rs) throws SQLException {
        String link = rs.getString("link");

        return new PinnedArticle(link);
    }
}