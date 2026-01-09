document.addEventListener('DOMContentLoaded', () => {
    initTerminal();
    initArcade();
    initEasterEggs();
    initMatrix();
});

/* --- 1. TERMINAL LOGIC --- */
function initTerminal() {
    const input = document.getElementById('terminal-input');
    const output = document.getElementById('terminal-output');

    if (!input) return;

    // Feature: Click anywhere in terminal to focus input
    const terminalWrapper = document.querySelector('.terminal-wrapper');
    if (terminalWrapper) {
        terminalWrapper.addEventListener('click', () => {
            input.focus();
        });
    }

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = input.value.trim().toLowerCase();
            processCommand(command, output);
            input.value = '';
        }
    });

    // Auto-scroll to bottom
    const observer = new MutationObserver(() => {
        output.scrollTop = output.scrollHeight;
    });
    observer.observe(output, { childList: true });
}

// Command history for 'history' command
let commandHistory = [];

function processCommand(cmd, output) {
    printLine(`guest@web:~$ ${cmd}`, output, 'highlight');

    // Save to history (max 20)
    if (cmd && cmd !== 'history' && cmd !== 'clear') {
        commandHistory.push(cmd);
        if (commandHistory.length > 20) commandHistory.shift();
    }

    // Parse command and arguments
    const parts = cmd.split(' ');
    const mainCmd = parts[0];
    const args = parts.slice(1).join(' ');

    // === COMANDOS BÁSICOS ===
    const basicCmds = {
        help: `Comandos: help, about, projects, skills, whoami, status, roll, flip, rps, glitch, sudo, rm, hack, coffee, sleep, motivate, insult, ls, cat, pwd, uptime, ps, kill, 42, rickroll, debug, why, how, when, credits, clear, history, time, date, weather, matrix, social, ping`,
        about: "Sivoleck. Lvl 16. Aprendiz de código. Odio bachillerato con pasión.",
        projects: "→ moon_bot.py (Status: En proceso... desde 2024)\n→ esta_web.html (Status: Funciona. Milagrosamente.)\n→ mi_vida.exe (Status: Runtime Error)",
        skills: "→ Ctrl+C / Ctrl+V: ████████░░ 80%\n→ Googlear errores: ██████████ 100%\n→ Leer documentación: ██░░░░░░░░ 20%\n→ Dormir: ░░░░░░░░░░ 0%",
        whoami: "Un NPC con WiFi y problemas existenciales.",
        status: "Estado actual: Compilando excusas para no hacer tareas...",
        social: "Discord: sivolc01 (No me hables si eres un cocoa)",
        ping: "Pong! (Latencia: 999ms - Mi cerebro está lagueado)"
    };

    // === COMANDOS DE JUEGO ===
    if (mainCmd === 'roll') {
        const max = args === '20' ? 20 : 6;
        const result = Math.floor(Math.random() * max) + 1;
        printLine(`🎲 Tirando d${max}... ${result}!`, output);
        return;
    }
    if (mainCmd === 'flip') {
        const result = Math.random() > 0.5 ? 'CARA' : 'CRUZ';
        printLine(`🪙 ${result}`, output);
        return;
    }
    if (mainCmd === 'rps') {
        const choices = ['piedra', 'papel', 'tijera'];
        const pc = choices[Math.floor(Math.random() * 3)];
        printLine(`Máquina eligió: ${pc.toUpperCase()}. (Siempre pierdes igual)`, output);
        return;
    }

    // === COMANDOS DE UI ===
    if (mainCmd === 'glitch') {
        document.body.classList.add('glitch-mode');
        printLine("GLITCH MODE: ON (5 segundos)", output);
        setTimeout(() => document.body.classList.remove('glitch-mode'), 5000);
        return;
    }
    if (mainCmd === 'matrix') {
        startMatrixEffect();
        printLine("Wake up, Neo...", output);
        return;
    }

    // === COMANDOS DE HUMOR ===
    const humorCmds = {
        sudo: "Permiso denegado. No eres el menda aquí.",
        'rm': "Nice try. Pero no. 🙂",
        hack: "Iniciando hackeo... [████░░░░░░] ERROR: Skill issues.",
        coffee: "☕ Generando cafeína virtual... Done. (No funciona igual)",
        sleep: "Modo hibernación activado. (Ojalá pudiera yo también)",
        motivate: ["Tu código es... interesante.", "Sigue así. O no. Da igual.", "Al menos compila. A veces.", "Eres único. Como todos los bugs."][Math.floor(Math.random() * 4)],
        insult: ["Tus variables tienen nombres peores que mis commits.", "Tu código parece escrito con los ojos cerrados.", "¿Eso lo copiaste de Stack Overflow o de un tutorial de 2010?", "He visto mejores estructuras en un espagueti."][Math.floor(Math.random() * 4)]
    };

    // === COMANDOS DE SISTEMA (Falsos) ===
    const fakeFiles = {
        'excuses.txt': "El perro se comió mi código.\nMi compilador tiene depresión.\nFuncionaba en mi máquina.",
        'bugs.log': "[ERROR] life.exe has stopped working\n[WARN] motivation.dll not found\n[FATAL] sleep_schedule corrupted",
        'todo_never.md': "- [ ] Ordenar el código\n- [ ] Documentar\n- [ ] Dormir 8 horas\n(Actualizado: nunca)"
    };

    if (mainCmd === 'ls') {
        printLine("excuses.txt  bugs.log  todo_never.md  .secrets/  node_modules/", output);
        return;
    }
    if (mainCmd === 'cat') {
        const file = args || 'excuses.txt';
        const content = fakeFiles[file] || `cat: ${file}: Permission denied (o no existe, qué sé yo)`;
        printLine(content, output);
        return;
    }
    if (mainCmd === 'pwd') {
        printLine("/home/sivoleck/chaos", output);
        return;
    }
    if (mainCmd === 'uptime') {
        printLine("Sistema activo desde: cuando dejé de procrastinar (nunca)", output);
        return;
    }
    if (mainCmd === 'ps') {
        printLine("PID  NAME\n001  anxiety.exe\n002  spotify.exe\n003  stackoverflow.exe\n004  existential_crisis.bat", output);
        return;
    }
    if (mainCmd === 'kill') {
        printLine(`Proceso '${args || 'unknown'}' terminado. (Ojalá fuera tan fácil con mis problemas)`, output);
        return;
    }

    // === COMANDOS ESPECIALES ===
    if (mainCmd === '42') {
        printLine("La respuesta a la vida, el universo y todo lo demás.", output);
        return;
    }
    if (mainCmd === 'rickroll') {
        printLine("Never gonna give you up, never gonna let you down... 🎵\nhttps://youtu.be/dQw4w9WgXcQ", output);
        return;
    }
    if (mainCmd === 'debug') {
        printLine("[LOG] Iniciando depuración...\n[WARN] Variable 'ganas' is undefined\n[ERROR] Cannot read property 'motivación' of null\n[FATAL] Brain.exe has crashed", output);
        return;
    }

    // === COMANDOS META ===
    const metaCmds = {
        why: "Porque sí. Siguiente pregunta.",
        how: "Con código, sudor y Stack Overflow.",
        when: "Cuando tenga ganas. O nunca.",
        credits: "☕ Café: 80%\n🎵 Música: 15%\n💻 Código: 5%\n🧠 Neuronas: 0 restantes"
    };

    // === COMANDOS ÚTILES ===
    if (mainCmd === 'clear') {
        output.innerHTML = '';
        return;
    }
    if (mainCmd === 'history') {
        if (commandHistory.length === 0) {
            printLine("(historial vacío)", output);
        } else {
            printLine(commandHistory.map((c, i) => `${i + 1}  ${c}`).join('\n'), output);
        }
        return;
    }
    if (mainCmd === 'time') {
        printLine(new Date().toLocaleTimeString('es-ES'), output);
        return;
    }
    if (mainCmd === 'date') {
        printLine(new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }), output);
        return;
    }
    if (mainCmd === 'weather') {
        printLine("🌧️ Nublado con probabilidad de bugs. Humedad: 100% (de lágrimas).", output);
        return;
    }

    // Check all response objects
    const response = basicCmds[mainCmd] || humorCmds[mainCmd] || metaCmds[mainCmd];
    if (response) {
        printLine(response, output);
        return;
    }

    // Default: command not found
    printLine(`'${cmd}' no reconocido. Escribe 'help' para ver comandos.`, output);
}

