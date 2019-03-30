package com.remo.ride.RemoRide;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class RemoRideApplication {

	public static void main(String[] args) {
		SpringApplication.run(RemoRideApplication.class, args);
	}

}
