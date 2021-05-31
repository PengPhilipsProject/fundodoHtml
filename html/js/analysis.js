'use strict';
function analysis_subtract(){	
	var  invoice = $("#invoice").val();
	var  expenditure = $("#expenditure").val();
	var  car_debt = $("#carDebt").val();
	var  house_debt = $("#houseDebt").val();
	var  card_debt = $("#cardDebt").val();
	
	var filedArr = [];

    filedArr.push(invoice,expenditure,car_debt,house_debt,card_debt);
	//debugger;
	var flag = checkVal(filedArr);
	
	//console.log(Number.isInteger(parseInt(invoice)));  
	
	if(flag===true){
		
	  var flag1 = checkInteger(filedArr);
	
	  if(flag1===true){
		  var monthlyBalanceResult = parseInt(invoice)-parseInt(expenditure)
										  -parseInt(car_debt)-parseInt(house_debt)-parseInt(card_debt);
										  
		  monthlyBalanceResult=monthlyBalanceResult<0?0:monthlyBalanceResult;

		  console.log(monthlyBalanceResult);						  
		  $("#textMonthlyBalanceResult").val(monthlyBalanceResult);			  
	  }  
	}
	else{
		  alert("請填入數字!");	
	}	
}
var houseFee1="", ownMoney="",houseDecorateFee1="",monthlyRate ="",loanYearRate="",loanResult="";


function loanResultCompute(){	

debugger;
	houseFee1 = $("#houseFee1").val();
	ownMoney = $("#ownMoney").val();
	houseDecorateFee1 = $("#houseDecorateFee1").val();
	monthlyRate = $("#monthlyRate").val();
	loanYearRate = $("#loanYearRate").val();
	
	var filedArr = [];

    filedArr.push(houseFee1,ownMoney,houseDecorateFee1,monthlyRate,loanYearRate);
	var flag = checkVal(filedArr);
	
	//console.log(Number.isInteger(parseInt(invoice)));  
	
	if(flag===true){
		
	  var flag1 = checkInteger(filedArr);
	
	  if(flag1===true){
		  loanResult = parseInt(houseFee1)-parseInt(ownMoney);
										  
		  loanResult=loanResult<0?0:loanResult;

		  console.log(loanResult);						  
		  $("#textLoanResult").val(loanResult);		

	  }  
	}
	else{
		  alert("請填入數字!");	
	}	
	
}

//yearRentFee yearRate yearTotalFee investmentRate
var yearRentFee="",yearRate="",yearTotalFee="",investmentRate="";
function investmentRateCompute(){	
	yearRentFee = $("#yearRentFee").val();
	yearRate = $("#yearRate").val();
	yearTotalFee = $("#yearTotalFee").val();
	investmentRate = $("#investmentRate").val();

	if(flag===true){
		
	  var flag1 = checkInteger(filedArr);
	
	  if(flag1===true){
		  
		  debugger;
		  yearRate = parseInt(monthlyRate)*12;
										  
		  yearRate=yearRate<0?0:yearRate;
				  
		  $("#yearRate").val(yearRate);		
          //租金年收入:	租金(月)*12==>480,000 		  
		  
		  loanYearRate="",loanResult=""
		  
		//loanResult*loanYearRate;
		  
		//租金年收入:	租金(月)*12==>480,000 	
		//利息(一年):	(-貸款*1.8%)==>108,000 
		//每年淨收入:	租金年收入+利息(一年)==> 372,000 
		//投資報酬率:	每年淨收入/(自備款+裝潢費用)  14.9%
	  }  
	}
	else{
		  alert("請填入數字!");	
	}	

}

var houseFee2="",houseDecorateFee2="",monthlyRentFee="",totalInvestmentFee="",textMoneyRateResult="";

function moneyRateResultCompute(){	
	houseFee2 = $("#houseFee2").val();
	houseDecorateFee2 = $("#houseDecorateFee2").val();
	monthlyRentFee = $("#monthlyRentFee").val();
	totalInvestmentFee = $("#totalInvestmentFee").val();
	textMoneyRateResult = $("#textMoneyRateResult").val();
	
	var filedArr = [];

    filedArr.push(houseFee1,ownMoney,houseDecorateFee1,monthlyRate,loanYearRate);
	var flag = checkVal(filedArr);
}

//loanResultBtn investmentRateBtn  moneyRateResultBtn

$(".speech_btn").on("click",function(){
    analysis_subtract();
});
$("#loanResultBtn").on("click",function(){
    loanResultCompute();
});
$("#investmentRateBtn").on("click",function(){
    investmentRateCompute();
});
$("#moneyRateResultBtn").on("click",function(){
    moneyRateResultCompute();
});
