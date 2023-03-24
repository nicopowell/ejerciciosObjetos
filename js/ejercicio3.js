/*
Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
*/

class Rectangulos {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
    mostrarInfo() {
        document.write("<hr>");
        document.write(`<h3>Rectangulo</h3>`);
        document.write(`<p>Alto: ${this.alto}</p>`);
        document.write(`<p>Ancho: ${this.ancho}</p>`);
        document.write("<hr>");
    }
    calcularPerimetro() {
        document.write(
            `<p>El perimetro del rectangulo de ${this.alto} de alto y ${
                this.ancho
            } de ancho es de: ${this.ancho * 2 + this.alto * 2}</p>`
        );
    }
    calcularArea() {
        document.write(
            `<p>El área del rectangulo de ${this.alto} de alto y ${
                this.ancho
            } de ancho es de: ${this.ancho * this.alto}</p>`
        );
    }
}

const rectangulo = new Rectangulos(3, 5);
rectangulo.mostrarInfo();
rectangulo.calcularPerimetro();
rectangulo.calcularArea();
