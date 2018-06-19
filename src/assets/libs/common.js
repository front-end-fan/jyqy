$(function(){
	//手机端菜单切换
	$("#right-menu").on("click","a.col-xs-12",function(){
		$(this).parent("li").siblings().removeClass("light-yellow").find(".more-menus").slideUp();
		$(this).next().slideToggle();
		$(this).parent("li").toggleClass("light-yellow");
	});
	
	//手机端弹出菜单时，控制modal底部的页面不要滚动
	$('#right-menu').on('shown.bs.modal', function () {
			$("body").css("position","fixed").css("width","100%");
	});
	$('#right-menu').on('hidden.bs.modal', function () {
		$("body").css("position","static");
	})
});	

