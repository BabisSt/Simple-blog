package com.example.backend.model;

import java.util.List;

public class Carousel {
    private List<String> links;

    public Carousel(List<String> links) {
        this.links = links;
    }

    public List<String> getLinks() {
        return links;
    }

    public void setLinks(List<String> links) {
        this.links = links;
    }
}
