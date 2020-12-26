// JavaScript Document
$(function(){
	const policy_btn = $(".policy_btn");
	const rule_btn = $(".rule_btn");
	const banner_text_h1 = $(".banner_text").find("h1");
	const banner_icon = $("img.banner_icon");
	const bread_page_name = $(".bread_crumb").find("span.page_name");

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

	//Go_Top
	$("#go_top_btn").on("click",function(){
		$("html,body").stop().animate({
			scrollTop: header_box
		}, 800);
		return false;
	});
});