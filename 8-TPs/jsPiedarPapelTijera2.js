var eleccionMaquina;
var contadorDeEmpates=0;
var contadorDeGanadas=0;
var contadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	eleccionMaquina = Math.floor(Math.random() * (4-1) ) +1;
	console.log(eleccionMaquina);



}//FIN DE LA FUNCIÓN
function piedra()
{	if(eleccionMaquina==1){
	alert("empató");
	contadorDeEmpates = contadorDeEmpates +1;
} else if (eleccionMaquina ==2){
	alert("perdió");
	contadorDePerdidas = contadorDePerdidas +1;
} else {
	alert("ganó");
	contadorDeGanadas = contadorDeGanadas +1;
}
	

}//FIN DE LA FUNCIÓN

function papel()
{	if(eleccionMaquina==1){
	alert("ganó");
	contadorDeGanadas =contadorDeGanadas +1;
} else if (eleccionMaquina==2){
	alert("empató");
	contadorDeEmpates = contadorDeEmpates +1;
} else {
	alert ("perdió");
	contadorDePerdidas = contadorDePerdidas +1;
}

}//FIN DE LA FUNCIÓN
function tijera()
{	if(eleccionMaquina==1){
	alert("perdió");
	contadorDePerdidas = contadorDePerdidas +1;
} else if(eleccionMaquina==2){
	alert("ganó");
	contadorDeGanadas = contadorDeGanadas +1;
} else {
	alert("empató");
	contadorDeEmpates = contadorDeEmpates +1;
}
	
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{	document.getElementById("ganadas").value = contadorDeGanadas;
	document.getElementById("perdidas").value = contadorDePerdidas;
	document.getElementById("empatadas").value = contadorDeEmpates;
alert("ganadas"+contadorDeGanadas+ " perdidas "+ contadorDePerdidas+ " empatadas "+contadorDeEmpates);
}