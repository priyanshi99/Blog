package com.example.blog;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class BlogController {
	@Autowired
	BlogService s;

	@GetMapping("/")
	public List<Blog> findAll(){
		return s.getAll();
	}      
	
	@PostMapping("/add")
	public Blog saveandUpdate(@RequestBody Blog blog) {	
		return s.saveOrupdateBlog(blog);
	}
	

}
