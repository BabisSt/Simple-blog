package com.example.backend.controllers;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dao.PinnedArticleImpl;
import com.example.backend.service.PinnedArticleService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/pinnedArticle")
public class PinnedArticleController {

    private final PinnedArticleService pinnedArticleService;
    private final PinnedArticleImpl pinnedArticleImpl;

    public PinnedArticleController(PinnedArticleService pinnedArticleService, PinnedArticleImpl pinnedArticleImpl) {
        this.pinnedArticleService = pinnedArticleService;
        this.pinnedArticleImpl = pinnedArticleImpl;
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PutMapping("/updatePinnedArticle")
    public ResponseEntity<String> updatePinnedArticle(@RequestBody Map<String, String> request) {
        String oldLink = request.get("oldLink");
        String newLink = request.get("newLink");

        int result = pinnedArticleImpl.updatePinnedArticle(oldLink, newLink);
        if (result > 0) {
            return ResponseEntity.ok("PinnedArticle updated successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating PinnedArticle.");
        }
    }

}
