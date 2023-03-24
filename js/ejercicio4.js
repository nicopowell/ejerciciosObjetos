/*
Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/

class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
    mostrarInfo() {
        document.write(`<p>Código: ${this.codigo}</p>`);
        document.write(`<p>Nombre: ${this.nombre}</p>`);
        document.write(`<p>Precio: ${this.precio}</p>`);
        document.write("<hr>");
    }
}
const cocaCola = new Producto(001, "Coca-Cola 500ml", 200);
const oreo = new Producto(002, "Oreo", 250);
const leche = new Producto(003, "Leche La Serenisima 1L", 195);

listaProductos = [cocaCola, oreo, leche];

listaProductos[0].mostrarInfo();
listaProductos[1].mostrarInfo();
listaProductos[2].mostrarInfo();
