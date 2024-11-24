let miHorario = {
  clase1: "Fundamentos de Telecomunicaciones",
  clase2: "Arquitectura de Computadoras",
  clase3: "Fund. de Ing. de Software",
  clase4: "Programacion Web",
  clase5: "Lenguajes y Automatas I",
  clase6: "Taller de Base de Datos",

  pregunta: function () {
    let respuesta = confirm("Deseas ver el horario?");
    if (respuesta) {
      miHorario.imprimir();
    } else {
      alert("Bye");
    }
  },

  imprimir: function () {
    let mensaje =
      "Clase 1: " +
      miHorario.clase1 +
      "\nClase 2: " +
      miHorario.clase2 +
      "\nClase 3: " +
      miHorario.clase3 +
      "\nClase 4: " +
      miHorario.clase4 +
      "\nClase 5: " +
      miHorario.clase5 +
      "\nClase 6: " +
      miHorario.clase6;
    alert(mensaje);
  },
};

let calificaciones = {
  clase1: 0,
  clase2: 0,
  clase3: 0,
  clase4: 0,
  clase5: 0,
  clase6: 0,

  ejecutar: function () {
    let respuesta = confirm("Deseas ejecutar el objeto?");
    if (respuesta) {
      calificaciones.soliCalif();
    } else {
      alert("Bye");
    }
  },

  soliCalif: function () {
    this.clase1 = Number(prompt("Calificacion de " + miHorario.clase1));
    this.clase2 = Number(prompt("Calificacion de " + miHorario.clase2));
    this.clase3 = Number(prompt("Calificacion de " + miHorario.clase3));
    this.clase4 = Number(prompt("Calificacion de " + miHorario.clase4));
    this.clase5 = Number(prompt("Calificacion de " + miHorario.clase5));
    this.clase6 = Number(prompt("Calificacion de " + miHorario.clase6));
    this.promedio();
  },
  suma: function(){
    let suma =
      this.clase1 +
      this.clase2 +
      this.clase3 +
      this.clase4 +
      this.clase5 +
      this.clase6;
    return suma;
  },
  promedio: function () {
    let sumaCalif = this.suma();
    let promedio = sumaCalif / 6;
    alert(
      "Suma de calificaciones: " + sumaCalif + "\nPromedio general: " + promedio
    );
  },
  
};

miHorario.pregunta();
calificaciones.ejecutar();
