"use strict";
//function getUserInput(message){
//	let input = prompt(message);
//	return input;
//}

function runWageCalculator(){
	let standardWeekHrs=40;
	let overTimeRate=1.5;
	//setup vairables
	let hoursWorked = Number(document.getElementById("hoursWorked").value);
	let payRate = Number(document.getElementById("payRate").value);
	let overTimeHrs= runOvertimeHours(hoursWorked,standardWeekHrs);
	let overTimePay= runOvertimePay(payRate, overTimeRate);
	let totalIncome= runPay(hoursWorked,payRate,overTimeHrs,overTimePay);
	displayResults(totalIncome);
}
function displayResults(totalIncome){
	document.getElementById("displayResults").innerHTML = "<h1> Total Income: " + "$" + totalIncome +"</h1>";
}
function runOvertimeHours(hoursWorked,standardWeekHrs){
	let overTimeHrs;

	if (hoursWorked > standardWeekHrs) {
		overTimeHrs = hoursWorked - standardWeekHrs;
		console.log("Standard Hours: "+(standardWeekHrs));
		console.log("Overtime Hours: " + (overTimeHrs));
	}
	else{
		overTimeHrs = 0;
		console.log("Standard Hours: "+(hoursWorked));
		console.log("Overtime Hours: " + 0);
	}
	return overTimeHrs;
}

function runOvertimePay(payRate,overTimeRate){
	let overTimePay = (payRate*overTimeRate);
	console.log("Standard Pay: $"+(payRate));
	console.log("Overtime Pay: $"+(overTimePay));
	return overTimePay;
}

function runPay(hoursWorked,payRate,overTimeHrs,overTimePay){
	let totalIncome = (((hoursWorked-overTimeHrs)*payRate)+(overTimeHrs*overTimePay))
	console.log("Standard Income: $" + ((hoursWorked-overTimeHrs)*payRate));
	console.log("Overtime Income: $" + overTimeHrs*overTimePay);
	console.log("Total Income: $"+totalIncome)
	return totalIncome;
}

runWageCalculator(getUserInput)