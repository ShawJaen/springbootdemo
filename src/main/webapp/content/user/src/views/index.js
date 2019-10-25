/*var a={
  "code": 0
  ,"msg": ""
  ,"data": [{
    "name": "component"
    ,"title": "组件"
    ,"icon": "layui-icon-component"
    ,"list": [{
      "name": "grid"
      ,"title": "栅格"
      ,"list": [{
        "name": "list"
        ,"title": "等比例列表排列"
      },{
        "name": "mobile"
        ,"title": "按移动端排列"
      },{
        "name": "mobile-pc"
        ,"title": "移动桌面端组合"
      },{
        "name": "all"
        ,"title": "全端复杂组合"
      },{
        "name": "stack"
        ,"title": "低于桌面堆叠排列"
      },{
        "name": "speed-dial"
        ,"title": "九宫格"
      }]
    }, {
      "name": "button"
      ,"title": "按钮"
    }, {
      "name": "form"
      ,"title": "表单"
      ,"list": [{
        "name": "element"
        ,"title": "表单元素"
      },{
        "name": "group"
        ,"title": "表单组合"
      }]
    }, {
      "name": "nav"
      ,"title": "导航"
    }, {
      "name": "tabs"
      ,"title": "选项卡"
    }, {
      "name": "progress"
      ,"title": "进度条"
    }, {
      "name": "panel"
      ,"title": "面板"
    }, {
      "name": "badge"
      ,"title": "徽章"
    }, {
      "name": "timeline"
      ,"title": "时间线"
    }, {
      "name": "anim"
      ,"title": "动画"
    }, {
      "name": "auxiliar"
      ,"title": "辅助"
    }, {
      "name": "layer"
      ,"title": "通用弹层"
      ,"list": [{
        "name": "list"
        ,"title": "功能演示"
      },{
        "name": "special-demo"
        ,"title": "特殊示例"
      },{
        "name": "theme"
        ,"title": "风格定制"
      }]
    }, {
      "name": "laydate"
      ,"title": "日期时间"
    }, {
      "name": "table"
      ,"title": "表格"
    }, {
      "name": "laypage"
      ,"title": "分页"
    }, {
      "name": "upload"
      ,"title": "上传"
    }, {
      "name": "carousel"
      ,"title": "轮播"
    }, {
      "name": "laytpl"
      ,"title": "模板引擎"
    }, {
      "name": "flow"
      ,"title": "流加载"
    }, {
      "name": "util"
      ,"title": "工具"
    }, {
      "name": "code"
      ,"title": "代码修饰"
    }, {
      "name": "layim"
      ,"title": "即时聊天"
      ,"jump": "senior/im/chat"
    }]
  }, {
    "name": "template"
    ,"title": "模板"
    ,"icon": "layui-icon-template"
    ,"list": [{
      "name": "user"
      ,"title": "用户相关"
      ,"spread": true
      ,"list": [{
        "name": "reg"
        ,"title": "注册"
        ,"jump": "user/reg"
      },{
        "name": "login"
        ,"title": "登入"
        ,"jump": "user/login"
      },{
        "name": "forget"
        ,"title": "忘记密码"
        ,"jump": "user/forget"
      }]
    }, {
      "name": "tips"
      ,"title": "提示页面"
      ,"spread": true
      ,"list": [{
        "name": "404"
        ,"title": "404"
      },{
        "name": "error"
        ,"title": "错误提示"
      }]
    }]
  }, {
    "name": "app"
    ,"title": "应用"
    ,"icon": "layui-icon-app"
    ,"list": [{
      "name": "message"
      ,"title": "消息中心"
    },{
      "name": "content"
      ,"title": "内容系统"
      ,"spread": true
      ,"list": [{
        "name": "list"
        ,"title": "所有文章"
      },{
        "name": "comment"
        ,"title": "评论管理"
      },{
        "name": "tags"
        ,"title": "标签管理"
      }]
    },{
      "name": "forum"
      ,"title": "社区系统"
      ,"spread": true
      ,"list": [{
        "name": "list"
        ,"title": "全部帖子"
      },{
        "name": "replys"
        ,"title": "所有回帖"
      }]
    },{
      "name": "mall"
      ,"title": "商城管理"
      ,"spread": true
      ,"list": [{
        "name": "list"
        ,"title": "商品列表"
      },{
        "name": "category"
        ,"title": "分类管理"
      },{
        "name": "specs"
        ,"title": "规格管理"
      }]
    }]
  }, {
    "name": "senior"
    ,"title": "高级"
    ,"icon": "layui-icon-senior"
    ,"list": [{
      "name": "im"
      ,"title": "通讯系统"
      ,"spread": true
      ,"list": [{
        "name": "chat"
        ,"title": "社交聊天"
      },{
        "name": "kefu"
        ,"title": "客服系统"
      }]
    },{
      "name": "echarts"
      ,"title": "Echarts 集成"
      ,"spread": true
      ,"list": [{
        "name": "line"
        ,"title": "折线图"
      },{
        "name": "bar"
        ,"title": "柱状图"
      },{
        "name": "map"
        ,"title": "地图"
      }]
    }]
  }, {
    "name": "user"
    ,"title": "用户"
    ,"icon": "layui-icon-user"
    ,"list": [{
      "name": "user"
      ,"title": "用户"
      ,"spread": true
      ,"list": [{
        "name": "list"
        ,"title": "用户列表"
      }]
    },{
      "name": "administrators"
      ,"title": "后台管理组"
      ,"spread": true
      ,"list": [{
        "name": "list"
        ,"title": "管理员列表"
      },{
        "name": "role"
        ,"title": "角色管理"
      }]
    }]
  }, {
    "name": "set"
    ,"title": "设置"
    ,"icon": "layui-icon-set"
    ,"list": [{
      "name": "base"
      ,"title": "基本设置"
      ,"spread": true
      ,"list": [{
        "name": "website"
        ,"title": "系统设置"
      },{
        "name": "email"
        ,"title": "邮件服务"
      }]
    },{
      "name": "security"
      ,"title": "安全设置"
    }]
  }, {
    "name": "get"
    ,"title": "授权"
    ,"icon": "layui-icon-auz"
    ,"jump": "http://localhost:9090/GISDSS_BD/comm/model/dbTabFCAList_copy1.jsp"
  }]
};*/

