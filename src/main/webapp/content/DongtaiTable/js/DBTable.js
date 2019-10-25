
$(document).ready(function() {
	ysjdx();
});

function ysjdx(){
			 $.ajax({
					url : basePath+'getTable.do',
					type : 'POST',
					data : {},
					success : function(data) {
						$("#ysjdx").append('<option value="请选择">请选择</option>');
						if(data != null && data != "" ) {
			        		$.each(data, function(idx, item) {
			        				$("#ysjdx").append('<option value="'+item.id+'">'+item.description+'</option>');
			        		});
					    }
						layui.form.render();//动态赋值后需要重新渲染
				    },   
				    error : function() {   
				        layer.alert('网络连接出错！');   
				    }  
				});
}

//初始化基本信息
function getTableData(id){
	var array_cols = getDynamicCols(id);
	layui.use('table', function(){
		  var table = layui.table;
		  //添加数据
		  table.render({
		    elem: '#DBTable'
		    ,url: basePath+'getDbTableData.do'
			,where:{id:id}
		    ,cols: array_cols
		    ,skin: 'row' //表格风格
		    ,even: true
		    ,page: true //是否显示分页
		    ,limits: [10, 20, 50 , 100] //分页类型
		    ,limit: 10 //每页默认显示的数量
		    ,done: function(res, curr, count){
			    //如果是异步请求数据方式，res即为你接口返回的信息。
			    //如果是直接赋值的方式，res即为：{data: [], count: 99} data为当前页数据、count为数据总长度
			    //console.log(res);//res.data 当前页面数据
			    dqymobj=res;
			    jQuery.each(res.data, function(i, val) { 
				    if(val.suncz=="true"){
				    //$("layui-table-fixed layui-table-fixed-l").find("tr").eq(i).find("td").eq(0).find(".layui-form-checkbox").addClass("layui-form-checked");
				    	$("tbody").find("tr").eq(i).find("td").eq(0).find(".layui-form-checkbox").addClass("layui-form-checked");
				    	$("tbody").find("tr").eq(i).find("td").eq(0).find("input").attr("checked","checked"); 
				    }
				}); 
			  }
		  });
	});
}

function getDynamicCols(id){	
	var array_cols = new Array();//先声明一维数组
	for (i = 0;i < 1;i++){
		array_cols[i] = new Array();
	}
	var col_no = 0;
	var field_value="";
	var concepttree_name="";
	var array_cols_sub = [];
	//获取列表M
	$.ajax({
		type: "POST",
		url: basePath+"getDbTable.do",
		async : false, 
		data : {id:id},
		dataType : 'json',
		success : function(data) {
			if(!(data == null || data == "")){
				//第一列是固定的序号
				array_cols[0][col_no] = {type:'numbers'};
				for (var i = 0; i < data.length; i++) {
					col_no += 1;
					field_value = data[i]["id"];
					concepttree_name = data[i]["name"];
					
					array_cols[0][col_no] = {field: field_value,title:concepttree_name, style:'cursor:pointer;'};
				}
				//for toolbar
//				array_cols[0][col_no + 1] = {fixed: 'right', align:'left', toolbar: '#barDemo'};
			}
		},
		error : function(data, status, e) {
			alert("网络连接错误!");
		}
	});
	return array_cols;
}
