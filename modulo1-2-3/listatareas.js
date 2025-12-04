const input = document.getElementById("tarea"); 
const boton = document.getElementById("agregar");
const lista = document.getElementById("lista");


document.addEventListener("DOMContentLoaded", cargarTareas);


boton.addEventListener("click", () => {
  const texto = input.value.trim();
  if (texto === "") return;

  agregarTarea(texto);
  guardarTarea(texto);
  input.value = "";
});


function agregarTarea(texto) {
  const li = document.createElement("li");
  li.textContent = texto;

  const btnBorrar = document.createElement("button");
  btnBorrar.textContent = "❌";
  btnBorrar.addEventListener("click", () => {
    li.remove();
    eliminarTarea(texto); // Eliminar del localStorage
  });

  li.appendChild(btnBorrar);
  lista.appendChild(li);
}

function guardarTarea(texto) {
  const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
  tareas.push(texto);
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

function cargarTareas() {
  const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
  tareas.forEach((texto) => agregarTarea(texto));
}

function eliminarTarea(texto) {
  let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
  tareas = tareas.filter((t) => t !== texto);
  localStorage.setItem("tareas", JSON.stringify(tareas));
}


//Desafio guarda las tareas en localStorage para que no se pierdan al recargar