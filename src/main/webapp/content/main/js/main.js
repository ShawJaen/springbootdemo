//左侧竖导航：模拟数据
layui.config({
    base: 'static/layui/lay/modules/',　　//需要依赖的navbar.js/tab.js路径
}).use(['element', 'layer', 'navbar', 'tab'], function () {
    var element = layui.element,
        $ = layui.jquery,
        layer = layui.layer,
        navbar = layui.navbar();
 
   //模拟数据navs
　　navs = [
      {
        "title": "首页",
        "icon": "fa fa-home", //左侧图标
        "spread": false,　　//是否默认展开
        "href": "${pageContext.request.contextPath}/static/modules/main/index.jsp" //点击之后，右侧iframe显示的页面路径
      },
      {
        "title": "营业厅",
        "icon": "fa fa-desktop ",
        "spread": false,
        "href": " ",
        "children": [　　//二级菜单 children
          {
            "title": "指标",
            "icon": "fa fa-flag-checkered",
            "href": "${pageContext.request.contextPath}/static/modules/main/setting/userList.jsp",
            "spread": false
          },
          {
            "title": "效益",
            "icon": "fa fa-line-chart",
            "href": "${pageContext.request.contextPath}/static/modules/main/setting/userList.jsp",
            "spread": false
          }
        ]
      },
      {
        "title": "系统设置",
        "icon": "fa fa-cogs",
        "href": "",
         "spread":false,
         "children": [
           　　{
              "title": "权限设置",
              "icon": "fa fa-balance-scale",
               "href": "www.baidu.com"
              }
            ]
        },
      {
        "title": "明细导入",
        "icon": "fa fa-file-text",
        "spread": false,
        "href": "${pageContext.request.contextPath }/static/modules/DataImport/importExcel.jsp"
    }];
               
　　//设置navbar
    navbar.set({
        type:'GET', //获取方式
        spreadOne: true,　　//设置是否只展开一个二级菜单
        elem: "#navbar_side",　　//存在组件的容器
        cached: false,　　//是否启用缓存，如果设置为true，则将初始化数据的数据添加至缓存
        data: navs,　　//提供给组件的数据列表，请严格按照规定格式提供。
    /*cached:true,　　
    url: 'datas/nav.json' //提供数据源远程的URL,当前只支持同步的方式读取数据 */　　
    });
 
    //渲染navbar
    navbar.render();
 
    //监听点击事件
    navbar.on('click(side)', function (data) {
        var childHtml = data.field.href;//获取当前点击的路径
        $(".layui-body iframe").attr("src",childHtml);//将路径赋值给iframe展示
    });
});