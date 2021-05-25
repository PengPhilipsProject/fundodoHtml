'use strict';
function analysis_subtract(){	
	var  invoice = $("#invoice").val();
	var  expenditure = $("#expenditure").val();
	var  car_debt = $("#car_debt").val();
	var  house_debt = $("#house_debt").val();
	var  card_debt = $("#card_debt").val();
	
	var filedArr = [];

    filedArr.push(invoice,expenditure,car_debt,house_debt,card_debt);
	//debugger;
	var flag = checkVal(filedArr);
	
	if (typeof(parseInt(invoice)) === 'number' && typeof(parseInt(expenditure)) === 'number' 
	   && typeof(parseInt(car_debt)) === 'number' && typeof(parseInt(house_debt)) === 'number' 
	   && typeof(parseInt(card_debt)) === 'number' ){
		
		 var monthlyBalanceResult = parseInt(invoice)-parseInt(expenditure)
		                              -parseInt(car_debt)-parseInt(house_debt)-parseInt(card_debt);
				
		 monthlyBalanceResult=monthlyBalanceResult<0?0:monthlyBalanceResult;

		 console.log(monthlyBalanceResult);						  
		 $("#textMonthlyBalanceResult").val(monthlyBalanceResult);

	}
	else{
	  alert("請填入數字!");	
	}	
}

function checkVal(filedArr){
	var item="";
	var flag=true;
	for (var i = 0; i < filedArr.length; i++) {
	  item = filedArr[i];
	  if(undefined===item || ""===item){
		alert("請勿填入空值!");
		flag=false;
		break;
      }	
	}	  
	return flag;
}	

$(".analysis_debt_btn").on("click",function(){
    analysis_subtract();
});