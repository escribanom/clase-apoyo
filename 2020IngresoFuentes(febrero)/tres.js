function mostrar()
{
	alert("tres");
	var edad;
	var sexo;
	var estadoCivil;
	var nombre;
	var respuesta;
	var hombreCasadoJoven;
	var bandera = 0;
	var nombreHombreCasadoJoven;
	var mujerViudaCasada = 0;
	var mujer = 0;

	do {
		edad = prompt("ingrese edad");
		edad = parseInt(edad);
		sexo = prompt("ingrese sexo (f o m)");
		estadoCivil = prompt("ingrese estado civil (soltero, casado, viudo) ");
		nombre = prompt("ingrese un nombre");
	
		
		
		while (isNaN(edad)|| edad < 18 || edad > 99) {
		  	edad = prompt("ingrese edad valida");
		}
		while (isNaN(sexo)|| sexo != "f" && sexo != "m") {
		  	sexo = prompt("ingrese sexo valido");
		}
		while (isNaN(estadoCivil)|| estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo") {
		  	estadoCivil = prompt("ingrese estado civil valido(soltero, casado, viudo)");
		}
		while (!isNaN(nombre)) {
			nombre =prompt("ingrese un nombre valido");
			
		}
		if (sexo == "m" && estadoCivil == "casado" && bandera == 0 || hombreSolteroJoven < edad ) {
			hombreCasadoJoven = edad;
			nombreHombreCasadoJoven = nombre;
			bandera++;
		}
		if (sexo == "f"  && estadoCivil == "casado" && estadoCivil == "viudo" ) {
			mujerViudaCasada++;
			
		}
		if (sexo == "f") {
			mujer++;
		}
		if (sexo == "m" && estadoCivil == "soltero" && bandera == 0 || ) {
			edadHombreSoltero = edad
			hombresoltero++;
		}
	
	
	
		respuesta = confirm("indique si para continuar?");
	} while (respuesta == "si");

}
