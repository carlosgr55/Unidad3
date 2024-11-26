let frutas = [];
let calificaciones = [];
let numeros = [1,2,3,4,5];
function solicitarFruta() {
  return prompt("Agrega una fruta");
}
function agregarFruta(fruta) {
  frutas.push(fruta);
}
let agregar = true;
do {
  agregarFruta(solicitarFruta());
  agregar = confirm("Agregar otra?");
} while (agregar);
alert("Frutas: " + frutas.join(", "));

function solicitarCalif() {
    return prompt("Agregar Calificacion");
}
function agregarCalif(calif) {
  calificaciones.push(Number(calif));
}
function calcularPromedio(califas) {
  let suma = 0;
  for (let i = 0; i < califas.length; i++) {
    suma += califas[1];
  }
  return suma / califas.length;
}

let agregarCaf = true;
alert("Calificaciones");
do {
  agregarCalif(solicitarCalif());
  agregarCaf = confirm("Agregar otra calificaion");
} while (agregarCaf);
let promedio = calcularPromedio(calificaciones);
alert("Promedio:" +promedio);


function solicitarNum(){
    return Number(prompt("Agrega numero"));
}
function agregarNum(num){
    numeros.push(num);
}

function sumarNum(arreglo){
    let suma = 0;
    for(let i = 0; i<arreglo.length; i++){
        suma += arreglo[1];
    }
    return suma;
}


let agNum = true;
alert("Numeros");
do {
  agregarNum(solicitarNum());
  agNum = confirm("Agregar otro numero");
} while (agNum);
let suma = sumarNum(numeros);
alert("Numeros: "+ numeros.join(", ") + "\nSuma: "+suma);