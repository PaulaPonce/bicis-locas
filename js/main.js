function validateForm(){

	function validarNombre(){
		var nombre = document.getElementById('name').value;
		var valNombre = document.getElementsByClassName('input-box')[0];

		if(!/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{2,11})+$/.test(nombre)){
			var nombreSpan = document.createElement('span');
			var nombreText = document.createTextNode("Debe ingresar un nombre válido");
			nombreSpan.appendChild(nombreText);
			valNombre.appendChild(nombreSpan);
		}
	}
	validarNombre();

	function validarApellido(){
		var apellido = document.getElementById('lastname').value;
		var valApellido = document.getElementsByClassName('input-box')[1];

		if(!/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]{2,11})+$/.test(apellido)){
			var apellidoSpan = document.createElement('span');
			var apellidoText = document.createTextNode("Debe ingresar un apellido válido");
			apellidoSpan.appendChild(apellidoText);
			valApellido.appendChild(apellidoSpan);
		}
	}
	validarApellido();

	function validarCorreo(){
		var correo = document.getElementById('input-email').value;
		var valCorreo = document.getElementsByClassName('input-box')[2];

		if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(correo)){
			var correoSpan = document.createElement('span');
			var correoText = document.createTextNode("Debe ingresar un correo válido");
			correoSpan.appendChild(correoText);
			valCorreo.appendChild(correoSpan);
		}
	}
	validarCorreo();
	
	function validarPass(){
		var pass = document.getElementById('input-password').value;
		var valPass = document.getElementsByClassName('input-box')[3];

		if(pass.length < 6 || pass === "123456" || pass === "098754" || pass === "password"){
			var passSpan = document.createElement('span');
			var passText = document.createTextNode("La contraseña debe tener al menos 6 caracteres. Debe ser distinta de 123456 o 098754 o password");
			passSpan.appendChild(passText);
			valPass.appendChild(passSpan);
		}	
	}
	validarPass();

	function validarSelector(){
		var selector = document.getElementsByTagName('select');
		var valSelector = document.getElementsByClassName('input-box')[4];

		if(selector[0].selectedIndex == 0){
			var selectorSpan = document.createElement('span');
			var selectorText = document.createTextNode("Debe seleccionar una opción");
			selectorSpan.appendChild(selectorText);
			valSelector.appendChild(selectorSpan);
		}
	}
	validarSelector();

	clear(); //resetear campos
}

function clear(){
	document.getElementById('name').value ="";
	document.getElementById('lastname').value = "";
	document.getElementById('input-email').value = "";
	document.getElementById('input-password').value = "";
	document.getElementById('select-box').selectedIndex = 0;	
	document.getElementById('input-social').value = "";
	document.getElementById('checkbox').checked = "";
}
