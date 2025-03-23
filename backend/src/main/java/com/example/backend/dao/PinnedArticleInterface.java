package com.example.backend.dao;

import com.example.backend.model.PinnedArticle;

public interface PinnedArticleInterface {
    PinnedArticle getPinnedArticle();

    int updatePinnedArticle(String oldLink, String newLink);
}
