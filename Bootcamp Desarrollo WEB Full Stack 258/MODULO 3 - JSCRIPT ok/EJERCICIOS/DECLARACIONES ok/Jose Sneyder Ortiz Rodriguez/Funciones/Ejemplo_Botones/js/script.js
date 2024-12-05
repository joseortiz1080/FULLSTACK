
function cambiar(){	
	var referencia = document.getElementById("parrafo");	
	//variable.setAttribute(value,"Nuevo párrafo");
	referencia.style.color="rgb(255,0,0)";
	referencia.innerHTML="Cambio de párrafo";
}
function resetear(){
	var referencia = document.getElementById("parrafo");
	referencia.style.color="rgb(0,0,0)";
	referencia.innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua."+
	" Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"+
	"consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non"+
	"proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
}