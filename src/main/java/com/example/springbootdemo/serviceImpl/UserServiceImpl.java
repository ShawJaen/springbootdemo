package com.example.springbootdemo.serviceImpl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springbootdemo.dao.UserDao;
import com.example.springbootdemo.service.UserService;

@Service(value="userService")
public class UserServiceImpl implements UserService {
	@Autowired
	private UserDao userDao;
	
	public int getUser() {
		// TODO Auto-generated method stub
		return userDao.getUser();
	}

	public List<Map<String, Object>> getDbtable(String id) {
		// TODO Auto-generated method stub
		
		return userDao.getDbtable(id);
	}

	public List<Map<String, Object>> getDbtableData(String id) {
		Map<String, Object> tableNameMap = userDao.getTableName(id);
		String tableName = (String) tableNameMap.get("tablename");
		// TODO Auto-generated method stub
		return userDao.getDbtableData(tableName);
	}

	public List<Map<String, Object>> getTable() {
		// TODO Auto-generated method stub
		return userDao.getTable();
	}

}
