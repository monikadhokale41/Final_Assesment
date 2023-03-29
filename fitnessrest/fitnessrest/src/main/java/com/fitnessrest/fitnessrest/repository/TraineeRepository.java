package com.fitnessrest.fitnessrest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.fitnessrest.fitnessrest.model.Trainee;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository
public interface TraineeRepository extends JpaRepository<Trainee, Long> {

}
