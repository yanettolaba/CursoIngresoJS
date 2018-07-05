/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{   var precioA;
    var precioB;
    var precioC;
    var sumaTotal;
    precioA = document.getElementById("PrecioUno").value;
    precioB = document.getElementById("PrecioDos").value;
    precioC = document.getElementById("PrecioTres").value;
    precioA = parseInt(precioA);
    precioB = parseInt(precioB);
    precioC = parseInt(precioC);
    sumaTotal = precioA + precioB + precioC;
    alert(sumaTotal);
	
}
function Promedio () 
{   var precioA;
    var precioB;
    var precioC;
    var promedio;
    precioA = document.getElementById("PrecioUno").value;
    precioB = document.getElementById("PrecioDos").value;
    precioC = document.getElementById("PrecioTres").value;
    precioA = parseInt(precioA);
    precioB = parseInt(precioB);
    precioC = parseInt(precioC);
    promedio = (precioA + precioB + precioC) / 3;
    alert(promedio);
	
}
function PrecioFinal () 
{   var precioA;
    var precioB;
    var precioC;
    var iva;
    var precioSinIva;
    var precioFinal;
    precioA = document.getElementById("PrecioUno").value;
    precioB = document.getElementById("PrecioDos").value;
    precioC = document.getElementById("PrecioTres").value;
    precioA = parseInt(precioA);
    precioB = parseInt(precioB);
    precioC = parseInt(precioC);
	var iva = (precioA + precioB + precioC) *21/100;
    var precioSinIva = precioA + precioB + precioC;
    var precioFinal = precioSinIva + iva;
    alert(precioFinal);
}