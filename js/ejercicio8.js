/*
Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".
*/

class Persona {
    #nombre;
    #edad;
    #profesion;
    constructor(nombre, edad, profesion) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#profesion = profesion;
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
        if (nuevaEdad > 0 && nuevaEdad < 130) {
            this.#edad = nuevaEdad;
        }
    }
    get profesion() {
        return this.#profesion;
    }

    set profesion(nuevaProfesion) {
        if (nuevaProfesion !== "") {
            this.#profesion = nuevaProfesion;
        }
    }
    saludar() {
        document.write(`<p>Hola, soy ${this.nombre}</p>`);
    }
    despedirse() {
        document.write(`<p>Adiós, nos vemos la proxima!</p>`);
    }
}

const nico = new Persona("Nico", 20, "Estudiante");
const juan = new Persona("Juan", 25, "Ingeniero");

nico.saludar();
nico.despedirse();
juan.saludar();
juan.despedirse();
