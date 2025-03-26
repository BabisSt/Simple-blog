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
    private String state;
    private String author_id;

    public Posts(String id, String title, String postedBy, String postedTime, String photos, String clicks,
            String tags, String content, String state, String author_id) {
        this.id = id;
        this.title = title;
        this.postedBy = postedBy;
        this.postedTime = postedTime;
        this.photos = photos;
        this.clicks = clicks;
        this.tags = tags;
        this.content = content;
        this.state = state;
        this.author_id = author_id;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPostedBy() {
        return postedBy;
    }

    public void setPostedBy(String postedBy) {
        this.postedBy = postedBy;
    }

    public String getPostedTime() {
        return postedTime;
    }

    public void setPostedTime(String postedTime) {
        this.postedTime = postedTime;
    }

    public String getPhotos() {
        return photos;
    }

    public void setPhotos(String photos) {
        this.photos = photos;
    }

    public String getClicks() {
        return clicks;
    }

    public void setClicks(String clicks) {
        this.clicks = clicks;
    }

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getAuthorId() {
        return author_id;
    }

    public void setAuthorId(String author_id) {
        this.author_id = author_id;
    }
}
