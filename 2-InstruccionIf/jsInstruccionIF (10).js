function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var nota;
	var mensaje;
	nota = Math.floor(Math.random()* (11-1)+1);

	if(nota ==10 || nota>8 ) {
		mensaje = "excelente";
	} else {
		if(nota>3 && nota <9) {
			mensaje = "aprobo";
		} else {mensaje = "vamos, la proxima se puede";}
	}
	alert(nota+mensaje);

}//FIN DE LA FUNCIÓN