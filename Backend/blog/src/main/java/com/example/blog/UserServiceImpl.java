package com.example.blog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@ComponentScan(basePackages = {
"com.example.blog.SecurityConfiguration"})
public class UserServiceImpl implements UserService{
	@Autowired
	private UsersRepository u;

	@Autowired
	private BCryptPasswordEncoder b;
	
	@Override
	public Users saveOrupdateUser(Users user) {
		// TODO Auto-generated method stub
		user.setPassword(b.encode(user.getPassword()));
		return u.save(user);
	}

	@Override
	public Users findUser(String username) {
		// TODO Auto-generated method stub
		return u.findByUsername(username);
	}

}
