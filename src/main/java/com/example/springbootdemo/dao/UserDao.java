package com.example.springbootdemo.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.example.springbootdemo.model.Person;

public interface UserDao {
	public int getUser();
	
	public List<Map<String, Object>> getTable();	//数据库表所有表名
	
	public Map<String, Object> getTableName(String id);
	public List<Map<String, Object>> getDbtable(String id);
	
	public List<Map<String, Object>> getDbtableData(@Param(value="tablename") String tablename);
	
	//批量插入
	public void batchInsertList(@Param(value="personlist") List<Person> personlist);
}
