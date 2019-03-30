package com.remo.ride.RemoRide.repositories;

import org.springframework.data.repository.CrudRepository;

import com.remo.ride.RemoRide.model.Users;

public interface UserRepository extends CrudRepository<Users, String>{
	
	Users findByEmailId(String name);

}
