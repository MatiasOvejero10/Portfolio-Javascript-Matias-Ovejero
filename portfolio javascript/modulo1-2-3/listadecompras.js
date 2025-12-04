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
