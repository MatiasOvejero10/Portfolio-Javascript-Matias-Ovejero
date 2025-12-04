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