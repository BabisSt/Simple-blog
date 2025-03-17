package com.example.backend.model;

public class Authors {

    private String id;
    private String name;

    public Authors(String id, String name) {
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