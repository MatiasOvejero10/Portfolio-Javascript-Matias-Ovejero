class producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarInfo() {
        console.log(`${this.nombre}: $${this.precio}`);
    }
}

const p1 = new producto("Mouse", 5000);
const p2 = new producto("Teclado", 10000);
const p3 = new producto("Play 5", 1000000);
const p4 = new producto("MONITOR", 300000);
const p5 = new producto("Notebook", 800000);
const p6 = new producto("Cascos VR", 500000);

p1.mostrarInfo(); // Output: Mouse: $5000
p2.mostrarInfo(); // Output: Teclado: $10000
p3.mostrarInfo();// Output: Play 5: $1000000
p4.mostrarInfo();// Output: Monitor: $300000
p5.mostrarInfo();// Output: Notebook: $800000
p6.mostrarInfo();// Output: Cascos VR: $500000

