function myFunction() {
    var titulo = document.getElementById("primer-titulo").innerHTML;
    var parrafos = document.getElementsByTagName("p");
    parrafos[0].innerHTML = titulo;
    parrafos[1].innerHTML = titulo;
    parrafos[2].innerHTML = titulo;
}