$(document).ready(function(){
	outfca('111300000000000000000012','农民消费测试数据','13');  //居民消费需求偏好分析
	outfca('111300000000000000000012','农民消费测试数据','20');  //居民需求量预测
	outPCSModel('10');	//人口年龄分布
	forecast();		//主要经济指标
	jmyl();	//居民养老模式
});

function outfca(id,title,flg){
	console.log(id);
	console.log(title);
	console.log(flg);
	var params = new Object;
	params.id=id;
	params.title=title;
	params.flg=flg;
	$.ajax({
		url : basePath+'/getFCAModel.do?flg='+flg,
		data : params,
		success : function(data) {
			var message=data.message;
			if(message=='ok'){		
				var titleList=eval('(' + data.titleJson + ')'); // 转换为json对象
	        	var contentlist = eval('(' + data.contentJson + ')'); // 转换为json对象
				var content =[];
	        	outecharts(titleList,contentlist,flg);
			}else{
				layer.msg('显示失败！');   
			}	
		},   
		error : function() {   
			layer.msg('显示失败！');   
		}  
	});
}

function outPCSModel(flg) {
	var params = new Object;
	/*var pstr="!!";
	for(var i = 0 ; i < 6 ; i++){
		//alert($("#p"+(i+1)).val().trim.length);
		if($("#p"+(i+1)).val().trim.length>0){
			pstr+=$("#p"+(i+1)).val();
			//alert(pstr);
			if(i%2==0){
				pstr+=":";
			}else{
				pstr+=";";
			}
		}
	}*/
	params.id="111400000000000000000000";
	params.title="人口预测";
	params.flg=flg;
	
	$.ajax({
		url : basePath+'/getPCSModel.do',
		data : params,
		success : function(data) {
			$('#add_list').html('');
			var message=data.message;
			if(message=='ok'){		
				var titleList=eval('(' + data.titleJson + ')'); // 转换为json对象
	        	var contentlist = eval('(' + data.contentJson + ')'); // 转换为json对象
				var content =[];
	        	outecharts_rk(titleList,contentlist,flg);
			}else{
				layer.msg('显示失败！');   
			}	
		},   
		error : function() {   
			layer.msg('显示失败！');   
		}  
	});
}

function outecharts(titleList,contentlist,flg){
	if(flg == 13){
		flg_xqphfx(titleList,contentlist);
	}else if(flg == 20){
		flg_xqlyc(titleList,contentlist);
	}
}

function outecharts_rk(titleList,contentlist,flg){
	if(flg == 10){
		rknl(titleList,contentlist);
	}
}
//居民需求偏好分析
function flg_xqphfx(titleList,contentlist){
	var x=[];
	var result=[];
	for(var i=0;i<titleList.length;i++){
		if(i != 1){
			x.push(titleList[i].ititle);
		}
	}
	console.log("xuqiu "+x);
	for(var i=0;i<contentlist.length;i++){
		for(var j=0;j<contentlist[i].length;j++){
				if(j != 1){
					result.push(contentlist[i][j].icontent);
			}
		}
	}
	console.log(result);
	var obj = {};
	for(let i=0; i<3; i++){
	    obj[i] = [];
	}
	var arrayObj = new Array();
	arrayObj.push(x);
	for(var i=0;i<contentlist.length;i++){
		for(var j=0;j<contentlist[i].length;j++){
				if(j != 1){
					obj[i].push(contentlist[i][j].icontent);
			}
		}
		arrayObj.push(obj[i]);
	}
	console.log("echart2: "+arrayObj);
	var myChart = echarts.init(document.getElementById('echart2'));
	var option = {
			title : {
    	    },
		    legend: {
		    	top:'0%',
		        textStyle: {
		           color: 'rgba(255,255,255,.5)',
					fontSize:'12',
		        }
		    },
		    tooltip: {},
		    dataset: {
		    	source:arrayObj
		    },
		    xAxis: {type: 'category', gridIndex: 0,
		    	axisLine: {
		            show: true,
		         lineStyle: {
		                color: "rgba(255,255,255,.1)",
		                width: 1,
		                type: "solid"
		            },
		        },
				
		        axisTick: {
		            show: false,
		        },
				axisLabel:  {
		                interval: 0,
		               // rotate:50,
		                show: true,
		                textStyle: {
		 					color: "rgba(255,255,255,.6)",
		                    fontSize: '12',
		                },
		            }
		    },
		    yAxis: {
		    	gridIndex: 0,
		    	axisLabel: {
	    	           //formatter: '{value} %'
	    				show:true,
	    				 textStyle: {
	    	 					color: "rgba(255,255,255,.6)",
	    	                    fontSize: '12',
	    	                },
	    	        },
	    	        axisTick: {
	    	            show: false,
	    	        },
	    	        axisLine: {
	    	            show: true,
	    	            lineStyle: {
	    	                color: "rgba(255,255,255,.1	)",
	    	                width: 1,
	    	                type: "solid"
	    	            },
	    	        },
	    	        splitLine: {
	    	            lineStyle: {
	    	               color: "rgba(255,255,255,.1)",
	    	            }
	    	        }
		    	},
		    series: [
		        {type: 'bar',seriesLayoutBy: 'row'},
		        {type: 'bar',seriesLayoutBy: 'row'}
		    ]
		};
	myChart.setOption(option,true);
	window.onresize = function () {
		myChart.resize();
    };
	
}

