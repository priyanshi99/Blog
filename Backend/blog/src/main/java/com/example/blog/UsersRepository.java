package com.example.blog;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.blog.Users;

@Repository
public interface UsersRepository extends MongoRepository<Users, String> {
	 Users findByUsername(String username);

	}