var a = {"data":[{"id":"5d6a3e5c773b4fe39508c05a3c6601c0","pid":"0","name":"模型分析","url":null,"list":[{"id":"a1b9d3f5ff5f4d1c927cc11f5e5a0a44","pid":"5d6a3e5c773b4fe39508c05a3c6601c0","name":"经济分析","url":null,"list":[{"id":"d2c7749c9c7f4d0c9c02891b2d4b06c1","pid":"a1b9d3f5ff5f4d1c927cc11f5e5a0a44","name":"成都全社会固定资产投资预测","url":"arithmetic/TFSshow-one.jsp?opk=079d515deecd4a6c84f396efd6f224cb","list":[]},{"id":"04486710b4d84329b9b597665f5e6a07","pid":"a1b9d3f5ff5f4d1c927cc11f5e5a0a44","name":"成都工业生产者购进价格指数","url":"arithmetic/TFSshow-more.jsp?opk=c2c5398eb6464f9aa5d07a4030f2522d","list":[]}]},{"id":"75ded5f9d42247b5b283602f13d8467a","pid":"5d6a3e5c773b4fe39508c05a3c6601c0","name":"消费分析","url":null,"list":[{"id":"162cde8a98ed4e529f2ca90e870a670f","pid":"75ded5f9d42247b5b283602f13d8467a","name":"成都市农村居民消费分析","url":"model/dbTabFCAList_copy.jsp","list":[]},{"id":"497dbb374b3e4b47aefa2bfa79445bc5","pid":"75ded5f9d42247b5b283602f13d8467a","name":"1982-1988农村居民消费分析","url":"model/dbTabFCAList_copy1.jsp","list":[]}]},{"id":"ccc11bc9b5794c6a82c7c0b8a643a686","pid":"5d6a3e5c773b4fe39508c05a3c6601c0","name":"仿真分析","url":null,"list":[{"id":"079d515deecd4a6c84f396efd6f224cb","pid":"ccc11bc9b5794c6a82c7c0b8a643a686","name":"某地主要经济指标仿真","url":"arithmetic/IFSshow-copy.jsp?opk=ef776966ee174a6ba85bc1074c2da820","list":[]}]},{"id":"b319285827aa4aeca22faf0192e89d02","pid":"5d6a3e5c773b4fe39508c05a3c6601c0","name":"人口分析","url":null,"list":[{"id":"6acda2b215b94258b8220aeee8f84e12","pid":"b319285827aa4aeca22faf0192e89d02","name":"成都市2010-2012人口分析","url":"model/dbTabPCSList_copy.jsp","list":[]}]},{"id":"c469f6db50c64d7cab3eaca99fb8c59e","pid":"5d6a3e5c773b4fe39508c05a3c6601c0","name":"教育","url":null,"list":[{"id":"79a27eb555b24895b5071a42fa064b68","pid":"c469f6db50c64d7cab3eaca99fb8c59e","name":"某地高中生升学预测","url":"impdatabase/bayesian-copy.jsp?opk=9e44239518a943bca530e07b9d7f9629","list":[]},{"id":"37a4967159bd49e7abc0a139885bed56","pid":"c469f6db50c64d7cab3eaca99fb8c59e","name":"某地高中生身体素质聚类分析","url":"arithmetic/cluster-tiyu.jsp?opk=ff03147898d8471ca4535b9d7ff694a2&opk=37a4967159bd49e7abc0a139885bed56","list":[]}]},{"id":"735da58a60ae493ca74173b9e0b1e75e","pid":"5d6a3e5c773b4fe39508c05a3c6601c0","name":"民生","url":null,"list":[{"id":"965e1160ba2b4cef91925bec1dcdf283","pid":"735da58a60ae493ca74173b9e0b1e75e","name":"某地养老模式预测","url":"impdatabase/bayesian-yl.jsp","list":[]}]},{"id":"828e7151667b427594fa643675281dc8","pid":"5d6a3e5c773b4fe39508c05a3c6601c0","name":"政务服务","url":null,"list":[{"id":"e78f6a285d0a47c6aaa837b8223317fc","pid":"828e7151667b427594fa643675281dc8","name":"政务中的职能部门相关性分析","url":"relevant/relevantShow-znbm.jsp","list":[]},{"id":"f7085fcbdbfc4d73af5eed04c3ea518c","pid":"828e7151667b427594fa643675281dc8","name":"城市重点项目过程相关性分析","url":"relevant/relevantShow-xm.jsp","list":[]}]}]}]}

