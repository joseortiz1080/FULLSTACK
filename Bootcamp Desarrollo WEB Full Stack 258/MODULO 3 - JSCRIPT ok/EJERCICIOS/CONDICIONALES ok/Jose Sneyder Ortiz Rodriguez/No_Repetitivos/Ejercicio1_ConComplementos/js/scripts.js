function comprar(){
	/*
	Como en el formulario HTML se utilizó cajas de tipo number entonces no es necesario el casting a number
	sin embargo dejo converción en comentarios de linea
	*/
	//let valor = parseInt(document.getElementById("txtValor").value);
	//let cantidad = parseInt(document.getElementById("txtCantidad").value);
	let valor = document.getElementById("txtValor").value;
	let cantidad = document.getElementById("txtCantidad").value;
	let resultado = document.getElementById("resultado");
	let venta = 0;
	let descuento = 0;
	if(cantidad === 0 || cantidad < 1){
		resultado.innerHTML="Error, la contidad debe ser 1 o superior";
	}else{
		if(cantidad > 2){
			descuento =  (valor * cantidad) * 0.05;			
			venta = (valor * cantidad) - descuento;
		}else{
			venta = valor * cantidad;
		}
		resultado.innerHTML=`Resumen de venta:<br>
		* <b>Cantidad:</b>${cantidad}<br>
		* <b>Precio artículo:</b>$${valor}<br>
		* <b>Descuento:$</b>${descuento} <br>
		* <b>Valor a cancelar:</b>$${venta}
		`;
	}
}