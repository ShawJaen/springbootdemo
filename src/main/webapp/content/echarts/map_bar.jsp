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
	
	<%-- <script type="text/javascript" src="<%=basePath%>content/echarts/js/dark.js"></script> --%>
	<script type="text/javascript" src="<%=basePath%>content/echarts/js/chengdu.js"></script>
	<script type="text/javascript" src="<%=basePath%>/layui/layui.js"></script>
	<script type="text/javascript" src="<%=basePath%>content/echarts/js/map_bar2.js"></script>
	
	<link rel="stylesheet" type="text/css" href="<%=basePath%>layui/css/layui.css" />
	<%-- <link rel="stylesheet" href="<%=basePath%>content/sjzx/css/comon0.css" /> --%>


  </head>
  
  <body>
  <%-- <div class="canvas" style="opacity: .2">
        <iframe frameborder="0" src="<%=basePath%>content/sjzx/js/index.html" style="width: 100%; height: 100%"></iframe>
    </div>
     <div class="mainbox">
     	<div id="wrap" style="position: relative;">
		<div class="map4_bar" id="map" style="width: 100%; height: 800px;"></div>
		</div>
	</div> --%>
    <div class="wrap" style="position: relative;">
		<div id="map" style="width: 100%; height: 800px;"></div>
	</div>
<!-- 	<div id="map" style="width: 100%; height: 800px;"></div>
 -->  </body>
</html>
