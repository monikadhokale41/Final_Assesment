//package com.fitnessrest.fitnessrest.model;
//
////com.fitnessrest.fitnessrest.model;
//import jakarta.persistence.Entity;
//import jakarta.persistence.Table;
//import jakarta.persistence.Id;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Column;
//
//@Entity
//@Table(name="traineenew")
//public class Trainee {
//	
//	@Id
//	
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private long id;
//	
//	@Column(name="traineename")
//	private String name;
//	
//	@Column(name="email")
//	private String email;
//	
//	public Trainee() {
//		
//	}
//	
//	public Trainee(String name, String email) {
//		super();
//		this.name = name;
//		this.email = email;
//	}
//	
//	public long getId() {
//		return id;
//	}
//	public void setId(long id) {
//		this.id = id;
//	}
//	public String getName() {
//		return name;
//	}
//	public void setName(String name) {
//		this.name = name;
//	}
//	public String getEmail() {
//		return email;
//	}
//	public void setEmail(String email) {
//		this.email = email;
//	}
//		
//}



package com.fitnessrest.fitnessrest.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;



@Entity
@Table(name="traineenew")
public class Trainee {
	
	@Id

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name="traineename")
	private String name;
	
	@Column(name="email")
	private String email;
	
	@Column(name="plan")
	private String plan;
	
	@Column(name="duration")
	private String duration;
	
	@Column(name="day")
	private String day;
	
	public Trainee() {
		
	}
	public Trainee(String name, String email, String plan, String duration, String day) {
		super();
		this.name = name;
		this.email = email;
		this.plan = plan;
		this.duration = duration;
		this.day = day;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPlan() {
		return plan;
	}
	public void setPlan(String plan) {
		this.plan = plan;
	}
	public String getDuration() {
		return duration;
	}
	public void setDuration(String duration) {
		this.duration = duration;
	}
	public String getDay() {
		return day;
	}
	public void setDay(String day) {
		this.day = day;
	}
	
}
	
	

