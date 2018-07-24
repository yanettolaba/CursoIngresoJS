function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta = "si";
	var numero;


	while(respuesta =="si" ){
		contador++;
		numero = prompt("ingrese numero");
		numero = parseInt(numero);
		acumulador = acumulador + numero;
		respuesta = prompt("desea ingresar numero?");
}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN