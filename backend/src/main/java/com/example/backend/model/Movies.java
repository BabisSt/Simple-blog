package com.example.backend.model;

public class Movies {

    private String id;
    private String name;

    public Movies(String id, String name) {
        this.id = id;
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

}