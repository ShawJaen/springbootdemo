/*package com.example.springbootdemo.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.springbootdemo.model.ResultObject;
import com.example.springbootdemo.model.User;
@RestController
public class MongoDBController {

	@Autowired
	private MongoTemplate mongoTemplate;
	
	*//**
	 * mongoDB添加
	 *//*
	@RequestMapping(value = "/insert")
    public ResultObject insert(){
		User user=new User();
		user.setUserId("2");
		user.setName("me2");
		user.setUclass("A2");
		user.setEmail("b12@sina.com");
		user.setAge(18);
		user.setDataStatus(1);
        this.mongoTemplate.insert(user);
        return new ResultObject(HttpServletResponse.SC_OK);
    }
	
	*//**
	 * mongoDB 删除
	 * @return
	 * @throws Exception
	 *//*
	@RequestMapping("/delete")
    public ResultObject delete() throws Exception {
        Query query = Query.query(Criteria.where("userId").is("1"));
        this.mongoTemplate.remove(query, "user");
        return new ResultObject(HttpServletResponse.SC_OK);
    }
	
	*//**
	 * mongoDB 修改
	 * @param user
	 * @return
	 * @throws Exception
	 *//*
	@RequestMapping(value = "/update", method = RequestMethod.GET)
    public ResultObject update() throws Exception {
        Query query = Query.query(Criteria.where("userId").is("1"));
        Update update = new Update();
        update.set("age", 20);
        update.set("name", "测试");
        update.set("email", "email@.qq");
        this.mongoTemplate.updateFirst(query, update, "user");
        return new ResultObject(HttpServletResponse.SC_OK);
    }
	
	*//**
	 * mongoDB 查询
	 * @return
	 * @throws Exception
	 *//*
	@RequestMapping("/query")
	public ResultObject query() throws Exception {
		//后面.skip(0).limit(10); 下表为0，10条数据分页
		//  Query query = Query.query(Criteria.where("dataStatus").is(2)).skip(0).limit(1);
		  //Criteria.where("onumber").is("002").and("cname").is("zcy")  多条件
		Query query = new Query();
		query.skip(0).limit(10);
		  List<User> users = this.mongoTemplate.find(query, User.class);
		  return new ResultObject(HttpServletResponse.SC_OK, users);
	   }
}
*/