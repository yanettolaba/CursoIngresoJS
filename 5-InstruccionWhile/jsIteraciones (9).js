function mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var maximo;
	var minimo;
	var numero;
	var bandera= true;

	while(respuesta=='si')
	{	numero = prompt("ingrese un numero");
		if(bandera){
		bandera = false;
		maximo = numero;
		minimo = numero;
		console.log(maximo);
		console.log(minimo);
	}
		if (numero >maximo){
			maximo = numero;
		}	
		if (numero <minimo){
			minimo = numero;
		}
		
	respuesta = prompt("desea ingresar numero?");
	}

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;



}//FIN DE LA FUNCIÓN