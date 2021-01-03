// JavaScript Document
$(function(){
	const $rule_detail_btn = $(".rule_detail_btn").find("li");

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
			scrollTop: $("#" + $rule_detail_btn_place).offset().top - 100
		},800);
		return false;
	});
});
