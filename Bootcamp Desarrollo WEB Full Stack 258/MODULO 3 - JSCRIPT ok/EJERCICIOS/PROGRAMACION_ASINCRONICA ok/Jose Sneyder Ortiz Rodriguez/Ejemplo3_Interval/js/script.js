// Función para mostrar la hora actual en un elemento HTML
function mensaje(){
    let resultado = document.getElementById("p");
    // Crea un objeto de tipo Date para obtener la hora actual
    let d = new Date();
    // Actualiza el contenido del elemento con la hora actual en formato "horas:minutos:segundos"
    resultado.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}
// Función que configura un intervalo para actualizar la hora cada segundo
function pagar() {
    event.preventDefault();
    // Llama a la función "mensaje" cada 1000 milisegundos (1 segundo) de forma repetitiva
    setInterval(mensaje,1000);
}