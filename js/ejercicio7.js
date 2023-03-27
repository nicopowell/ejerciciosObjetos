/*
Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

    - aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
    - existeContacto(Contacto): indica si el contacto pasado existe o no.
    - listarContactos(): Lista toda la agenda
    - buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
    - eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
    - agendaLlena(): indica si la agenda está llena.
    - huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
*/

class Contacto {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
}

class Agenda {
    constructor(tamanio) {
        this.tamanio = tamanio;
        this.contactos = [];
    }

    aniadirContacto(contacto) {
        if (!this.existeContacto(contacto.nombre) && !this.agendaLlena) {
            this.contactos.push(contacto);
        } else if (this.agendaLlena) {
            document.write(
                `<p>No se pudo agregar el contacto porque la agenda está llena</p><hr>`
            );
            console.log(
                `No se pudo agregar el contacto porque la agenda está llena`
            );
        } else {
            document.write(
                `<p>No se pudo agregar el contacto porque ya existe un contacto con el mismo nombre</p><hr>`
            );
            console.log(
                `No se pudo agregar el contacto porque ya existe un contacto con el mismo nombre`
            );
        }
    }

    existeContacto(nombre) {
        return this.contactos.some(contacto => contacto.nombre === nombre);
    }

    listarContactos() {
        document.write(`<h2>Lista de contactos</h2>`);
        document.write("<ul>");
        this.contactos.forEach(c => {
            document.write(`<li>${c.nombre}: ${c.telefono}</li>`);
            console.log(`${c.nombre}: ${c.telefono}`);
        });
        document.write("</ul><hr>");
    }

    buscarContacto(nombre) {
        const contactoEncontrado = this.contactos.find(
            contactos => contactos.nombre === nombre
        );
        if (contactoEncontrado) {
            document.write(
                `<p>${contactoEncontrado.nombre}, ${contactoEncontrado.telefono}</p><hr>`
            );
            console.log(
                `${contactoEncontrado.nombre}, ${contactoEncontrado.telefono}`
            );
        } else {
            document.write(
                `<p>No se encontro un contacto con el nombre ${nombre}</p><hr>`
            );
            console.log(`No se encontro un contacto con el nombre ${nombre}`);
        }
    }

    eliminarContacto(contacto) {
        const i = this.contactos.findIndex(c => c.nombre === contacto.nombre);
        if (i !== -1) {
            this.contactos.splice(i, 1);
            document.write(`<p>Se elimino el contacto</p><hr>`);
            console.log(`Se elimino el contacto`);
        }
    }

    get agendaLlena() {
        return this.contactos.length === this.tamanio;
    }

    huecosLibres() {
        return this.tamanio - this.contactos.length;
    }
}

let tamanio = parseInt(prompt("Ingrese el tamaño de la agenda"));
if (isNaN(tamanio)) {
    tamanio = 10;
}

const agenda = new Agenda(tamanio);

console.log(agenda);

while (true) {
    const opcion = prompt(
        "Elige una opción: \n1. Añadir contacto\n2. Buscar contacto\n3. Listar contactos\n4. Eliminar contacto\n5. Ver si la agenda está llena\n6. Ver huecos libres\n7. Salir"
    );

    switch (opcion) {
        case "1":
            const nombre = prompt("Introduce el nombre del contacto:");
            const telefono = prompt("Introduce el teléfono del contacto:");
            const contacto = new Contacto(nombre, telefono);
            agenda.aniadirContacto(contacto);
            break;

        case "2":
            const nombreBusqueda = prompt("Introduce el nombre del contacto:");
            agenda.buscarContacto(nombreBusqueda);
            break;

        case "3":
            agenda.listarContactos();
            break;

        case "4":
            const nombreEliminar = prompt("Introduce el nombre del contacto:");
            const contactoEliminar = new Contacto(nombreEliminar);
            agenda.eliminarContacto(contactoEliminar);
            break;

        case "5":
            console.log(
                `La agenda${agenda.agendaLlena ? "" : " no"} está llena.`
            );
            document.write(
                `<p>La agenda${agenda.agendaLlena ? "" : " no"} está llena.</p>`
            );
            break;

        case "6":
            console.log(
                `Hay ${agenda.huecosLibres()} huecos libres en la agenda.`
            );
            document.write(
                `<p>Hay ${agenda.huecosLibres()} huecos libres en la agenda.</p><hr>`
            );
            break;

        case "7":
            console.log("Saliendo de la agenda telefónica...");
            document.write("<p>Saliendo de la agenda telefónica...</p><hr>");
            break;

        default:
            console.log("Opción inválida.");
            document.write("<p>Opción inválida.</p><hr>");
            break;
    }

    if (opcion === "7") {
        break;
    }
}
