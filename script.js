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

// Juego adivina el numero

const min = parseInt(prompt("Elige el número mínimo del rango:"));
const max = parseInt(prompt("Elige el número máximo del rango:"));

if (isNaN(min) || isNaN(max) || min >= max) {
  alert("⚠️ Rango inválido. Recarga la página e intenta de nuevo.");
} else {
  const numeroSecreto = Math.floor(Math.random() * (max - min + 1)) + min;
  let intentos = 3;
  let adivinado = false;

  while (intentos > 0 && !adivinado) {
    let numero = parseInt(
      prompt(`Adivina el número (${min} al ${max}). Intentos restantes: ${intentos}`)
    );

    if (numero === numeroSecreto) {
      alert("🎉 ¡Felicidades, adivinaste el número!");
      adivinado = true;
    } else if (numero < numeroSecreto) {
      alert("📈 El número secreto es mayor. Intenta otra vez.");
    } else if (numero > numeroSecreto) {
      alert("📉 El número secreto es menor. Intenta otra vez.");
    }

    intentos--;
  }

  if (!adivinado) {
    alert(`😈 Te quedaste sin intentos. El número era ${numeroSecreto}.`);
  }
}

// Desafio permite que el usuario elija un rango de numeros

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

// Conversor de temperaturas

// funcion declarativa

function celsiusAFahrenheit (celsius) {
    return (celsius * 9) / 5 + 32;
}

// Funcion flecha

const fahrenheitACelsius = (fahrenheit) => ((fahrenheit - 32) * 5) /9;

const kelvinACelsius = (kelvin) => kelvin - 273.15;

// Programa principal

let opcion = prompt("Elije una opción:\n1. °C -> °F\n2. °F -> °C\n3. K -> °C");

if (opcion === "1") {
    let celsius = parseFloat(prompt("Ingrese la temperatura en °C:"));
    console.log(`${celsius} °C = ${celsiusAFahrenheit(celsius).toFixed(2)}°F`);
} else if (opcion === "2") {
    let fahrenheit = parseFloat(prompt("Ingrese la temperatura en °F:"));
    console.log(`${fahrenheit}°F = ${fahrenheitACelsius(fahrenheit).toFixed(2)}°C`);
} else if (opcion === "3") {
  let kelvin = parseFloat(prompt("Ingrese la temperatura en °K:"));
  console.log(`${kelvin} °K = ${kelvinACelsius(kelvin).toFixed(2)} °C`);
} else {
    console.log("Opcion no valida ❌")
}

// Desafio agrega una tercera opcion que permita convertir Kelvin a Celsius


// Lista de compras con totales

let listaCompras = [
    {nombre: "leche",precio: 1200,  cantidad: 2},
    {nombre: "pan", precio: 800, cantidad: 1},
    {nombre: "huevos", precio: 2500, cantidad: 1},
    {nombre: "cafe", precio: 3200, cantidad: 1},
];

// Mostrar lista con forEach

console.log("📋Lista compras:");

listaCompras.forEach((item) => {
    console.log(`- ${item.nombre} (x ${item.cantidad}) ${item.precio}`);
});

// calcular el total usando reduce

const total = listaCompras.reduce(
    (acum, item) => acum +item.precio * item.cantidad,
    0
);

// Filtrar productos caros

const productosCaros = listaCompras.filter((item) => item.precio > 1000);
console.log("Productos con precio mayor a 1000:", productosCaros);

//Buscar un producto 
const buscar = prompt("Ingrese el nombre del producto que desee buscar:");
const encontrado = listaCompras.find(
    (item) => item.nombre.toLowerCase() === buscar.toLowerCase()
);

if (encontrado) {
    console.log(`Encontrado: ${encontrado.nombre} cuesta $ ${encontrado.precio}`);
} else {
    console.log("❌ Producto no encontrado");
}

function mostrarLista() {
  console.log("📋 Lista de compras:");
  listaCompras.forEach((item, index) => {
    console.log(`${index + 1}. ${item.nombre} (x${item.cantidad}) $${item.precio}`);
  });
}

//  Menú dinámico
let accion = prompt("¿Qué deseas hacer?\n1. Ver lista\n2. Agregar producto\n3. Eliminar producto");

if (accion === "1") {
  mostrarLista();
} else if (accion === "2") {
  // Agregar producto
  let nombre = prompt("Ingrese el nombre del producto:");
  let precio = parseFloat(prompt("Ingrese el precio del producto:"));
  let cantidad = parseInt(prompt("Ingrese la cantidad:"));
  listaCompras.push({ nombre, precio, cantidad });
  console.log("✅ Producto agregado correctamente.");
  mostrarLista();
} else if (accion === "3") {
  mostrarLista();
  let indice = parseInt(prompt("Ingrese el número del producto que desea eliminar:"));
  if (indice > 0 && indice <= listaCompras.length) {
    listaCompras.splice(indice - 1, 1);
    console.log("🗑️ Producto eliminado correctamente.");
  } else {
    console.log("❌ Índice inválido.");
  }
  mostrarLista();
} else {
  console.log("⚠️ Opción inválida");
}


// Desafio: permite al usuario agregar o eliminar productos de la lista dinamicamente usando push() y splice()


// Agenda de contactos 

let agenda = JSON.parse(localStorage.getItem("agenda")) || [];

// Guardar cambios en localStorage

function guardarAgenda () {
    localStorage.setItem("agenda", JSON.stringify(agenda));
}

// Agregar contacto

function agregarContacto (nombre, telefono, email) {
    const contacto = {nombre, telefono, email};
    agenda.push(contacto);
    guardarAgenda();
    console.log(`✅ Contacto agregado: ${nombre}`);
}

// Mostrar contactos

function mostrarAgenda() {
    console.log("Agenda de contactos:");
    agenda.forEach(({nombre, telefono, email}, i) => {
        console.log(`${i+1}. ${nombre} - 📞${telefono} - ✉️${email}`);
    });
}

// Buscar contacto 

function buscarContacto(nombre) {
    const contacto = agenda.find(
        (c) => c.nombre.toLowerCase() === nombre.toLowerCase()
    );
    if (contacto) {
        console.log(`🔎 Encontrado: ${contacto.nombre} - ${contacto.telefono}`);
    }  else {
        console.log("❌ Contacto no encontrado");
    }
}

// Eliminar contacto

function eliminarContacto(nombre) {
    agenda = agenda.filter(
        (c) => c.nombre.toLowerCase() === nombre.toLowerCase()
    );
    guardarAgenda();
    console.log(`Contacto eliminado: ${nombre}`);    
}

// Ejemplo de uso

agregarContacto ("Mati", "261 111222", "mati@gmail.com");
agregarContacto ("Diego", "261 222222", "diego@gmail.com");
mostrarAgenda();

// Desafio: agrega una funcion para eliminar contactos por nombre 
// Desafio: guarda y carga los datos desde localStorage para uqe persistan entre sesiones