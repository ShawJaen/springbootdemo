<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'main.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
  <body>
    首页 <br>
<%-- <a href="<%=basePath %>content/Blog/index.jsp"> --%>
<%-- <a href="<%=basePath %>content/Blog/Tab.jsp">
    跳转博客页(0514 180天后修改教育厅数据库密码及远程密码)</a> --%>
    <a href="<%=basePath %>content/DongtaiTable/DbTable.jsp">
    跳转</a> 
    <a href="<%=basePath %>content/Tree/Tree.jsp">
    跳转树</a> 
  </body>
</html>
