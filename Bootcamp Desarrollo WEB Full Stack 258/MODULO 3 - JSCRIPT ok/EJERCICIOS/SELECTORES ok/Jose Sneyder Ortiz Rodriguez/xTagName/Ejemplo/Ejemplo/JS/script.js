function myFunction(){
    var conjunto = document.getElementsByTagName("*");
    var respuesta = document.getElementById("respuesta");
    var texto = "";
    /*cuando pongo [0] quiere decir que va a ir al primer elemento que esta en el conjunto de elementos*/ 
    texto = "El nombre de la etiqueta es: " + conjunto[7].tagName;
    respuesta.innerHTML= texto; 
}