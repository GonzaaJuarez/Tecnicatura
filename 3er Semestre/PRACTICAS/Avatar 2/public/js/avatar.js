// Función para seleccionar el personaje
function seleccionarPersonaje(personaje) {
    const mensaje = document.getElementById('mensaje-personaje');
    const imagenPersonaje = document.getElementById('imagen-personaje');

    // Mapa de personajes a mensajes e imágenes
    const personajes = {
        zuko: {
            mensaje: '¡Has seleccionado a Zuko como tu personaje! <img src="./assets/fuego.png" alt="Fuego" class="element-icon">',
            imagen: './assets/zuko.png'
        },
        katara: {
            mensaje: '¡Has seleccionado a Katara como tu personaje! <img src="./assets/agua.png" alt="Agua" class="element-icon">',
            imagen: './assets/katara.png'
        },
        aang: {
            mensaje: '¡Has seleccionado a Aang como tu personaje! <img src="./assets/aire.png" alt="Aire" class="element-icon">',
            imagen: './assets/aang.png'
        },
        toph: {
            mensaje: '¡Has seleccionado a Toph como tu personaje! <img src="./assets/tierra.png" alt="Tierra" class="element-icon">',
            imagen: './assets/toph.png'
        }
    };

    // Verifica si el personaje existe
    if (personajes[personaje]) {
        mensaje.innerHTML = personajes[personaje].mensaje; // Use innerHTML to render the <img> tag
        imagenPersonaje.src = personajes[personaje].imagen;
        imagenPersonaje.alt = personaje;
        imagenPersonaje.style.display = 'block'; // Mostrar la imagen
        
        // Update alert to show text without HTML tags for better readability
        alert(personajes[personaje].mensaje.replace(/<[^>]+>/g, '')); // Strip HTML tags for alert
    } else {
        mensaje.textContent = '¡Personaje no válido!';
        imagenPersonaje.style.display = 'none'; // Ocultar la imagen si no es válido
    }
}