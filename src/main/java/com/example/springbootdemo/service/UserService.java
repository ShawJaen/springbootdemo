package com.example.springbootdemo.service;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;


public interface UserService {

	public int getUser();
	
	public List<Map<String, Object>> getTable();	//数据库表所有表名
	
	public List<Map<String, Object>> getDbtable(String id);
	
	//获取选择数据表的数据
	public List<Map<String, Object>> getDbtableData(String tablename);
}
