

layui.use('layer',function(){
	var $ = layui.jquery,layer = layui.layer;
	var myChart = echarts.init(document.getElementById('map'));
    // 市区坐标
    var geoCoordMap = {
        
    "锦江区":[104.080989,30.657689],
    "青羊区":[104.055731,30.667648],
    "金牛区":[104.043487,30.692058],
    "武侯区":[104.05167,30.630862],
    "成华区":[104.103077,30.660275],
    "龙泉驿区":[104.269181,30.56065],
    "青白江区":[104.251673, 30.880863],
    "新都区":[104.16022,30.824223],
    "温江区":[103.836776,30.697996],
    "金堂县":[104.415604,30.858417],
    "双流县":[103.922706,30.573243],
    "郫都区":[103.887842,30.808752],
    "大邑县":[103.522397,30.586602],
    "蒲江县":[103.511541,30.194359],
    "新津县":[103.812449,30.414284],
    "简阳市":[104.550339,30.390666],
    "都江堰市":[103.627898,30.99114],
    "彭州市":[103.941173,30.985161],
    "邛崃市":[103.46143,30.413271],
    "崇州市":[103.671049,30.631478]
    };
    var rawData = [
            ["锦江区",10,50],
            ["青羊区",20,30],
            ["金牛区",30,40],
            ["武侯区",26,80],
            ["成华区",26,10],
            ["龙泉驿区",26,20],
            ["青白江区",60,30],
            ["新都区",15,40],
            ["温江区",19,10],
            ["金堂县",30,60],
            ["双流县",10,7],
            ["郫都区",40,11],
            ["大邑县",35,33],
            ["蒲江县",28,45],
            ["新津县",88,12],
            ["简阳市",100,40],
            ["都江堰市",55,12],
            ["彭州市",71,80],
            ["邛崃市",9,20],
            ["崇州市",41,50]
    ];

  //配置地图的样式
    var option3 = {
        animation: false,
        title: {
            /*text: '成都市数据展示',
            left: 'center',
            textStyle: {
                color: '#fff'
            }*/
        },
        // 地图背景颜色
        tooltip: {
            trigger: 'axis'
        },
        geo: {
            map: '成都市',
            // silent: true,	//图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
            roam: false, // 缩放和拖拽
            label: {
                emphasis: {
                    show: false,
                    areaColor: '#eee'
                }
            },
            // 地区块儿颜色
            itemStyle: { // 每个区域的样式
                /*normal: {
                    areaColor: 'rgba(119,119,119,0)',
                    borderColor: '#00BBBD',
                    borderWidth: 1.5,
                },
                emphasis: { // 高亮时候的样式
//                    areaColor: 'rgba(119,119,119,0)',
                	areaColor: '#21AEF8'
                }*/
            	normal: {
                    areaColor: '#4c60ff',
                    borderColor: '#002097'
                },
                emphasis: {
                    areaColor: '#293fff'
                }
            }
        },
        series: []
    };

    //给每个城市对应的坐标处加上柱状图
    function renderEachCity() {
        var option = {
            xAxis: [],
            yAxis: [],
            grid: [],
            series: []
        };

        echarts.util.each(rawData, function (dataItem, idx) {
            // console.log(dataItem,idx);      //["南京", 10, 20, 30], 0
            // console.log(dataItem[0]);       //"南京"
//            var inflationData = [dataItem[1], dataItem[2], dataItem[3]];
        	var inflationData = [dataItem[1], dataItem[2]];
            var geoCoord = geoCoordMap[dataItem[0]]; //获得城市的坐标
            var coord = myChart.convertToPixel('geo', geoCoord); //转换坐标系上的点到像素坐标值。

            idx += '';
            option.xAxis.push({
                id: idx,
                gridId: idx,
                type: 'category',
                name: dataItem[0],
                nameTextStyle: {
                    color: '#F1E04F',
                },
                nameLocation: 'middle',
                nameGap: 3,
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                minInterval: 10,
//                data: ["学校", "教师", "学生"],
                data: ["数据1","数据2"],
                z: 100

            });
            option.yAxis.push({
                id: idx,
                gridId: idx,
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#1C70B6'
                    }
                },
                max: 50,
                z: 100
            });
            option.grid.push({
                id: idx,
                width: 30,
                height: 40,
                left: coord[0] - 15,
                top: coord[1] - 15,
                z: 100
            });
            option.series.push({
                id: idx,
                type: 'bar',
                xAxisId: idx,
                yAxisId: idx,
                barWidth: 7,
                barGap: 1,
                barCategoryGap: 0,
                data: inflationData,
                z: 100,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            // 柱状图每根柱子颜色
//                            var colorList = ['#F75D5D', '#59ED4F', '#4C91E7'];
                        	var colorList = ['#14c8d4','#59ED4F'];
                        	
                            return colorList[params.dataIndex];
                        }
                    }
                }
            });
        });
        myChart.setOption(option);
    }
    setTimeout(renderEachCity, 0);
    // 缩放和拖拽
    function throttle(fn, delay, debounce) {
        var currCall;
        var lastCall = 0;
        var lastExec = 0;
        var timer = null;
        var diff;
        var scope;
        var args;

        delay = delay || 0;

        function exec() {
            lastExec = (new Date()).getTime();
            timer = null;
            fn.apply(scope, args || []);
        }

        var cb = function () {
            currCall = (new Date()).getTime();
            scope = this;
            args = arguments;
            diff = currCall - (debounce ? lastCall : lastExec) - delay;

            clearTimeout(timer);

            if (debounce) {
                timer = setTimeout(exec, delay);
            } else {
                if (diff >= 0) {
                    exec();
                } else {
                    timer = setTimeout(exec, -diff);
                }
            }

            lastCall = currCall;
        };
        return cb;
    }
    var throttledRenderEachCity = throttle(renderEachCity, 0);
    //监听地图缩放
    myChart.on('geoRoam', throttledRenderEachCity);

    myChart.setOption(option3);

    var divObj;
    var index;
 // 点击显示柱状图
    myChart.on('click',function(e){
    	if(e.componentSubType == "bar"){  //判断是否点击柱状图
    		//多窗口模式，层叠置顶
            // 创建柱状图容器
    		if(!divObj){
	            divObj = document.createElement('div');
	            divObj.id = 'zhuzhuang';
	            var divX = getMousePos()['x']; 
	            var divY = getMousePos()['y'];
	            $(divObj).css({
	            	'width': 250,
	                'height': 180,
	                'top': divY,
	                'left': divX
	            }).appendTo('.wrap');
    		}
            // 创建柱状图
            zhuZhuangTu(e);
			//判断index是否存在，如果存在就不用open一个新的，直接更改原有的内容和标题就行
            if(!index){
            	index = layer.open({
			        type: 1, 
			        title: "1",
			        id:'lid1',
			        anim: 1,
			        //area: ['250px', '180px'],
			        shade: 0,//遮罩
			        content:$('#zhuzhuang'),
			        //右上角关闭事件
			        cancel: function(){ 
	    				$('#zhuzhuang').remove();
	    				$('.layui-layer').remove();
	    				divObj=null;
	    				index=null;
	  				}
			      });
            }
            layer.title("标题", index);//更改标题
           //设置背景透明
            layer.style(index,{
            	backgroundColor: 'rgba(255, 255, 255, 0.5)'
            });
        }
    });
 // 获取横纵坐标
    function getMousePos(e) {
        var e = event || window.event;
        var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
        var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
        var x = e.pageX || e.clientX + scrollX;
        var y = e.pageY || e.clientY + scrollY;
        // console.log(x,y)
        return {'x': x,'y': y};
    }
    
 // 生成柱状图
    function zhuZhuangTu(e) {
        var zhuzhuang = echarts.init(document.getElementById('zhuzhuang'));
        option = {
            backgroundColor: 'rgba(255,255,255,.3)',
            legend: {
                data: ['数据1','数据2']
            },
            xAxis: [
                {
                    
                    type: 'category',
                    data: ['数据1','数据2']
                }
            ],
            yAxis: [
                {
                    splitLine: {
                        show: false
                    },
                    type: 'value'
                }
            ],
            series: [
                {
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: function(params){
                                var colorList = ['#F75D5D','#59ED4F','#4C91E7'];
                                return colorList[params.dataIndex];
                            },
                            label: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: '#000'
                                }
                            }
                        }
                    },
                    data: []
                }
            ]
        };
        zhuzhuang.setOption(option);
        
        //后取后台数据，是每个省点击弹出该省的数据
        var op = zhuzhuang.getOption();	//getOption: 返回内部持有的当前显示option克隆
        for(i = 0;i<rawData.length;i++){
        	if(e.seriesIndex == i){
        		op.series[0].data.push(rawData[i][1]);
				op.series[0].data.push(rawData[i][2]);
        	}
        	zhuzhuang.setOption(op,true);
        }
        
    }
    
    window.onresize = function () {
        myChart.resize();
        setTimeout(renderEachCity, 0);
    }
    
 // 生成遮挡层
    function creatWrap(){
        var zheDang = document.createElement('div');
        $(zheDang).addClass('zhedang').css({
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.2)'
        }).appendTo('.wrap');
        /*var style = document.createAttribute("style");
        zheDang.id="zheDang";
        zheDang.style.cssText="width:100%;height:100%;position:absolute;top: 0;left: 0;backgroundColor:rgba(0,0,0,.2);";
        $("#wrap").append(zheDang);*/
    }
    // 去掉遮挡层
    function clearWrap(id){
        $(id).click(function(e){
            // console.log(this);
            this.remove();
            $('.tongJiTu').remove();
            return false;
        });
    }
})
	