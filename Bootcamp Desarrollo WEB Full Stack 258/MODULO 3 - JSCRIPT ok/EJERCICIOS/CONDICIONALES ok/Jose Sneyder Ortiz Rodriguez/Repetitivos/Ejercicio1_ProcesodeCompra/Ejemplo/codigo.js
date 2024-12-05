let  cantidades = [];
let precios = [];


function adicionar() {

    event.preventDefault();

    let precio = Number(document.getElementById("precio").value);
    let cantidad = Number(document.getElementById("cantidad").value);
    let resultado = document.getElementById("p");



    resultado.innerHTML = "El precio total a pagar con este producto es $" +
        (precio*cantidad);

    cantidades.push (cantidad);
    precios.push (precio);

}

function pagar(){
    let resultado = document.getElementById("p");
    event.preventDefault();

    let total =0.0;

    for (let vc=0; vc < cantidades.length ; vc = vc + 1) {
        total = total + (cantidades [vc]* precios[vc]);
    }

    resultado.innerHTML = "El valor total a pagar en esta compra es: $ " + total;


}

