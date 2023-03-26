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
    constructor(isbn, titulo, autor, numeroPaginas) {
        this._isbn = isbn;
        this._titulo = titulo;
        this._autor = autor;
        this._numeroPaginas = numeroPaginas;
    }

    get isbn() {
        return this._isbn;
    }

    set cambiarIsbn(value) {
        this._isbn = value;
    }

    get titulo() {
        return this._titulo;
    }

    set cambiarTitulo(value) {
        this._titulo = value;
    }

    get autor() {
        return this._autor;
    }

    set cambiarAutor(value) {
        this._autor = value;
    }

    get numeroPaginas() {
        return this._numeroPaginas;
    }

    set cambiarNumeroPaginas(value) {
        this._numeroPaginas = value;
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
