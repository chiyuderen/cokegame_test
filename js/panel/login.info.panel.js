// JavaScript Document
/**

*/

cokeGame.loginInfo = function(){

};
cokeGame.loginInfo.prototype.area = function() {  
  alert(2);
};
cokeGame.loginInfo.prototype.setUseInfoBack = function(userInfo){
    console.log("userInfo:" + userInfo)
    //头像地址
    this.head = "";
    //等级
    this.level = "1";
    //昵称
    this.nick = "test";
    //第二关是否可以开启，0没开启，1表示开启
    this.secAdmit = "0";
    //最佳记录
    this.topScore = "0";
    return;
    if(userInfo.code == 0)
    {
        //成功了
        $("#loginInfoPanel").html(userInfo.message);
    }
    else
    {
        $("#loginInfoPanel").html(userInfo.message);
    }
}