var houseFee1="", ownMoney="",houseDecorateFee1="",monthlyRate ="",loanYearRate="",loanResult="";
//yearRentFee yearRate yearTotalFee investmentRate
var yearRentFee="",yearRate="",yearTotalFee="",investmentRate="",textMoneyRateResult="";
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
		  loanResult = parseFloat(houseFee1)-parseFloat(ownMoney);
										  
		  loanResult = loanResult<0?0:loanResult;

		  console.log(loanResult);						  
		  $("#textLoanResult").val(loanResult);	
		  //租金年收入:	租金(月)*12==>480,000 	
		  yearRentFee = parseFloat(monthlyRate)*12;
										  
		  yearRentFee = yearRentFee<0?0:yearRentFee;

		  $("#yearRentFee").val(yearRentFee);
		  //利息(一年):	(-貸款*1.8%)==>108,000 
		  yearRate = parseFloat(loanResult)*0.018;
										  
		  yearRate = yearRate*100<0?0:yearRate;
		  yearRate = Math.round(yearRate);
		  console.log(yearRate);
		  $("#yearRate").val(yearRate);		  
		  //每年淨收入:	租金年收入+利息(一年)==> 372,000 
		  yearTotalFee = parseFloat(yearRentFee)-parseFloat(yearRate);
										  
		  yearTotalFee = yearTotalFee<0?0:yearTotalFee;
		  console.log(yearTotalFee);
		  $("#yearTotalFee").val(yearTotalFee);		
		  //投資報酬率:	每年淨收入/(自備款+裝潢費用)  14.9%
		  investmentRate = parseFloat(ownMoney)+parseFloat(houseDecorateFee1);
		  console.log(investmentRate);
		  investmentRate = parseFloat(yearTotalFee)/parseFloat(investmentRate)*100;
		  investmentRate = Math.round(investmentRate * 10);

		  investmentRate = investmentRate<0?0:investmentRate;
		  console.log(investmentRate);
		  $("#investmentRate").val(investmentRate);			  
  
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

    filedArr.push(houseFee2,houseDecorateFee2,monthlyRentFee,totalInvestmentFee,textMoneyRateResult);
	var flag = checkVal(filedArr);
	debugger;
	if(flag===true){
			
	  var flag1 = checkInteger(filedArr);
	
	  if(flag1===true){
	  	//房屋金額
	  	houseFee2 = parseFloat(houseFee2);
		houseFee2 = houseFee2<0?0:houseFee2;

		console.log(houseFee2);						  
		$("#houseFee2").val(houseFee2);

		//裝潢費用
		houseDecorateFee2 = parseFloat(houseDecorateFee2);
		houseDecorateFee2 = houseDecorateFee2<0?0:houseDecorateFee2;

		console.log(houseDecorateFee2);						  
		$("#houseDecorateFee2").val(houseDecorateFee2);
		//月租金
		monthlyRentFee = parseFloat(monthlyRentFee);
		monthlyRentFee = monthlyRentFee<0?0:monthlyRentFee;

		console.log(monthlyRentFee);						  
		$("#monthlyRentFee").val(monthlyRentFee);
		//總投資金額=房屋金額+裝潢費用
		totalInvestmentFee = parseFloat(houseFee2)+parseFloat(houseDecorateFee2);
		totalInvestmentFee = totalInvestmentFee<0?0:totalInvestmentFee;

		console.log(totalInvestmentFee);						  
		$("#totalInvestmentFee").val(totalInvestmentFee);

		//租金報酬率=月租金*12/總投資金額
		textMoneyRateResult = parseFloat(monthlyRentFee)*12/parseFloat(totalInvestmentFee);
		textMoneyRateResult = textMoneyRateResult<0?0:textMoneyRateResult;

		console.log(textMoneyRateResult);						  
		$("#textMoneyRateResult").val(textMoneyRateResult);
	  }  
	}
	else{
		  alert("請填入數字!");	
	}	

}

//loanResultBtn investmentRateBtn  moneyRateResultBtn


$("#loanResultBtn").on("click",function(){
    loanResultCompute();
});

$("#moneyRateResultBtn").on("click",function(){
    moneyRateResultCompute();
});
