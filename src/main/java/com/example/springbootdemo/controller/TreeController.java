package com.example.springbootdemo.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.springbootdemo.service.TreeService;

@Api(value = "TreeController", tags={"获取树结构数据API"})
@Controller
@RequestMapping(value="/api")
public class TreeController {
	
	@Resource(name="treeService")
	private TreeService treeService;
	
	@ApiOperation(value="获取树结构数据",notes="获取树")
	@ApiImplicitParams({
	      @ApiImplicitParam(name = "Authorization",value = "Token验证信息",required = true,paramType = "form",dataType = "string")
	    })
	@RequestMapping(value="Tree.do",method=RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> getTree(){
		return treeService.getTree();
	}
	
	@ApiOperation(value="测试数据", notes="获取字符串1+字符串2")
    @ApiImplicitParams({
      @ApiImplicitParam(name = "s1", value = "字符串1", paramType = "form", dataType = "String"),
      @ApiImplicitParam(name = "s2", value = "字符串2", paramType = "form",required = true, dataType = "String"),
      @ApiImplicitParam(name = "Authorization",value = "验证信息",required = true,paramType = "form",dataType = "string")
    })
    @RequestMapping(value="/get/info", method=RequestMethod.POST)
    public String getInfo(HttpServletResponse response,HttpServletRequest request) {
        String s1 = request.getParameter("s1");
        String s2 = request.getParameter("s2");

        String result = s1+s2;
        return result;
    }

}
