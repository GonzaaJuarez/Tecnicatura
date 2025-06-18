// Variables para las vidas
let vidasJugador = 3;
let vidasEnemigo = 3;
let vidasJugadorAnterior = 3;
let vidasEnemigoAnterior = 3;

// Función para seleccionar el personaje
function seleccionarPersonaje(personaje) {
    const mensaje = document.getElementById('mensaje-personaje');
    const imagenPersonaje = document.getElementById('imagen-personaje');
    const personajeJugador = document.getElementById('personajeJugador');
    const personajeEnemigo = document.getElementById('personajeEnemigo');
    const imagenEnemigo = document.getElementById('imagen-enemigo');

    // Objeto con la información de cada personaje
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

    if (personajes[personaje]) {
        // Mostrar personaje seleccionado
        mensaje.innerHTML = personajes[personaje].mensaje;
        imagenPersonaje.src = personajes[personaje].imagen;
        imagenPersonaje.alt = personaje;
        imagenPersonaje.style.display = 'block';
        personajeJugador.textContent = personajes[personaje].nombre;

        // Selección aleatoria de enemigo (distinto al jugador)
        const personajesKeys = Object.keys(personajes);
        let enemigo;
        do {
            enemigo = personajesKeys[Math.floor(Math.random() * personajesKeys.length)];
        } while (enemigo === personaje);

        // Mostrar enemigo seleccionado
        personajeEnemigo.textContent = personajes[enemigo].nombre;
        imagenEnemigo.src = personajes[enemigo].imagen;
        imagenEnemigo.alt = enemigo;
        imagenEnemigo.style.display = 'block';

        actualizarVidas(); // Mostrar vidas iniciales
        habilitarBotonesAtaque(); // Habilitar botones de ataque

        // Mostrar secciones de combate
        document.getElementById('seleccionar-ataque').classList.remove('oculto');
        document.getElementById('mensajes').classList.remove('oculto');
        document.getElementById('reiniciar').classList.remove('oculto');
        document.getElementById('seleccionar-personaje').classList.add('oculto');

        // Mostrar pantalla de combate
        document.getElementById('pantalla-personaje').classList.add('oculto');
        document.getElementById('pantalla-combate').classList.remove('oculto');
        // Asigna el evento al botón Reiniciar y asegura que el evento ocurra una sola vez
        const botonReiniciar = document.getElementById('boton-reiniciar');
        if (botonReiniciar && !botonReiniciar.dataset.listenerAdded) {
            botonReiniciar.addEventListener('click', reiniciarJuego);
            botonReiniciar.dataset.listenerAdded = "true"; // Marca que ya tiene el listener
        }
    } else {
        // Si el personaje no existe
        mensaje.textContent = '¡Personaje no válido!';
        imagenPersonaje.style.display = 'none';
        imagenEnemigo.style.display = 'none';
        personajeJugador.textContent = '...';
        personajeEnemigo.textContent = '...';
        deshabilitarBotonesAtaque();
    }
}

// Función para actualizar los íconos de vida
function actualizarVidas() {
    for (let i = 1; i <= 3; i++) {
        const vidaJugadorIcon = document.getElementById(`vida-jugador-${i}`);
        const vidaEnemigoIcon = document.getElementById(`vida-enemigo-${i}`);

        if (vidaJugadorIcon) {
            vidaJugadorIcon.src = i <= vidasJugador ? './assets/heart.png' : './assets/emptyheart.png';
        }

        if (vidaEnemigoIcon) {
            vidaEnemigoIcon.src = i <= vidasEnemigo ? './assets/heart.png' : './assets/emptyheart.png';
        }
    }
}

// Habilitar botones de ataque
function habilitarBotonesAtaque() {
    const botonesAtaque = document.querySelectorAll('#seleccionar-ataque button');
    botonesAtaque.forEach(boton => {
        boton.disabled = false;
    });
}

// Deshabilitar botones de ataque
function deshabilitarBotonesAtaque() {
    const botonesAtaque = document.querySelectorAll('#seleccionar-ataque button');
    botonesAtaque.forEach(boton => {
        boton.disabled = true;
    });
}

// Obtener icono según tipo de ataque
function obtenerIconoAtaque(ataque) {
    switch (ataque) {
        case 'puño':
            return '<img src="./assets/punch.png" alt="Puño" class="element-icon">';
        case 'patada':
            return '<img src="./assets/kick.png" alt="Patada" class="element-icon">';
        case 'barrida':
            return '<img src="./assets/sweep.png" alt="Barrida" class="element-icon">';
        default:
            return '';
    }
}

