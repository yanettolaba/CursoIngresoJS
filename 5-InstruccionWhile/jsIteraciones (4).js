function mostrar()
{
	var numero;
	numero = prompt("ingrese un numero entre 0 y 9");

	while (numero <0 || numero >9 ){
		numero = prompt("error, ingrese numero del 0 al 9");

	}
	document.getElementById("Numero").value = numero;
}//FIN DE LA FUNCIÓN