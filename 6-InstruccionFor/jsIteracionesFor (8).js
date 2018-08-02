function mostrar()
{

    var numero;
    numero = prompt(numero);

    for(var i=1; i <= numero; i ++)
    {
      if(numero % 2 == 0)
      { alert("numero no es primo")
      break;
      }  else
        {
          alert("numero es primo");
          break;
        }
    }

    if(numero==2)
    {
        alert
    }

//pedir un numero, calcular y mostrar la cantidad de numeros primos entre 1 y el numero ingresado//

    var numero;
    numero = prompt(numero);
    var cantidadPrimos = 0;



    for(var i = 2; i <numero; i ++)
    {
        if(numero & i == 0)
        {
            alert( " no es primo");
            break;
        } else
    { 
        alert ("es primo");
        break;
    }
    
    }



}//FIN DE LA FUNCIÓN