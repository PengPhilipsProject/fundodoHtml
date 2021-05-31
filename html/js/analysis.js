var houseFee1="", ownMoney="",houseDecorateFee1="",monthlyRate ="",loanYearRate="",loanResult="";
//yearRentFee yearRate yearTotalFee investmentRate
var yearRentFee="",yearRate="",yearTotalFee="",investmentRate="";
function loanResultCompute(){	

	houseFee1 = $("#houseFee1").val();
	ownMoney = $("#ownMoney").val();
	houseDecorateFee1 = $("#houseDecorateFee1").val();
	monthlyRate = $("#monthlyRate").val();
	loanYearRate = $("#loanYearRate").val();
	
	debugger;
	
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

		  yearRate = parseInt(monthlyRate)*12;
										  
		  yearRate=yearRate<0?0:yearRate;
				  
		  $("#yearRentFee").val(yearRate);		
          //租金年收入:	租金(月)*12==>480,000 	
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


$("#loanResultBtn").on("click",function(){
    loanResultCompute();
});

$("#moneyRateResultBtn").on("click",function(){
    moneyRateResultCompute();
});
