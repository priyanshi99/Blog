package com.example.blog;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BlogServiceImpl implements BlogService{

	@Autowired
	private BlogRepository b;
	@Override
	public List<Blog> getAll() {
		// TODO Auto-generated method stub
		return b.findAll();
	}

	@Override
	public Blog saveOrupdateBlog(Blog blog) {
		// TODO Auto-generated method stub
		return b.save(blog);
	}

}