var local = window.location;
var contextPath = local.pathname.split("/")[1];
var basePath = local.protocol+"//"+local.host+"/"+contextPath;

$(document).ready(function(){

//	var jsonarray = eval('('+menu+')');
//	console.log(jsonarray.data);
	/*$.ajax({
		url : basePath+'/getMenu.do',
		type : 'POST',
		dataType:'json',
		async : false,
		data : {},
		success : function(data) {
//			var jsonarray = eval(data);
			console.log("data:"+data);
			show(data.data);
	    },   
	    error : function() {   
	        alert('网络连接出错！');   
	    }  
	});*/
//	show(jsonarray.data); //后台数据
	show(a.data);
});
function show(data){
	var html = '<ul class="layui-nav layui-nav-tree" lay-shrink="all" id="LAY-system-side-menu" lay-filter="layadmin-system-side-menu">';
	for(var i=0;i<data.length;i++){
		console.log(data[i].list);
		if(data[i].spread){
			html += '<li class="layui-nav-item layui-nav-itemed">';
		}else{
			html += '<li class="layui-nav-item">';
		}
		if(data[i].list !== undefined && data[i].list !== null && data[i].list.length > 0){
			html += '<a href="javascript:;">' + data[i].name;
			html += '<span class="layui-nav-more"></span>';
			html += '</a>';
			html += '<dl class="layui-nav-child">';
			//二级菜单
			for(var j=0;j<data[i].list.length;j++){
				//是否有下级
				if (data[i].list[j].list !== undefined && data[i].list[j].list !== null && data[i].list[j].list.length > 0) {
					html += '<dd>'
					html += '<a href="javascript:;">' + data[i].list[j].name;
					html += '<span class="layui-nav-more"></span>';
					html += '</a>';
					//三级菜单
						html +='<dl class="layui-nav-child">';
						var threeLevelNodes = data[i].list[j].list;
						for(var k=0;k<threeLevelNodes.length;k++){
							html += '<dd>';
							html += '<a lay-href="'+ basePath+"/content/"+threeLevelNodes[k].url +'">' + threeLevelNodes[k].name + '</a>';
							html += '</dd>';
						}
					html += '</dl>';
					html += '</dd>';
				}else{
					html += '<dd>';
					html += '<a lay-href="'+ basePath+"/content/"+data[i].list[j].url+'">' + data[i].list[j].name;
					html += '</a>';
					html += '</dd>';
				}
			}
			html += '</dl>';
		}else{
			var dataUrl = (data[i].url !== undefined && data[i].url !== '') ? 'data-url="' + data[i].url + '"' : '';
			html += '<a lay-href="' + basePath+"/content/"+ data[i].url + '"' + dataUrl + '>';
			if(data[i].icon !== undefined && data[i].icon !== ''){
				if (data[i].icon.indexOf('fa-') !== -1) {
                    html += '<i class="fa ' + data[i].icon + '" aria-hidden="true" data-icon="' + data[i].icon + '"></i>';
                } else {
                    html += '<i class="layui-icon '+ data[i].icon +'"   ></i>';
                }
			}
			html += '<cite>' + data[i].name + '</cite>';
			html += '</a>';
		}
		html += '</li>';
	}
	html += '</ul>';
	$("#nav").append(html);
//	console.log(html);
}
