$(document).ready(function(){
		$("#header-bottom nav").hover(function(){
				$(".sub-menu").stop().slideDown();
				$(".bg-menu-open").stop().slideDown();
			},function(){
				$(".sub-menu").hide();
				$(".bg-menu-open").hide();
			});

		$("ul.sub-menu li span").hover(function(){
			$(this).addClass("active");
		},function(){
			$(this).removeClass("active");
		});
});

