function llamado(){
    let conjunto = document.getElementsByClassName("example");

    conjunto[0].innerHTML = "Cambio contenido en el HTML y en el div por CLASS";
    conjunto[1].innerHTML = conjunto[1].innerHTML + "cambio";

    conjunto[2].innerHTML = conjunto[0].innerHTML + conjunto[1].innerHTML;
    conjunto[3].innerHTML = conjunto[2].innerHTML;
}

function llamado1(){

    let conjunto = document.getElementsByClassName("example");

    conjunto[0].innerHTML = "<p>" + conjunto[2].innerHTML + "</p>" + "<p>" + conjunto[3].innerHTML + "</p>";
}