$(document).ready(function(){
	$("#about").css("display", "none");
	$("#contact").css("display", "none");

	$("#abt").click(function(){
		$("#contact").css("display", "none");
		$("#mainContent").("display", "none");
		$("#about").css("display", "block");
	});

	$("#cont").click(function(){
		
		$("#mainContent").("display", "none");
		$("#about").css("display", "none");
		$("#contact").css("display", "block");
	});

	$("#mnCon").click(function(){
		$("#contact").css("display", "none");
		$("#mainContent").("display", "block");
		$("#about").css("display", "none");
	});

});