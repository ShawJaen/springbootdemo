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
<!-- <script type="text/javascript" src="js/DBTable.js"></script> -->
</head>
<body>
<!-- <div class="place">
		<span>位置：</span>
		<ul class="placeul">
			<li><a href="#">数据</a></li>
			<li><a href="#">数据导入</a></li>
		</ul>
	</div> -->
	<fieldset class="layui-elem-field layui-field-title"
		style="margin-top: 10px;">
		<legend>数据导入</legend>
	</fieldset>

<form class="layui-form" action="" lay-filter="ysjdx">

		<!-- <div class="layui-form-item">
				<label class="layui-form-label">导入形式：</label>
			    <div class="layui-input-block">
			      <input type="radio" name="sex" value="1" title="excel导入" checked="">
			      <input type="radio" name="sex" value="2" title="文本导入">
			    </div>
		</div> -->
		<div class="layui-form-item">
			<div class="layui-inline">
					<!-- <button id="createDBTable" class="layui-btn layui-btn-normal layui-btn-sm">生成数据库表</button> -->
					
					<!-- <button id="uploadCSV" class="layui-btn layui-btn-normal"><i class="layui-icon"></i>导入外部csv数据源</button> -->
					<label class="layui-form-label">元数据表：</label>
					<div class="layui-input-inline">
						<select id="ysjdx" name="ysjdx" lay-verify="required" lay-filter="ysjdx">
						</select>
					</div>
			</div>
		</div>
</form>
		<div class="layui-btn-container" style="margin-left:20px">
		<!-- <button id="uploadCSV" class="layui-btn layui-btn-normal"><i class="layui-icon"></i>导入</button> -->
						<!-- 原始容器 -->
				<table class="layui-table" id="DBTable"	lay-filter="demoEvent"></table>
		</div>
	<!-- 工具栏模板 -->
	<script type="text/html" id="barDemo">
	  <div class="layui-btn-container">
		<button class="layui-btn layui-btn-sm" lay-event="del">删除</button>
	  </div>
	</script>
	<script>

		var ysjid="";
		layui.use([ 'form' ], function() {
			var form = layui.form;
	//		form.render();
			//监听指定开关
			form.on('select(ysjdx)', function(data) {
				if(data.value != "请选择"){
					ysjid = data.value;
					getTableData(data.value);
				}
			});

		});
	</script>
</body>
</html>