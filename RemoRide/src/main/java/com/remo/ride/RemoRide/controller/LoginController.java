package com.remo.ride.RemoRide.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.remo.ride.RemoRide.model.Users;
import com.remo.ride.RemoRide.repositories.UserRepository;

@RestController
public class LoginController {
	@Autowired
	UserRepository userRepository;
	@RequestMapping(value="/user",method=RequestMethod.POST)
	ResponseEntity<String> registerUser(@RequestBody Users user){
		userRepository.save(user);
		return new ResponseEntity<String>("User Registered Successfully",HttpStatus.OK);
	}
	/*@RequestMapping(value="/user",method=RequestMethod.Get)
	ResponseEntity<String> registerUser(@RequestBody Users user){
		userRepository.save(user);
		return new ResponseEntity<String>("User Registered Successfully",HttpStatus.OK);
	}*/
	

}
