<%--
  Created by IntelliJ IDEA.
  User: mingkunyu
  Date: 2018/11/15
  Time: 8:38 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" import="java.util.*" %>
<html>
<head>
    <title>登录</title>
    <%--引入bootstrap--%>
    <script type="text/javascript" src="<%=request.getContextPath()%>/js/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="<%=request.getContextPath()%>/js/bootstrap.js"></script>
    <link rel="stylesheet" href="<%=request.getContextPath()%>/css/bootBlock.css">

    <style>
        body{
            background: url("img/1.jpg");
            animation-name:myfirst;
            animation-duration:12s;
            /*变换时间*/
            animation-delay:2s;
            /*动画开始时间*/
            animation-iteration-count:infinite;
            /*下一周期循环播放*/
            animation-play-state:running;
            /*动画开始运行*/
        }
        @keyframes myfirst
        {
            0%   {background:url("img/1.jpg");}
            34%  {background:url("img/2.jpg");}
            67%  {background:url("img/3.jpg");}
            100% {background:url("img/1.jpg");}
        }
        #loginform{background: rgba(255,255,255,0.3);width:600px;margin:120px auto;padding: 40px}
        #loginform h1{
            text-align: center;
        }



    </style>
</head>
<body>

<form id="loginform">
    <h1>LOGIN</h1>
    <div class="form-group" >
        <label for="Username">Username</label>
        <input type="text" class="form-control" id="Username" placeholder="Username"  required>
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required>
    </div>
    <div class="form-group">
            <div class="checkbox">
                <label>
                    <input type="checkbox"> Remember me
                </label>
            </div>
    </div>
    <div class="form-group">
            <button type="submit" class="btn btn-default">Sign in</button>
    </div>
</form>

</body>
</html>
