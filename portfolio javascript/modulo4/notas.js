const listaNotas = document.getElementById("listaNotas");
let notas = JSON.parse(localStorage.getItem("notas")) || [];

function mostrarNotas() {
    listaNotas.innerHTML = "";

    notas.forEach((nota, i) => {
        const li = document.createElement("li");
        li.classList.add("nota-item");

        li.innerHTML = `
            <div class="nota-texto">
                <strong>${nota.texto}</strong>
                <p class="nota-fecha">${new Date(nota.fecha).toLocaleString('es-ES')}</p>
            </div>
            <button class="btn-eliminar" data-indice="${i}">Eliminar</button>
        `;

        listaNotas.appendChild(li);
    });

    // Escuchar botones de eliminar
    document.querySelectorAll(".btn-eliminar").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const index = e.target.dataset.indice;
            eliminarNota(index);
        });
    });
}

function eliminarNota(indice) {
    notas.splice(indice, 1);
    localStorage.setItem("notas", JSON.stringify(notas));
    mostrarNotas();
}

document.getElementById("guardar").addEventListener("click", () => {
    const nota = document.getElementById("nota").value.trim();

    if (nota) {
        notas.push({
            texto: nota,
            fecha: new Date().toISOString()
        });

        localStorage.setItem("notas", JSON.stringify(notas));
        mostrarNotas();
        document.getElementById("nota").value = "";
    }
});

document.getElementById("borrar").addEventListener("click", () => {
    localStorage.removeItem("notas");
    notas = [];
    mostrarNotas();
});

mostrarNotas();


// Desafio: agrega boton individual para eliminar cada nota y guarda tambien la fecha