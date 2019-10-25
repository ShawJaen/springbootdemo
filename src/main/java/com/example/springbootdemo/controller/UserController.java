package com.example.springbootdemo.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.springbootdemo.service.UserService;

//@RestController注解相当于@ResponseBody ＋ @Controller合在一起的作用。本来应该到success.jsp页面的，则其显示success
@Api(value = "UsersController", tags={"用户管理API"})
@Controller
public class UserController {
	@Autowired
	private UserService userService;
	
	/*@RequestMapping("getUser.do")
	public int getUser(){
		int num = userService.getUser();
		return num;
	}
	
	@RequestMapping("index.do")
	public String index(){
//		return "main";
//		return "user/src/views/index";
		return "user/src/views/user/login";
	}*/
	
	/**
	 * 用户登录接口
	 * @param userName 用户名
	 * @param password 密码
	 * @return
	 */
	@ApiOperation(value="用户登录",notes="登录，需参数")
	@RequestMapping(value="/login.do", method={RequestMethod.POST},produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Map<String, Object> login(HttpServletRequest request,
			@ApiParam(required = true, name = "userName", value = "用户名") @RequestParam(value = "userName", required = true) String userName,
			@ApiParam(required = true, name = "password", value = "密码") @RequestParam(value = "password", required = true) String password){
			Map<String, Object> map=new HashMap<String, Object>();
			map.put("statu", 200);
			map.put("msg", "登录成功");
		return map;
	}
	
	//获取数据库表名
	@ApiOperation(value="获取数据库表名",notes="获取数据库表名，无需参数")
	@RequestMapping(value="getTable.do",method=RequestMethod.GET)
	@ResponseBody
	public List<Map<String, Object>> getTable(){
		List<Map<String, Object>> table= userService.getTable();
//		System.out.println(table);
		return table;
	}
	
	//根据tableid获取数据库表字段，生成标题
	@ApiOperation(value="生成标题",notes="生成标题，需参数")
	@RequestMapping(value="getDbTable.do",method=RequestMethod.POST)
	@ResponseBody
	public List<Map<String, Object>> getDbTable(@ApiParam(required = true, name = "id",value="主键")@RequestParam(value="id",required=true) String id){
		List<Map<String, Object>> table= userService.getDbtable(id);
		return table;
	}
	@ApiOperation(value="生成表",notes="生成表，需参数")
	@RequestMapping(value="getDbTableData.do",method=RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> getDbTableData(@ApiParam(required = true, name = "id",value="主键")@RequestParam(value="id",required=true) String id){
		List<Map<String, Object>> tableData= userService.getDbtableData(id);
		Map<String, Object> jsonMap = new HashMap<String, Object>();
		jsonMap.put("code", 0);
		jsonMap.put("msg", "");
		jsonMap.put("count", 1);
		jsonMap.put("data", tableData);
		return jsonMap;
	}
}
