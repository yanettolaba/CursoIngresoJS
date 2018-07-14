/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;


function comenzar()
{   eleccionMaquina = Math.floor(Math.random()* (4-1))+1;
	console.log(eleccionMaquina);


}//FIN DE LA FUNCIÓN
function piedra()
{   if(eleccionMaquina == 1)
    {
        alert("empató");
    } 
    else if (eleccionMaquina ==2)
    {   
        alert("perdió");
    } 
	else
    {
        alert( "ganó");
    }

}//FIN DE LA FUNCIÓN
function papel()
{   if(eleccionMaquina ==1){
        alert("ganó");
    } else if (eleccionMaquina ==2)
    {   alert("empató");
    } else{ 
        alert("perdió");
    }


}//FIN DE LA FUNCIÓN
function tijera()
{   if(eleccionMaquina == 1 ){
    alert("perdió")
} else if(eleccionMaquina == 2){
    alert("ganó")
} else {
    alert("empató")
}
	

}//FIN DE LA FUNCIÓN