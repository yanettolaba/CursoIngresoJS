function mostrar()
{   var numero;
    numero = prompt(numero);
    numero = parseInt(numero);
    var contadorDivisores = 0;

    for(var i = 1; i <= numero; i ++)
    {
        if(numero % i == 0)
        {
            contadorDivisores = contadorDivisores + 1;
            console.log ( i );
        }
    }

    alert( "hay " + contadorDivisores + "divisores");


}//FIN DE LA FUNCIÓN