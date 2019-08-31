$(document).ready(function(){
	
	$("#form").submit(function(e){
		e.preventDefault()
		var firstName = $("#firstName").val();
		var lastName = $("#lastName").val();
		var gendar = $("#gendar").val();
		var bdate = $("#bdate").val();
		var religion = $("#religion").val();
		var email = $("#email").val();
		var upassword = $("#password").val();
		
		if(firstName == ''){
			$("#firstName").after('<p id="error" style="color:red;">First Name Is Needed</p>');
			
			$("#firstName").keyup(function(){
				$("#error").fadeOut(2000);
			});
		}
		else if(lastName == ''){
			$("#lastName").after('<p style="color:red;">Last Name Is Needed</p>');
		}
		else if(gendar == ''){
			$("#gendar").after('<p style="color:red;">Gendar Is Needed</p>');
		}
		else if(bdate == ''){
			$("#bdate").after('<p style="color:red;">Birth Date Is Needed</p>');
		}
		else if(religion == ''){
			$("#religion").after('<p style="color:red;">Religion Is Needed</p>');
		}
		else if(email == ''){
			$("#religion").after('<p style="color:red;">Email Needed</p>');
		}
		else if(upassword == ''){
			$("#password").after('<p style="color:red;">Password Needed</p>');
		}
		
	});
	
	
	$("#passh").mousedown(function(){
		$("#password").attr("type", "text",);
		
	});
	
	$("#passh").mouseup(function(e){
		e.preventDefault();
		$("#password").attr("type", "password",);
	});
	
});




