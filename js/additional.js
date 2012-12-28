$(document).ready(function(){
	$("#about").css("display", "none");
	$("#contact").css("display", "none");

	$("#abt").click(function(){
		$("#contact").css("display", "none");
		$("#mainContent").css("display", "none");
		$("#about").css("display", "block");
	});

	$("#cont").click(function(){
		
		$("#mainContent").css("display", "none");
		$("#about").css("display", "none");
		$("#contact").css("display", "block");
	});

	$("#mnCon").click(function(){
		$("#contact").css("display", "none");
		$("#mainContent").css("display", "block");
		$("#about").css("display", "none");
	});

});