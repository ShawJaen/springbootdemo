package com.example.springbootdemo.serviceImpl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springbootdemo.dao.TreeDao;
import com.example.springbootdemo.model.Tree;
import com.example.springbootdemo.service.TreeService;

@Service("treeService")
public class TreeServiceImpl implements TreeService {

	@Autowired
	private TreeDao treeDao;	
	
	public Map<String, Object> getTree() {
		// TODO Auto-generated method stub
		List<Tree> list = treeDao.getTreeByPid("0");
		List<Tree> TreeData = buildTree(list);
		Map<String, Object> treeMap=new HashMap<String, Object>();
//		treeMap.put("treeData", TreeData);
		treeMap.put("data", TreeData);
		treeMap.put("code", 0);
		
		return treeMap;
	}

	private List<Tree> buildTree(List<Tree> list) {
		// TODO Auto-generated method stub
		for (int i = 0; i < list.size(); i++) {
			String pid= list.get(i).getId().toString();
			List<Tree> childlist = treeDao.getTreeByPid(pid);
			buildTree(childlist);
			list.get(i).setChildren(childlist);
		}
		return list;
	}

}
