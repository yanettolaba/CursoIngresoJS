function mostrar()
{
	var numero;
	var contador;
	var respuesta;
	var acumulador;
	var promedio;
	contador = 0;
	respuesta = "si",
	acumulador = 0;


	while(respuesta =="si") {
		contador++;
		numero = prompt("ingrese numero");
		numero = parseInt(numero);
		acumulador= acumulador + numero;
		promedio = acumulador/contador;
		respuesta = prompt("desea ingresar nuevo numero?");
	}

document.getElementById('suma').value = acumulador;
document.getElementById('promedio').value = promedio;

}//FIN DE LA FUNCIÓN