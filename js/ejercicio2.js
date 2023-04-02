/*
Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
    Una propiedad titular con el valor "Alex".
    Una propiedad saldo, teniendo como valor inicial 0.
    Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
    Un método extraer() que permita retirar la cantidad pasada como parámetro.
    Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/

cuenta = {
    _titular: "Alex",
    _saldo: 0,
    get titular() {
        return this._titular;
    },

    set titular(nuevoTitular) {
        if (nuevoTitular !== "") {
            this._titular = nuevoTitular;
        }
    },
    get saldo() {
        return this._saldo;
    },

    set saldo(nuevoSaldo) {
        if (nuevoSaldo !== "") {
            this._saldo = nuevoSaldo;
        }
    },
    ingresar: cantidad => {
        cuenta.saldo += cantidad;
        document.write(`<hr>Se ingresaron $${cantidad}`);
    },
    extraer: cantidad => {
        cuenta.saldo -= cantidad;
        document.write(`<hr>Se extrajeron $${cantidad}`);
    },
    informar: () => {
        document.write(`<hr><p>Estado de la cuenta:</p>`);
        document.write(`<p>Titular: ${cuenta.titular}</p>`);
        document.write(`<p>Saldo: $${cuenta.saldo}</p>`);
    },
};

cuenta.informar();
cuenta.ingresar(100);
cuenta.informar();
cuenta.extraer(35);
cuenta.informar();
