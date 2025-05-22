function seleccionarPersonajeJugador() {
    let zuko = document.getElementById('zuko').checked;
    let katara = document.getElementById('katara').checked;
    let aang = document.getElementById('aang').checked;
    let toph = document.getElementById('toph').checked;

    if (zuko) {
        alert('¡SELECCIONASTE A ZUKO COMO TU PERSONAJE!');
    } else if (katara) {
        alert('¡SELECCIONASTE A KATARA COMO TU PERSONAJE!');
    } else if (aang) {
        alert('¡SELECCIONASTE A AANG COMO TU PERSONAJE!');
    } else if (toph) {
        alert('¡SELECCIONASTE A TOPH COMO TU PERSONAJE!');
    } else {
        alert('¡NO SELECCIONASTE NINGÚN PERSONAJE!');
    }
}

let botonPersonajeJugador = document.getElementById('boton-personaje');
botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);