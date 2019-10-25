<%@ page language="java" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String port=request.getServerPort()==80?"":":"+request.getServerPort();
String basePath = request.getScheme()+"://"+request.getServerName()+port+path+"/";
long randomVal = System.currentTimeMillis();//防止缓存

%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link rel="stylesheet" type="text/css" href="<%=basePath%>layui/css/layui.css" />
	
	<script type="text/javascript" src="<%=basePath%>js/jquery/jquery-1.8.2.min.js"></script>
	<script type="text/javascript" src="<%=basePath%>layui/layui.all.js"></script>
	<script type="text/javascript" src="<%=basePath%>content/DongtaiTable/js/DBTable.js"></script>
<script language="javascript">
    var basePath="<%=basePath%>";

</script>
</head>
<body>
<fieldset class="layui-elem-field layui-field-title" style="margin-top: 30px;">
  <legend>选完文件后不自动上传</legend>
</fieldset>
<div class="layui-upload">
  <button type="button" class="layui-btn layui-btn-normal" id="test8">选择文件</button>
  <button type="button" class="layui-btn" id="test9">开始上传</button>
</div>

<div>
	<table id="error" class="layui-table" >
	</table>
</div>

<script>
var a;
layui.use(['upload','layer'], function(){
  var $ = layui.jquery
  ,upload = layui.upload
  ,layer = layui.layer;
 
  //选完文件后不自动上传
  upload.render({
    elem: '#test8'
    ,url: basePath+'importExcelNew.do'
    ,auto: false
    ,accept:'file'
//    ,multiple: true
    ,bindAction: '#test9'
    ,done: function(res){
    if(res.code == 0){
//    	layer.alert("导入成功");
    }
     a=JSON.stringify(res.msg);
     if(res.msg == ""){
     var centent=[];
	     centent.push("<tr align='center' style='color:red;'>");
	     centent.push("<td colspan='3'>导入成功</td>");
	     centent.push("</tr>");
     }else{
      var centent=[];
	     centent.push("<tr align='center' style='color:red;'>");
	     centent.push("<td colspan='3'>错误数据如下</td>");
	     centent.push("</tr>");
	     centent.push("<tr>");
	     centent.push("<td>姓名</td>");
	     centent.push("<td>性别</td>");
	     centent.push("<td>生日</td>");
	     centent.push("</tr>");
		    for(var i=0;i<res.msg.length;i++){
		    	centent.push("<tr>");
			    centent.push("<td>"+res.msg[i].name+"</td>");
			    centent.push("<td>"+res.msg[i].sex+"</td>");
			    centent.push("<td>"+res.msg[i].birthday+"</td>");
			    centent.push("</tr>");
		    }
    	}
    	$("#error").html(centent.join(""));
     }
    
  });
  
});
</script>
</body>
</html>