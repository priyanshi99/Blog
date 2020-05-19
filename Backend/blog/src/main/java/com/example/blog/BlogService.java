package com.example.blog;

import java.util.List;

public interface BlogService {
	 List<Blog> getAll();
	Blog saveOrupdateBlog(Blog blog);
}
