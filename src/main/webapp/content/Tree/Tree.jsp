<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  <meta charset="utf-8">
  <title>layui</title>
  <meta name="renderer" content="webkit">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<link rel="stylesheet" type="text/css" href="<%=basePath%>layui/css/layui.css" />
  <!-- 注意：如果你直接复制所有代码到本地，上述css路径需要改成你本地的 -->
</head>
<body>
<fieldset class="layui-elem-field layui-field-title" style="margin-top: 30px;">
  <legend>基本演示</legend>
</fieldset>
 
<div id="test12" class="demo-tree-more"></div>
         
<fieldset class="layui-elem-field layui-field-title" style="margin-top: 30px;">
  <legend>常规用法</legend>
</fieldset>
 
<div id="test1" class="demo-tree demo-tree-box"></div>
<fieldset class="layui-elem-field layui-field-title" style="margin-top: 30px;">
  <legend>无连接线风格</legend>
</fieldset>
<div id="test13" class="demo-tree-more"></div>
<fieldset class="layui-elem-field layui-field-title" style="margin-top: 30px;">
  <legend>仅节点左侧图标控制收缩</legend>
</fieldset>
 
<div id="test2" class="demo-tree"></div>
<fieldset class="layui-elem-field layui-field-title" style="margin-top: 30px;">
  <legend>默认展开节点</legend>
</fieldset>
 
<div id="test3" class="demo-tree"></div>
<fieldset class="layui-elem-field layui-field-title" style="margin-top: 30px;">
  <legend>手风琴模式</legend>
</fieldset>
 
<div id="test4" class="demo-tree"></div>
<fieldset class="layui-elem-field layui-field-title" style="margin-top: 30px;">
  <legend>点击节点新窗口跳转</legend>
</fieldset>
 
<div id="test5" class="demo-tree"></div>
<fieldset class="layui-elem-field layui-field-title" style="margin-top: 30px;">
  <legend>开启复选框</legend>
</fieldset>
 
<div id="test7" class="demo-tree"></div>
<fieldset class="layui-elem-field layui-field-title" style="margin-top: 30px;">
  <legend>默认选中节点</legend>
</fieldset>
 
<div id="test8" class="demo-tree"></div>
<fieldset class="layui-elem-field layui-field-title" style="margin-top: 30px;">
  <legend>操作节点</legend>
</fieldset>
 
<div id="test9" class="demo-tree demo-tree-box" style="width: 200px; height: 300px; overflow: scroll;"></div>

<script type="text/javascript" src="<%=basePath%>js/jquery/jquery-1.8.2.min.js"></script>
<script src="<%=basePath%>layui/layui.all.js" charset="utf-8"></script>
<!-- 注意：如果你直接复制所有代码到本地，上述js路径需要改成你本地的 -->
<script type="text/javascript" src="<%=basePath%>content/Tree/js/Tree.js"></script>
<script type="text/javascript">
var basePath="<%=basePath%>"
</script>

  </body>
</html>
