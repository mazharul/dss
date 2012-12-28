$(document).ready(function(){
	$("#about").css("display", "none");
	$("#contact").css("display", "none");

	$("#abt").click(function(e){

		e.preventDefault();
		$("#contact").css("display", "none");
		$("#mainContent").css("display", "none");
		$("#answer").css("display","none");
		$("#about").css("display", "block");
	});

	$("#cont").click(function(e){
		e.preventDefault();
		$("#mainContent").css("display", "none");
		$("#about").css("display", "none");
		$("#answer").css("display","none");
		$("#contact").css("display", "block");
	});

	$("#mnCon").click(function(e){
		e.preventDefault();
		$("#contact").css("display", "none");
		$("#mainContent").css("display", "block");
		$("#about").css("display", "none");
		$("#answer").css("display","none");
	});

	$("#advice").click(function(e){
		e.preventDefault();

		var platform = $("input[name=platform]:radio:checked").val(),
			suit = $("input[name=suit]:radio:checked").val(),
			budget = $("input[name=budget]:radio:checked").val();

		
console.log(platform+','+suit+','+budget);
		if(platform === "undefined" || suit === "undefined" || budget === "undefined"){
			$(".alert").css("display", "block");
		}else{
			$(".alert").css("display", "none");
			var getResult = processResult(platform, suit, budget);

			if(getResult[0] === "error"){

				$(".alert-error").css("display", "block");
				$(".alert-error").html("Ahh, My brain froze calculating, try me again perhaps? ");

			}else{
				$("#mainContent").css("display", "none");
				$("#answer").css("display","block");
				$("#answerAlert").css("display", "block").html("Here are my suggestions!");

				$("#pl").html(getResult[0]);
				$("#fr").html(getResult[1]);
				$("#al").html(getResult[2]);
				$("#nt").html(getResult[3]);
			}
		}
	});

});

function processResult(platform, suit, budget){

	var res = new Array(5);

		switch(platform){
			case "windows":
				res[0] = "C#, C++";
				res[1] = ".NET";
				res[2] = "";
				res[3] = "Can you please not run your servers on windows platform?"
				break;
			case "iphone":
				res[0] = "Objective C";
				res[1] = "Cocoa (API)";
				res[2] = "HTML5/JS/CSS, PhoneGap";
				res[3] = "";
				break;
			case "android":
				res[0] = "JAVA";
				res[1] = "Android Software Development Kit";
				res[3] = "Use HyperText if you don't know java";
				res[2] = "HTML5/JS/CSS, PhoneGap"
				//alternative platform: HyperNext
				break;
			case "desktop":
				res[0] = "Depending on OS of the desktop";
				res[1] = "N/A";
				res[2] = "N/A";
				res[3] = "For windows 8 use: html5/css/js; For MacOSX use: Objective C; For linux: various languages such as: C, shell, java, ruby, python"
				break;
			case "uni":
				if(suit == "startup"){
					if(budget == "nobudget" || budget == "noPeople"){
						res[0] = "PHP";

						if(suit == "small" || suit == "medium"){
							res[1] = "No framework, roll your own or you may use <a href='https://bitbucket.org/Mazharul/framework'> This </a>";
						}else{	
							res[1] = "Micro : Slim or Full Fledged : Zend";
						}

						res[2] = "ruby, Ruby On Rails";
						res[3] = "Try out ruby first if possible";
					}else{
						res[0] = "Python";
						res[1] = "Django";
						res[2] = "ruby, Ruby On Rails";
						res[3] = "Try out ruby first if possible";
					}
				}else{
					if(suit == "small" || suit == "medium"){
						res[0] = "PHP";
						res[1] = "No framework, roll your own or you may use <a href='https://bitbucket.org/Mazharul/framework'> This </a>";

					}else if(suit == "fairly"){
						res[0] = "PHP";
						res[1] = "Micro : Slim or Full Fledged : Zend";
					}else{
						res[0] = "Python";
						res[1] = "Django";
					}

					res[2] = "ruby, Ruby On Rails";
					res[3] = "Try out ruby first if possible";

				}	
				break;
			
			default:
				res[0] = "error";


		}

	return res;

}