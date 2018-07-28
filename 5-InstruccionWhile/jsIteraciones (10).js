function mostrar()
{
	//declarar contadores y variables 
	
	var respuesta = true;
	var numero;
	var acumuladorNegativo = 0;
	var acumuladorPositivos = 0; 
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	var maximo;
	var flag = false;

	while(respuesta == true ){
		numero = prompt("ingrese numero");
		numero = parseInt(numero);

		while (isNaN(numero)){
			numero =prompt("ingrese nuevo numero");
			numero = parseInt(numero);
			console.log(numero);
	}

		if(numero>0){
			acumuladorPositivo = acumuladorPositivos + numero;
			contadorPositivos = contadorPositivos + 1;

		} else{
			if (numero < 0 ){
				acumuladorNegativo= acumuladorNegativo + numero;
				contadorNegativos = contadorNegativos + 1;
			
		} else{
			contadorCeros = contadorCeros +1;
		}
	}  

	if((numero/2) == 0 && numero != 0)
	{
		contadorPares ++;

	}
	
	if (flag == false || numero > maximo)
	{
		maximo = numero;
		flag == true;
	}

	respuesta =confirm("desea continuar?");
	}


	if(contadorPositivos != 0)
	{
		promedioPositivos = acumuladorPositivos/contadorPositivos;
		document.write("promedio ")

	} else
	{
		document.write("punto x. no se pudo calcular");
	}

	if(contadorNegativos !=0)
	{
		promedioNegativos = acumuladorNegativo/contadorNegativos;
	}
		
	diferencia = acumuladorPositivos + acumuladorNegativo;

		
	


document.write ("1.suma negativos" + acumuladorNegativo);
document.write("2. suma positivos"+ acumuladorPositivos);


}//FIN DE LA FUNCIÓN