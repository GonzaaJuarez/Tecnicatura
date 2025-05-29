// Función para seleccionar el personaje
function seleccionarPersonaje(personaje) {
    const mensaje = document.getElementById('mensaje-personaje');
    const imagenPersonaje = document.getElementById('imagen-personaje');
    const personajeJugador = document.getElementById('personajeJugador');
    const personajeEnemigo = document.getElementById('personajeEnemigo');
    const imagenEnemigo = document.getElementById('imagen-enemigo');

// Mapa de personajes a mensajes e imágenes
    const personajes = {
        zuko: {
            nombre: 'Zuko',
            mensaje: '¡Has seleccionado a Zuko como tu personaje! <img src="./assets/fuego.png" alt="Fuego" class="element-icon">',
            imagen: './assets/zuko.png'
        },
        katara: {
            nombre: 'Katara',
            mensaje: '¡Has seleccionado a Katara como tu personaje! <img src="./assets/agua.png" alt="Agua" class="element-icon">',
            imagen: './assets/katara.png'
        },
        aang: {
            nombre: 'Aang',
            mensaje: '¡Has seleccionado a Aang como tu personaje! <img src="./assets/aire.png" alt="Aire" class="element-icon">',
            imagen: './assets/aang.png'
        },
        toph: {
            nombre: 'Toph',
            mensaje: '¡Has seleccionado a Toph como tu personaje! <img src="./assets/tierra.png" alt="Tierra" class="element-icon">',
            imagen: './assets/toph.png'
        }
    };

// Verifica si el personaje existe
    if (personajes[personaje]) {
        // Actualizar el personaje del jugador
        mensaje.innerHTML = personajes[personaje].mensaje;
        imagenPersonaje.src = personajes[personaje].imagen;
        imagenPersonaje.alt = personaje;
        imagenPersonaje.style.display = 'block';
        personajeJugador.textContent = personajes[personaje].nombre; // Actualizar el nombre del jugador

        // Seleccionar un enemigo aleatorio
        const personajesKeys = Object.keys(personajes);
        let enemigo;
        do {
            enemigo = personajesKeys[Math.floor(Math.random() * personajesKeys.length)];
        } while (enemigo === personaje); // Evitar que el enemigo sea el mismo que el jugador

        // Actualizar el personaje enemigo
        personajeEnemigo.textContent = personajes[enemigo].nombre;
        imagenEnemigo.src = personajes[enemigo].imagen;
        imagenEnemigo.alt = enemigo;
        imagenEnemigo.style.display = 'block';

        // Mostrar alerta con el nombre del personaje seleccionado
        alert(`Has seleccionado a ${personajes[personaje].nombre}. El enemigo es ${personajes[enemigo].nombre}.`);
    } else {
        mensaje.textContent = '¡Personaje no válido!';
        imagenPersonaje.style.display = 'none';
        imagenEnemigo.style.display = 'none';
        personajeJugador.textContent = '...';
        personajeEnemigo.textContent = '...';
    }
}

// Función para inicializar el juego (si no está definida, la añadimos)
function iniciarJuego() {
    // Aquí puedes añadir más lógica de inicialización si es necesario
}

// Añadir el evento de carga
window.addEventListener('load', iniciarJuego)