<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html>
<html>
<head>
<base href="<%=basePath%>">
  <meta charset="utf-8">
  <title>layui</title>
  <meta name="renderer" content="webkit">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <link rel="stylesheet" href="plugin/layui/css/layui.css"  media="all">
 
  <script src="plugin/layui/layui.all.js"></script>
 <script type="text/javascript" src="plugin/layui/layui.js"></script>
  <script type="text/javascript" src="plugin/jquery/jquery-1.8.2.min.js"></script>
   <script type="text/javascript" src="js/TreeTable.js"></script>
   <style type="text/css">
			body{padding: 10px 30px;}
			.hide{display:none}
		</style>
</head>
<body>
		<button class="layui-btn layui-btn-primary up-all">全部收起</button>
		<button class="layui-btn layui-btn-primary down-all">全部展开</button>
		<button class="layui-btn layui-btn-primary get-checked">获取选中</button>
		
		<table class="layui-table layui-form" id="test-tree-table"></table>	
		
<!-- 注意：如果你直接复制所有代码到本地，上述js路径需要改成你本地的 -->
<script>
 
</script>

</body>
</html>        

