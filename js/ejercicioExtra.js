let jugarDeNuevo = true;

while (jugarDeNuevo) {
    let movimientoUsuario = prompt(
        "Elige un movimiento:\n1 para piedra\n2 para papel\n3 para tijera"
    );

    let movimientoComputadora = Math.floor(Math.random() * 3) + 1;

    switch (movimientoUsuario) {
        case "1":
            movimientoUsuario = "piedra";
            break;
        case "2":
            movimientoUsuario = "papel";
            break;
        case "3":
            movimientoUsuario = "tijera";
            break;
    }
    switch (movimientoComputadora) {
        case 1:
            movimientoComputadora = "piedra";
            break;
        case 2:
            movimientoComputadora = "papel";
            break;
        case 3:
            movimientoComputadora = "tijera";
            break;
    }

    let resultado = "";
    if (movimientoUsuario == movimientoComputadora) {
        resultado = "Empate!";
    } else if (
        (movimientoUsuario == "piedra" && movimientoComputadora == "tijera") ||
        (movimientoUsuario == "papel" && movimientoComputadora == "piedra") ||
        (movimientoUsuario == "tijera" && movimientoComputadora == "papel")
    ) {
        resultado = "Ganaste!";
    } else {
        resultado = "Perdiste!";
    }

    console.log(`Tu movimiento: ${movimientoUsuario}`);
    console.log(`Movimiento de la computadora: ${movimientoComputadora}`);
    console.log(`Resultado: ${resultado}`);

    jugarDeNuevo = confirm("¿Quieres jugar de nuevo?");
}
