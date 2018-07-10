function mostrar()
{
//tomo la edad  
    var edad;
    edad = document.getElementById("edad").value;
    var mensaje;


    if(edad > 17) {
        mensaje = "es mayor de edad";
    } else  {
        if (edad <13) {
            mensaje = "es niño"
    } else {
        mensaje = "es adolescente"
    }
    
    }
    alert(mensaje);

}//FIN DE LA FUNCIÓN