package com.example.blog;


public interface UserService {

	Users saveOrupdateUser(Users user);
	Users findUser(String username);
}
