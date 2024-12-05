let ej = "";

function myD(something) {
    let resultado = document.getElementById("p");
    resultado.innerHTML = ej + " y segundo llamado es el valor es " + something;
}

async function pagar() {
    event.preventDefault(); // Evitar el envío del formulario

    ej = "Primera llamada realizada. ";

    // Aquí simulamos una operación asincrónica con setTimeout, envuelta en una Promesa
    let valor = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(10); // Después de 2 segundos, se resuelve la promesa con el valor 10
        }, 2000);
    });

    // Llamamos a la función `myD` después de que la operación asincrónica se haya completado
    myD(valor);
}
