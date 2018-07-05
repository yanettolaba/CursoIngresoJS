/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{   var importe;
    var porcentaje;
    var total;
    importe = document.getElementById("sueldo").value;
    importe = parseInt(importe);
    porcentaje = importe*10/100;
    total = importe + porcentaje;
    document.getElementById("resultado").value = total;

}
