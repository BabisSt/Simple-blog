package com.example.backend.service;

import com.example.backend.dao.PinnedArticleInterface;
import com.example.backend.model.PinnedArticle;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PinnedArticleService {

    private PinnedArticleInterface pinnedArticleInterface;

    public PinnedArticleService(PinnedArticleInterface pinnedArticleInterface) {
        this.pinnedArticleInterface = pinnedArticleInterface;
    }

    public PinnedArticle getPinnedArticle() {
        return pinnedArticleInterface.getPinnedArticle();
    }
}
