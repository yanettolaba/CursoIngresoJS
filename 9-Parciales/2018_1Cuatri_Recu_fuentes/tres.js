function mostrar()
//Pedir por prompt el precio y el porcentaje de descuento, mostrar: 
//1-El descuento en dinero, 2-El precio con el descuento , 
//3-El IVA 
//todos los anteriores e un solo alert 
//4-Y solo el precio con descuento más el IVA por id//
{   var precio; 
    var porcentajeDescuento;
    var descuentoDinero;
    var precioConDescuento;
    var iva;
    var precioFinal;

    precio= prompt("ingrese precio");
    precio = parseInt(precio);
    porcentajeDescuento = prompt("ingrese porcentaje de Descuento");
    porcentajeDescuento = parseInt(porcentajeDescuento);
    porcentajeDescuento = porcentajeDescuento /100;

    //1. descuento en dinero//
    descuentoDinero = precio * porcentajeDescuento;
    
    //2. el precio con el descuento//
    precioConDescuento = precio - descuentoDinero;
    
    //3. El iva.
    iva = precioConDescuento * 0.21;
    
    alert( "el desceunto en dinero es "+ descuentoDinero+ ". El precio con descuento es " + precioConDescuento + " el iva es " + iva );

//4. precio con descuento mas iva por id
    precioFinal = precioConDescuento + iva;

    document.getElementById("elPrecioFinal").value = precioFinal;





}




    