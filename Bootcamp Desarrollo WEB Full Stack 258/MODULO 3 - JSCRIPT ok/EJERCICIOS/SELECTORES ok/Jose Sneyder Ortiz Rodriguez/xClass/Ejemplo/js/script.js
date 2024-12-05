function llamado(){
    let conjunto= document.getElementsByClassName("example");
    conjunto[0].innerHTML="Cambio de contenido";
    conjunto[1].innerHTML = conjunto[1].innerHTML+"Cambio";
    conjunto[2].innerHTML = conjunto[0].innerHTML+ conjunto[1].innerHTML;
    conjunto[3].innerHTML = conjunto[2].innerHTML;
}
