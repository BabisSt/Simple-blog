package com.example.backend.model;

public class Authors {
    private String name;
	private String id;

    public Authors(String name, String id) {
        this.name = name;
		this.id = id;
    }

    public String getName() {
        return name;
    }

	public String getId() {
        return id;
    }
}