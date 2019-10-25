package com.example.springbootdemo.Demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springbootdemo.service.UserService;

@RestController
public class TestSpringBoot {
	@Autowired
	private UserService userService;
	
	@RequestMapping("test.do")
	public String Demo(){
		System.out.println("redirect to home page!");
		return "SpringBoot";
	}
	
	@RequestMapping("testgetUser.do")
	public String testgetUser(){
		
		int num=userService.getUser();
		System.out.println(num+"====================getuser==============!");
		return "SpringBoot getuser";
	}
}
