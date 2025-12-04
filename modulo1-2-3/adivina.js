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