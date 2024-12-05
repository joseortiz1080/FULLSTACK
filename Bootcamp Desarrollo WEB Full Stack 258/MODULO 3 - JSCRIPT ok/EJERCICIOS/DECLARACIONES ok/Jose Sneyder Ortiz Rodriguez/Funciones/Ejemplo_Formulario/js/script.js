	
function enviar(){
	event.preventDefault();
	let labnombres = document.getElementById("labnombres");
	let labapellidos = document.getElementById("labapellidos");
	let labtipodocumento = document.getElementById("labtipodocumento");
	let labnumerodocumento = document.getElementById("labnumerodocumento");
	labnombres.innerHTML = document.getElementById("txtNombres").value;
	labapellidos.innerHTML = document.getElementById("txtApellidos").value;
	labtipodocumento.innerHTML= document.getElementById("selectTipo").value;
	labnumerodocumento.innerHTML= document.getElementById("txtNumero").value;
}
function reiniciar(){
	event.preventDefault();
	document.getElementById("txtNombres").value = "";
    document.getElementById("txtApellidos").value = "";
    document.getElementById("selectTipo").value = "";	
	document.getElementById("txtNumero").value = "";    
	document.getElementById("parrafo").innerHTML="Yo, <b><label id='labnombres'>_____________________</label></b> <b><label id='labapellidos'>"+
	"</label></b> idetificado con <b><label id='labtipodocumento'>____</label></b> número <b><label id='labnumerodocumento'>_____________</label>."+
	"</b>Autorizo a realizar los tramite de tratamientos de datos mediante procedimientos técnicos.</p>";
	document.getElementById("txtNombres").focus();
}
