let nombre = prompt('Cual es tu nombre');

let edad = prompt('Cual es tu edad');
let pais = prompt('Cual es tu pais de residencia');

let mensaje = 'Hola, '+nombre+'! felicidades por tus '+edad+' años saludos hasta '+pais;

alert(mensaje);

datosCorrectos();
function datosCorrectos(){
    let correcto = prompt('Estan tus datos correctos \nSi\\No');

    if(correcto == 'Si' || correcto == 'si'){
        alert('Datos guardados');
    }else{
        alert('Datos borrados');
    }
}