//居民需求量预测
function flg_xqlyc(titleList,contentlist){
	var x=[];
	var y=[];

	for(var i=2;i<titleList.length;i++){
		x.push(titleList[i].ititle);
	}
	console.log(x);

	
	var obj = {};
	for(let i=0; i<contentlist.length; i++){
	    obj[i] = [];
	}
	for(var i=0;i<contentlist.length;i++){
		var a=i;
		for(var j=2;j<contentlist[i].length;j++){
			if(i==a){
				obj[a].push(contentlist[i][j].icontent);
			}
		}
		console.log("obj "+obj[a]);
	}
	//农民消费
	for(var i=0;i<contentlist.length;i++){
			var a=i;
			if(i==a){
				y.push(contentlist[i][0].icontent);
			}
	}
	console.log("y "+y);
	var temp=[];
	var legendData=y;
	for(var i = 0;i<legendData.length;i++){
		if(i==0){
			temp.push("[{name:"+"'"+legendData[i]+"'");
		}else{
			temp.push("{name:"+"'"+legendData[i]+"'");
		}
			temp.push(" type:'line'");
			temp.push(" stack:'总量'");
			if(i<legendData.length-1){
				temp.push("data:"+"["+obj[i]+"]}");
			}else{
				temp.push("data:"+"["+obj[i]+"]}]");
			}
	}
console.log("temp "+temp);
	var jsonarray = eval('('+temp+')');
	
	var myChart = echarts.init(document.getElementById('echart5'));
	var option = {
			title : {
    	    },
		    tooltip: {
		        trigger: 'axis'
		    },
		    legend: {
		    	top:'0%',
		        data:y,
		        textStyle: {
		           color: 'rgba(255,255,255,.5)',
					fontSize:'12',
		        }
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    toolbox: {
		        feature: {
//		            saveAsImage: {}
		        }
		    },
		    xAxis: {
		        type: 'category',
		        boundaryGap: false,
		        data: x,
		        axisLine: {
		            show: true,
		         lineStyle: {
		                color: "rgba(255,255,255,.1)",
		                width: 1,
		                type: "solid"
		            },
		        },
				
		        axisTick: {
		            show: false,
		        },
				axisLabel:  {
		                interval: 0,
		                rotate:60,
		                show: true,
		                textStyle: {
		 					color: "rgba(255,255,255,.6)",
		                    fontSize: '12',
		                },
		            }
		    },
		    yAxis: {
		        type: 'value',
		        axisLabel: {
	    	           //formatter: '{value} %'
	    				show:true,
	    				 textStyle: {
	    	 					color: "rgba(255,255,255,.6)",
	    	                    fontSize: '12',
	    	                },
	    	        },
	    	        axisTick: {
	    	            show: false,
	    	        },
	    	        axisLine: {
	    	            show: true,
	    	            lineStyle: {
	    	                color: "rgba(255,255,255,.1	)",
	    	                width: 1,
	    	                type: "solid"
	    	            },
	    	        },
	    	        splitLine: {
	    	            lineStyle: {
	    	               color: "rgba(255,255,255,.1)",
	    	            }
	    	        }
		    },
		    series:jsonarray
		};
	myChart.setOption(option,true);
	window.onresize = function () {
		myChart.resize();
    };
}

//人口年龄
function rknl(titleList,contentlist){
	var result=[];
	for(var i=0;i<titleList.length;i++){
			result.push(titleList[i].ititle);
	}
//	console.log("titleList数组 "+result);
	var obj = {};
	for(let i=0; i<contentlist.length; i++){
	    obj[i] = [];
	}
	var x=[];
	var y=[];
	var z=[];
	for(var i=0;i<contentlist.length;i++){
		var a=i;
		for(var j=0;j<contentlist[i].length;j++){
			if(i==a){
				obj[a].push(contentlist[i][j].icontent);
			}
		}
		x.push(obj[a][0]);
		y.push(obj[a][1]);
		z.push(obj[a][2]);
 }
	console.log(x);
	console.log(y);
	console.log(z);
		
	var mychart = echarts.init(document.getElementById('echart4'));
    // 指定图表的配置项和数据
    var option = {
    		title : {
    	    },
    	    tooltip : {
    	        trigger: 'axis',
    	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
    	  //          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    	        }
    	    },
    	    legend: {
    	        top:'0%',
    	        data:[ y[0], z[0]],
		           textStyle: {
		           color: 'rgba(255,255,255,.5)',
					fontSize:'12',
		        }
    	    },
    	    grid: {
    	        left: '3%',
    	        right: '4%',
    	        bottom: '3%',
    	        containLabel: true
    	    },
    	    xAxis : [
    	        {
    	        	type : 'category',
    	            data : x,
    	            axisLine: {
    		            show: true,
    		         lineStyle: {
    		                color: "rgba(255,255,255,.1)",
    		                width: 1,
    		                type: "solid"
    		            },
    		        },
    				
    		        axisTick: {
    		            show: false,
    		        },
    				axisLabel:  {
    		                interval: 5,
    		            //    rotate:60,
    		                show: true,
    		                textStyle: {
    		 					color: "rgba(255,255,255,.6)",
    		                    fontSize: '10',
    		                },
    		            }
    	        }
    	    ],
    	    yAxis : [
    	        {
    	        	type : 'value',
    	        	axisLabel: {
		    	           //formatter: '{value} %'
		    				show:true,
		    				 textStyle: {
		    	 					color: "rgba(255,255,255,.6)",
		    	                    fontSize: '12',
		    	                },
		    	        },
		    	        axisTick: {
		    	            show: false,
		    	        },
		    	        axisLine: {
		    	            show: true,
		    	            lineStyle: {
		    	                color: "rgba(255,255,255,.1	)",
		    	                width: 1,
		    	                type: "solid"
		    	            },
		    	        },
		    	        splitLine: {
		    	            lineStyle: {
		    	               color: "rgba(255,255,255,.1)",
		    	            }
		    	        }

    	        }
    	    ],
    	    series : [
				{
				    name:z[0],
				    type:'bar',
		//		    stack: '总量',
				    data:z
				},
    	        {
    	            name:y[0],
    	            type:'bar',
    	 //           stack: '总量',
    	            data:y
    	        }
    	        
    	    ]
    	};

    // 使用刚指定的配置项和数据显示图表。
    mychart.setOption(option,true);

    window.onresize = function () {
    	mychart.resize();
    };
}


/**
 * 预测值为空或者预测值与tfs表里的不相同时，执行此操作
 */
function forecast() {
	var forcasttime = '6';
	var id="f5724803b44641209db7261ab957ba80";
	var exclePath="e:\\arithmetic\\ExcelFile\\成都社会固定资产投资1998-2012.xlsx";
	$.ajax({
	url : basePath+'/forecast.do',
	data : {id:id,
	exclePath:exclePath,
	forcasttime:forcasttime
	},
	success : function(data) {
		contentYSJ = [];
		var message=data.message;
		
		if(message=='ok'){
			console.log(data)
			console.log("********")
			console.log(data.paramsJson);
			
			
			 titleList=eval('(' + data.titleJson + ')'); // 转换为json对象
			 
			console.log("titleList"+titleList)
			
        	 contentlist = eval('(' + data.contentJson + ')'); // 转换为json对象
			
			var paramsJsonold = data.paramsJson
			var oldcontent = paramsJsonold.substring(paramsJsonold.indexOf('rows')+8,paramsJsonold.lastIndexOf('}')-2);
			var b = oldcontent.split(",");
			list = [];
			for (var  i = 0;i<b.length;i++) {
				listtemp = [];
				listtemp = b[i].split("#!");
				if(i!=0){
					listtemp[0] = '原数据'+i;
				}
				console.log(listtemp+"********");
				list.push(listtemp);
			}
			
			TFSTableId = data.tabid;
			console.log("tabid:"+TFSTableId);
			var content =[];
			var text = [];
			if(data.title.length>0) {
				text.push("<label>"+data.title+"</label>");
				texttitle = data.title;
			}
			//页面固定名称为预测数据
			/*$('#excleTitle').html(text.join(""));*/
			
			
			xData = [];
			if (0 < titleList.length) {
				content.push("<thead><tr>");
				$.each(titleList, function(idx, item) {			
					content.push("<th nowrap>"+item.ititle+"</th>");	
					if(idx != 0){
					xData.push(item.ititle);
					}
				});
				content.push('</thead>');
			}
			contenttemp = [];
			contentlistTX = [];
			console.log("list:"+list)
			//将原数据添加到另一个表格当中
			contentYSJ = [];
			console.log("**************************")
			console.log("list："+list);
			console.log("contentYSJ："+contentYSJ);
			console.log("b："+b);
			console.log("**************************")

			console.log("contentYSJ:"+contentYSJ);
			
			if (0 < contentlist.length) {
				$.each(contentlist, function(idx,item) {
					var contenttemp=[];//用于记录每行数据，便于画图
					content.push("<tr>");
					$.each(item, function(n,obj) {						
						content.push("<td>"+obj.icontent+"</td>");	
						contenttemp.push(obj.icontent);
						
					});
					contentlistTX.push(contenttemp);
                    content.push('</tr>');
				});
				
			} 

			if(data.paramsJson != null){
				
				var paramsJson = data.paramsJson;
				var paramsJsontemp = JSON.parse(data.paramsJson);
				for(var item in paramsJsontemp){ 
			        if(item=='title'){  //item 表示Json串中的属性，如'name' 
			            var jValue=jsonObj[item];//key所对应的value 
			            alert(jValue); 
			        } 
			    }  
				console.log(paramsJson.indexOf("rows"));
				console.log(paramsJson.lastIndexOf("!"));
				console.log('paramsJson:' +paramsJson);
				
				
				var rows = paramsJson.substring(paramsJson.indexOf("rows")+8,paramsJson.lastIndexOf("!")+1);
				console.log('rows:' +rows);
				 rowsarr = rows.replace('"	','').split(",");
				 console.log("+++++++++++++++++++++++++++++++++++++");
				 console.log("rowsarr:"+rowsarr);
				 console.log("list:"+list)
				 console.log("+++++++++++++++++++++++++++++++++++++");
			}
			console.log("contentlistTX: "+contentlistTX);
        	zhexiantu();
//        	var text1 = document.getElementById("text1")
//        	var text2 = document.getElementById("text2")
 //       	text1.style.display = 'inline-block';	
 //       	text2.style.display = 'inline-block';
 //       	layer.msg('预测成功！');
		}else{
			alert('预测失败！');   
		}	
	},   
	error : function() {   
		alert('预测失败！');   
	}  
});

}

function zhexiantu(){
	temp = [];
	var zhexiantu = document.getElementById('echart1');
//	zhexiantu.style.display = "inline-block";
	/*console.log("+++++++++++++++++++++++++++");
	console.log("图名："+texttitle);
	console.log("横坐标："+xData);
	console.log("原数据："+rowsarr);
	console.log("rowsarr："+ typeof rowsarr);
	console.log("contentlistTX："+typeof contentlistTX);*/
	var namearr = [];//每条数据的namearr
	var dataarr = []//每条数据的dataarr
	for(var i = 0;i<contentlistTX.length;i++){
		var nametemp = [];
		var datatemp = [];
		for(var j = 0;j<contentlistTX[i].length;j++){
			if(j==0){
				nametemp.push("'"+contentlistTX[i][j]+"'")
				//nametemp.push(contentlistTX[i][j])
			}else{
				datatemp.push(contentlistTX[i][j])
			}
		}
		namearr.push(nametemp);
		dataarr.push(datatemp);
	}
	for(var i = 1;i<list.length;i++){
		var nametemp = [];
		var datatemp = [];
		/*var rowstemp = rowsarr[i].split("#!");*/
		var rowstemp = list[i];//替换成list（保存的原始数据）
		/*console.log("rowstemp: "+rowstemp);
		console.log("rowstemp: "+typeof rowstemp);
		console.log("rowstemp: "+rowstemp[1] );*/
		for(var j = 0;j<rowstemp.length;j++){
			//console.log("rowstemp[j]:"+rowstemp[j]);
			if(j==0){
				//nametemp.push(rowstemp[j].replace('"',''))
				nametemp.push("'"+rowstemp[j].replace('"','')+"'")
			}else{
				datatemp.push("'"+rowstemp[j].replace('"','')+"'")
			}
		}
	/*	console.log("nametemp:"+nametemp);
		console.log("datatemp:"+datatemp);
		console.log("rowstemp:"+rowstemp);*/
		namearr.push(nametemp);
		dataarr.push(datatemp);
	}
	/*console.log("namearr:"+namearr);
	console.log("dataarr:"+dataarr);
	console.log("namearr.length:"+namearr.length);
	console.log("dataarr.length:"+dataarr.length);
	console.log("rowsarr[0]:"+rowsarr[0]);
	console.log("rowsarr[1]:"+rowsarr[1]);*/
	console.log("namearr:"+namearr);
	/*console.log("namearr:"+typeof namearr);
	console.log("xData:"+xData);
	console.log("xData:"+typeof xData);*/
	for(var i = 0;i<namearr.length;i++){
		if(i==0){
			temp.push("[{name:"+namearr[i]);
			//temp.push("{name:"+namearr[i]);
		}else{
			temp.push("{name:"+namearr[i]);
		}
		temp.push(" type:'line'");
		/*temp.push(" stack: '总量'");*/
		if(i+1<namearr.length){
			temp.push(" data: "+"["+dataarr[i]+"]}");
		}else{
			temp.push(" data: "+"["+dataarr[i]+"]}]");
			//temp.push(" data: "+"["+dataarr[i]+"]}");
		}
	}
	/*console.log("temp: "+temp);*/
	jsonarray = null;
	jsonarray = eval('('+temp+')');
	var namearray = eval('('+namearr+')');
	console.log('namearray: '+namearray);
	console.log('jsonarray: '+jsonarray);
	console.log('temp: '+temp);
	console.log('temp type: '+typeof temp);
	console.log('temp[0] '+temp[0]);
	
	var myChart = echarts.init(zhexiantu)
	
	option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
    	top:'0%',
        textStyle: {
	           color: 'rgba(255,255,255,.5)',
	           fontSize:'12',
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
/*        feature: {
            saveAsImage: {}
        }*/
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data:xData,
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
		
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
                rotate:60,
                show: true,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '10',
                },
            }
    },
    yAxis: {
        type: 'value',
        axisLabel: {
	           //formatter: '{value} %'
				show:true,
				 textStyle: {
	 					color: "rgba(255,255,255,.6)",
	                    fontSize: '12',
	                },
	        },
	        axisTick: {
	            show: false,
	        },
	        axisLine: {
	            show: true,
	            lineStyle: {
	                color: "rgba(255,255,255,.1	)",
	                width: 1,
	                type: "solid"
	            },
	        },
	        splitLine: {
	            lineStyle: {
	               color: "rgba(255,255,255,.1)",
	            }
	        }
    },
    series: jsonarray
};

	myChart.setOption(option);
}

//居民养老模式
function jmyl(){
	var myChart = echarts.init(document.getElementById('echart6'));
	var option = {
		    title : {
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{d}%"
	//	        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        left: 'left',
		        data: ['居家养老','机构养老','社区养老'],
		        top:'0%',
		        textStyle: {
			           color: 'rgba(255,255,255,.5)',
			           fontSize:'12',
		        }
		    },
		    series : [
		        {
		            name: '居民养老',
		            type: 'pie',
		            radius : '55%',
		            center: ['50%', '60%'],
		            data:[
		                {value:70, name:'居家养老'},
		                {value:20, name:'机构养老'},
		                {value:10, name:'社区养老'}
		            ],
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
		    ]
		};

	myChart.setOption(option,true);
	window.onresize = function () {
		myChart.resize();
    };
}

/**
 * 去掉字符串前后空格，null转成''
 */
function fenye_trim(str) {
	return $.trim(str);
}