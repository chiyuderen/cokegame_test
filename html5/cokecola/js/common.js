// JavaScript Document

var test = $("#question");
var questionManager;
var cokegame = {
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





		}
	},
    initManager:function(){
        questionManager = new cokecola.QustionManager($("#question"));
        var questions = cokecola.AM.getQuestions();

        questionManager.setQuestions(questions) ;
        questionManager.start();

        questionManager.on("complete",function(e){
            $("#question").html("完成了");
            $("#time").hide();
            updateScore();
        });
        questionManager.on("tick",function(e){
            updateTime();
        });
        questionManager.on("questionChange",function(){
            updateTime();
            updateScore();
        });
        questionManager.on("rest",function(){
            $("#question").html("休息时间");
            updateTime();
            updateScore();
        });
        //
        updateTime();

        function updateScore(){
            $("#totalScore").html(questionManager.totalScore);
        }

        function updateTime(){
            $("#time").html(questionManager.currentTime);
        }




    },
    loadAssets:function(){

        cokecola.AM.init();
        cokecola.AM.loader.on("complete",function(e){
            cokegame.initManager();
            cokecola.AM.loader.off("progress",prgressHandler);
        },null,true);
        cokecola.AM.loader.on("error",function(e){
            alert("加载失败:" + e.item.src + "可能要在服务器环境下测试。。。")
        });
        cokecola.AM.loader.on("progress",prgressHandler);
        function prgressHandler(e){
            var pre = (e.progress/e.total) * 100;
            var str = pre + "%";
            $("#progree").html(str);
        }
    }
}



$(function(){
	$("#box").click(function(){
		$(this).overlay({
		   closeOnClick: true
		  });	 
	});
    $("#nextQuestion").click(function(){
            questionManager.nextQuestion();
        }
    );
	
	cokegame.checkLogin();
    cokegame.loadAssets();

})