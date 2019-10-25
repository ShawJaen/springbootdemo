package com.example.springbootdemo.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.springbootdemo.util.RedisUtil;

@Controller
public class RedisController {
	
	@Resource
    private RedisUtil redisUtil;

    @RequestMapping("set.do")
    public boolean redisset(){
        String key = "id";
        String value = "111111122222";

        return redisUtil.set(key,value);
    }

    @RequestMapping("get.do")
    public Object redisget(){
    	String key = "id";
        return redisUtil.get(key);
    }
}
