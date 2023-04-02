/*
Crear una clase Libro que contenga al menos las siguientes propiedades:
    - ISBN
    - Título
    - Autor
    - Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class Libro {
    #isbn;
    #titulo;
    #autor;
    #numeroPaginas;
    constructor(isbn, titulo, autor, numeroPaginas) {
        this.#isbn = isbn;
        this.#titulo = titulo;
        this.#autor = autor;
        this.#numeroPaginas = numeroPaginas;
    }

    get isbn() {
        return this.#isbn;
    }

    set isbn(value) {
        this.#isbn = value;
    }

    get titulo() {
        return this.#titulo;
    }

    set titulo(value) {
        this.#titulo = value;
    }

    get autor() {
        return this.#autor;
    }

    set autor(value) {
        this.#autor = value;
    }

    get numeroPaginas() {
        return this.#numeroPaginas;
    }

    set numeroPaginas(value) {
        this.#numeroPaginas = value;
    }

    mostrarLibro() {
        document.write(
            `<p>El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.numeroPaginas} páginas.</p>`
        );
    }
}

const libro1 = new Libro("9780044403371", "El Hobbit", "J.R.R. Tolkien", 336);
const libro2 = new Libro(
    "9788466657662",
    "El Camino de los Reyes",
    "Brandon Sanderson",
    1200
);

libro1.mostrarLibro();
libro2.mostrarLibro();

if (libro1.numeroPaginas > libro2.numeroPaginas) {
    document.write(
        `<p>${libro1.titulo} tiene más páginas que ${libro2.titulo}</p>`
    );
} else if (libro1.numeroPaginas < libro2.numeroPaginas) {
    document.write(
        `<p>${libro2.titulo} tiene más páginas que ${libro1.titulo}</p>`
    );
} else {
    document.write(
        `<p>${libro1.titulo} y ${libro2.titulo} tienen la misma cantidad de páginas</p>`
    );
}
