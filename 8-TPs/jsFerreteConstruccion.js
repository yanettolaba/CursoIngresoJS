/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{   var largo;
    var ancho;
    var perimetroRectangulo;
    var alambreNecesario;
    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;
    largo = parseInt(largo);
    ancho = parseInt(ancho);
    var perimetroRectangulo = (largo * 2) + (ancho *2);
    var alambreNecesario = perimetroRectangulo * 3;
    alert(alambreNecesario);

}
function Circulo () 
{   var radio;
    var perimetroCirculo;
    var alambreNecesario;
    radio = document.getElementById("Radio").value;
    radio = parseInt(radio);
    perimetroCirculo = 2 * radio * Math.PI;
    alambreNecesario = perimetroCirculo *3;
    alert(alambreNecesario);

	
}
function Materiales () 
{   var largo;
    var ancho;
    var areaRectangulo;
    var materialNecesario;
    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;
	largo = parseInt(largo);
    ancho = parseInt(ancho);
    areaRectangulo = ;
}