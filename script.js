const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];

function primo (a) {
  if (a <= 1){
    return false
  } else{
    for (let i = 2; i<a;i++){
      if(a%i==0){
        return false
      }
    }
    return true
  }
}
function numeroPrimo(){
  ejercicio1.forEach(function(a){
    if(primo(a)){
      console.log("el número"+ a + "es primo")
    }
  })
}
numeroPrimo


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
