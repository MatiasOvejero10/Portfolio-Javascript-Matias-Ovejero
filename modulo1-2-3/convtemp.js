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