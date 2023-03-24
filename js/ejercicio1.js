/*
Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:

objeto.encender();      auto encendido
objeto.apagar();        El auto se apagó

*/

auto = {
    color: "Rojo",
    marca: "Peugeot",
    modelo: "208",
    encendido: false,
    encender: () => {
        if (auto.encendido == false) {
            auto.encendido = true;
            return "Auto encendido";
        } else {
            return "El auto ya estaba encendido";
        }
    },
    apagar: () => {
        if (auto.encendido == true) {
            auto.encendido = true;
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
