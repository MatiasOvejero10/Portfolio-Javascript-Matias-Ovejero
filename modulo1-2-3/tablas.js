// Generador tablas de multiplicar

let numero3 = parseInt(prompt("Ingrese un numero para ver su tabla de multiplicar:"));
let limite = parseInt(prompt("¿Hasta que numero quieres multiplicar?"));

let resultados = [];    

for (let i = 1; i <= limite; i++) {
  let resultado = `${numero3} x ${i} = ${numero3 * i}`;
  resultados.push(resultado);
}

console.log(`\n📘 Tabla de multiplicar del ${numero3}:`);
for (let operacion of resultados) {
  console.log(operacion);
}
// Desafio: guarda los resultados en un array y muestralos con un for of