$(document).ready(function() {
	getTreeData();
});
function getTreeData(){
			 $.ajax({
					url : basePath+'Tree.do',
					type : 'POST',
					data : {},
					success : function(data) {
						console.log(data.treeData);
						
			//			var data1 = eval('('+data1+')');
						tree(data.treeData);
				    },   
				    error : function() {   
				        layer.alert('网络连接出错！');   
				    }  
				});
}

function tree(DataTree){
	layui.use(['tree','layer'], function(){
		  var tree = layui.tree
		  ,layer = layui.layer
		  
		  //模拟数据
		  ,data = [{
		    label: '一级1'
		    ,id: 1
		    ,children: [{
		      label: '二级1-1 可允许跳转'
		      ,id: 3
		      ,href: 'https://www.layui.com/'
		      ,children: [{
		        label: '三级1-1-3'
		        ,id: 23
		        ,children: [{
		          label: '四级1-1-3-1'
		          ,id: 24
		          ,children: [{
		            label: '五级1-1-3-1-1'
		            ,id: 30
		          },{
		            label: '五级1-1-3-1-2'
		            ,id: 31
		          }]
		        }]
		      },{
		        label: '三级1-1-1'
		        ,id: 7
		        ,children: [{
		          label: '四级1-1-1-1 可允许跳转'
		          ,id: 15
		          ,href: 'https://www.layui.com/doc/'
		        }]
		      },{
		        label: '三级1-1-2'
		        ,id: 8
		        ,children: [{
		          label: '四级1-1-2-1'
		          ,id: 32
		        }]
		      }]
		    },{
		      label: '二级1-2'
		      ,id: 4
		      ,children: [{
		        label: '三级1-2-1'
		        ,id: 9
		        ,disabled: true
		      },{
		        label: '三级1-2-2'
		        ,id: 10
		      }]
		    },{
		      label: '二级1-3'
		      ,id: 20
		      ,children: [{
		        label: '三级1-3-1'
		        ,id: 21
		      },{
		        label: '三级1-3-2'
		        ,id: 22
		      }]
		    }]
		  },{
		    label: '一级2'
		    ,id: 2
		    ,children: [{
		      label: '二级2-1'
		      ,id: 5
		      ,children: [{
		        label: '三级2-1-1'
		        ,id: 11
		      },{
		        label: '三级2-1-2'
		        ,id: 12
		      }]
		    },{
		      label: '二级2-2'
		      ,id: 6
		      ,children: [{
		        label: '三级2-2-1'
		        ,id: 13
		      },{
		        label: '三级2-2-2'
		        ,id: 14
		        ,disabled: true
		      }]
		    }]
		  },{
		    label: '一级3'
		    ,id: 16
		    ,children: [{
		      label: '二级3-1'
		      ,id: 17
		      ,fixed: true
		      ,children: [{
		        label: '三级3-1-1'
		        ,id: 18
		      },{
		        label: '三级3-1-2'
		        ,id: 19
		      }]
		    },{
		      label: '二级3-2'
		      ,id: 27
		      ,children: [{
		        label: '三级3-2-1'
		        ,id: 28
		      },{
		        label: '三级3-2-2'
		        ,id: 29
		      }]
		    }]
		  }]
		  
		  
		  ,data1 =DataTree
		 /* ,data1 = [{
			  	   "id":"1"
				  ,"pid":"0"
				  ,"label":"人文社科"
					  ,"children":[{
					  "id":"2"
					  ,"pid":"1"
					  ,"label":"历史"
						  ,"children":[{
						  "id":"10"
						  ,"pid":"2"
						  ,"label":"中国历史"
						  ,"children":[]
						  }]
					  }]
		  }]*/
		  
		  
		  ,data2 = [{
		    label: '早餐'
		    ,id: 1
		    ,children: [{
		      label: '油条'
		      ,id: 5
		    },{
		      label: '包子'
		      ,id: 6
		    },{
		      label: '豆浆'
		      ,id: 7
		    }]
		  },{
		    label: '午餐'
		    ,id: 2
		    ,children: [{
		      label: '藜蒿炒腊肉'
		      ,id: 8
		    },{
		      label: '西湖醋鱼'
		      ,id: 9
		    },{
		      label: '小白菜'
		      ,id: 10
		    },{
		      label: '海带排骨汤'
		      ,id: 11
		    }]
		  },{
		    label: '晚餐'
		    ,id: 3
		    ,children: [{
		      label: '红烧肉'
		      ,id: 12
		      ,fixed: true
		    },{
		      label: '番茄炒蛋'
		      ,id: 13
		    }]
		  },{
		    label: '夜宵'
		    ,id: 4
		    ,children: [{
		      label: '小龙虾'
		      ,id: 14
		    },{
		      label: '香辣蟹'
		      ,id: 15
		      ,disabled: true
		    },{
		      label: '烤鱿鱼'
		      ,id: 16
		    }]
		  }];
		 
		  //基本演示
		  tree.render({
		    elem: '#test12'
		    ,data: data
		    ,showCheckbox: true  //是否显示复选框
		    ,key: 'id'  //定义索引名称
		    ,checked: [1, 11, 12]  //选中节点(依赖于 showCheckbox 以及 key 参数)。
		    ,spread: [1, 2, 4, 5, 11]  //展开节点(依赖于 key 参数)
		    //,accordion: true //是否开启手风琴模式
		    ,isJump: true //是否允许点击节点时弹出新窗口跳转
		    ,click: function(obj){
		      layer.msg('状态：'+ obj.state + '<br>节点数据：' + JSON.stringify(obj.data)); //获取当前选中的节点数据
		    }
		  });
		 
		  //常规用法
		  tree.render({
		    elem: '#test1' //默认是点击节点可进行收缩
		    ,data: data1
		  });
		  
		  //无连接线风格
		  tree.render({
		    elem: '#test13'
		    ,data: data1
		    ,showLine: false  //是否开启连接线
		  });
		 
		  //仅节点左侧图标控制收缩
		  tree.render({
		    elem: '#test2'
		    ,data: data1
		    ,onlyIconControl: true  //是否仅允许节点左侧图标控制展开收缩
		    ,click: function(obj){
		      layer.msg(JSON.stringify(obj.data));
		    }
		  });
		 
		  //默认展开节点
		  tree.render({
		    elem: '#test3'
		    ,data: data
		    ,key: 'id' //默认为 id
		    ,spread: [2, 4, 5, 16] //依赖于 key 参数
		  });
		 
		  //手风琴模式
		  tree.render({
		    elem: '#test4'
		    ,data: [{
		      label: '优秀'
		      ,children: [{
		        label: '80 ~ 90'
		      },{
		        label: '90 ~ 100'
		      }]
		    },{
		      label: '良好'
		      ,children: [{
		        label: '70 ~ 80'
		      },{
		        label: '60 ~ 70'
		      }]
		    },{
		      label: '要努力奥'
		      ,children: [{
		        label: '0 ~ 60'
		      }]
		    }]
		    ,accordion: true 
		  });
		 
		  //点击节点新窗口跳转
		  tree.render({
		    elem: '#test5'
		    ,data: data
		    ,isJump: true  //link 为参数匹配
		  });
		 
		  //开启复选框
		  tree.render({
		    elem: '#test7'
		    ,data: data2
		    ,showCheckbox: true
		  });
		 
		  //默认选中节点
		  tree.render({
		    elem: '#test8'
		    ,key: 'id'
		    ,data: data2
		    ,showCheckbox: true
		    ,checked: [2, 14]  //依赖于 showCheckbox 以及 key 参数
		  });
		 
		  //操作节点
		  /*tree.render({
		    elem: '#test9'
		    ,data: data1
		    ,edit: ['add', 'update', 'del'] //操作节点的图标
		    ,click: function(obj){
		    	alert(JSON.stringify(obj.data.id));
//		    	layer.msg(JSON.stringify(obj.data));
		    }
		  });*/
		  
		  tree.render({
			    elem: '#test9'
			    ,data: data1
			    ,edit: ['add', 'update', 'del'] //操作节点的图标
			    ,operate: function(obj){
			    	if(obj.type === 'add'){
			    		
			    	}else if(obj.type === 'update'){
			    		console.log(obj.elem.find('.layui-tree-txt').html());
			    	}else if(obj.type === 'del'){
			    		
			    	}
			    }
			  });
		  
		});
}
