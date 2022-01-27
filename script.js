const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];

let sonPrimos = (arreglo = Array) => {
  arreglo.forEach ( ( numero ) => {
    for (let i = 2; i <= numero; i++ ) {
      break; 
    } if ( numero % 1 == 0) {
      console.log(`${ numero } es primo`);
    }
  })
  }

const ejercicio2 = [
  {
    nombre: "Gabriel",
    edad: 22,
    esFamiliar: false,
  },
  {
    nombre: "Jaime",
    edad: 15,
    esFamiliar: true,
  },
  {
    nombre: "María",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Angel",
    edad: 19,
    esFamiliar: true,
  },
  {
    nombre: "Fer",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Rachel",
    edad: 30,
    esFamiliar: true,
  },
];

Arreglo.ejercicio2

let condicion = edad >=18;

let condicion2 = esFamiliar = true;

console.log("condicion =>", condicion);

console.log("condicion2 =>", condicion2);

if (condicion && condicion2 || condicion3) {
  console.log(`Es admitido`);
} else {
  console.log(`No es admitido`);
}
