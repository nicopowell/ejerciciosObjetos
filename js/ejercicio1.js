/*
Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:

objeto.encender();      auto encendido
objeto.apagar();        El auto se apagó

*/

auto = {
    _color: "Rojo",
    _marca: "Peugeot",
    _modelo: "208",
    _encendido: false,

    get color() {
        return this._color;
    },

    set color(nuevoColor) {
        if (nuevoColor !== "") {
            this._color = nuevoColor;
        }
    },
    get marca() {
        return this._marca;
    },

    set marca(nuevaMarca) {
        if (nuevaMarca !== "") {
            this._marca = nuevaMarca;
        }
    },
    get modelo() {
        return this._modelo;
    },

    set modelo(nuevoModelo) {
        if (nuevoModelo !== "") {
            this._modelo = nuevoModelo;
        }
    },
    encender: () => {
        if (auto._encendido == false) {
            auto._encendido = true;
            return "Auto encendido";
        } else {
            return "El auto ya estaba encendido";
        }
    },
    apagar: () => {
        if (auto._encendido == true) {
            auto._encendido = true;
            return "El auto se apagó";
        } else {
            return "El auto ya estaba apagado";
        }
    },
};

document.write(`<h1>Auto</h1>`);
document.write(`<p>Marca: ${auto.marca}</p>`);
document.write(`<p>Modelo: ${auto.modelo}</p>`);
document.write(`<p>Color: ${auto.color}</p>`);
document.write(`<p>${auto.encender()}</p>`);
document.write(`<p>${auto.apagar()}</p>`);
