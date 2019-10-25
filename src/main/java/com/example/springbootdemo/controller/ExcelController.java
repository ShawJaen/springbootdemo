package com.example.springbootdemo.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;



import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.time.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;


import org.springframework.util.unit.DataUnit;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.example.springbootdemo.dao.UserDao;
import com.example.springbootdemo.model.Person;
import com.example.springbootdemo.service.UserService;
import com.example.springbootdemo.util.FileUtil;

//@RestController注解相当于@ResponseBody ＋ @Controller合在一起的作用。本来应该到success.jsp页面的，则其显示success
@Controller
public class ExcelController {
	@Autowired
	private UserService userService;
	@Autowired
	private UserDao userDao;
	
	@RequestMapping("export.do")
	public void exportExcel(HttpServletResponse response){
		//模拟从数据库获取需要导出的数据
//        List<Person> personList = new ArrayList<>();
		List<Person> personList = new ArrayList<Person>();
        Person person1 = new Person("路飞","1",new Date());
        Person person2 = new Person("娜美","2", DateUtils.addDays(new Date(),3));
        Person person3 = new Person("索隆","1", DateUtils.addDays(new Date(),10));
        Person person4 = new Person("小狸猫","1", DateUtils.addDays(new Date(),-10));
        personList.add(person1);
        personList.add(person2);
        personList.add(person3);
        personList.add(person4);
        List<Map<String, Object>> list = userService.getTable();
//        FileUtil.exportExcel(list, "测试.xlsx", response);
        //导出操作
        FileUtil.exportExcel(personList,"花名册","草帽一伙",Person.class,"海贼王1.xls",response);
	}
	
	@RequestMapping("importExcel.do")
	@ResponseBody
    public Map<String, Object> importExcel(@RequestParam("file") MultipartFile file,HttpServletResponse response){
  //      String filePath = "F:\\海贼王.xls";
        String filePath ="C:\\Users\\xiaojian\\Desktop\\海贼王.xls";
        //解析excel，
  //        List<Person> personList = FileUtil.importExcel(filePath,1,1,Person.class);
        List<Person> personList = FileUtil.importExcel(file, 1, 1, Person.class);
        System.out.println("数据： "+personList);
        //也可以使用MultipartFile,使用 FileUtil.importExcel(MultipartFile file, Integer titleRows, Integer headerRows, Class<T> pojoClass)导入
        System.out.println("导入数据一共【"+personList.size()+"】行");
        Map<String, Object> fileMap= new HashMap<String, Object>();
        fileMap.put("src", "www");
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("code", "0");
        map.put("msg", "");
        map.put("data", fileMap);
        return map;
        //TODO 保存数据库
    }
	
	@RequestMapping("importExcelNew.do")
	@ResponseBody
    public Map<String, Object> importExcelNew(@RequestParam("file") MultipartFile file,HttpServletResponse response) throws Exception{
  //      String filePath = "F:\\海贼王.xls";
        String filePath ="C:\\Users\\xiaojian\\Desktop\\海贼王.xls";
        //解析excel，
  //        List<Person> personList = FileUtil.importExcel(filePath,1,1,Person.class);
        Map<String, Object> reObject = FileUtil.importExcelNew(file, response);
        
        List<Person> personlist = (List<Person>) reObject.get("personlist");
        userDao.batchInsertList(personlist);
        Map<String, Object> fileMap= new HashMap<String, Object>();
        fileMap.put("src", "www");
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("code", "0");
        map.put("msg", reObject.get("FailList"));
        map.put("data", fileMap);
        return map;
        //TODO 保存数据库 中国人谈事，用烟打开局面，用酒打破原则，用钱堕落人性
    }

}
