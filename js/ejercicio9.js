/*
Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. 
*/

class Animal {
    #nombre;
    #edad;
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    get nombre() {
        return this.#nombre;
    }

    set nombre(nuevoNombre) {
        if (nuevoNombre !== "") {
            this.#nombre = nuevoNombre;
        }
    }
    get edad() {
        return this.#edad;
    }

    set edad(nuevaEdad) {
        if (nuevaEdad > 0 && nuevaEdad < 40) {
            this.#edad = nuevaEdad;
        }
    }
    emitirSonido() {}
}

class Perro extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad);
    }
    emitirSonido() {
        document.write("<p>Guau!!!</p>");
    }
}

class Gato extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad);
    }
    emitirSonido() {
        document.write("<p>Miau!!!</p>");
    }
}

const perro = new Perro("Alex", 2);
document.write(`<p>El perro ${perro.nombre} tiene ${perro.edad} años.</p>`);
perro.emitirSonido();

const gato = new Gato("Miguel", 5);
document.write(`<p>El gato ${gato.nombre} tiene ${gato.edad} años.</p>`);
gato.emitirSonido();
