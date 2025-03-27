package com.example.backend.service;

import com.example.backend.dao.UserImpl;
import com.example.backend.model.User;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserImpl userDao;

    public UserService(UserImpl userDao) {
        this.userDao = userDao;
    }

    // Get user from DB
    public User getUser() {
        return userDao.getUser();
    }

    // Authenticate user
    public boolean authenticateUser(String email, String plainPassword) {
        User user = getUser(); // Get the only user in the DB

        if (user != null && user.getEmail().equals(email)) {

        }
        return false;
    }
}
