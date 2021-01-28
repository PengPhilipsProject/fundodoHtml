// JavaScript Document
$(function(){
	const $mobile_menu = $(".mobile_menu");
	const $mobile_header_nav = $(".mobile_header_nav");
	const $rule_detail_btn = $(".rule_detail_btn").find("li");

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
			scrollTop: $("#" + $rule_detail_btn_place).offset().top - 96
		},800);
		return false;
	});
});
