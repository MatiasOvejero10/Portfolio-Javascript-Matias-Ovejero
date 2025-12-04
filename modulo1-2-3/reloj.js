function actualizarReloj() {
    const ahora = new Date();
    const horas = ahora.getHours(); 
    const minutos = String(ahora.getMinutes()).padStart(2, "0");
    const segundos = String(ahora.getSeconds()).padStart(2, "0");

    const reloj = document.getElementById("reloj");
    
   
    const horasFormateadas = String(horas).padStart(2, "0"); 
    reloj.innerHTML = `${horasFormateadas}:${minutos}:${segundos}`;

   

   
    if (horas >= 20 || horas < 6) {
        reloj.style.color = "#FFD700"; 
        reloj.style.backgroundColor = "#1A1A2E";
        reloj.style.border = "2px solid #FFD700";
    }
    else {
        reloj.style.color = "#0056b3"; 
        reloj.style.backgroundColor = "#f0e3e3ff"; 
        reloj.style.border = "2px solid #0056b3";
    }
}    
setInterval(actualizarReloj, 1000);


actualizarReloj();
// Desafio cambia el color del reloj dependiendo la hora del dia