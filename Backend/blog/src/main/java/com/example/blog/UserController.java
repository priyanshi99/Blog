package com.example.blog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
@ComponentScan("com.example.blog.SecurityConfiguration")
public class UserController {

	@Autowired
	UserService u;
	@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
	@GetMapping("/basicauth")
	 public AuthenticationBean helloWorldBean() {
        //throw new RuntimeException("Some Error has Happened! Contact Support at ***-***");
        return new AuthenticationBean("You are authenticated");
    }   
    @PostMapping("/reg")
    public Users registration(@RequestBody Users userForm) {
    
     return u.saveOrupdateUser(userForm);
      
    }
    }



