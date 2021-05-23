//JavaScript Document
//Analysis
function analysis_subtract(){	
    let $invoice = parseFloat($("#invoice").val());
    let $expenditure = parseFloat($("#expenditure").val()); 
    let $car_debt = parseFloat($("#car_debt").val());
    let $house_debt = parseFloat($("#house_deb").val());
    let $card_debt = parseFloat($("#card_debt").val());
    let $monthly_balance_result = $invoice-$expenditure-$car_debt-$house_debt-$card_debt;
    $("#monthly_balance_result").val($monthly_balance_result);
}
$(".analysis_debt_btn").on("click",function(){
    analysis_subtract();
});