// Typing effect for terminal output
function printLine(text, container, className = '') {
    const p = document.createElement('p');
    if (className) p.classList.add(className);
    container.appendChild(p);

    // If it's a command echo (highlight), show instantly
    if (className === 'highlight') {
        p.textContent = text;
        return;
    }

    // Typing effect for responses
    let i = 0;
    const speed = 15; // ms per character

    function typeChar() {
        if (i < text.length) {
            // Handle newlines
            if (text.charAt(i) === '\n') {
                p.innerHTML += '<br>';
            } else {
                p.textContent += text.charAt(i);
            }
            i++;
            setTimeout(typeChar, speed);
        }
    }

    typeChar();
}

/* --- 2. ARCADE ZONE --- */

// Helper: Check if number is prime
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Helper: Get next prime after n
function nextPrime(n) {
    let candidate = n + 1;
    while (!isPrime(candidate)) candidate++;
    return candidate;
}

function initArcade() {
    // === GAME 1: Maldiciones a Bach ===
    let targetNumber = Math.floor(Math.random() * 21); // 0-20
    let attempts = 0;
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];

    const guessInput = document.getElementById('guess-input');
    const guessBtn = document.getElementById('guess-btn');
    const guessFeedback = document.getElementById('game-feedback');
    const primeCounter = document.getElementById('prime-counter');

    if (guessBtn) {
        guessBtn.addEventListener('click', () => {
            const val = parseInt(guessInput.value);
            if (isNaN(val)) {
                guessFeedback.innerText = "Escribe un número, genio.";
                return;
            }

            attempts++;
            // Contador de intentos real
            primeCounter.innerText = attempts;

            if (val === targetNumber) {
                guessFeedback.innerText = "¡Acertaste! (Demasiadas)";
                guessFeedback.style.color = "#0f0";
                targetNumber = Math.floor(Math.random() * 21); // Reset 0-20
                attempts = 0;
                primeCounter.innerText = "0";
            } else if (val < targetNumber) {
                guessFeedback.innerText = "Muy bajo.";
                guessFeedback.style.color = "var(--neon-magenta)";
            } else {
                guessFeedback.innerText = "Muy alto.";
                guessFeedback.style.color = "var(--neon-cyan)";
            }
            guessInput.value = '';
        });
    }

    // === GAME 2: Prime Chain ===
    let currentPrime = 2;
    let streak = 0;

    const primeInput = document.getElementById('prime-input');
    const primeBtn = document.getElementById('prime-btn');
    const primeFeedback = document.getElementById('prime-feedback');
    const currentPrimeDisplay = document.getElementById('current-prime');
    const streakDisplay = document.getElementById('prime-streak');

    if (primeBtn) {
        primeBtn.addEventListener('click', () => {
            const val = parseInt(primeInput.value);
            const correctNext = nextPrime(currentPrime);

            if (isNaN(val)) {
                primeFeedback.innerText = "Pon un número.";
                return;
            }

            if (val === correctNext) {
                streak++;
                currentPrime = correctNext;
                currentPrimeDisplay.innerText = currentPrime;
                streakDisplay.innerText = streak;
                primeFeedback.innerText = "Correcto.";
                primeFeedback.style.color = "#0f0";
            } else {
                primeFeedback.innerText = `Nope. Era ${correctNext}. Racha perdida.`;
                primeFeedback.style.color = "var(--error-red)";
                // Reset
                currentPrime = 2;
                streak = 0;
                currentPrimeDisplay.innerText = currentPrime;
                streakDisplay.innerText = streak;
            }
            primeInput.value = '';
        });
    }
}

