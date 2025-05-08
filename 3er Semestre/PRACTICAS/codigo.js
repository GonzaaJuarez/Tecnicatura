// 1 = piedra
// 2 = papel
// 3 = tijera

function generarNumeroAleatorio(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function eleccion(jugada) {
    let resultado = "";
    if (jugada == 1) {
        resultado = "Piedra 🪨";
    } else if (jugada == 2) {
        resultado = "Papel 📄";
    } else if (jugada == 3) {
        resultado = "Tijera ✂️";
    } else {
        resultado = "Opción no válida";
    }
    return resultado;
}

let jugador = 0;
let pc = 0;
let triunfos = 0;
let perdidas = 0;

while (triunfos < 3 && perdidas < 3) {
    pc = generarNumeroAleatorio(3, 1);
    let inputJugador = prompt("Elije una opcion: \n1 = Piedra \n2 = Papel \n3 = Tijera");
    jugador = parseInt(inputJugador); // Convertir a número para la comparación

    // Verificar que se ingreso un valor que corresponda(1, 2 ó 3)
    
    if (isNaN(jugador) || jugador < 1 || jugador > 3) {
        alert("¡Opción no válida! Por favor, elige 1, 2 o 3.");
        continue; // Volver al inicio del bucle
    }

    // Mostrar elección
    //alert("Elegiste: " + eleccion(jugador));
    //alert("PC elige: " + eleccion(pc));
    alert("Elegiste: " + eleccion(jugador)+"\n"+"PC elige: " + eleccion(pc));

    // Combate con if
    /*
    if(jugador == pc){
        alert("¡¡EMPATE!! 🤝\n Ambos eligieron " + eleccion(jugador));
    } 
    else if(jugador == 1 && pc == 3 || jugador == 2 && pc == 1 ||jugador == 3 && pc == 2){
        alert("¡¡GANASTE!! 🎉\n¡¡" + eleccion(jugador) + " le gana a " + eleccion(pc) + "!!");
    }
    else{
        alert("PERDISTE 😞\n¡¡" + eleccion(pc) + " le gana a " + eleccion(jugador) + "!!\n¡Más suerte para la próxima!");
    }
    */

    // COMBATE con switch
    let resultadoCombate = jugador + "-" + pc;

    switch (resultadoCombate) {
        case "1-1":
        case "2-2":
        case "3-3":
            alert("¡¡EMPATE!! 🤝");
            break;
        case "1-3":
            alert("¡¡GANASTE!! 🎉\nPiedra 🪨 le gana a Tijera ✂️");
            triunfos++;
            break;
        case "2-1":
            alert("¡¡GANASTE!! 🎉\nPapel 📄 le gana a Piedra 🪨");
            triunfos++;
            break;
        case "3-2":
            alert("¡¡GANASTE!! 🎉\nTijera ✂️ le gana a Papel 📄");
            triunfos++;
            break;
        default:
            alert("PERDISTE 😞\n¡¡" + eleccion(pc) + " le gana a " + eleccion(jugador) + "!!\n¡Más suerte para la próxima!");
            perdidas++;
    }

    alert("Marcador: Tú " + triunfos + " - PC " + perdidas);
}

if (triunfos > perdidas) {
    alert("¡¡FELICIDADES!! ¡Ganaste el juego! 🏆");
} else {
    alert("¡La PC ganó el juego! 🤖");
}

alert("¡Fin de la partida!\n hasta la próxima...");
