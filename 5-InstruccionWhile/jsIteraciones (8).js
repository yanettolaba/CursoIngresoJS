function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var acumulador=0;
	var respuesta='si';
	var numero;
	

	while(respuesta =="si" ){
		contador++;
		numero = prompt("ingrese numero");
		
		numero = parseInt(numero);

		if(numero >=0){
			positivo =  positivo +  numero;
		} else {
			negativo = negativo * numero;
		}
		respuesta = prompt("desea ingresar numero?")
	}    
	

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN