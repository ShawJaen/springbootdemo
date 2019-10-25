package com.example.springbootdemo.dao;

import java.util.List;

import com.example.springbootdemo.model.Tree;

public interface TreeDao {
	public List<Tree> getTreeByPid(String pid);//pid
}
