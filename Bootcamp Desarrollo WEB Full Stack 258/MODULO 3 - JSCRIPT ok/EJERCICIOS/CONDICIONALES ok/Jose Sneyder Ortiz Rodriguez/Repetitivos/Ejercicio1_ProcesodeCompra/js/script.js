
let cantidades = [];
let precios = [];

function adicionar(){
    let precio = Number(document.getElementById("precio").value);
    let cantidad = Number(document.getElementById("cantidad").value);
    let resultado = document.getElementById("p");

    event.preventDefault();

    resultado.innerHTML = "El precio total a pagar con este producto es $" + (precio*cantidad);
    
    cantidades.push (cantidad);
    precios.push (precio);
}
function pagar(){
    
    let resultado = document.getElementById("p");
    
    let menorvu = 0.0; 
    let mayorvu = 0.0; 
    let menorst = 0.0; 
    let mayorst = 0.0;
    let total = 0.0;  



    event.preventDefault();
    
    for (let vc=0; vc < cantidades.length ; vc = vc + 1) {
        total = total + (cantidades[vc]*precios[vc]);
    
        if(vc==0 || precios [vc] < menorvu){
            menorvu = precios[vc];
        } 
        
        if (vc==0 || (precios[vc]*cantidades[vc])< menorst){
            
            menorst = precios[vc]*cantidades[vc];
        }
        
        if (vc==0 || precios[vc] > mayorvu){
            mayorvu = precios[vc];
        }
        
        if (vc==0|| (precios[vc]*cantidades[vc]) > mayorst){
        
            mayorst = precios[vc]*cantidades[vc];
        }
    }
    
    
    resultado.innerHTML = "El valor total a pagar en esta compra es: $ " + total + "<br>" + "el precio menor unitario es: " + menorvu + "<br>" + "El precio mayor unitario es: " + mayorvu + "<br>" + "El menor subtotal es: " + menorst + "<br>" + "El mayor subtotal es: " + mayorst;
}