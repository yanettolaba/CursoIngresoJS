/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var primerNumero;
var operacion;
var segundoNumero;

function comenzar()
{   
    primerNumero = Math.floor(Math.random()*(11-1))+1;
    segundoNumero = Math.floor(Math.random()* (11-1))+1;
    document.getElementById("PrimerNumero").value = primerNumero;
    document.getElementById("SegundoNumero").value = segundoNumero;

	

}//FIN DE LA FUNCIÓN
function Responder()
{
	

}//FIN DE LA FUNCIÓN
