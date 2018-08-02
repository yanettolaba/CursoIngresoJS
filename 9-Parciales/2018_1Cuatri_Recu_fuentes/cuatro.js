function mostrar()
{ //Pedir dos números y mostrar el resultado: 
//Si son iguales los muestro concatenados. 
//Si el primero es mayor, los divido, 
//de lo contrario los sumo. 
//Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje 
//"la suma es xxx y es menor a 50"//

    var numeroUno;
    var numeroDos;
    var division;
    var suma;

    numeroUno = prompt("ingrese el primer numero");
    numeroUno = parseInt(numeroUno);
    console.log(numeroUno);
    numeroDos = prompt("ingrese el segundo numero");
    numeroDos = parseInt(numeroDos);
    console.log(numeroDos);

//1. si son iguales los muestro concatenados
    if(numeroUno == numeroDos)
    {
        alert("el primer numero es " + numeroUno+ "el segundo numero es " + numeroDos);
    }
//2. si el primero es mayor, los divido.

    if(numeroUno >numeroDos)
    {
        division = numeroUno/numeroDos;
        
        alert("el resultado de la divisiòn es " + division);
    } //de lo contrario los sumo
    else{
        suma = numeroUno + numeroDos;
        alert( "el resultado de la suma es "+ suma);
        if(suma<50)
        {
        alert("la suma es " + suma+ " y es menor a 50");        }
}




}
