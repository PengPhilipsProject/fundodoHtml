// JavaScript Document
$(function(){
	const $mobile_menu = $(".mobile_menu");
	const $mobile_header_nav = $(".mobile_header_nav");
	const $rule_detail_btn = $(".rule_detail_btn").find("li");

	//Loading
	$("#loading_mask").show();
	$("#wrapper").css("opacity","0");
	$(window).on("load",function(){
		setTimeout(stop_load,700);
		setTimeout(content_box,700);
	});
	function stop_load(){
		$("#loading_mask > p").fadeOut(700);
		$("#loading_mask").delay(500).fadeOut(1400);
	}
	function content_box(){
		$("#wrapper").css("opacity","1");
	}

	//Mobile Menu
	$mobile_menu.click(function(){
		$(this).toggleClass("open");
	});
	$mobile_menu.on("click",menu_open);
	function menu_open(){
		$(".mobile_header").toggleClass("mobile_header_shadow");
		$mobile_header_nav.slideToggle();
	}
	$(".mobile_header_nav").find("li").find("a.member_login_btn,a.member_contact_btn").on("click",function(){
		$mobile_header_nav.hide();
		$(".mobile_menu").removeClass("open");
	});
	$(window).on("resize",menu_style_clear);
	function menu_style_clear(){
		if($(window).innerWidth() > 1024){
			$mobile_header_nav.attr("style","");
		}
	}

	//Modal
	$(".member_login_btn").on("click",function(){
		$(".mask").show();
		$(".loginModal").show();
	});
	$(".member_contact_btn").on("click",function(){
		$(".mask").show();
		$(".contactModal").show();
	});
	$(".forget_psw").on("click",function(){
		$(".loginModal").hide();
		$(".forgetPswModal").show();
	});
	$(".modal_close_icon").on("click",function(){	
		$(".loginModal,.forgetPswModal,.registerRuleModal,.registerModal,.contactModal").hide();
		$(".mask").hide();
	});
	$(".register_btn").on("click",function(){
		$(".mask").show();
		$(".registerRuleModal").show();
	});
	$(".add_member").on("click",function(){
		$(".registerRuleModal").show();
	});
	$(".agree_btn").on("click",function(){
		$(".registerModal").show();
	});
	$(".disagree_btn").on("click",function(){
		$(".loginModal,.registerRuleModal").hide();
		$(".mask").hide();
	});

	//Rule Btn
	$(".rule_detail_btn").find("li").on("click",function(){
		let $rule_detail_btn_place = $(this).find("a").attr("data-target");
		$rule_detail_btn.removeClass("selected");
		$(this).addClass("selected");
		$("html,body").stop().animate({
			scrollTop: $("#" + $rule_detail_btn_place).offset().top - 92
		},800);
		return false;
	});

	//Tabs
	$("ul.speech_tab_btn").find("li").on("click",function(){
		let $now_speech_tab = $(this).find("a").attr("href");
		$("ul.speech_tab_btn").find("li").removeClass("selected");
		$(this).toggleClass("selected");
		$(".speech_tab_content[class!='speech_tab_content_1']").hide();
		$(this).addClass("speech_tab_current").siblings().removeClass("speech_tab_current");
		$($now_speech_tab).fadeIn(300);
		return false;
	});

	//Slider
	$(".index_slider,.video_slider").slick({
		slidesToShow: 1,
		arrows: false,
		autoplay: true,
		dots: true,
		fade: true,
		infinite: true,
		speed: 700
	});
	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 10,
		responsiveClass: true,
		responsive: {
		  1000: {
			items: 3,
			autoplay: true,
			autoplaySpeed: 700,
			autoplayTimeout: 2700, 
			loop: true,
			margin: 20,
			nav: false
		  },
		  600: {
			items: 3,
			autoplay: true,
			autoplaySpeed: 700,
			autoplayTimeout: 2700,
			loop: true,
			nav: false
		  },
		  420: {
			items: 2,
			autoplay: true,
			autoplaySpeed: 700,
			autoplayTimeout: 2700,
			loop: true,
			nav: false
		  },
		  0: {
			items: 1,
			autoplay: true,
			autoplaySpeed: 700,
			autoplayTimeout: 2700,
			loop: true,
			nav: false
		  },
		}
	})
});
