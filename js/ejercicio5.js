/*
Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/

class Persona {
    constructor(nombre, edad, sexo, peso, altura, anio) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = undefined;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anio = anio;
    }
    mostrarGeneracion() {
        if (this.anio >= 1994 && this.anio <= 2010) {
            document.write(
                `<p>Esta persona al haber nacido en ${this.anio} pertenece a la generación Z</p>`
            );
        } else if (this.anio >= 1981 && this.anio <= 1993) {
            document.write(
                `<p>Esta persona al haber nacido en ${this.anio} pertenece a la generación Y o millenials</p>`
            );
        } else if (this.anio >= 1969 && this.anio <= 1980) {
            document.write(
                `<p>Esta persona al haber nacido en ${this.anio} pertenece a la generación X</p>`
            );
        } else if (this.anio >= 1949 && this.anio <= 1968) {
            document.write(
                `<p>Esta persona al haber nacido en ${this.anio} pertenece a la generación Baby Boom</p>`
            );
        } else if (this.anio >= 1930 && this.anio <= 1948) {
            document.write(
                `<p>Esta persona al haber nacido en ${this.anio} pertenece a la Silent Generation</p>`
            );
        } else {
            document.write(
                `<p>Esta persona al haber nacido en ${this.anio} no pertenece a ninguna generación en nuestra tabla</p>`
            );
        }
        document.write("<hr>");
    }
    esMayorDeEdad() {
        if (this.edad >= 18) {
            document.write(`<p>${this.nombre} es mayor de edad</p>`);
        } else {
            document.write(`<p>${this.nombre} es menor de edad</p>`);
        }
        document.write("<hr>");
    }
    mostrarDatos() {
        document.write(`<p>Nombre: ${this.nombre}</p>`);
        document.write(`<p>Edad: ${this.edad}</p>`);
        document.write(`<p>DNI: ${this.dni}</p>`);
        document.write(`<p>Sexo: ${this.sexo}</p>`);
        document.write(`<p>Peso: ${this.peso} Kg</p>`);
        document.write(`<p>Altura: ${this.altura} cm</p>`);
        document.write(`<p>Año de nacimiento: ${this.anio}</p>`);
        document.write("<hr>");
    }
    generaDNI() {
        this.dni = Math.floor(
            Math.random() * (99999999 - 10000000 + 1) + 10000000
        );
        document.write(`Se genero un DNI con valor de ${this.dni}`);
        document.write("<hr>");
    }
}

const nico = new Persona("Nicolas Powell", 20, "H", 71.5, 180, 2003);

nico.mostrarGeneracion();
nico.esMayorDeEdad();
nico.mostrarDatos();
nico.generaDNI();
nico.mostrarDatos();
