package com.fitnessrest.fitnessrest.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import com.fitnessrest.fitnessrest.repository.TraineeRepository;
import com.fitnessrest.fitnessrest.model.Trainee;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class TraineeController {

	@Autowired
	private TraineeRepository traineeRepository;
	
	//get all trainee
	@GetMapping("/trainee")
	public List<Trainee> getallTrainee(){
		return traineeRepository.findAll();
	}
	
	//create trainee rest API
	@PostMapping("/trainee")
	public Trainee createTrainee(@RequestBody Trainee trainee){
		return traineeRepository.save(trainee);
	}
	
}
