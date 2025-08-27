# Proyecto: La Leyenda de Aang

Este proyecto es una pequeña aplicación interactiva en la que puedes seleccionar un personaje del universo de *Avatar: La Leyenda de Aang* para enfrentar a un enemigo aleatorio en un juego de ataques elementales.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

    public/ 
    │
    ├── assets/
    │ └── Imágenes e íconos (personajes, elementos, fondo, favicon, etc.)
    ├── css/
    │ └── style.css
    ├── js/
    │ └── avatar.js
    ├── avatar.html
    └── README.md

## Desarrollo paso a paso

### 1. Creación de html (`avatar.html`)
- Comenzamos creando el archivo HTML.
- Agregamos un título (`<h1>`) con íconos representando los elementos.
- Añadimos una sección inicial donde el jugador puede seleccionar su personaje.
- dejamos preparado un espacio para los ataques

### 2. Implementación de la lógica básica en selección del personaje (`avatar.js`)
- Empezamos a trabajar con JavaScript para detectar la selección del personaje.
- Creamos una función que, al hacer clic sobre un personaje, mostraba su nombre.
- Mostraba un mensaje y hacía visible la imagen del personaje seleccionado.

### 3. Mejora visual: imágenes de personajes y estilos iniciales
- Decidimos agregar imágenes para cada personaje para hacer la interfaz más visual.
- Actualizamos el HTML y JavaScript para mostrar las imágenes correspondientes.
- Añadimos un poco de CSS para centrar y alinear mejor los elementos visuales.

### 4. Mejoras estéticas (`style.css`)
- Implementamos un fondo temático generado con inteligencia artificial y un favicon para dar una identidad visual coherente.
- Diseñamos tarjetas visuales para los personajes con hover y mejor formato.
- Añadimos un sistema de vidas visualizado con texto y span estilizados.

### 5. Pie de página
- Añadimos un footer con el logo del equipo y una frase distintiva.
- Incluimos estilos adaptativos (media queries) para hacer la interfaz responsiva en dispositivos móviles.

### 6. Función para elegir personaje enemigo aleatorio
- Implementamos una función que selecciona un enemigo aleatorio distinto al personaje elegido por el jugador.
- Esta lógica asegura que no se repita el personaje y actualiza el nombre e imagen del enemigo.
- También muestra un mensaje emergente (`alert`) para confirmar la elección.

### 7. Verificación de personaje válido
- Se agregó una validación dentro de la función principal para asegurarse de que el personaje seleccionado exista en el sistema.
- Si se intenta seleccionar un personaje no definido, se muestra un mensaje de error y se ocultan las imágenes.

### 8. Sistema de combate y dinámica de batalla (`avatar.js`, `style.css`)
- Se implementó la lógica de combate entre el personaje del jugador y un enemigo aleatorio.
- Al hacer clic en un botón de ataque (**Puño**, **Patada** o **Barrida**), el juego elige un ataque para el enemigo y determina el resultado (victoria, derrota o empate) según reglas tipo *piedra, papel o tijera*.
- Se muestra un mensaje dinámico indicando qué ataque eligió cada personaje, acompañado por su ícono correspondiente.
- Si uno de los personajes pierde, se le resta una vida. El sistema visual de vidas ahora cambia los corazones (`heart.png`) por corazones vacíos (`emptyheart.png`) en tiempo real.
- Cuando uno de los personajes llega a 0 vidas:
  - Se oculta el personaje perdedor.
  - Se oculta el texto “vs”.
  - Se muestra solo la imagen del personaje ganador.
  - Se despliega un mensaje final animado indicando el resultado del combate.
  - Se muestra una **frase aleatoria** de felicitación si ganás, o de consuelo si perdés.
- Se agregaron clases CSS (`.victoria-final`, `.derrota-final`) para estilizar el mensaje de resultado con animaciones (`pulse` o `shake`), colores y fondo destacados.

### 9. Funcionalidades adicionales y corrección de errores

- Se corrigieron pequeños errores en la lógica de actualización de vidas y mensajes.
- Se añadió un botón "Instrucciones" en la interfaz. Al hacer clic, se abre un modal con las reglas del juego (Patada vence a Puño, Puño vence a Barrida, Barrida vence a Patada).
- El modal es responsive y se cierra al hacer clic fuera de él o en el botón de cerrar.

### 10. Separación en pantallas
- Se rediseñó la estructura visual del proyecto en **tres pantallas principales**:
  - `pantalla-inicio`: muestra el título, el botón “Instrucciones” y el botón “Iniciar”.
  - `pantalla-personaje`: permite seleccionar un personaje.
  - `pantalla-combate`: muestra la pelea, botones de ataque, mensaje de resultado y botón de reinicio.
- Esto permite una navegación más clara y progresiva por el juego, como si fueran "escenas".
- Cada pantalla se oculta o muestra dinámicamente utilizando la clase `.oculto` de CSS.

### 11. Botón "Iniciar" y flujo de navegación
- Se implementó el botón **Iniciar** en la pantalla inicial, que al hacer clic:
  - Oculta la sección de inicio.
  - Muestra la pantalla de selección de personajes.

### 12. Botón "Volver al inicio"
- Se agregó un nuevo botón "Volver al inicio" junto al botón de reinicio.
- Este botón permite volver directamente a la pantalla principal.
- Se reinician todas las variables, vidas, clases y se ocultan las pantallas de selección y combate.

### 13. Aplicación del principio DRY (Don’t Repeat Yourself) y un código más limpio.

- Reemplazamos funciones repetitivas (selección de personaje, botones de ataque) por funciones genéricas reutilizables.
- Implementamos mostrarPersonaje() para jugador y enemigo.
- Simplificamos los manejadores de ataques: ahora usamos data-tipo en los botones y un solo addEventListener genérico.

## Resultado de momento

- Puedes seleccionar entre **Zuko**, **Katara**, **Aang** o **Toph**.
- El sistema escoge un enemigo automáticamente (que no sea el mismo que el jugador).
- Aparecen las imágenes correspondientes y se muestran las vidas.
- Hay botones para elegir ataques elementales.
- El juego decide el resultado de los combates, actualiza las vidas, muestra mensajes y frases finales.
- Hay un sistema de instrucciones con reglas, y un flujo de pantallas ordenado y funcional.
- La página tiene un diseño visual cuidado y es funcional desde el navegador sin necesidad de servidor.
- La página presenta responsividad para varios tipos de pantallas.
- El código se encuentra limpio y aplíca el principio DRY.

---

Desarrollado por [The Debugging Dojo ©](https://github.com/orgs/PowerSystem2024/teams/thedebuggingdojo)  