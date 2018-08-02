
function mostrar()
{   var base;
    var altura;
    var superficie;
    var perimetro;

    base= prompt("ingrese base");
    base = parseInt(base);
    altura = prompt("ingrese altura");
    altura = parseInt(altura);
    superficie = base* altura/2;
    perimetro = 3 * base;

    alert( "la superficie es " + superficie+ " y el perimetro es "+ perimetro);


}
