document.addEventListener('DOMContentLoaded', () => {
    // Obtener referencias a los elementos del DOM.
    const boardSizeInput = document.getElementById('boardSize'); // Input para el tamaño del tablero
    const createBoardBtn = document.getElementById('createBoard'); // Botón para crear el tablero
    const startTourBtn = document.getElementById('startTour');     // Botón para iniciar el recorrido del caballo
    const resetBoardBtn = document.getElementById('resetBoard');   // Botón para resetear el tablero
    const prevStepBtn = document.getElementById('prevStep');       // Botón para ir al paso anterior en la navegación
    const nextStepBtn = document.getElementById('nextStep');       // Botón para ir al paso siguiente en la navegación
    const animationSpeedInput = document.getElementById('animationSpeed'); // Input para controlar la velocidad de la animación
    const speedValueSpan = document.getElementById('speedValue');  // Span para mostrar el valor actual de la velocidad
    const chessboardContainer = document.getElementById('chessboard-container'); // Contenedor principal del tablero de ajedrez
    const moveLog = document.getElementById('moveLog');         // Área para registrar los movimientos del caballo
    const startMessage = document.getElementById('startMessage');   // Mensaje inicial para el usuario
    const notification = document.getElementById('notification');   // Área para mostrar notificaciones al usuario

    // Variables globales para el estado del juego.
    let N; // Tamaño del tablero (N x N)
    let board; // Representación del tablero, almacena el orden de visita de las celdas
    let path;  // Similar a 'board', también almacena el orden de visita para la solución
    let startRow = null; // Fila de inicio seleccionada por el usuario
    let startCol = null; // Columna de inicio seleccionada por el usuario
    let arrowsSvg; // Elemento SVG para dibujar las flechas de los movimientos

    // Posibles movimientos del caballo (dr = cambio de fila, dc = cambio de columna)
    const KNIGHT_MOVES = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];

    let currentHorseElement = null; // Variable para almacenar el elemento del caballo actual
    let moveHistory = []; // Almacenar el historial de movimientos
    let currentStep = -1; // Paso actual en la navegación (inicia en -1 para indicar "sin empezar")
    
    // Función para mostrar notificaciones
    function showNotification(message, isSuccess = false, duration = 3000) {
        notification.textContent = message; // Establece el texto de la notificación
        notification.classList.remove('success'); // Remueve la clase 'success' por si acaso
        if (isSuccess) {
            notification.classList.add('success'); // Añade la clase 'success' si es un mensaje de éxito
        }
        notification.style.display = 'block'; // Hace visible la notificación
        notification.classList.add('show'); // Añade la clase 'show' para iniciar la transición CSS

        if (duration > 0) { 
            // Si la duración es mayor a 0, la notificación se ocultará automáticamente después de ese tiempo.
            setTimeout(() => {
                notification.classList.remove('show'); // Remueve 'show' para iniciar la transición de ocultar
                setTimeout(() => {
                    notification.style.display = 'none'; // Oculta la notificación completamente
                    notification.textContent = ''; // Limpia el texto
                }, 300); // Espera 300ms (coincide con la duración de la transición CSS)
            }, duration);
        }
    }

    // Cargar el tamaño del tablero desde el almacenamiento local del navegador, si existe.
    // Si no hay un valor guardado, por defecto se usa 8.
    boardSizeInput.value = localStorage.getItem('boardSize') || 8;

    /*  Listener para la validación en tiempo real del input del tamaño del tablero y su persistencia.
        Se activa cada vez que el usuario escribe en el campo.*/
    boardSizeInput.addEventListener('input', () => {
        const value = parseInt(boardSizeInput.value); // Convierte el valor a un entero
        // Valida si el valor no es un número o está fuera del rango permitido (3 a 10).
        if (isNaN(value) || value < 3 || value > 10) {
            boardSizeInput.classList.add('invalid-input'); // Añade clase para indicar entrada inválida
            showNotification('El tamaño del tablero debe ser un número entre 3 y 10.', false, 0); // Muestra notificación permanente
        } else {
            boardSizeInput.classList.remove('invalid-input'); // Remueve la clase si la entrada es válida
            // Si la notificación actual es la de tamaño inválido, la ocultamos.
            if (notification.textContent.includes('tamaño del tablero')) {
                notification.style.display = 'none';
                notification.textContent = '';
                notification.classList.remove('show');
            }
        }
        // Guarda el valor actual en localStorage para persistencia.
        localStorage.setItem('boardSize', boardSizeInput.value);
    });

    // Asegurar que el input tenga la validación inicial al cargar la página.
    boardSizeInput.dispatchEvent(new Event('input')); 
    // Si después de la validación inicial el input no es inválido, se oculta cualquier notificación previa.
    if (!boardSizeInput.classList.contains('invalid-input')) {
        notification.style.display = 'none';
        notification.textContent = '';
        notification.classList.remove('show');
    }


    /*  Listener para actualizar el valor de velocidad de animación.
        Se activa cada vez que el usuario ajusta el slider de velocidad. */
    animationSpeedInput.addEventListener('input', () => {
        speedValueSpan.textContent = `${animationSpeedInput.value} ms`; // Muestra el valor en el span
        // Actualiza una variable CSS personalizada, que controla la duración de la transición del caballo.
        document.documentElement.style.setProperty('--animation-speed', `${animationSpeedInput.value}ms`);
    });
    // Inicializar la variable CSS al cargar la página con el valor por defecto del slider.
    document.documentElement.style.setProperty('--animation-speed', `${animationSpeedInput.value}ms`);


    // Función principal para crear el tablero de ajedrez dinámicamente.
    function createChessboard() {
        N = parseInt(boardSizeInput.value); // Obtiene el tamaño N del input
        // Valida si N es un número válido y está en el rango correcto.
        if (isNaN(N) || N < 3 || N > 10) {
            showNotification('Por favor, ingresa un número válido para el tamaño del tablero (3 a 10).');
            return;
        }

        // Limpia TODO el contenido anterior del contenedor del tablero.
        chessboardContainer.innerHTML = ''; 

        // 1. Crear el nuevo elemento SVG dinámicamente.
        // Este SVG se usará para dibujar las flechas de los movimientos del caballo.
        const newArrowsSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        newArrowsSvg.setAttribute('id', 'arrowsSvg');
        newArrowsSvg.style.position = 'absolute'; // Posicionamiento absoluto para superponerse
        newArrowsSvg.style.top = '0';
        newArrowsSvg.style.left = '0';
        newArrowsSvg.style.width = '100%';
        newArrowsSvg.style.height = '100%';
        newArrowsSvg.style.pointerEvents = 'none'; // Ignora eventos del ratón para no interferir con las celdas
        newArrowsSvg.style.zIndex = '10'; // Asegura que esté encima del tablero

        // 2. Añadir el nuevo SVG al contenedor del tablero.
        chessboardContainer.appendChild(newArrowsSvg);

        // 3. ¡IMPORTANTE! Reasignar la variable global `arrowsSvg` para que apunte al nuevo SVG.
        // Esto asegura que las funciones que dibujan flechas trabajen con el SVG correcto.
        arrowsSvg = newArrowsSvg;

        arrowsSvg.innerHTML = ''; // Limpiar cualquier contenido si el SVG ya existía (ahora este se refiere al nuevo SVG)
        moveLog.innerHTML = ''; // Limpiar el registro de movimientos
        // Inicializar la matriz 'board' y 'path' con -1, indicando que ninguna celda ha sido visitada.
        board = Array(N).fill(0).map(() => Array(N).fill(-1));
        path = Array(N).fill(0).map(() => Array(N).fill(-1));
        startRow = null; // Reiniciar fila de inicio
        startCol = null; // Reiniciar columna de inicio
        startMessage.style.display = 'block'; // Mostrar el mensaje de inicio
        currentHorseElement = null; // Reiniciar el elemento del caballo
        moveHistory = []; // Limpiar historial de movimientos
        currentStep = -1; // Reiniciar el paso actual
        updateNavigationButtons(); // Actualizar el estado de los botones de navegación

        // Crear el elemento DIV que contendrá todas las celdas del tablero.
        const chessboardDiv = document.createElement('div');
        chessboardDiv.classList.add('chessboard');
        // Establecer una variable CSS personalizada para el tamaño de la cuadrícula CSS.
        chessboardDiv.style.setProperty('--board-size', N);

        // Bucle anidado para crear las celdas individuales del tablero.
        for (let r = 0; r < N; r++) {
            for (let c = 0; c < N; c++) {
                const cell = document.createElement('div'); // Crea un DIV para cada celda
                cell.classList.add('cell'); // Añade la clase 'cell'
                cell.dataset.row = r; // Almacena la fila como un atributo de dato
                cell.dataset.col = c; // Almacena la columna como un atributo de dato
                // Añade una etiqueta aria-label para accesibilidad
                cell.setAttribute('aria-label', `Celda en fila ${r}, columna ${c}`);
                // Alternar clases 'light' y 'dark' para el patrón de tablero de ajedrez
                if ((r + c) % 2 === 0) {
                    cell.classList.add('light');
                } else {
                    cell.classList.add('dark');
                }
                // Añadir un listener de clic a cada celda para seleccionar el punto de inicio.
                cell.addEventListener('click', () => {
                    // Limpiar clases 'start' y 'horse-icon' de las celdas previamente seleccionadas.
                    document.querySelectorAll('.cell').forEach(c => {
                        c.classList.remove('start');
                        const existingHorse = c.querySelector('.horse-icon');
                        if (existingHorse) {
                            existingHorse.remove(); // Elimina el icono del caballo existente
                        }
                        const moveNumberSpan = c.querySelector('.move-number');
                        if (moveNumberSpan) {
                            moveNumberSpan.remove(); // Quitar el número si existe
                        }
                    });

                    cell.classList.add('start'); // Añadir la clase 'start' a la celda seleccionada
                    startRow = parseInt(cell.dataset.row); // Guarda la fila de inicio
                    startCol = parseInt(cell.dataset.col); // Guarda la columna de inicio
                    cell.setAttribute('aria-label', `Celda seleccionada como inicio en fila ${r}, columna ${c}`);
                    startMessage.style.display = 'none'; // Ocultar el mensaje de inicio

                    // Crear o mover el icono del caballo a la celda de inicio.
                    if (currentHorseElement) {
                        currentHorseElement.remove(); // Eliminar el caballo anterior del DOM
                    }
                    currentHorseElement = document.createElement('div'); // Crea un nuevo elemento para el caballo
                    currentHorseElement.classList.add('horse-icon'); // Añade la clase CSS para el estilo
                    currentHorseElement.textContent = '♘'; // El carácter Unicode del caballo
                    cell.appendChild(currentHorseElement); // Añade el caballo a la celda clicada

                    // Resetear navegación al seleccionar una nueva celda de inicio.
                    moveHistory = [];
                    currentStep = -1;
                    arrowsSvg.innerHTML = ''; // Limpiar flechas
                    updateNavigationButtons(); // Actualizar botones
                });
                chessboardDiv.appendChild(cell); // Añade la celda al contenedor del tablero
            }
        }
        chessboardContainer.appendChild(chessboardDiv); // Añade el tablero completo al contenedor principal
        // Ajustar el tamaño del SVG de las flechas para que coincida con el tablero
        requestAnimationFrame(() => {
            const boardWidth = chessboardDiv.offsetWidth;
            const boardHeight = chessboardDiv.offsetHeight;
            arrowsSvg.setAttribute('width', boardWidth);
            arrowsSvg.setAttribute('height', boardHeight);
        });
    }
    
    // Listener para el botón "Crear Tablero".
    createBoardBtn.addEventListener('click', createChessboard);
    // Crear el tablero inicial al cargar la página.
    createChessboard();

    /*  Listener para el botón "Resetear Tablero".
        Limpia completamente el estado del tablero y las variables. */
    resetBoardBtn.addEventListener('click', () => {
        chessboardContainer.innerHTML = ''; // Limpia el HTML del tablero
        arrowsSvg.innerHTML = ''; // Limpia las flechas SVG
        moveLog.innerHTML = ''; // Limpia el registro de movimientos
        // Reinicia las matrices del tablero
        board = Array(N).fill(0).map(() => Array(N).fill(-1));
        path = Array(N).fill(0).map(() => Array(N).fill(-1));
        startRow = null; // Reinicia la fila de inicio
        startCol = null; // Reinicia la columna de inicio
        startMessage.style.display = 'block'; // Muestra el mensaje de inicio
        startTourBtn.disabled = false; // Habilita el botón de iniciar recorrido
        notification.style.display = 'none'; // Oculta cualquier notificación
        notification.textContent = '';
        currentHorseElement = null; // Restablecer el elemento del caballo
        moveHistory = []; // Limpiar historial
        currentStep = -1; // Restablecer paso actual
        updateNavigationButtons(); // Actualizar botones
        loadingSpinner.style.display = 'none'; // Asegurarse de ocultar el spinner de carga
    });

    /*  Listener para el botón "Iniciar Recorrido".
        Lanza el algoritmo de Warnsdorff para encontrar un recorrido del caballo. */
    startTourBtn.addEventListener('click', async () => {
        // Si no se ha seleccionado un punto de inicio, muestra una notificación.
        if (startRow === null || startCol === null) {
            showNotification('Por favor, haz clic en una casilla para elegir el punto de inicio.'); 
            return;
        }

        // Limpiar el tablero antes de iniciar un nuevo recorrido.
        document.querySelectorAll('.cell').forEach(cell => {
            cell.textContent = ''; // Limpiar cualquier número de movimiento previo
            cell.classList.remove('visited', 'visited-even', 'visited-odd', 'current'); // Quitar clases de recorrido
            const existingHorse = cell.querySelector('.horse-icon');
            if (existingHorse) {
                existingHorse.remove(); // Elimina cualquier caballo existente
            }
            const moveNumberSpan = cell.querySelector('.move-number');
            if (moveNumberSpan) {
                moveNumberSpan.remove(); // Quitar el span del número
            }
        });
        arrowsSvg.innerHTML = ''; // Limpiar flechas
        moveLog.innerHTML = ''; // Limpiar log de movimientos
        moveHistory = []; // Limpiar historial
        currentStep = -1; // Resetear paso actual
        updateNavigationButtons(); // Actualizar botones

        // Reiniciar las matrices del tablero
        board = Array(N).fill(0).map(() => Array(N).fill(-1));
        path = Array(N).fill(0).map(() => Array(N).fill(-1));

        // Deshabilitar botones mientras el algoritmo está trabajando.
        startTourBtn.disabled = true;
        prevStepBtn.disabled = true;
        nextStepBtn.disabled = true;
        loadingSpinner.style.display = 'flex'; // Mostrar el spinner de carga

        // Posicionar el caballo en la celda de inicio.
        const initialStartCell = document.querySelector(`.cell[data-row="${startRow}"][data-col="${startCol}"]`);
        if (!currentHorseElement) { 
            // Si por alguna razón el caballo no existe (ej. reset y click rápido antes de crear el caballo de nuevo)
            currentHorseElement = document.createElement('div');
            currentHorseElement.classList.add('horse-icon');
            currentHorseElement.textContent = '♘';
        }
        initialStartCell.appendChild(currentHorseElement);
        initialStartCell.classList.add('current'); // Marcar la celda inicial como actual

        // Retrasar la ejecución del algoritmo para dar tiempo a que el spinner se muestre.
        await new Promise(resolve => setTimeout(resolve, 50));

        // Iniciar la búsqueda del recorrido del caballo.
        if (await solveKnightTour(startRow, startCol, 0)) {
            showNotification('¡Solución encontrada! Usa los botones para navegar por los movimientos.', true);
            currentStep = 0; // Iniciar la navegación en el primer movimiento
            displayStep(currentStep); // Mostrar el primer paso
        } else {
            showNotification('No se encontró una solución para este tablero y posición inicial.');
            currentStep = -1; // No hay solución, resetear paso actual
        }
        loadingSpinner.style.display = 'none'; // Ocultar el spinner
        startTourBtn.disabled = false; // Habilitar el botón de iniciar recorrido
        updateNavigationButtons(); // Actualizar botones
    });

    /*  Función recursiva que implementa el algoritmo de Warnsdorff para encontrar el recorrido del caballo.
        Es una función asíncrona para permitir pausas en la visualización. */
    async function solveKnightTour(row, col, moveCount) {
        board[row][col] = moveCount; // Marcar la celda actual con el número de movimiento
        path[row][col] = moveCount; // También en 'path'

        // Almacenar el movimiento en el historial para la navegación.
        moveHistory.push({ row, col, move: moveCount });

        // Añadir el movimiento al log visible.
        const listItem = document.createElement('li');
        listItem.textContent = `Movimiento ${moveCount + 1}: (${row}, ${col})`; 
        moveLog.appendChild(listItem);
        moveLog.scrollTop = moveLog.scrollHeight; // Desplazar el log para mostrar el último movimiento

        await updateBoardDisplay(row, col, moveCount); // Actualizar la visualización del tablero con una pausa

        // Si se han visitado todas las celdas, se ha encontrado una solución.
        if (moveCount === N * N - 1) {
            return true;
        }

        // Obtener los movimientos válidos desde la posición actual.
        const validMoves = getValidMoves(row, col);
        // Ordenar los movimientos válidos usando la heurística de Warnsdorff:
        // Priorizar los movimientos que conducen a celdas con el menor número de movimientos posibles siguientes.
        validMoves.sort((a, b) => countPossibleMoves(a[0], a[1]) - countPossibleMoves(b[0], b[1]));

        // Intentar cada movimiento válido recursivamente.
        for (const [nextRow, nextCol] of validMoves) {
            if (await solveKnightTour(nextRow, nextCol, moveCount + 1)) {
                return true; // Si la llamada recursiva encuentra una solución, propagar true.
            }
        }

        // Backtracking: Si ningún movimiento desde la posición actual lleva a una solución,
        // desmarcar la celda y remover el movimiento del historial y del log.
        board[row][col] = -1;
        path[row][col] = -1;
        if (moveLog.lastChild) {
            moveLog.removeChild(moveLog.lastChild);
        }
        moveHistory.pop(); // Remover el último movimiento del historial
        await updateBoardDisplay(row, col, -1); // Actualizar la visualización para "deshacer" el movimiento
        return false; // No se encontró solución desde esta ruta
    }

    /*  Obtiene una lista de todos los movimientos válidos para el caballo desde una celda dada.
        Un movimiento es válido si la celda de destino está dentro del tablero y no ha sido visitada. */
    function getValidMoves(row, col) { 
        const validMoves = [];
        // Iterar sobre todas las posibles direcciones del caballo.
        for (const [dr, dc] of KNIGHT_MOVES) {
            const newRow = row + dr;
            const newCol = col + dc;

            // Comprobar si la nueva posición está dentro de los límites del tablero y no ha sido visitada.
            if (newRow >= 0 && newRow < N && newCol >= 0 && newCol < N && board[newRow][newCol] === -1) {
                validMoves.push([newRow, newCol]); // Añadir el movimiento válido
            }
        }
        return validMoves;
    }

    /*  Cuenta el número de movimientos posibles desde una celda dada,
        sin contar celdas ya visitadas. Usado para la heurística de Warnsdorff. */
    function countPossibleMoves(row, col) { 
        let count = 0;
        // Iterar sobre todas las posibles direcciones del caballo.
        for (const [dr, dc] of KNIGHT_MOVES) {
            const newRow = row + dr;
            const newCol = col + dc;
            // Comprobar si la nueva posición está dentro de los límites y no ha sido visitada.
            if (newRow >= 0 && newRow < N && newCol >= 0 && newCol < N && board[newRow][newCol] === -1) {
                count++; // Incrementar el contador si es un movimiento válido
            }
        }
        return count;
    }

    /*  Actualiza la visualización de una celda del tablero.
        Mueve el caballo, asigna clases CSS y añade el número de movimiento. */
    async function updateBoardDisplay(row, col, moveNumber) {
        const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
        if (cell) {
            // Quitar la clase 'current' (celda actual) de todas las celdas.
            document.querySelectorAll('.cell.current').forEach(c => {
                c.classList.remove('current');
            });

            // Si el movimiento es válido (no -1, es decir, no es backtracking), mover el caballo y marcar la celda.
            if (moveNumber !== -1) {
                // Mover el elemento del caballo a la nueva celda.
                if (currentHorseElement) {
                    cell.appendChild(currentHorseElement);
                } else {
                    // Si por alguna razón el caballo no existe, crearlo.
                    currentHorseElement = document.createElement('div');
                    currentHorseElement.classList.add('horse-icon');
                    currentHorseElement.textContent = '♘';
                    cell.appendChild(currentHorseElement);
                }

                // Asignar clases CSS según la paridad del número de movimiento para diferentes colores.
                cell.classList.remove('visited', 'visited-even', 'visited-odd');
                if (moveNumber % 2 === 0) {
                    cell.classList.add('visited', 'visited-even');
                } else {
                    cell.classList.add('visited', 'visited-odd');
                }
                cell.classList.add('current'); // Marcar la celda actual

                // Añadir o actualizar el número de movimiento en la celda.
                let moveNumberSpan = cell.querySelector('.move-number');
                if (!moveNumberSpan) {
                    moveNumberSpan = document.createElement('span');
                    moveNumberSpan.classList.add('move-number');
                    cell.appendChild(moveNumberSpan);
                }
                moveNumberSpan.textContent = moveNumber + 1; // Mostrar el número de movimiento (1-indexado)

                // Añadir la clase 'first-move' solo al número 1 en la celda de inicio.
                if (moveNumber === 0) {
                    moveNumberSpan.classList.add('first-move');
                } else {
                    moveNumberSpan.classList.remove('first-move');
                }

                cell.setAttribute('aria-label', `Celda visitada en fila ${row}, columna ${col}, movimiento ${moveNumber + 1}`);
            } else {
                // Si moveNumber es -1 (backtracking), quitar el número y las clases.
                cell.classList.remove('visited', 'visited-even', 'visited-odd', 'current');

                const moveNumberSpan = cell.querySelector('.move-number');
                // Mantener el número 1 en la celda de inicio si está presente.
                if (moveNumberSpan && moveNumberSpan.classList.contains('first-move')) {
                    // No hacer nada, se mantiene el 1
                } else if (moveNumberSpan) {
                    moveNumberSpan.remove(); // Remover el número de movimiento
                }

                cell.setAttribute('aria-label', `Celda en fila ${row}, columna ${col}`);
            }
            // Pausa para la animación, controlada por el input de velocidad.
            await new Promise(resolve => setTimeout(resolve, parseInt(animationSpeedInput.value)));
        }
    }

    // Muestra un mensaje en el log de movimientos cuando el recorrido está completo.
    function displayPath() {
        const completionMessage = document.createElement('li');
        completionMessage.textContent = '¡Recorrido completado!';
        completionMessage.style.fontWeight = 'bold';
        completionMessage.style.color = '#50fa7b'; // Color verde para éxito
        moveLog.appendChild(completionMessage);
        moveLog.scrollTop = moveLog.scrollHeight; // Desplazar al final
    }

    // Dibuja una flecha SVG entre dos celdas.
    function drawArrow(fromRow, fromCol, toRow, toCol) {
        const chessboard = chessboardContainer.querySelector('.chessboard');
        // Calcular el ancho y alto de una celda.
        const cellWidth = chessboard.offsetWidth / N;
        const cellHeight = chessboard.offsetHeight / N;

        // Calcular las coordenadas centrales de las celdas de origen y destino.
        const x1 = fromCol * cellWidth + cellWidth / 2;
        const y1 = fromRow * cellHeight + cellHeight / 2;
        const x2 = toCol * cellWidth + cellWidth / 2;
        const y2 = toRow * cellHeight + cellHeight / 2;

        // Calcular la distancia y el ángulo para la flecha.
        const dx = x2 - x1;
        const dy = y2 - y1;
        // const length = Math.sqrt(dx * dx + dy * dy); // No usado directamente en el dibujo de la flecha
        const angle = Math.atan2(dy, dx) * (180 / Math.PI); // Ángulo en grados

        const arrowGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        arrowGroup.setAttribute('class', 'arrow-group');

        // Línea principal de la flecha.
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', x1);
        line.setAttribute('y1', y1);
        line.setAttribute('x2', x2);
        line.setAttribute('y2', y2);
        line.setAttribute('class', 'arrow');
        arrowGroup.appendChild(line);

        // Triángulo como cabeza de flecha.
        const size = 10; // Tamaño de la cabeza de flecha
        const tipX = x2;
        const tipY = y2;
        // Coordenadas de la base del triángulo, relativas a la punta.
        const base1X = x2 - size;
        const base1Y = y2 - size / 2;
        const base2X = x2 - size;
        const base2Y = y2 + size / 2;

        const arrowHead = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        arrowHead.setAttribute(
            'points',
            `${tipX},${tipY} ${base1X},${base1Y} ${base2X},${base2Y}`
        );
        arrowHead.setAttribute('class', 'arrow-head');
        // Rotar la cabeza de flecha para que apunte en la dirección correcta.
        arrowHead.setAttribute('transform', `rotate(${angle}, ${tipX}, ${tipY})`);
        arrowGroup.appendChild(arrowHead);

        arrowsSvg.appendChild(arrowGroup); // Añadir el grupo de flecha al SVG
    }

    /*  Muestra un paso específico del recorrido del caballo.
        Esto se usa para la navegación (botones "anterior" y "siguiente"). */
    function displayStep(step) {
        if (step < 0 || step >= moveHistory.length) return; // Validación de rango

        // Limpiar el estado visual de todas las celdas y flechas.
        document.querySelectorAll('.cell').forEach(cell => {
            cell.classList.remove('visited', 'visited-even', 'visited-odd', 'current');
            const moveNumberSpan = cell.querySelector('.move-number');
            // Mantener el número 1 en la celda de inicio, si es el caso.
            if (moveNumberSpan && !moveNumberSpan.classList.contains('first-move')) {
                moveNumberSpan.remove();
            }
        });
        arrowsSvg.innerHTML = ''; // Limpiar todas las flechas

        // Recorrer el historial de movimientos hasta el paso actual y actualizar las celdas.
        for (let i = 0; i <= step; i++) {
            const { row, col, move } = moveHistory[i];
            const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);

            // Asignar clases de visitado y colores.
            cell.classList.remove('visited', 'visited-even', 'visited-odd');
            if (move % 2 === 0) {
                cell.classList.add('visited', 'visited-even');
            } else {
                cell.classList.add('visited', 'visited-odd');
            }

            // Añadir o actualizar el número de movimiento.
            let moveNumberSpan = cell.querySelector('.move-number');
            if (!moveNumberSpan) {
                moveNumberSpan = document.createElement('span');
                moveNumberSpan.classList.add('move-number');
                cell.appendChild(moveNumberSpan);
            }
            moveNumberSpan.textContent = move + 1;
            if (move === 0) {
                moveNumberSpan.classList.add('first-move');
            }

            cell.setAttribute('aria-label', `Celda visitada en fila ${row}, columna ${col}, movimiento ${move + 1}`);
        }

        // Mover el caballo al paso actual y marcar la celda como 'current'.
        const currentMove = moveHistory[step];
        const currentCell = document.querySelector(`.cell[data-row="${currentMove.row}"][data-col="${currentMove.col}"]`);
        currentCell.classList.add('current');
        if (currentHorseElement) {
            currentCell.appendChild(currentHorseElement);
        }

        // Dibujar las flechas hasta el paso actual.
        for (let i = 0; i < step; i++) {
            const from = moveHistory[i];
            const to = moveHistory[i + 1];
            drawArrow(from.row, from.col, to.row, to.col);
        }

        updateNavigationButtons(); // Actualizar el estado de los botones de navegación
    }

    /*  Habilita o deshabilita los botones de navegación (prev/next)
        basándose en el paso actual y la longitud del historial de movimientos. */
    function updateNavigationButtons() {
        prevStepBtn.disabled = currentStep <= 0; // Deshabilita "Anterior" si está al principio o no ha empezado
        nextStepBtn.disabled = currentStep >= moveHistory.length - 1 || moveHistory.length === 0; // Deshabilita "Siguiente" si está al final o no hay movimientos
    }

    // Listener para el botón "Paso Anterior".
    prevStepBtn.addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--; // Decrementar el paso actual
            displayStep(currentStep); // Mostrar el paso anterior
            updateNavigationButtons(); // Actualizar el estado de los botones
        }
    });

    // Listener para el botón "Paso Siguiente".
    nextStepBtn.addEventListener('click', () => {
        if (currentStep < moveHistory.length - 1) {
            currentStep++; // Incrementar el paso actual
            displayStep(currentStep); // Mostrar el paso siguiente
            updateNavigationButtons(); // Actualizar el estado de los botones
        }
    });
});