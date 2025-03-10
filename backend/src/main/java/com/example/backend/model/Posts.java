package com.example.backend.model;

public class Posts {
    private String id;
    private String title;
    private String postedBy;
    private String postedTime;
    private String photos;
    private String clicks;
    private String tags;
    private String content;

    public Posts(String id, String title, String postedBy, String postedTime, String photos, String clicks,
            String tags, String content) {
        this.id = id;
        this.title = title;
        this.postedBy = postedBy;
        this.postedTime = postedTime;
        this.photos = photos;
        this.clicks = clicks;
        this.tags = tags;
        this.content = content;
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getPostedBy() {
        return postedBy;
    }

    public String getpostedTime() {
        return postedTime;
    }

    public String getPhotos() {
        return photos;
    }

    public String getClicks() {
        return clicks;
    }

    public String getTags() {
        return tags;
    }

    public String getContent() {
        return content;
    }

}