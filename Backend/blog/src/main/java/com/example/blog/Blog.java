package com.example.blog;


import org.springframework.data.mongodb.core.mapping.Document;

import org.springframework.data.annotation.Id;

@Document(collection="Blog")
public class Blog {

	@Id
	private long id;
	String topic;
	String author;
	String content;
	public Blog() {
		
	}

	 public Blog(String topic, String author, String content) {
		super();
		this.topic = topic;
		this.author = author;
		this.content = content;
	}


	public long getId() {
	        return id;
	    }
	    public void setId(long id) {
	        this.id = id;
	    }


	public String getTopic() {
		return topic;
	}
	public void setTopic(String topic) {
		this.topic = topic;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}

	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	
   
}
