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
	      $id("span1").onclick=function(){
	      	 
	 	     yidong2();
	 	 
	}
	      $id("span2").onclick=function(){
	      	yidong();
    }
	   
}	
//点击轮播新闻
	var left=0;
function yidong(){
			if(left>-1484&&left<=0){
				var icfleft=-212;
	             left=left+icfleft;
		     $id("imgCount").style.left=left+"px";}
	        }
function yidong2(){
		if(left>=-1484&& left<0){
				var icfleft=212;
	             left=left+icfleft;
		     $id("imgCount").style.left=left+"px";}
		
}



