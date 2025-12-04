const form = document.getElementById("registroForm");
const mensaje = document.getElementById("mensaje");

document.addEventListener("DOMContentLoaded", () => {
    const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));

    if (usuarioGuardado) {
        alert(`👋 Bienvenido de nuevo, ${usuarioGuardado.nombre}!`);
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!nombre || !email || !password) {
        mensaje.style.color = "red";
        mensaje.textContent = "❌ Todos los campos son obligatorios";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        mensaje.style.color = "red";
        mensaje.textContent = "❌ El correo no es válido";
        return;
    }

    if (password.length < 6) {
        mensaje.style.color = "red";
        mensaje.textContent = "❌ La contraseña debe tener al menos 6 caracteres";
        return;
    }

    const usuario = { nombre, email, password };
    localStorage.setItem("usuario", JSON.stringify(usuario));

    mensaje.style.color = "green";
    mensaje.textContent = "✅ Registro exitoso";

    setTimeout(() => {
        alert(`🎉 Registro exitoso, bienvenido ${nombre}!`);
    }, 300);

    form.reset();
});

// Desafio: almaceana los datos del usuario en localStorage y muestra una alerta personalizada al iniciar sesion.