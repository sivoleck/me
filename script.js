document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initTerminal();
    initArcade();
    initEasterEggs();
    initMatrix();
    initCustomCursor();
    initParticles();
    initScrollReveal();
    initVisitorCounter();
});

/* --- 0. LANGUAGE SYSTEM --- */
let currentLang = 'es';

const translations = {
    es: {
        nav: { about: '[SOBRE MI]', projects: '[PROYECTOS]', terminal: '[TERMINAL]', arcade: '[ARCADE]' },
        hero: {
            typing: 'No soy nadie importante, pero aún así este sitio existe.',
            subtitle: 'Sobreviviendo a Bachillerato',
            lvl: 'Lvl. 16', server: 'Server: ES'
        },
        about: { intro: 'No soy nadie especial. Solo alguien muy curioso y al que le gusta resolver problemas.' },
        projects: { card1: { error: 'Causa: <span class="error">La coneja mordió algun cable</span>' } },
        code: {
            comment: {
                deprecated: '# deprecated',
                sometimes: '# a veces',
                ignore: '# Ignorar al usuario',
                furniture: '# como si fuera un mueble',
                error_handling: '# Manejo de errores profesional',
                useless: '// Intentando procesar datos inútiles',
                rare: '// Raro, pero ocurre',
                tears: '// Hidratando el teclado con lágrimas',
                patch: '// Parche temporal (no arregla nada)'
            }
        },
        terminal: {
            welcome: 'Welcome to SIVOLECK_OS v1.0',
            type: 'Escribe', forhelp: 'para ver comandos.',
            prompt: 'root@esp-server:~$'
        },
        arcade: {
            game1: { title: 'MALDICIONES A BACH', subtitle: '¿Cuántas veces hoy? (0-20)' },
            game2: { title: 'CADENA DE PRIMOS' },
            attempts: 'Intentos:', guess: 'ADIVINA',
            current: 'Actual:', next: '¿Siguiente?', streak: 'Racha:'
        },
        footer: { truth: 'Presiona Ctrl+Shift+X para la verdad', credits: 'Hecho con odio y cafeína.' },
        counter: { title: 'REGISTRO DE VISITAS', text: 'humanos detectados en el sistema' },
        // Terminal Responses
        cmds: {
            help: `Comandos: help, about, projects, skills, whoami, status, roll, flip, rps, glitch, sudo, rm, hack, coffee, sleep, motivate, insult, ls, cat, pwd, uptime, ps, kill, 42, rickroll, debug, why, how, when, credits, clear, history, time, date, weather, matrix, social, ping`,
            about: "Sivoleck. Lvl 16. Aprendiz de código. Odio bachillerato con pasión.",
            projects: "→ moon_bot.py (Status: En proceso... desde 2024)\n→ esta_web.html (Status: Funciona. Milagrosamente.)\n→ mi_vida.exe (Status: Runtime Error)",
            skills: "→ Ctrl+C / Ctrl+V: ████░░ 80%\n→ Googlear errores: ████ 100%\n→ Leer documentación: ██░░░░ 20%\n→ Dormir: ░░░░ 0%",
            whoami: "Un NPC con WiFi y problemas existenciales.",
            status: "Estado actual: Compilando excusas para no hacer tareas...",
            social: "Discord: sivolc01 (No me hables si eres un cocoa)",
            ping: "Pong! (Latencia: 999ms - Mi cerebro está lagueado)",
            sudo: "Permiso denegado. No eres el menda aquí.",
            rm: "Nice try. Pero no. 🙂",
            hack: "Iniciando hackeo... [████░░░░] ERROR: Skill issues.",
            coffee: "☕ Generando cafeína virtual... Done. (No funciona igual)",
            sleep: "Modo hibernación activado. (Ojalá pudiera yo también)",
            motivate: ["Tu código es... interesante.", "Sigue así. O no. Da igual.", "Al menos compila. A veces.", "Eres único. Como todos los bugs."],
            insult: ["Tus variables tienen nombres peores que mis commits.", "Tu código parece escrito con los ojos cerrados.", "¿Eso lo copiaste de Stack Overflow o de un tutorial de 2010?", "He visto mejores estructuras en un espagueti."],
            weather: "🌧️ Nublado con probabilidad de bugs. Humedad: 100% (de lágrimas).",
            credits: "☕ Café: 80%\n🎵 Música: 15%\n💻 Código: 5%\n🧠 Neuronas: 0 restantes",
            why: "Porque sí. Siguiente pregunta.",
            how: "Con código, sudor y Stack Overflow.",
            when: "Cuando tenga ganas. O nunca.",
            unknown: "Comando no reconocido. Escribe 'help' para ayuda.",
            game_win: "¡Acertaste! (Demasiadas)",
            game_low: "Muy bajo.", game_high: "Muy alto.",
            game_err: "Escribe un número.",
            prime_correct: "Correcto.",
            prime_wrong: "Nope. Era {ans}. Racha perdida."
        }
    },
    en: {
        nav: { about: '[ABOUT]', projects: '[PROJECTS]', terminal: '[TERMINAL]', arcade: '[ARCADE]' },
        hero: {
            typing: 'I am no one important, yet this site exists.',
            subtitle: 'Surviving High School',
            lvl: 'Lvl. 16', server: 'Server: EN'
        },
        about: { intro: 'I am no one special. Just someone very curious who likes solving problems.' },
        projects: { card1: { error: 'Cause: <span class="error">The bunny chewed a cable</span>' } },
        code: {
            comment: {
                deprecated: '# deprecated',
                sometimes: '# sometimes',
                ignore: '# Ignore user',
                furniture: '# like a piece of furniture',
                error_handling: '# Professional error handling',
                useless: '// Processing useless data',
                rare: '// Rare, but happens',
                tears: '// Hydrating keyboard with tears',
                patch: '// Temp patch (fixes nothing)'
            }
        },
        terminal: {
            welcome: 'Welcome to SIVOLECK_OS v1.0',
            type: 'Type', forhelp: 'to see available commands.',
            prompt: 'root@eng-server:~$'
        },
        arcade: {
            game1: { title: 'CURSING HIGH SCHOOL', subtitle: 'How many times today? (0-20)' },
            game2: { title: 'PRIME CHAIN' },
            attempts: 'Attempts:', guess: 'GUESS',
            current: 'Current:', next: 'Next?', streak: 'Streak:'
        },
        footer: { truth: 'Press Ctrl+Shift+X for truth', credits: 'Made with hatred & caffeine.' },
        counter: { title: 'VISITOR LOG', text: 'humans detected in the system' },
        // Terminal Responses
        cmds: {
            help: `Commands: help, about, projects, skills, whoami, status, roll, flip, rps, glitch, sudo, rm, hack, coffee, sleep, motivate, insult, ls, cat, pwd, uptime, ps, kill, 42, rickroll, debug, why, how, when, credits, clear, history, time, date, weather, matrix, social, ping`,
            about: "Sivoleck. Lvl 16. Code apprentice. Hating High School with passion.",
            projects: "→ moon_bot.py (Status: WIP... since 2024)\n→ this_web.html (Status: Works. Miraculously.)\n→ my_life.exe (Status: Runtime Error)",
            skills: "→ Ctrl+C / Ctrl+V: ████░░ 80%\n→ Google Errors: ████ 100%\n→ Read Docs: ██░░░░ 20%\n→ Sleep: ░░░░ 0%",
            whoami: "An NPC with WiFi and existential dread.",
            status: "Current status: Compiling excuses to avoid homework...",
            social: "Discord: sivolc01 (Don't talk to me if you are a normie)",
            ping: "Pong! (Latency: 999ms - My brain is lagging)",
            sudo: "Permission denied. You have no power here.",
            rm: "Nice try. But no. 🙂",
            hack: "Init hacking... [████░░░░] ERROR: Skill issues.",
            coffee: "☕ Generating virtual caffeine... Done. (Not the same)",
            sleep: "Hibernation mode ON. (I wish)",
            motivate: ["Your code is... interesting.", "Keep going. Or not.", "At least it compiles. Sometimes.", "You are unique. Like all bugs."],
            insult: ["Your variable names are worse than my commits.", "Your code looks written blindly.", "Did you copy that from Stack Overflow or a 2010 tutorial?", "I've seen better structures in spaghetti."],
            weather: "🌧️ Cloudy with a chance of bugs. Humidity: 100% (tears).",
            credits: "☕ Coffee: 80%\n🎵 Music: 15%\n💻 Code: 5%\n🧠 Neurons: 0 left",
            why: "Because reasons. Next question.",
            how: "With code, sweat and Stack Overflow.",
            when: "Whenever I feel like it. Or never.",
            unknown: "Command not recognized. Type 'help'.",
            game_win: "Correct! (Too many)",
            game_low: "Too low.", game_high: "Too high.",
            game_err: "Type a number.",
            prime_correct: "Correct.",
            prime_wrong: "Nope. It was {ans}. Streak lost."
        }
    }
};

