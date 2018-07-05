/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{   var temperatura;
    var deFarenheitACelsius;
    temperatura = document.getElementById("Temperatura").value;
    temperatura = parseInt(temperatura);
    deFarenheitACelsius = (temperatura - 32) * 5/9;
    alert(temperatura+ "farenheit son:"+deFarenheitACelsius+ "centigrados" );
	
}

function CentigradosFahrenheit () 
{   var temperatura;
    var deCelsiusAFarenheit;
    temperatura = document.getElementById("Temperatura").value;
    temperatura = parseInt(temperatura);
    deCelsiusAFarenheit = (temperatura * 1.8) + 32;
    alert(temperatura + "centìgrados son:" +deCelsiusAFarenheit+ "farenheit" );
	
}
