package com.example.backend.dao;

import org.springframework.stereotype.Repository;
import com.example.backend.model.User;
import java.sql.*;

@Repository
public class UserImpl implements UserInterface {

    private static final String DB_URL = "jdbc:mysql://localhost:3306/raporto";
    private static final String DB_USERNAME = "root";
    private static final String DB_PASSWORD = "1234";

    @Override
    public User getUser() {
        User user = null;
        String sql = "SELECT email, password FROM user LIMIT 1"; // Get the only user in the table

        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USERNAME, DB_PASSWORD);
                PreparedStatement pstmt = conn.prepareStatement(sql);
                ResultSet rs = pstmt.executeQuery()) {

            if (rs.next()) {
                user = new User(rs.getString("email"), rs.getString("password"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return user;
    }
}
