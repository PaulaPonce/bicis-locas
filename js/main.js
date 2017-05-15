function validateForm(){

	function validarNombre(){
		var nombre = document.getElementById('name').value;
		if(!/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{2,11})+$/.test(nombre)){
			alert("Debe ingresar un nombre válido");
		}
	}
	validarNombre();

	function validarApellido(){
		var apellido = document.getElementById('lastname').value;
		if(!/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{2,11})+$/.test(apellido)){
			alert("Debe ingresar un apellido válido");
		}
	}
	validarApellido();

	function validarCorreo(){
		var correo = document.getElementById('input-email').value;
		if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(correo)){
			alert("Debe ingresar un email válido");		
		}
	}
	validarCorreo();
	
	function validarPass(){
		var pass = document.getElementById('input-password').value;
		if(pass.length < 6){
			alert("La contraseña debe tener al menos 6 caracteres");	
		}else if(pass === "123456" || pass === "098754" || pass === "password"){
			alert("La contraseña debe ser distinta de 123456 o 098754 o password");
		}
	}
	validarPass();

	function validarSelect(){
		var bici = document.getElementsByTagName('select');
		if(bici[0].selectedIndex == 0){
			alert("Debe seleccionar una opción");	
		}
	}
	validarSelect();

	clear(); //resetear campos
}

function clear(){
	document.getElementById("name").value ="";
	document.getElementById("lastname").value = "";
	document.getElementById("input-email").value = "";
	document.getElementById("input-password").value = "";
	document.getElementById('select-box').selectedIndex = 0;	
	document.getElementById("input-social").value = "";
	document.getElementById("checkbox").checked = "";
}
