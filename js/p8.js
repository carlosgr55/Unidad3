let sumar = (num1, num2) => num1 + num2;

let esPar = num => num % 2 === 0 ? num +" Es par" : num +" Es impar";

function sumarBoton(){
    let num1 = Number(prompt("Ingresa un numero"));
    let num2 = Number(prompt("Ingresa un numero"));
    alert(sumar(num1, num2));
}
function parBoton(){
    let num = Number(prompt("Ingresa un numero"));
    alert(esPar(num));
}

let cuadrados = [1,4,9,16,25,36,49,64,81,100];
let raices = cuadrados.map(num => Math.sqrt(num));

function raicesBoton(){
    alert("Cuadrados: "+ cuadrados.join(", ") + "\nRaices: "+raices.join(", "));
}

let objeto = [
    {nombre:"Natalia"}, {nombre:"Beyonce"}, {nombre:"Lady Gaga"}
];

let nombres = objeto.map(item => item.nombre );

function objetoBtn(){
    alert("Nombres: "+nombres.join(", "));
}