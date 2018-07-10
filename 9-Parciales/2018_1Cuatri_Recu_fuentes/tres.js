function mostrar()
{   var precio;
    var porcentajeDescuento;
    var descuentoEnDinero;
    var precioConDescuento;
    var iva;
    var precioFinal;
    precio = prompt("ingrese el precio");
    porcentajeDescuento = prompt("ingrese porcentaje de descuento");

    precio = parseInt(precio);
    porcentajeDescuento = parseInt(porcentajeDescuento);
    
    descuentoEnDinero = precio * porcentajeDescuento/100;
    precioConDescuento = precio - descuentoEnDinero;
    iva = precioConDescuento *21/100;
    alert("el descuento en dinero es "+descuentoEnDinero+ " El precio con descuento es "+precioConDescuento+ " el iva es "+iva);
    precioFinal = precioConDescuento + iva;
    document.getElementById("elPrecioFinal").value = precioFinal;

    console.log("log",iva);
    console.info("info");
    console.error("error");
}
