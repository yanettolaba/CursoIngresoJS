function mostrar()
{   
    var nombre; 
    var sexo;
    var edad;
    var contador;
    contador = 0;

    var contadorMujeres;
    contadorMujeres = 0;
    var contadorHombres;
    contadorHombres = 0;
    var contadorMayores;
    contadorMayores = 0;
    var contadorMenores;
    contadorMenores = 0;
    var hombresMayores;
    hombresMayores = 0;
    var flag;
    flag == false;
    var maximo;
    maximo =0;
    var minimo;
    minimo = 101;
    var acumuladorMujeres = 0;
    var acumuladorHombres = 0;
    var promedioMujeres;
    var promedioHombres;
    var sumatoriaEdades = 0;
    var promedioEdades;
    var nombreMasViejo;

    while (contador <4)
    {
        contador++;
        nombre = prompt("ingrese nombre");
        sexo = prompt("ingrese f o m para sexo");
        sexo = sexo.toUpperCase();

        while(sexo != "F" && sexo != "M")
        {   sexo = prompt("error, ingrese f o m para sexo");
            sexo = sexo.toUpperCase();
        }

        edad = prompt("ingrese edad");
        edad = parseInt(edad);
        while (isNaN(edad) || edad <1 || edad >100)
        {   edad = prompt("error. ingrese edad");
            edad = parseInt(edad);
        }
       

        if(sexo == "F")
        {
            contadorMujeres++;
            acumuladorMujeres= acumuladorMujeres + edad;
        } else
        {
        
            contadorHombres ++;
            acumuladorHombres = acumuladorHombres + edad;

        if(edad >17){
            hombresMayores ++;
        }
        }

        if(edad >17)
        {   contadorMayores++;
        } else
        {
            contadorMenores ++;
        }

       
        if(edad < minimo)
        {
            minimo = edad;
        }
        if(edad > maximo)
        {
            maximo = edad;
            nombreMasViejo = nombre;
        }

        sumatoriaEdades = sumatoriaEdades+ edad;
    }


    promedioMujeres = acumuladorMujeres / contadorMujeres;
    promedioHombres =acumuladorHombres / contadorHombres;
    promedioEdades = sumatoriaEdades / contador;

    document.write("Cantidad de Mujeres es " + contadorMujeres+"</br>") ;
    document.write("cantidad de hombres es " + contadorHombres+"</br>");
    document.write("cantidad de mayores de edad es "+contadorMayores + "</br>");
    document.write("cantidad de menores de edad es "+contadorMenores+ "</br>");
    document.write("la cantidad de hombres mayores de edad es "+hombresMayores+ "</br>");
    document.write("la edad más baja es " + minimo+ "</br>");
    document.write("la edad más alta es " + maximo+ "</br>");
    document.write("el promedio de edad mujeres es " + promedioMujeres+ "</br>")
    document.write("el promedio de edad hombres es " + promedioHombres+ "</br>")
    document.write("el promedio de edad total es " + promedioEdades+ "</br>")
    document.write("el nombre de más viejo es " + nombreMasViejo+ "</br>")
 nombre del mas viejo;
 nombre del mas joven;
 sexo del mas viejosexo del mas joven
