<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>map-bar</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<script type="text/javascript" src="<%=basePath%>js/jquery/jquery-1.8.2.min.js"></script>
	
	<script type="text/javascript" src="<%=basePath%>content/echarts/js/echarts.js"></script>
	<script type="text/javascript" src="<%=basePath%>content/echarts/js/beijing.js"></script>
	<script type="text/javascript" src="<%=basePath%>content/echarts/js/mapAndzzt.js"></script>
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
  <body>
    <div class="wrap" style="position: relative;">
		<div id="map" style="width: 100%; height: 800px;"></div>
	</div>
  </body>
</html>
