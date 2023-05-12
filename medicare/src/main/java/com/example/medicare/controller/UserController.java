package com.example.medicare.controller;

import java.net.URI;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.medicare.entity.User;
import com.example.medicare.services.UserService;

@RestController
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping("/user/signup")
	public ResponseEntity<?> createNewUser(@Valid @RequestBody User user) {
		if (this.userService.getByUsername(user.getUsername()) != null) {
			System.out.println("Username already exists!");
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		} else {
			User newUser = this.userService.createUser(user);
			URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
					.buildAndExpand(newUser.getUserId()).toUri();
			return ResponseEntity.created(location).build();
		}
	}

}
