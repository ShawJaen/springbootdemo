<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String port = request.getServerPort() == 80 ? "" : ":"
			+ request.getServerPort();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + port + path + "/";
	long randomVal = System.currentTimeMillis();//防止缓存
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<title>成都市社会经济大数据集成展现</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<script type="text/javascript" src="<%=basePath%>content/sjzx/js/jquery.js"></script>
    <link rel="stylesheet" href="<%=basePath%>content/sjzx/css/comon0.css" />
<script language="javascript">
	var basePath="<%=basePath%>	";
</script>
<script>
    $(window).load(function () {
        $(".loading").fadeOut()
    })


    $(document).ready(function () {
        var whei = $(window).width()
        $("html").css({ fontSize: whei / 20 })
        $(window).resize(function () {
            var whei = $(window).width()
            $("html").css({ fontSize: whei / 20 })
        });
    });
</script>
<script type="text/javascript" src="<%=basePath%>content/sjzx/js/echarts.min.js"></script>
<script type="text/javascript" src="<%=basePath%>content/sjzx/js/js.js"></script>

<script type="text/javascript" src="<%=basePath%>content/echarts/js/chengdu.js"></script>
	<script type="text/javascript" src="<%=basePath%>content/echarts/js/map_bar1.js"></script>
<%-- <script type="text/javascript" src="<%=basePath%>content/sjzx/js/sjzxIndex.js"></script> --%>
</head>
<body>
    <div class="canvas" style="opacity: .2">
        <iframe frameborder="0" src="<%=basePath%>content/sjzx/js/index.html" style="width: 100%; height: 100%"></iframe>
    </div>
    <div class="loading">
        <div class="loadbox"> <img src="<%=basePath%>content/sjzx/images/loading.gif"> 页面加载中... </div>
    </div>
    <div class="head">
        <h1>成都市社会经济大数据集成展现</h1>
        <div class="weather"><!--<img src="images/weather.png"><span>多云转小雨</span>--><span id="showTime"></span></div>

        <script>
            var t = null;
            t = setTimeout(time, 1000); 
            function time() {
                clearTimeout(t); 
                dt = new Date();
                var y = dt.getFullYear();
                var mt = dt.getMonth() + 1;
                var day = dt.getDate();
                var h = dt.getHours(); 
                var m = dt.getMinutes(); 
                var s = dt.getSeconds(); 
                document.getElementById("showTime").innerHTML = y + "年" + mt + "月" + day + "-" + h + "时" + m + "分" + s + "秒";
                t = setTimeout(time, 1000);  
            }

        </script>


    </div>
    <div class="mainbox">
        <ul class="clearfix">
            <li>
                <div class="boxall" style="height: 3.2rem">
                    <div class="alltitle">主要经济指标</div>
                    <div class="allnav" id="echart1"></div>
                    <div class="boxfoot"></div>
                </div>
                <div class="boxall" style="height: 3.2rem">
                    <div class="alltitle">居民消费需求偏好分析</div>
                    <div class="allnav" id="echart2"></div>
                    <div class="boxfoot"></div>
                </div>
                <div class="boxall" style="height: 3.2rem">
                    <div style="height:100%; width: 100%;">
                        <div class="sy" id="fb1"></div>
                        <div class="sy" id="fb2"></div>
                        <div class="sy" id="fb3"></div>
                    </div>
                    <div class="boxfoot">
                    </div>
                </div>
            </li>
            <li>
                <div class="bar">
                    <div class="barbox">
                        <ul class="clearfix">
                            <li class="pulll_left counter">15342.77</li>
                            <li class="pulll_left counter">3712.6</li>
                        </ul>
                    </div>
                    <div class="barbox2">
                        <ul class="clearfix">
                            <li class="pulll_left">2018年生产总值(亿元)</li>
                            <li class="pulll_left">2018年旅游总收入(亿元)</li>
                        </ul>
                    </div>
                </div>
                <div class="map">
                    <div class="map1"><img src="images/lbx.png"/></div>
                    <div class="map2"><img src="images/jt.png"/></div>
                    <div class="map3"><img src="images/map.png"/></div>
                    <div class="map4" id="map"></div>	<!-- 成都地图 -->
                   <!--  <div class="map4" id="map_1"></div> -->	<!-- 中国地图 -->
                </div>
            </li>
            <li>
                <div class="boxall" style="height:3.4rem">
                    <div class="alltitle">人口年龄分布</div>
                    <div class="allnav" id="echart4"></div>
                    <div class="boxfoot"></div>
                </div>
                <div class="boxall" style="height: 3.2rem">
                    <div class="alltitle">居民人均消费量预测</div>
                    <div class="allnav" id="echart5"></div>
                    <div class="boxfoot"></div>
                </div>
                <div class="boxall" style="height: 3rem">
                    <div class="alltitle">居民养老模式分析</div>
                    <div class="allnav" id="echart6"></div>
                    <div class="boxfoot"></div>
                </div>
            </li>
        </ul>
    </div>
    <div class="back"></div>


    <%-- <script type="text/javascript" src="<%=basePath%>content/sjzx/js/china.js"></script>
    <script type="text/javascript" src="<%=basePath%>content/sjzx/js/area_echarts.js"></script> --%>

 
</body>
<%-- <script type="text/javascript" src="<%=basePath%>plugin/jquery/jquery-1.8.2.min.js"></script>
<script type="text/javascript" src="<%=basePath%>plugin/js/fenye.js"></script>
<script type="text/javascript" src="<%=basePath%>plugin/js/common.js"></script>
<script type="text/javascript" src="<%=basePath%>plugin/layui2.3/layui.all.js"></script>
<script type="text/javascript" src="<%=basePath%>plugin/echarts/echarts4.js"></script>
<script type="text/javascript" src="js/dbTabFCAList_copy.js?ver=<%=randomVal%>"></script> --%>
</html>