/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () {

    var precio;
    var cantidad;
    var marca;
    var precioLamparas;
    var precioConDescuento;
    var importeTotal;
    var impuesto;

    precio = 35;
    cantidad = document.getElementById("Cantidad").value;
    cantidad = parseInt(cantidad);
    marca = document.getElementById("Marca").value;
    precioLamparas = precio * cantidad;

    if (cantidad >5){
        precioConDescuento = precioLamparas * 0.5;
    } else if ( cantidad ==5 && marca == "ArgentinaLuz"){
        precioConDescuento = precioLamparas * 0.6;
    } else if (cantidad == 5){
        precioConDescuento = precioLamparas * 0.7;
    } else if (cantidad == 4 && (marca == "ArgentinaLuz" || marca == "FelipeLamparas") ) {
        precioConDescuento = precioLamparas * 0.75;
    } else if (cantidad == 4){
        precioConDescuento = precioLamparas * 0.8;
    } else if (cantidad == 3 && marca == "ArgentinaLuz"){
            precioConDescuento = precioLamparas * 0.85;
        } else if (cantidad== 3 && marca == "FelipeLamparas"){
            precioConDescuento = precioLamparas * 0.90;
        } else if(cantidad ==3) {
            precioConDescuento = precioLamparas * 0.95;
        } else if (cantidad <3){
            precioConDescuento = precioLamparas * 1;
        }  

    if (precioConDescuento >120){
        impuesto = precioConDescuento *10/100;
        importeTotal = precioConDescuento + impuesto;
    } else {
        impuesto = 0;
        importeTotal = precioConDescuento + impuesto;
    }
    
    document.getElementById("precioDescuento").value = precioConDescuento;

    alert("usted pago " +importeTotal+ " de importe toltal, siendo " + impuesto+ "el impuesto");




}
   
