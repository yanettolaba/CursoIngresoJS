function mostrar()
{
	var contador;
	var numero;
	var suma;
	var promedio;
	contador = 0;
	suma = 0;

	while(contador<5){
		contador++;
		numero = prompt("ingrese numero");
		numero = parseInt(numero);
		suma = suma + numero;
		promedio = suma / 5;
	}
	
	document.getElementById("suma").value = suma;
	document.getElementById("promedio").value = promedio;	
	

}//FIN DE LA FUNCIÓN