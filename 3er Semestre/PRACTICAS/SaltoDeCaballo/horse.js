document.addEventListener('DOMContentLoaded', () => {
    const boardSizeInput = document.getElementById('boardSize');
    const createBoardBtn = document.getElementById('createBoard');
    const startTourBtn = document.getElementById('startTour');
    const resetBoardBtn = document.getElementById('resetBoard');
    const animationSpeedInput = document.getElementById('animationSpeed');
    const speedValueSpan = document.getElementById('speedValue');
    const chessboardContainer = document.getElementById('chessboard-container');
    const moveLog = document.getElementById('moveLog');
    const startMessage = document.getElementById('startMessage');
    const notification = document.getElementById('notification');

    // Crear el spinner dinámicamente si no está en HTML
    const loadingSpinner = document.createElement('div');
    loadingSpinner.id = 'loadingSpinner';
    loadingSpinner.classList.add('loading-spinner');
    loadingSpinner.textContent = 'Buscando solución...';
    loadingSpinner.style.display = 'none'; // Oculto por defecto
    document.body.insertBefore(loadingSpinner, chessboardContainer); // Insertarlo antes del tablero


    let N;
    let board;
    let path;
    let startRow = null;
    let startCol = null;
    const KNIGHT_MOVES = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];

    let currentHorseElement = null; // Variable para almacenar el elemento del caballo actual

    // Función para mostrar notificaciones
    function showNotification(message, isSuccess = false, duration = 3000) {
        notification.textContent = message;
        notification.classList.remove('success');
        if (isSuccess) {
            notification.classList.add('success');
        }
        notification.style.display = 'block';
        notification.classList.add('show');

        if (duration > 0) { // Solo si la duración es mayor a 0, la notificación se ocultará automáticamente
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => {
                    notification.style.display = 'none';
                    notification.textContent = '';
                }, 300); // Coincide con la duración de la transición
            }, duration);
        }
    }

    // Cargar tamaño del tablero desde localStorage
    boardSizeInput.value = localStorage.getItem('boardSize') || 8;

    // Listener para la verificación de entrada en tiempo real y persistencia
    boardSizeInput.addEventListener('input', () => {
        const value = parseInt(boardSizeInput.value);
        if (isNaN(value) || value < 3 || value > 10) {
            boardSizeInput.classList.add('invalid-input');
            showNotification('El tamaño del tablero debe ser un número entre 3 y 10.', false, 0); // Duración 0 para que no desaparezca
        } else {
            boardSizeInput.classList.remove('invalid-input');
            // Si la notificación actual es la de tamaño inválido, la ocultamos.
            if (notification.textContent.includes('tamaño del tablero')) {
                notification.style.display = 'none';
                notification.textContent = '';
                notification.classList.remove('show');
            }
        }
        localStorage.setItem('boardSize', boardSizeInput.value);
    });

    // Asegurarse de que el input tenga la validación inicial al cargar la página
    boardSizeInput.dispatchEvent(new Event('input')); // Disparar el evento 'input' al cargar para validar el valor inicial


    // Actualizar valor de velocidad de animación
    animationSpeedInput.addEventListener('input', () => {
        speedValueSpan.textContent = `${animationSpeedInput.value} ms`;
        // Actualizar la variable CSS para la transición del caballo
        document.documentElement.style.setProperty('--animation-speed', `${animationSpeedInput.value}ms`);
    });
    // Inicializar la variable CSS al cargar
    document.documentElement.style.setProperty('--animation-speed', `${animationSpeedInput.value}ms`);


    function createChessboard() {
        N = parseInt(boardSizeInput.value);
        if (isNaN(N) || N < 3 || N > 10) {
            showNotification('Por favor, ingresa un número válido para el tamaño del tablero (3 a 10).'); //
            return;
        }

        chessboardContainer.innerHTML = '';
        moveLog.innerHTML = '';
        board = Array(N).fill(0).map(() => Array(N).fill(-1));
        path = Array(N).fill(0).map(() => Array(N).fill(-1));
        startRow = null;
        startCol = null;
        startMessage.style.display = 'block';
        currentHorseElement = null; // Reiniciar el elemento del caballo

        const chessboardDiv = document.createElement('div');
        chessboardDiv.classList.add('chessboard');
        chessboardDiv.style.setProperty('--board-size', N);

        for (let r = 0; r < N; r++) {
            for (let c = 0; c < N; c++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.row = r;
                cell.dataset.col = c;
                cell.setAttribute('aria-label', `Celda en fila ${r}, columna ${c}`);
                if ((r + c) % 2 === 0) {
                    cell.classList.add('light');
                } else {
                    cell.classList.add('dark');
                }
                cell.addEventListener('click', () => {
                    // Limpiar clases 'start' y 'horse-icon' de las celdas previamente seleccionadas
                    document.querySelectorAll('.cell').forEach(c => {
                        c.classList.remove('start');
                        const existingHorse = c.querySelector('.horse-icon');
                        if (existingHorse) {
                            existingHorse.remove();
                        }
                        const moveNumberSpan = c.querySelector('.move-number');
                        if (moveNumberSpan) {
                            moveNumberSpan.remove(); // Quitar el número si existe
                        }
                    });

                    cell.classList.add('start'); // Añadir la clase 'start' a la celda seleccionada
                    startRow = parseInt(cell.dataset.row);
                    startCol = parseInt(cell.dataset.col);
                    cell.setAttribute('aria-label', `Celda seleccionada como inicio en fila ${r}, columna ${c}`);
                    startMessage.style.display = 'none';

                    // Crear o mover el icono del caballo a la celda de inicio
                    if (currentHorseElement) {
                        currentHorseElement.remove(); // Eliminar el caballo anterior del DOM
                    }
                    currentHorseElement = document.createElement('div');
                    currentHorseElement.classList.add('horse-icon');
                    currentHorseElement.textContent = '♘'; // El carácter del caballo
                    cell.appendChild(currentHorseElement);

                });
                chessboardDiv.appendChild(cell);
            }
        }
        chessboardContainer.appendChild(chessboardDiv);
    }

    createChessboard();

    createBoardBtn.addEventListener('click', createChessboard);

    resetBoardBtn.addEventListener('click', () => {
        chessboardContainer.innerHTML = '';
        moveLog.innerHTML = '';
        board = Array(N).fill(0).map(() => Array(N).fill(-1));
        path = Array(N).fill(0).map(() => Array(N).fill(-1));
        startRow = null;
        startCol = null;
        startMessage.style.display = 'block';
        startTourBtn.disabled = false;
        notification.style.display = 'none'; // Limpiar notificación
        notification.textContent = '';
        currentHorseElement = null; // Restablecer el elemento del caballo
        loadingSpinner.style.display = 'none'; // Asegurarse de ocultar el spinner
        createChessboard();
    });

    startTourBtn.addEventListener('click', async () => {
        if (startRow === null || startCol === null) {
            showNotification('Por favor, haz clic en una casilla para elegir el punto de inicio.'); //
            return;
        }

        // Limpiar tablero antes de iniciar el recorrido
        document.querySelectorAll('.cell').forEach(cell => {
            // cell.textContent = ''; // Ya no limpiamos textContent directamente
            cell.classList.remove('visited', 'current'); // Quitar clases de recorrido
            // Quitar cualquier horse-icon existente en las celdas
            const existingHorse = cell.querySelector('.horse-icon');
            if (existingHorse) {
                existingHorse.remove();
            }
            const moveNumberSpan = cell.querySelector('.move-number');
            if (moveNumberSpan) {
                moveNumberSpan.remove(); // Quitar el span del número
            }
        });
        moveLog.innerHTML = ''; // Limpiar log

        board = Array(N).fill(0).map(() => Array(N).fill(-1));
        path = Array(N).fill(0).map(() => Array(N).fill(-1));

        startTourBtn.disabled = true;
        loadingSpinner.style.display = 'flex'; // Mostrar el spinner

        // Posicionar el caballo en la celda de inicio
        const initialStartCell = document.querySelector(`.cell[data-row="${startRow}"][data-col="${startCol}"]`);
        if (!currentHorseElement) { // Si por alguna razón el caballo no existe (ej. reset y click rápido)
            currentHorseElement = document.createElement('div');
            currentHorseElement.classList.add('horse-icon');
            currentHorseElement.textContent = '♘';
        }
        initialStartCell.appendChild(currentHorseElement);
        initialStartCell.classList.add('current'); // Marcar la celda inicial como actual

        // Retrasar la ejecución del algoritmo para dar tiempo a que el spinner se muestre
        await new Promise(resolve => setTimeout(resolve, 50));

        if (await solveKnightTour(startRow, startCol, 0)) {
            displayPath();
            showNotification('¡Recorrido completado con éxito!', true); //
        } else {
            showNotification('No se encontró una solución para este tablero y posición inicial.'); //
        }
        loadingSpinner.style.display = 'none'; // Ocultar el spinner
        startTourBtn.disabled = false;
    });

    async function solveKnightTour(row, col, moveCount) {
        board[row][col] = moveCount;
        path[row][col] = moveCount;

        const listItem = document.createElement('li');
        listItem.textContent = `Movimiento ${moveCount + 1}: (${row}, ${col})`; //
        moveLog.appendChild(listItem);
        moveLog.scrollTop = moveLog.scrollHeight; // Desplazar al final del log

        await updateBoardDisplay(row, col, moveCount); // Usar await aquí

        if (moveCount === N * N - 1) {
            return true;
        }

        const validMoves = getValidMoves(row, col);
        validMoves.sort((a, b) => countPossibleMoves(a[0], a[1]) - countPossibleMoves(b[0], b[1]));

        for (const [nextRow, nextCol] of validMoves) {
            if (await solveKnightTour(nextRow, nextCol, moveCount + 1)) {
                return true;
            }
        }

        board[row][col] = -1;
        path[row][col] = -1;
        if (moveLog.lastChild) {
            moveLog.removeChild(moveLog.lastChild);
        }
        await updateBoardDisplay(row, col, -1); // Usar await aquí
        return false;
    }

    function getValidMoves(row, col) { //
        const validMoves = [];
        for (const [dr, dc] of KNIGHT_MOVES) {
            const newRow = row + dr;
            const newCol = col + dc;

            if (newRow >= 0 && newRow < N && newCol >= 0 && newCol < N && board[newRow][newCol] === -1) {
                validMoves.push([newRow, newCol]);
            }
        }
        return validMoves;
    }

    function countPossibleMoves(row, col) { //
        let count = 0;
        for (const [dr, dc] of KNIGHT_MOVES) {
            const newRow = row + dr;
            const newCol = col + dc;
            if (newRow >= 0 && newRow < N && newCol >= 0 && newCol < N && board[newRow][newCol] === -1) {
                count++;
            }
        }
        return count;
    }

    async function updateBoardDisplay(row, col, moveNumber) {
        const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`); //
        if (cell) {
            // Quitar la clase 'current' de todas las celdas
            document.querySelectorAll('.cell.current').forEach(c => {
                c.classList.remove('current');
            });

            // Si el movimiento es válido (no -1), mover el caballo y marcar la celda
            if (moveNumber !== -1) {
                // Mover el elemento del caballo a la nueva celda
                if (currentHorseElement) {
                    cell.appendChild(currentHorseElement);
                } else { // Esto debería suceder solo en el primer movimiento
                    currentHorseElement = document.createElement('div');
                    currentHorseElement.classList.add('horse-icon');
                    currentHorseElement.textContent = '♘';
                    cell.appendChild(currentHorseElement);
                }

                cell.classList.add('visited'); //
                cell.classList.add('current'); // Marcar la celda actual

                let moveNumberSpan = cell.querySelector('.move-number');
                if (!moveNumberSpan) {
                    moveNumberSpan = document.createElement('span');
                    moveNumberSpan.classList.add('move-number');
                    cell.appendChild(moveNumberSpan);
                }
                moveNumberSpan.textContent = moveNumber + 1; //
                
                // Añadir la clase 'first-move' solo al número 1 en la celda de inicio
                if (moveNumber === 0) { // Si es el primer movimiento (índice 0)
                    moveNumberSpan.classList.add('first-move');
                    // Asegúrate de que la celda de inicio ya tenga la clase 'start' aquí
                    // (debería tenerla desde el click inicial)
                } else {
                    moveNumberSpan.classList.remove('first-move'); // Quitar para los demás números
                }

                cell.setAttribute('aria-label', `Celda visitada en fila ${row}, columna ${col}, movimiento ${moveNumber + 1}`); //
            } else {
                // Si moveNumber es -1 (backtracking), quitar el número y las clases
                cell.classList.remove('visited');
                cell.classList.remove('current');

                const moveNumberSpan = cell.querySelector('.move-number');
                if (moveNumberSpan && moveNumberSpan.classList.contains('first-move')) {
                    // Si es el número 1 y se hace backtracking, se mantiene, pero se limpia el caballo
                    // No removemos el span del número 1, solo las demás clases.
                    // El caballo se habrá movido a otra celda, así que no hay necesidad de quitarlo de aquí.
                } else if (moveNumberSpan) {
                    moveNumberSpan.remove(); // Remover el span si no es el número 1
                }

                cell.setAttribute('aria-label', `Celda en fila ${row}, columna ${col}`);
            }
            await new Promise(resolve => setTimeout(resolve, parseInt(animationSpeedInput.value))); //
        }
    }

    function displayPath() {
        for (let r = 0; r < N; r++) {
            for (let c = 0; c < N; c++) {
                const cell = document.querySelector(`.cell[data-row="${r}"][data-col="${c}"]`); //
                if (cell) {
                    cell.classList.remove('current'); // Asegurarse de que no haya current al finalizar

                    // Mantener la clase 'start' solo en la celda de inicio real
                    if (!(r === startRow && c === startCol)) {
                        cell.classList.remove('start'); // Quitar 'start' de las otras celdas
                    }

                    cell.classList.add('visited'); //

                    let moveNumberSpan = cell.querySelector('.move-number');
                    if (!moveNumberSpan) {
                        moveNumberSpan = document.createElement('span');
                        moveNumberSpan.classList.add('move-number');
                        cell.appendChild(moveNumberSpan);
                    }
                    moveNumberSpan.textContent = path[r][c] + 1; //

                    // Asegurar que el número 1 mantenga la clase 'first-move'
                    if (path[r][c] === 0) {
                        moveNumberSpan.classList.add('first-move');
                    } else {
                        moveNumberSpan.classList.remove('first-move');
                    }

                    cell.setAttribute('aria-label', `Celda visitada en fila ${r}, columna ${c}, movimiento ${path[r][c] + 1}`); //
                }
            }
        }
        // Mover el caballo a la última celda al finalizar si existe
        const lastMove = N * N - 1;
        let lastRow, lastCol;
        for (let r = 0; r < N; r++) {
            for (let c = 0; c < N; c++) {
                if (path[r][c] === lastMove) {
                    lastRow = r;
                    lastCol = c;
                    break;
                }
            }
            if (lastRow !== undefined) break;
        }

        if (currentHorseElement && lastRow !== undefined && lastCol !== undefined) {
            const lastCell = document.querySelector(`.cell[data-row="${lastRow}"][data-col="${lastCol}"]`);
            if (lastCell) {
                lastCell.appendChild(currentHorseElement);
            }
        }


        const completionMessage = document.createElement('li'); //
        completionMessage.textContent = '¡Recorrido completado!'; //
        completionMessage.style.fontWeight = 'bold'; //
        completionMessage.style.color = '#50fa7b'; //
        moveLog.appendChild(completionMessage); //
        moveLog.scrollTop = moveLog.scrollHeight; //
    }
});