/* --- 3. EASTER EGGS --- */
function initEasterEggs() {
    // A. Triple Click Alias Change
    const alias = document.getElementById('alias-trigger');
    const title = document.querySelector('.glitch-title');
    const names = ["SIVOLECK", "SIVOLC", "ÑAME"];
    let nameIndex = 0;

    if (alias) {
        alias.addEventListener('click', (e) => {
            if (e.detail === 3) { // Triple click detect
                nameIndex = (nameIndex + 1) % names.length;
                const newName = names[nameIndex];
                alias.innerText = newName;
                title.innerText = newName;
                title.setAttribute('data-text', newName);
                alert("GLITCH DETECTED: Identity switched.");
            }
        });
    }

    // B. Konami Code
    let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                startMatrixEffect();
                alert("KONAMI CODE ACTIVATED: Entering the Matrix.");
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }

        // C. Ctrl+Shift+X
        if (e.ctrlKey && e.shiftKey && e.key === 'X') {
            alert("SISTEMA EDUCATIVO: \nError 404 - Logic Not Found.\nCargando depresión estandarizada...");
        }
    });
}

/* --- 4. MATRIX EFFECT --- */
let matrixInterval;

function startMatrixEffect() {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;

    canvas.style.display = 'block';
    const ctx = canvas.getContext('2d');

    // Full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "SIVOLECK01";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let x = 0; x < columns; x++) drops[x] = 1;

    // Reset loop if already running
    if (matrixInterval) clearInterval(matrixInterval);

    matrixInterval = setInterval(() => {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height); // Trail effect

        ctx.fillStyle = "#0F0";
        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < drops.length; i++) {
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }, 33);

    // Stop after 10 seconds to not be annoying
    setTimeout(() => {
        clearInterval(matrixInterval);
        canvas.style.display = 'none';
        // Reload page logic or just hide? Just hide for now.
    }, 10000);
}