// Función para ejecutar un ataque
function atacar(ataqueJugador) {
    const mensaje = document.getElementById('mensaje-personaje');
    const personajeJugador = document.getElementById('personajeJugador').textContent;
    const personajeEnemigo = document.getElementById('personajeEnemigo').textContent;
    const imagenPersonaje = document.getElementById('imagen-personaje');
    const imagenEnemigo = document.getElementById('imagen-enemigo');

    // Guardar vidas antes del ataque
    vidasJugadorAnterior = vidasJugador;
    vidasEnemigoAnterior = vidasEnemigo;

    const ataques = ['puño', 'patada', 'barrida'];
    const ataqueEnemigo = ataques[Math.floor(Math.random() * ataques.length)];

    // Comparar ataques y decidir resultado
    let mensajeFinal = `${personajeJugador} usó ${ataqueJugador} ${obtenerIconoAtaque(ataqueJugador)} y ${personajeEnemigo} usó ${ataqueEnemigo} ${obtenerIconoAtaque(ataqueEnemigo)}.<br>`;
    if (ataqueJugador === ataqueEnemigo) {
        mensajeFinal += '¡Empate!';
    } else if (
        (ataqueJugador === 'puño' && ataqueEnemigo === 'barrida') ||
        (ataqueJugador === 'barrida' && ataqueEnemigo === 'patada') ||
        (ataqueJugador === 'patada' && ataqueEnemigo === 'puño')
    ) {
        vidasEnemigo--;
        mensajeFinal += `${personajeEnemigo} pierde una vida.`;
    } else {
        vidasJugador--;
        mensajeFinal += `${personajeJugador} pierde una vida.`;
    }
    mensaje.innerHTML = mensajeFinal;

    // Mostrar feedback visual
    mensaje.classList.remove('win', 'lose', 'tie');
    if (vidasEnemigo < vidasEnemigoAnterior) {
        mensaje.classList.add('win');
    } else if (vidasJugador < vidasJugadorAnterior) {
        mensaje.classList.add('lose');
    } else {
        mensaje.classList.add('tie');
    }

    setTimeout(() => {
        mensaje.classList.remove('win', 'lose', 'tie');
        mensaje.style.transform = 'scale(1)';
    }, 1000);

    actualizarVidas();

    // Animaciones de ataque
    imagenPersonaje.classList.add('attacking');
    setTimeout(() => {
        imagenPersonaje.classList.remove('attacking');
    }, 200);

    imagenEnemigo.classList.add('attacking');
    setTimeout(() => {
        imagenEnemigo.classList.remove('attacking');
    }, 200);

    // Frases finales
    const frasesVictoria = [
        "¡El equilibrio ha sido restaurado! 🌟",
        "Has demostrado ser un verdadero Maestro Elemental.",
        "¡Nadie puede detenerte ahora! 💪",
        "Tu destino está marcado por la victoria. 🏆",
        "¡Una victoria digna de los antiguos avatares! 🔥💧🌪️🪨"
    ];
    const frasesDerrota = [
        "Tu entrenamiento no fue suficiente 😔",
        "La próxima vez, el destino estará de tu lado.",
        "Incluso los grandes guerreros caen. 🥀",
        "El enemigo ha sido más fuerte esta vez.",
        "Has perdido… pero la batalla continúa."
    ];

    // Mostrar mensaje de victoria o derrota
    if (vidasJugador <= 0) {
        const frase = frasesDerrota[Math.floor(Math.random() * frasesDerrota.length)];
        mensaje.innerHTML = `💀 <strong>${personajeEnemigo}</strong> ha ganado el combate<br><em>${frase}</em>`;
        mensaje.classList.remove('neutro-inicial');
        mensaje.classList.add('derrota-final');
        document.querySelector('.versus-text').style.display = 'none';
        document.querySelector('.personaje-jugador img').style.display = 'none';
        document.querySelector('.personaje-enemigo img').style.display = 'block';
        deshabilitarBotonesAtaque();
    } else if (vidasEnemigo <= 0) {
        const frase = frasesVictoria[Math.floor(Math.random() * frasesVictoria.length)];
        mensaje.innerHTML = `🎉 <strong>${personajeJugador}</strong> ha ganado el combate 🎉<br><em>${frase}</em>`;
        mensaje.classList.remove('neutro-inicial');
        mensaje.classList.add('victoria-final');
        document.querySelector('.versus-text').style.display = 'none';
        document.querySelector('.personaje-enemigo img').style.display = 'none';
        document.querySelector('.personaje-jugador img').style.display = 'block';
        deshabilitarBotonesAtaque();
    }
}

