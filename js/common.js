// JavaScript Document
/*
 * 
 */
var cokeGameApi = {
	checkLogin:function()
	{
		//QQ登录接口检测
		var isLogin = QQIsLogin();
		if(isLogin)
		{
			//登录了 该干嘛 干嘛
			
		}
		else
		{
			//你妹 还没登录啊
			//alert("没登录");
			//qqApi.getUserInfo(console.log, {async: false});
			var c = new cokeGame.loginInfo();
            qqApi.getUserInfo(c.setUseInfoBack())
            c.area();
		}
	}
}
function getBack(data)
{
    console.log("data:" + data);
}
$(function(){
	$("#box").click(function(){
		$(this).overlay({
		   closeOnClick: true
		  });	 
	});	  
	
	cokeGameApi.checkLogin();
})

//cokeGame.cQuestion.start(1);
