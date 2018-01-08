$(document).ready(function() {



//variables
var cuc = $("#cucumber");
var grap = $("#grapes");
var tri = $("#triangle");
var don = $("#donut");
var chosen = 0;














	//on events
	$(".playerS").click(function(){
		if(chosen == 0){
			$("#Enemies").append($("#cucumber"));
			$("#Enemies").append($("#grapes"));
			$("#Enemies").append($("#triangle"));
			$("#Enemies").append($("#donut"));

			$("#you").append($(this));
			chosen++;
		}else{
			$("#attack").append($(this));
			
		};
	});








//functions




































});