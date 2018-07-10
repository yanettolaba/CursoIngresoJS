
function mostrar()
{   var base;
    var altura;
    var perimetro;
    var superficie;
    base = prompt("ingresar base");
    altura = prompt("ingresar altura");
    base = parseInt(base);
    altura = parseInt(altura);
    perimetro = base *3;
    superficie = (base*altura)/2;
    alert("el perimetro del triangulo equilatero es: " + perimetro+ " y su superficie es:" + superficie);

}
