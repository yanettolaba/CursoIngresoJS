function mostrar()
{   var  numero;

    var contadorPares = 0; 
    numero = prompt("ingrese numero");
    numero = parseInt(numero);
    
    for(var i = 1; i <= numero; i++)
    {
        if(i % 2 ==0)
        {
                contadorPares = contadorPares + 1;
                console.log(i);
                                                         
                 
        }
        
 }


        alert("hay" + contadorPares+ "numeros pares");
        
}
//FIN DE LA FUNCIÓN