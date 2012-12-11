$(document).ready(function(){

	

	window.mySwipe = new Swipe(document.getElementById("slide_content"),{callback:changeActive});

	function changeActive(){
		var act_index = mySwipe.getPos();

		$("#active_nav ul li").removeClass("active");
		$("#act_"+act_index+"").addClass("active");
	};

	$("#front_img").bind('click',function(){
		$(this).fadeOut('fast');
		$("#inside_img").fadeIn('fast');
	});


	$("#inside_img").bind('click',function(){
		$(this).fadeOut('fast');
		$("#slide_content").css({"height":"auto","overflow":"visible"})
		$(".top_navi, .model_container:first-child").fadeIn('fast');
		$("#active_nav").css("display","block");
	});


	$("#back").bind("click",function(){
		$("#slide_content").css({"height":"0px","overflow":"hidden"})
		$(".top_navi, .model_container:first-child").fadeOut('fast');
		$("#active_nav").css("display","none");
		$("#inside_img").fadeIn('fast');
	});

	$(".heart").bind("click",function(){
		if($(this).hasClass('like')){
			if($(window).width() < 480){
				$(this).css({
					"background":"url(images/heart_small.png) 0 0 no-repeat"
				});
				$(this).removeClass('like');
			}else{
				$(this).css({
					"background":"url(images/heart.png) 0 0 no-repeat"
				});
				$(this).removeClass('like');
			}
			
		}else{
			if($(window).width() < 480){
				$(this).css({
					"background":"url(images/heart_hover_small.png) 0 0 no-repeat"
				});
				$(this).addClass('like');
			}else{
				$(this).css({
				"background":"url(images/heart_hover.png) 0 0 no-repeat"
				});
				$(this).addClass('like');
			}
			
		}
		
	});

	$(".star").bind("click",function(){
		if($(this).hasClass('like')){
			if($(window).width() < 480){
				$(this).css({
					"background":"url(images/star_small.png) 0 0 no-repeat"
				});
				$(this).removeClass('like');
			}else{
				$(this).css({
					"background":"url(images/star.png) 0 0 no-repeat"
				});
				$(this).removeClass('like');
			}
			
		}else{
			if($(window).width() < 480){
				$(this).css({
					"background":"url(images/star_hover_small.png) 0 0 no-repeat"
				});
				$(this).addClass('like');
			}else{
				$(this).css({
				"background":"url(images/star_hover.png) 0 0 no-repeat"
				});
				$(this).addClass('like');
			}
			
		}
	});
});