// Función para reiniciar el juego
function reiniciarJuego() {
    // Reiniciar vidas y variables
    vidasJugador = 3;
    vidasEnemigo = 3;
    vidasJugadorAnterior = 3;
    vidasEnemigoAnterior = 3;

    // Resetear mensaje
    const mensaje = document.getElementById('mensaje-personaje');
    mensaje.textContent = 'Por favor, selecciona un personaje.';
    mensaje.classList.remove('victoria-final', 'derrota-final', 'win', 'lose', 'tie');
    mensaje.classList.add('neutro-inicial');
    mensaje.style.transform = 'scale(1)';

    // Ocultar imágenes
    document.getElementById('imagen-personaje').style.display = 'none';
    document.getElementById('imagen-enemigo').style.display = 'none';
    // Resetear nombres de personajes
    document.getElementById('personajeJugador').textContent = '...';
    document.getElementById('personajeEnemigo').textContent = '...';
    // Mostrar la pantalla de selección de personaje y ocultar la de combate
    document.getElementById('pantalla-combate').classList.add('oculto');
    document.getElementById('pantalla-personaje').classList.remove('oculto');
    document.getElementById('seleccionar-personaje').classList.remove('oculto');
    // Mostrar el texto "vs" nuevamente
    document.querySelector('.versus-text').style.display = 'block';
    // Deshabilitar botones de ataque y actualizar vidas visuales
    deshabilitarBotonesAtaque();
    actualizarVidas();
}

// Función para volver al inicio
function volverAlInicio() {
    // Reiniciar variables y vidas
    vidasJugador = 3;
    vidasEnemigo = 3;
    vidasJugadorAnterior = 3;
    vidasEnemigoAnterior = 3;

    // Resetear mensaje y clases
    const mensaje = document.getElementById('mensaje-personaje');
    mensaje.textContent = 'Por favor, selecciona un personaje.';
    mensaje.className = '';
    mensaje.classList.add('neutro-inicial');
    mensaje.style.transform = 'scale(1)';

    // Ocultar todo lo demás y mostrar solo la pantalla de inicio
    document.getElementById('pantalla-combate').classList.add('oculto');
    document.getElementById('pantalla-personaje').classList.add('oculto');
    document.getElementById('pantalla-inicio').classList.remove('oculto');

    // Ocultar imágenes y nombres
    document.getElementById('imagen-personaje').style.display = 'none';
    document.getElementById('imagen-enemigo').style.display = 'none';
    document.getElementById('personajeJugador').textContent = '...';
    document.getElementById('personajeEnemigo').textContent = '...';
    document.querySelector('.versus-text').style.display = 'block';

    // Resetear vidas e interfaz
    deshabilitarBotonesAtaque();
    actualizarVidas();
}

// Función de inicialización del juego
function iniciarJuego() {
    // Botón para comenzar el juego
    const botonJugar = document.getElementById('boton-jugar');
    botonJugar.addEventListener('click', () => {
        document.getElementById('pantalla-inicio').classList.add('oculto');
        document.getElementById('pantalla-combate').classList.add('oculto');
        document.getElementById('pantalla-personaje').classList.remove('oculto');
        document.getElementById('seleccionar-personaje').classList.remove('oculto');
        document.getElementById('mensaje-personaje').textContent = 'Por favor, selecciona un personaje.';
        document.getElementById('mensaje-personaje').className = 'neutro-inicial';
    });

    // Eventos para seleccionar personaje
    const botonesPersonaje = document.querySelectorAll('.personaje-container');
    botonesPersonaje.forEach(boton => {
        boton.addEventListener('click', () => {
            const personaje = boton.id.toLowerCase();
            seleccionarPersonaje(personaje);

            // Cambiar de pantalla al combate
            document.getElementById('pantalla-personaje').classList.add('oculto');
            document.getElementById('pantalla-combate').classList.remove('oculto');
        });
    });

    // Eventos para seleccionar ataque
    const botonesAtaque = document.querySelectorAll('#seleccionar-ataque button');
    botonesAtaque.forEach(boton => {
        boton.addEventListener('click', () => {
            const ataque = boton.textContent.toLowerCase().split(' ')[0];
            atacar(ataque);
        });
    });

    // Ocultar elementos al iniciar
    document.getElementById('mensaje-personaje').classList.add('neutro-inicial');
    document.getElementById('seleccionar-ataque').classList.add('oculto');
    document.getElementById('mensajes').classList.add('oculto');
    document.getElementById('reiniciar').classList.add('oculto');

    actualizarVidas();
    deshabilitarBotonesAtaque();

    // Evento para el botón "Volver al inicio"
    const botonInicio = document.getElementById('boton-inicio');
    if (botonInicio) {
        botonInicio.addEventListener('click', volverAlInicio);
    }

    // Sección de reglas de juego (modal)
    const btn = document.getElementById("btnInstrucciones");
    const modal = document.getElementById("modalInstrucciones");
    const span = document.querySelector(".close");

    if (btn && modal && span) {
        btn.addEventListener("click", () => {
            modal.classList.add("mostrar-modal");
        });

        span.addEventListener("click", () => {
            modal.classList.remove("mostrar-modal");
        });

        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.classList.remove("mostrar-modal");
            }
        });
    }
}

// Ejecutar juego al cargar la página
window.addEventListener('load', iniciarJuego);