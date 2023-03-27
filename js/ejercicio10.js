/* 
crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.
*/

class Aeropuerto {
    constructor(nombreAeropuerto) {
        this.nombreAeropuerto = nombreAeropuerto;
        this.listaAviones = [];
    }

    agregarAvion(avion) {
        this.listaAviones.push(avion);
        document.write(
            `<p>Se agregó el avión ${avion.nombre} al aeropuerto.</p>`
        );
    }

    buscarAvion(nombreAvion) {
        const avionEncontrado = this.listaAviones.find(
            avion => avion.nombre === nombreAvion
        );

        if (avionEncontrado) {
            document.write(
                `<p>El avión ${nombreAvion} con destino a ${avionEncontrado.destino} tiene ${avionEncontrado.listaPasajeros.length} pasajeros a bordo.</p>`
            );
            return avionEncontrado;
        } else {
            document.write(
                `<p>No se encontró el avión ${nombreAvion} en el aeropuerto.</p>`
            );
        }
    }
}

class Avion {
    constructor(nombre, capacidad, destino) {
        this.nombre = nombre;
        this.capacidad = capacidad;
        this.destino = destino;
        this.listaPasajeros = [];
    }

    abordar(pasajero) {
        if (this.listaPasajeros.length < this.capacidad) {
            this.listaPasajeros.push(pasajero);
            document.write(
                `<p>El pasajero ${pasajero} abordó el avión ${this.nombre}.`
            );
        } else {
            document.write(`<p>El avión ${this.nombre} está lleno.</p>`);
        }
    }
}

const aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional");

const avion1 = new Avion("Avion 1", 100, "Buenos Aires");
const avion2 = new Avion("Avion 2", 80, "Rio de Janeiro");
const avion3 = new Avion("Avion 3", 120, "Nueva York");

aeropuertoInternacional.agregarAvion(avion1);
aeropuertoInternacional.agregarAvion(avion2);
aeropuertoInternacional.agregarAvion(avion3);

aeropuertoInternacional.buscarAvion("Avion 1");

avion1.abordar("Pasajero1");
avion1.abordar("Pasajero2");

aeropuertoInternacional.buscarAvion("Avion 1");