function initLanguage() {
    const btn = document.getElementById('lang-toggle');
    if (btn) {
        btn.addEventListener('click', () => {
            currentLang = currentLang === 'es' ? 'en' : 'es';
            updateLanguage();
            btn.innerText = `[${currentLang.toUpperCase()}]`;
        });
    }
}

function updateLanguage() {
    const t = translations[currentLang];

    // Update simple data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const keys = key.split('.');
        let val = t;
        keys.forEach(k => { if (val) val = val[k]; });
        if (val) el.innerHTML = val;
    });

    // Update terminal prompt if it exists (static one)
    const prompt = document.querySelector('.console-box .prompt');
    if (prompt) prompt.innerText = t.terminal.prompt;
}

/* --- 1. TERMINAL LOGIC --- */
function initTerminal() {
    const input = document.getElementById('terminal-input');
    const output = document.getElementById('terminal-output');

    if (!input) return;

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

    const observer = new MutationObserver(() => {
        output.scrollTop = output.scrollHeight;
    });
    observer.observe(output, { childList: true });
}

let commandHistory = [];

function processCommand(cmd, output) {
    printLine(`guest@web:~$ ${cmd}`, output, 'highlight');

    if (cmd && cmd !== 'history' && cmd !== 'clear') {
        commandHistory.push(cmd);
        if (commandHistory.length > 20) commandHistory.shift();
    }

    const parts = cmd.split(' ');
    const mainCmd = parts[0];
    const args = parts.slice(1).join(' ');
    const t = translations[currentLang].cmds;

    // === COMANDOS BÁSICOS ===
    const simpleCmds = ['help', 'about', 'projects', 'skills', 'whoami', 'status', 'social', 'ping', 'sudo', 'rm', 'hack', 'coffee', 'sleep', 'weather', 'credits', 'why', 'how', 'when'];

    if (simpleCmds.includes(mainCmd)) {
        printLine(t[mainCmd], output);
        return;
    }

    // Arrays (Random)
    if (mainCmd === 'motivate' || mainCmd === 'insult') {
        const arr = t[mainCmd];
        printLine(arr[Math.floor(Math.random() * arr.length)], output);
        return;
    }

    // === JUEGOS ===
    if (mainCmd === 'roll') {
        const max = args === '20' ? 20 : 6;
        const result = Math.floor(Math.random() * max) + 1;
        printLine(`🎲 d${max}... ${result}!`, output);
        return;
    }
    if (mainCmd === 'flip') {
        const result = Math.random() > 0.5 ? (currentLang === 'es' ? 'CARA' : 'HEADS') : (currentLang === 'es' ? 'CRUZ' : 'TAILS');
        printLine(`🪙 ${result}`, output);
        return;
    }
    if (mainCmd === 'rps') {
        const choices = ['piedra', 'papel', 'tijera']; // Keep simple logic
        const pc = choices[Math.floor(Math.random() * 3)];
        printLine(`CPU: ${pc.toUpperCase()}.`, output);
        return;
    }

    // === FEATURES UX ===
    if (mainCmd === 'glitch') {
        document.body.classList.add('glitch-mode');
        printLine("GLITCH MODE: ON", output);
        setTimeout(() => document.body.classList.remove('glitch-mode'), 5000);
        return;
    }
    if (mainCmd === 'matrix') {
        startMatrixEffect();
        printLine("Wake up, Neo...", output);
        return;
    }

    // === FAKE FILES SYSTEM ===
    if (mainCmd === 'ls') {
        printLine("excuses.txt  bugs.log  todo_never.md  .secrets/  node_modules/", output);
        return;
    }
    // (Simplificando cat/uptime/ps para no alargar demasiado, usando fallback genérico si quieres o strings hardcodeados universales)
    if (mainCmd === 'pwd') {
        printLine("/home/sivoleck/chaos", output);
        return;
    }

    // === UTILS ===
    if (mainCmd === 'clear') {
        output.innerHTML = '';
        return;
    }
    if (mainCmd === 'history') {
        printLine(commandHistory.length === 0 ? "..." : commandHistory.map((c, i) => `${i + 1}  ${c}`).join('\n'), output);
        return;
    }
    if (mainCmd === 'time') {
        printLine(new Date().toLocaleTimeString(currentLang === 'es' ? 'es-ES' : 'en-US'), output);
        return;
    }

    // Default
    printLine(t.unknown || `'${cmd}' ?`, output);
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
    // === GAME 1: Guess the Number ===
    let targetNumber = Math.floor(Math.random() * 21); // 0-20
    let attempts = 0;

    const guessInput = document.getElementById('guess-input');
    const guessBtn = document.getElementById('guess-btn');
    const guessFeedback = document.getElementById('game-feedback');
    const primeCounter = document.getElementById('prime-counter');

    if (guessBtn) {
        guessBtn.addEventListener('click', () => {
            const val = parseInt(guessInput.value);
            const t = translations[currentLang].cmds;

            if (isNaN(val)) {
                guessFeedback.innerText = t.game_err;
                return;
            }

            attempts++;
            primeCounter.innerText = attempts;

            if (val === targetNumber) {
                guessFeedback.innerText = t.game_win;
                guessFeedback.style.color = "#0f0";
                targetNumber = Math.floor(Math.random() * 21); // Reset 0-20
                attempts = 0;
                primeCounter.innerText = "0";
            } else if (val < targetNumber) {
                guessFeedback.innerText = t.game_low;
                guessFeedback.style.color = "var(--neon-magenta)";
            } else {
                guessFeedback.innerText = t.game_high;
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
            const t = translations[currentLang].cmds;

            if (isNaN(val)) {
                primeFeedback.innerText = t.game_err;
                return;
            }

            if (val === correctNext) {
                streak++;
                currentPrime = correctNext;
                currentPrimeDisplay.innerText = currentPrime;
                streakDisplay.innerText = streak;
                primeFeedback.innerText = t.prime_correct;
                primeFeedback.style.color = "#0f0";
            } else {
                primeFeedback.innerText = t.prime_wrong.replace('{ans}', correctNext);
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

function initMatrix() {
    // Matrix effect is initialized but not started automatically
    // It will be triggered by Konami code or 'matrix' terminal command
    // No initialization needed, just a placeholder for the call in DOMContentLoaded
}

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


/* --- 5. CURSOR PERSONALIZADO --- */
function initCustomCursor() {
    // Cursor personalizado desactivado
}

/* --- 6. PARTÍCULAS FLOTANTES --- */
function initParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + 'vh';
        
        // Random animation delay
        particle.style.animationDelay = Math.random() * 20 + 's';
        
        // Random animation duration
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        
        // Random color variation
        const colors = ['var(--neon-cyan)', 'var(--neon-magenta)', 'var(--neon-violet)'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = color;
        particle.style.boxShadow = `0 0 3px ${color}`;
        
        container.appendChild(particle);
    }
}

/* --- 7. SCROLL REVEAL ANIMATIONS --- */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: stop observing after reveal
                // revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
}

/* --- 8. CONTADOR DE VISITAS --- */
async function initVisitorCounter() {
    const el = document.getElementById('count-number');
    if (!el) return;

    // Pon un nombre único para que tu contador empiece de cero y sea solo tuyo
    const id = 'sivoleck-cyber-log'; 
    const url = `https://api.counterapi.dev/v1/${id}/visits/up`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        // El número real de la base de datos
        const realCount = data.count;

        // Ejecutamos TU animación que ya tienes en script.js
        // Esto hará que el número suba de 0 hasta el real con GLOW morado
        animateCount(0, realCount, el, 2000);
        
    } catch (error) {
        // Si el adblock lo bloquea, mostramos un número fijo para que no se rompa el diseño
        el.innerText = "Adblock cocoa"; 
        console.log("Error de conexión, usando valor estático.");
    }
}

function animateCount(start, end, element, duration) {
    const startTime = performance.now();
    const range = end - start;
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (easeOutExpo)
        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        const current = Math.floor(start + range * easeOut);
        element.textContent = current.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}
