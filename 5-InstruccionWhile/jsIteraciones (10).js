function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";
	var numero;
	negativo = 0;

	while(respuesta!="no")
	
	{	numero = prompt("ingrese numero");
		numero = parseInt(numero);
		while (isNaN(numero)){
			numero =prompt("ingrese nuevo numero");
			numero = parseInt(numero);
			console.log(numero);
	}

		if(numero>0){
			negativo = negativo + numero;
		
		}

		respuesta = prompt("desea ingresar numero?");
	}




}//FIN DE LA FUNCIÓN