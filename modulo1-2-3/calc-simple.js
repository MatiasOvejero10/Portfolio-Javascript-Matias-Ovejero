// Calculadora simple en Javascript

// Pedir datos al usuario

let numero1;
do{
    numero1 = parseFloat(prompt("Ingrese el primer numero"));
    if(isNaN(numero1)) {
        alert("Error no has ingresado un numero, Ingresa un numero porfavor");
    }
} while (isNaN(numero1));
let numero2;
do {
   numero2 = parseFloat(prompt("Ingrese el segundo numero"));
   if(isNaN(numero2)) {
    alert("Error no has ingresado un numero, Ingresa un numero porfavor");
   } 
} while(isNaN(numero2));
let operacion;
const operadoresValidos = ["+", "-", "*", "/"];
do{
    operacion = prompt("Ingrese la operacion (+, -, *, /):");
    if(!operadoresValidos.includes(operacion)) {
        alert("Ingresa un operador valido como: +, -, *, /");
    }
} while(!operadoresValidos.includes(operacion));

let resultado;

// Estructura condicional
if (operacion === "+") {
    resultado = numero1 + numero2;
} else if (operacion === "-") {
    resultado = numero1 - numero2;
} else if (operacion === "*") {
    resultado = numero1 * numero2;
} else if (operacion === "/") {
    resultado = numero1 / numero2;
} else{
    resultado = "operacion no valida";
} 

alert(`Resultado: ${resultado}`);



// Ejercicio adicional: agrega validaciones para que el usuario solo ingrese numeros