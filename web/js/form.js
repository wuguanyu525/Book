function test(){
	checkName();
	checkpwd();
	is_pwd();
	checkemail();
}
function check(registerform){
	var check;
	var flag=true;
	test();
	if($("#usernameMsg").text()=="OK"&&$("#pswMsg").text()=="OK"&&$("#repswMsg").text()=="OK"&&$("#emailMsg").text()=="OK"){
		document.getElementById("registerform").submit();
	}
}
function loginCheck(registerform){
	var check;
	var flag=true;
	checkLoginName();
	checkpwd();
	if($("#usernameMsg").text()=="OK"&&$("#pswMsg").text()=="OK"){
		document.getElementById("loginform").submit();
	}
}
/*
 * 查验登录的用户名
 */
function checkLoginName(){
	var username=document.getElementsByName("username")[0].value;
	var reg=/^[a-zA-Z0-9\u4e00-\u9fa5]+$/;
	if(reg.test(username)){
		
		if(username.length<6||username.length>18){
			document.getElementById("usernameMsg").innerHTML="<em style='color:red'>*6-18位字符组成！</em>";
		}else{
			document.getElementById("usernameMsg").innerHTML="<em style='color:blue'>OK</em>";
		}
	}else{
		if(username.length==0){
			document.getElementById("usernameMsg").innerHTML="<em style='color:red'>*必填！</em>";
		}else{
			document.getElementById("usernameMsg").innerHTML="<em style='color:red'>*6-18位字符组成！</em>";
		}
	}
}
/*
 * 检验用户名
 */
function checkName(){
	var username=document.getElementsByName("username")[0].value;
	var reg=/^[a-zA-Z0-9\u4e00-\u9fa5]+$/;
	if(reg.test(username)){
		
		if(username.length<6||username.length>18){
			document.getElementById("usernameMsg").innerHTML="<em style='color:red'>*6-18位字符组成！</em>";
		}else{
			//ajax
			 $.ajax({
	             type: "POST",
	             url: "/BookStore/UserServlet",
	             data: {username:$("#username").val(),method:"checkUsername"},
	             dataType: "text",
	             success: function(data){
	            	 $("#usernameMsg").html(data);
	              }
	         });

		}
	}else{
		if(username.length==0){
			document.getElementById("usernameMsg").innerHTML="<em style='color:red'>*必填！</em>";
		}else{
			document.getElementById("usernameMsg").innerHTML="<em style='color:red'>*6-18位字符组成！</em>";
		}
	}
}
/*
 * 检验密码
 */
function checkpwd(){
	var pwd=document.getElementsByName("psw")[0].value;
	var reg=/^[a-zA-Z0-9]{6,10}$/;
	if(reg.test(pwd)){
		document.getElementById("pswMsg").innerHTML="<em style='color:blue'>OK</em>";
	}else{
		if(pwd.length==0){
			document.getElementById("pswMsg").innerHTML="<em style='color:red'>*必填！</em>";
		}else{
			document.getElementById("pswMsg").innerHTML="<em style='color:red'>*由6-10位字母数字构成！</em>";
		}
	}
}
/*
 * 检验密码一致性
 */
function is_pwd(){
	var pwd=document.getElementsByName("psw")[0].value;
	var _pwd=document.getElementsByName("repsw")[0].value;
	if(pwd&&_pwd&&pwd==_pwd){
		document.getElementById("repswMsg").innerHTML="<em style='color:blue'>OK</em>";
	}else{
		if(_pwd.length==0){
			document.getElementById("repswMsg").innerHTML="<em style='color:red'>*请确认密码！</em>";
		}else{
			document.getElementById("repswMsg").innerHTML="<em style='color:red'>*密码不一致！</em>";
		}
	}
}

/*
 * 检验电子邮件
 */
function checkemail(){
	var email=document.getElementsByName("email")[0].value;
	var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
	if(reg.test(email)){
		document.getElementById("emailMsg").innerHTML="<em style='color:blue'>OK</em>";
	}else{
		if(email.length==0){
			document.getElementById("emailMsg").innerHTML="<em style='color:red'>*必填！</em>";
		}else{
			document.getElementById("emailMsg").innerHTML="<em style='color:red'>*非法邮箱格式！</em>";
		}
	}
}
