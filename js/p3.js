
init();

function getNombre(){
    return prompt("Ingresa tu nombre");
}
function getActividad(){
    return prompt("Ingresa tu actividad favorita");
}
function confirmar(mensaje){
    return confirm(mensaje);
}

function bienvenida(mensaje){
    alert(mensaje); 
}
function mostrarMensaje(mensaje){
    alert(mensaje);
}

function init(){
    bienvenida("Bienvenido a esta practica");
    let nombre = getNombre();
    let actividad = getActividad();
    let respuesta = confirmar("Estan corectos los datos??" 
        +"\nNombre: "+nombre + " \nActividad: "+actividad);
    if(respuesta){
        mostrarMensaje("Datos guardados");
    }else{
        mostrarMensaje("No se guardaron");
    }
}