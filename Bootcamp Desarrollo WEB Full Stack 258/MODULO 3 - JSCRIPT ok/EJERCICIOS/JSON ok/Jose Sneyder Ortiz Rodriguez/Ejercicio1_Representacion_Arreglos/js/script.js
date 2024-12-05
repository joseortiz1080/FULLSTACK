function llamar_Json() {
    
    let text = '{"empleados":[{"nombre":"Jose","apellido":"Ortiz","seccion":{"id":1,"descripcion":"Finanzas"}},{"nombre":"Jose","apellido":"Ortiz","seccion":{"id":5,"descripcion":"Financiero"}}]}';
    let arreglo_presentacion = JSON.parse(text);
    
    let salida = document.getElementById("demo");
    salida.innerHTML =
        "<b>Nombre:</b> " + arreglo_presentacion.empleados[0].nombre +
        "<br><b>Apellidos:</b> " + arreglo_presentacion.empleados[0].apellido +
        "<br><b>Sección:</b> " + arreglo_presentacion.empleados[0].seccion["descripcion"];
}
