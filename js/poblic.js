function $id(id){
	return document.getElementById(id);
}
//header部分
var hasShow=false;
window.onload=function(){
	//搜索框
	$id("inpText").onblur=function(){
		$id("inpText").value="请输入关键字...";
	}
	$id("inpText").onfocus=function(){
		$id("inpText").value="";
	}
	
	    
	    
}	