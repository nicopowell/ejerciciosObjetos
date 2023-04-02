/*
Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/

class Producto {
    #codigo;
    #nombre;
    #precio;
    constructor(codigo, nombre, precio) {
        this.#codigo = codigo;
        this.#nombre = nombre;
        this.#precio = precio;
    }
    get codigo() {
        return this.#codigo;
    }

    set codigo(nuevoCodigo) {
        if (nuevoCodigo > 0) {
            this.#codigo = nuevoCodigo;
        }
    }
    get nombre() {
        return this.#nombre;
    }

    set nombre(nuevoNombre) {
        if (nuevoNombre !== "") {
            this.#nombre = nuevoNombre;
        }
    }
    get precio() {
        return this.#precio;
    }

    set precio(nuevoPrecio) {
        if (nuevoPrecio > 0) {
            this.#precio = nuevoPrecio;
        }
    }
    mostrarInfo() {
        document.write(`<p>Código: ${this.codigo}</p>`);
        document.write(`<p>Nombre: ${this.nombre}</p>`);
        document.write(`<p>Precio: ${this.precio}</p>`);
        document.write("<hr>");
    }
}
const cocaCola = new Producto(103, "Coca-Cola 500ml", 200);
const oreo = new Producto(234, "Oreo", 250);
const leche = new Producto(313, "Leche La Serenisima 1L", 195);

listaProductos = [cocaCola, oreo, leche];

listaProductos[0].mostrarInfo();
listaProductos[1].mostrarInfo();
listaProductos[2].mostrarInfo();
