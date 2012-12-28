$(document).ready(function(){
	$("#about").css("display", "none");
	$("#contact").css("display", "none");

	$("#abt").click(function(e){

		e.preventDefault();
		$("#contact").css("display", "none");
		$("#mainContent").css("display", "none");
		$("#about").css("display", "block");
	});

	$("#cont").click(function(e){
		e.preventDefault();
		$("#mainContent").css("display", "none");
		$("#about").css("display", "none");
		$("#contact").css("display", "block");
	});

	$("#mnCon").click(function(e){
		e.preventDefault();
		$("#contact").css("display", "none");
		$("#mainContent").css("display", "block");
		$("#about").css("display", "none");
	});

	$("#advice").click(function(e){
		e.preventDefault();

		var platform = $("input:radio[name=platform]").val(),
			suit = $("input:radio[name=suit]").val(),
			budget = $("input:radio[name=budget]").val();

		console.log(platform+','+suit+','+budget);
	});

});