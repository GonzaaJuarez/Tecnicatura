const OPCIONES = {
        1: { name: "Piedra 🪨", icon: "🪨" },
        2: { name: "Papel 📄", icon: "📄" },
        3: { name: "Tijera ✂️", icon: "✂️" }
    };
    /******************** INICIO FONDO E ICONOS  ********************/
    const FONDOS = [
        'images/background1.png',
        'images/background2.png',
        'images/background3.png',
        'images/background4.png',
        'images/background5.png'
    ];
    const FAVICONS = [
        'images/favicon1.ico',
        'images/favicon2.ico',
        'images/favicon3.ico'
    ];
    /********************  FIN FONDO E ICONOS   ********************/

    let triunfos = 0;
    let perdidas = 0;
    const botones = document.querySelectorAll('#botones button');
    const choicesDiv = document.getElementById('choices');
    const resultadoDiv = document.getElementById('resultado');
    const marcadorDiv = document.getElementById('marcador');
    const reiniciarBtn = document.getElementById('reiniciar');
    const favicon = document.getElementById('favicon');

    /********************  INICO FONDO E ICONOS  ********************/
    function elegirFondoAleatorio() {
        const indiceAleatorio = Math.floor(Math.random() * FONDOS.length);
        return FONDOS[indiceAleatorio];
    }
    function elegirFaviconAleatorio() {
        const indiceAleatorio = Math.floor(Math.random() * FAVICONS.length);
        favicon.href = FAVICONS[indiceAleatorio];
    }
    /********************   FIN FONDO E ICONOS   ********************/

    function aplicarFondo() {
        try {
            document.body.style.backgroundImage = `url('${elegirFondoAleatorio()}')`;
        } catch (e) {
            console.warn('Error al cargar el fondo:', e);
            document.body.style.backgroundColor = '#f0f0f0';
        }
    }

    function generarJugadaPC() {
        return Math.floor(Math.random() * 3) + 1;
    }

    function determinarGanador(jugador, pc) {
        if (jugador === pc) return "EMPATE";
        const reglas = {
            1: 3,
            2: 1,
            3: 2
        };
        if (reglas[jugador] === pc) {
            triunfos++;
            return "VICTORIA";
        } else {
            perdidas++;
            return "PERDISTE";
        }
    }

    function mostrarElecciones(jugador, pc) {
        choicesDiv.innerHTML = `
            <div class="choice">${OPCIONES[jugador].icon} Tú</div>
            <div class="choice">${OPCIONES[pc].icon} PC</div>
        `;
    }

    function mostrarResultado(jugador, pc, resultado) {
        mostrarElecciones(jugador, pc);
        resultadoDiv.textContent = resultado;
        resultadoDiv.classList.remove('ganaste', 'perdiste', 'empate');
        if (resultado === "EMPATE") {
            resultadoDiv.classList.add('empate');
        } else if (resultado === "VICTORIA") {
            resultadoDiv.classList.add('ganaste');
        } else {
            resultadoDiv.classList.add('perdiste');
        }
        actualizarMarcador();
    }

    function actualizarMarcador() {
        const diferencia = triunfos - perdidas;
        marcadorDiv.innerHTML = `👤 Tú ${triunfos} - ${perdidas} 🤖 PC`;
        if (diferencia > 0) {
            marcadorDiv.classList.remove('marcador-pc-lead', 'marcador-tie');
            marcadorDiv.classList.add('marcador-you-lead');
        } else if (diferencia < 0) {
            marcadorDiv.classList.remove('marcador-you-lead', 'marcador-tie');
            marcadorDiv.classList.add('marcador-pc-lead');
        } else {
            marcadorDiv.classList.remove('marcador-you-lead', 'marcador-pc-lead');
            marcadorDiv.classList.add('marcador-tie');
        }
    }

    function finalizarJuego() {
        resultadoDiv.textContent = triunfos > perdidas ? "¡VICTORIA FINAL! 🏆" : "¡DERROTA FINAL! 🤖";
        if (triunfos > perdidas) resultadoDiv.classList.add('ganaste');
        else resultadoDiv.classList.add('perdiste');
        botones.forEach(boton => boton.disabled = true);
        reiniciarBtn.style.display = 'block';
    }

    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            const jugador = parseInt(this.dataset.opcion);
            const pc = generarJugadaPC();
            const resultado = determinarGanador(jugador, pc);
            mostrarResultado(jugador, pc, resultado);
            if (triunfos === 3 || perdidas === 3) {
                finalizarJuego();
            }
        });
    });

    reiniciarBtn.addEventListener('click', function() {
        triunfos = 0;
        perdidas = 0;
        actualizarMarcador();
        resultadoDiv.textContent = "";
        choicesDiv.innerHTML = "";
        botones.forEach(boton => boton.disabled = false);
        reiniciarBtn.style.display = 'none';
        aplicarFondo();
        elegirFaviconAleatorio(); // Cambia el favicon al reiniciar
    });

    document.addEventListener('DOMContentLoaded', () => {
        aplicarFondo();
        actualizarMarcador();
        elegirFaviconAleatorio(); // Establece un favicon aleatorio al cargar
    });