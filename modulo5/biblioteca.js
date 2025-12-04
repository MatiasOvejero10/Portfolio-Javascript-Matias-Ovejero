class Autor {
    constructor(nombre) {
        this.nombre = nombre;
        this.cantidadDeLibros = 0;
   }
}

class Libro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        autor.cantidadDeLibros++;
    }

    mostrar () {
        console.log(`"${this.titulo}" - ${this.autor.nombre}`);
    }
}

const autor1 = new Autor("Gabriel García Márquez");
const libro1 = new Libro("Cien Años de Soledad", autor1);

libro1.mostrar(); // Output: "Cien Años de Soledad" - Gabriel García Márquez
console.log(autor1.cantidadDeLibros); // Output: 1