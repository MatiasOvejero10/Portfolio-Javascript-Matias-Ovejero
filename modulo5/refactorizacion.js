const input = document.getElementById("tarea");
const lista = document.getElementById("lista");

document.getElementById("agregar").onclick = () => {
  const texto = input.value.trim();
  if (texto) {
    agregar(texto);
    guardar(texto);
    input.value = "";
  }
};

document.addEventListener("DOMContentLoaded", () =>
  (JSON.parse(localStorage.getItem("tareas")) || []).forEach(agregar)
);

function agregar(texto) {
  const li = Object.assign(document.createElement("li"), { textContent: texto });

  const btn = Object.assign(document.createElement("button"), { textContent: "❌" });
  btn.onclick = () => {
    li.remove();
    actualizar(texto);
  };

  li.appendChild(btn);
  lista.appendChild(li);
}

const guardar = (texto) =>
  localStorage.setItem("tareas", JSON.stringify([...(JSON.parse(localStorage.getItem("tareas")) || []), texto]));

const actualizar = (texto) =>
  localStorage.setItem("tareas", JSON.stringify((JSON.parse(localStorage.getItem("tareas")) || []).filter(t => t !== texto)));
