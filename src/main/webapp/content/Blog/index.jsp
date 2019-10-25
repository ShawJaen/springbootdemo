<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>MyBlog</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" type="text/css" href="<%=basePath%>layui/css/layui.css">
  	<link rel="stylesheet" type="text/css" href="<%=basePath%>layui/css/blog.css">
  </head>
  
  <body>
    <div class="header">
    <div class="menu-btn">
      <div class="menu"></div>
    </div>
    <h1 class="logo">
      <a href="<%=basePath%>content/Blog/index.html">
        <span>MYBLOG</span>
        <img src="<%=basePath%>layui/img/logo.png">
      </a>
    </h1>
    <div class="nav">
      <a href="<%=basePath%>content/Blog/index.jsp" class="active">文章</a>
      <a href="<%=basePath%>content/Blog/whisper.jsp">微语</a>
      <a href="<%=basePath%>content/Blog/leacots.jsp">留言</a>
      <a href="<%=basePath%>content/Blog/album.jsp">相册</a>
      <a href="<%=basePath%>content/Blog/about.jsp">关于</a>
    </div>
    <ul class="layui-nav header-down-nav">
      <li class="layui-nav-item"><a href="index.html" class="active">文章</a></li>
      <li class="layui-nav-item"><a href="whisper.html">微语</a></li>
      <li class="layui-nav-item"><a href="leacots.html">留言</a></li>
      <li class="layui-nav-item"><a href="album.html">相册</a></li>
      <li class="layui-nav-item"><a href="about.html">关于</a></li>
    </ul>
    <p class="welcome-text">
      欢迎来到<span class="name">小明</span>的博客~
    </p>
  </div>

  <div class="banner">
    <div class="cont w1000">
      <div class="title">
        <h3>MY<br />BLOG</h3>
        <h4>well-balanced heart</h4>
      </div>
      <div class="amount">
        <p><span class="text">访问量</span><span class="access">1000</span></p>
        <p><span class="text">日志</span><span class="daily-record">1000</span></p>
      </div>
    </div>
  </div>

  <div class="content">
    <div class="cont w1000">
      <div class="title">
        <span class="layui-breadcrumb" lay-separator="|">
          <a href="javascript:;" class="active">设计文章</a>
          <a href="javascript:;">前端文章</a>
          <a href="javascript:;">旅游杂记</a>
        </span>
      </div>
      <div class="list-item">
        <div class="item">
          <div class="layui-fluid">
            <div class="layui-row">
              <div class="layui-col-xs12 layui-col-sm4 layui-col-md5">
                <div class="img"><img src="<%=basePath%>layui/img/sy_img1.jpg" alt=""></div>
              </div>
              <div class="layui-col-xs12 layui-col-sm8 layui-col-md7">
                <div class="item-cont">
                  <h3>空间立体效果图，完美呈现最终效果<button class="layui-btn layui-btn-danger new-icon">new</button></h3>
                  <h5>设计文章</h5>
                  <p>室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境以所祈使的气氛，却早巳从人类文明伊始的时期就已存在</p>
                  <a href="details.html" class="go-icon"></a>
                </div>
            </div>
            </div>
           </div>
        </div>
        <div class="item">
          <div class="layui-fluid">
            <div class="layui-row">
              <div class="layui-col-xs12 layui-col-sm4 layui-col-md5">
                <div class="img"><img src="<%=basePath%>layui/img/sy_img2.jpg" alt=""></div>
              </div>
              <div class="layui-col-xs12 layui-col-sm8 layui-col-md7">
                <div class="item-cont">
                  <h3>空间立体效果图，完美呈现最终效果<button class="layui-btn layui-btn-danger new-icon">new</button></h3>
                  <h5>设计文章</h5>
                  <p>室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境以所祈使的气氛，却早巳从人类文明伊始的时期就已存在</p>
                  <a href="details.html" class="go-icon"></a>
                </div>
            </div>
            </div>
           </div>
        </div>
        <div class="item">
          <div class="layui-fluid">
            <div class="layui-row">
              <div class="layui-col-xs12 layui-col-sm4 layui-col-md5">
                <div class="img"><img src="<%=basePath%>layui/img/sy_img3.jpg" alt=""></div>
              </div>
              <div class="layui-col-xs12 layui-col-sm8 layui-col-md7">
                <div class="item-cont">
                  <h3>空间立体效果图，完美呈现最终效果<button class="layui-btn layui-btn-danger new-icon">new</button></h3>
                  <h5>设计文章</h5>
                  <p>室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境以所祈使的气氛，却早巳从人类文明伊始的时期就已存在</p>
                  <a href="details.html" class="go-icon"></a>
                </div>
            </div>
            </div>
           </div>
        </div>
        <div class="item">
          <div class="layui-fluid">
            <div class="layui-row">
              <div class="layui-col-xs12 layui-col-sm4 layui-col-md5">
                <div class="img"><img src="<%=basePath%>layui/img/sy_img4.jpg" alt=""></div>
              </div>
              <div class="layui-col-xs12 layui-col-sm8 layui-col-md7">
                <div class="item-cont">
                  <h3>空间立体效果图，完美呈现最终效果<button class="layui-btn layui-btn-danger new-icon">new</button></h3>
                  <h5>设计文章</h5>
                  <p>室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境以所祈使的气氛，却早巳从人类文明伊始的时期就已存在</p>
                  <a href="details.html" class="go-icon"></a>
                </div>
            </div>
            </div>
           </div>
        </div>
        <div class="item">
          <div class="layui-fluid">
            <div class="layui-row">
              <div class="layui-col-xs12 layui-col-sm4 layui-col-md5">
                <div class="img"><img src="<%=basePath%>layui/img/sy_img5.jpg" alt=""></div>
              </div>
              <div class="layui-col-xs12 layui-col-sm8 layui-col-md7">
                <div class="item-cont">
                  <h3>空间立体效果图，完美呈现最终效果<button class="layui-btn layui-btn-danger new-icon">new</button></h3>
                  <h5>设计文章</h5>
                  <p>室内设计作为一门新兴的学科，尽管还只是近数十年的事，但是人们有意识地对自己生活、生产活动的室内进行安排布置，甚至美化装饰，赋予室内环境以所祈使的气氛，却早巳从人类文明伊始的时期就已存在</p>
                  <a href="details.html" class="go-icon"></a>
                </div>
            </div>
            </div>
           </div>
        </div>
      </div>
      <div id="demo" style="text-align: center;"></div>
    </div>
  </div>

  <div class="footer-wrap">
    <div class="footer w1000">
      <div class="qrcode">
        <img src="<%=basePath%>layui/img/erweima.jpg">
      </div>
      <div class="practice-mode">
        <img src="<%=basePath%>layui/img/down_img.jpg">
        <div class="text">
          <h4 class="title">我的联系方式</h4>
          <p>微信<span class="WeChat">1234567890</span></p>
          <p>手机<span class="iphone">1234567890</span></p>
          <p>邮箱<span class="email">1234567890@qq.com</span></p>
        </div>
      </div>
    </div>
  </div>
  <script type="text/javascript" src="<%=basePath%>layui/layui.js"></script>
  <script type="text/javascript">
    layui.config({
      base: 'js/util/'
    }).use(['element','laypage','jquery','menu'],function(){
      element = layui.element,laypage = layui.laypage,$ = layui.$,menu = layui.menu;
      laypage.render({
        elem: 'demo'
        ,count: 70 //数据总数，从服务端得到
      });
      menu.init();
    })
  </script>
  </body>
</html>
