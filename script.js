/* ═══════════════════════════════════════════════════════════
   SIVOLECK_OS v2.0 — script.js
   ─────────────────────────────────────────────────────────
   Sections (Ctrl+F to jump):
     [I18N]  [MUSIC-CONFIG]  [COMMAND-REGISTRY]
     [SOUND]  [TERMINAL]  [MUSIC]
     [GUESTBOOK]  [EASTER-EGGS]  [ARCADE]  [MISC]  [INIT]
═══════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════════
   [I18N] — Define FIRST so everything below can call i18n()
   ─────────────────────────────────────────────────────────
   HOW TO ADD A STRING:
     Add key → { es: '...', en: '...' } entry below.
     Reference via data-i18n="key" in HTML or i18n('key') in JS.
═══════════════════════════════════════════════════════════ */
const I18N = {
    'nav.about':      { es: '[SOBRE MI]',   en: '[ABOUT]'     },
    'nav.projects':   { es: '[PROYECTOS]',  en: '[PROJECTS]'  },
    'nav.music':      { es: '[MÚSICA]',     en: '[MUSIC]'     },
    'nav.favorites':  { es: '[FAVORITOS]',  en: '[FAVORITES]' },
    'nav.terminal':   { es: '[TERMINAL]',   en: '[TERMINAL]'  },
    'nav.guestbook':  { es: '[VISITAS]',    en: '[GUESTBOOK]' },
    'nav.arcade':     { es: '[ARCADE]',     en: '[ARCADE]'    },

    'hero.typing':    { es: 'No soy nadie importante, pero aún así este sitio existe.', en: "I'm nobody important, but this site exists anyway." },
    'hero.subtitle':  { es: 'Sobreviviendo Bachillerato', en: 'Surviving High School' },

    'about.intro': {
        es: 'No soy nadie especial. Solo alguien muy curioso y al que le gusta resolver problemas.',
        en: "Nothing special. Just someone curious who likes solving problems.",
    },

    'code.comment.deprecated': { es: '# deprecated',                    en: '# deprecated'                  },
    'code.comment.sometimes':  { es: '# a veces',                       en: '# sometimes'                   },
    'code.comment.ignore':     { es: '# Ignorar al usuario',            en: '# Ignore the user'             },
    'code.comment.furniture':  { es: '# como si fuera un mueble',       en: '# like furniture'              },
    'code.comment.error_handling': { es: '# Manejo de errores profesional', en: '# Professional error handling' },
    'code.comment.useless':    { es: '// Intentando procesar datos inútiles', en: '// Trying to process useless data' },
    'code.comment.rare':       { es: '// Raro, pero ocurre',            en: '// Rare, but happens'          },
    'code.comment.tears':      { es: '// Hidratando el teclado',        en: '// Keyboard hydration'         },
    'code.comment.patch':      { es: '// Parche temporal (no arregla nada)', en: '// Temporary patch (fixes nothing)' },

    'projects.card1.error': { es: 'Causa: <span class="error">La coneja mordió algún cable</span>', en: 'Cause: <span class="error">The rabbit bit a cable</span>' },
    'projects.link.soon':   { es: '// enlace próximamente', en: '// link coming soon' },

    'music.nowPlaying': { es: 'REPRODUCIENDO', en: 'NOW PLAYING' },
    'music.noTape':     { es: '// SIN CINTA',  en: '// NO TAPE'  },
    'music.tracklist':  { es: '// CANCIONES',  en: '// TRACKS'   },

    'favorites.intro': {
        es: 'Las cosas que hacen que valga la pena aguantar el bachillerato.',
        en: 'The things that make high school worth surviving.',
    },
    'favorites.berserk.desc':   { es: 'La historia de Guts. Oscura, brutal, hermosa. Miura era un genio.',           en: "Guts' story. Dark, brutal, beautiful. Miura was a genius."          },
    'favorites.jojo.desc':      { es: 'WRYYYYYYY. Los Stands, los poses, los memes. Es la experiencia completa.',    en: 'WRYYYYYYY. Stands, poses, memes. The full experience.'             },
    'favorites.rtyi.desc':      { es: 'Cultivación, poder absoluto y una historia que engancha.',                     en: 'Cultivation, absolute power, and a gripping story.'                },
    'favorites.minecraft.desc': { es: 'El juego eterno. Survival, redstone, servers con amigos. No hay final.',      en: 'The eternal game. Survival, redstone, servers with friends.'       },
    'favorites.cow.desc':       { es: 'Estrategia global en tiempo real. Ejércitos, traiciones y sueño perdido.',    en: 'Real-time global strategy. Armies, betrayals, lost sleep.'         },

    'terminal.welcome': { es: 'Bienvenido a SIVOLECK_OS v2.0', en: 'Welcome to SIVOLECK_OS v2.0' },
    'terminal.type':    { es: 'Escribe',                         en: 'Type'                       },
    'terminal.forhelp': { es: 'para ver comandos.',              en: 'for available commands.'    },

    'guestbook.intro':  { es: 'Deja tu huella en el sistema.', en: 'Leave your mark in the system.' },
    'guestbook.empty':  { es: '// Sin mensajes aún. Sé el primero.', en: '// No messages yet. Be the first.' },
    'guestbook.send':   { es: 'ENVIAR MSG', en: 'SEND MSG' },

    'arcade.game1.title':    { es: 'MALDICIONES A BACH',          en: 'CURSES AT SCHOOL'        },
    'arcade.game1.subtitle': { es: '¿Cuántas veces hoy? (0-20)', en: 'How many times today? (0-20)' },
    'arcade.attempts':       { es: 'Intentos:',                    en: 'Attempts:'               },
    'arcade.guess':          { es: 'ADIVINA',                      en: 'GUESS'                   },
    'arcade.game2.title':    { es: 'CADENA DE PRIMOS',             en: 'PRIME CHAIN'             },
    'arcade.current':        { es: 'Actual:',                      en: 'Current:'                },
    'arcade.next':           { es: '¿Siguiente?',                  en: 'Next?'                   },
    'arcade.streak':         { es: 'Racha:',                       en: 'Streak:'                 },

    'counter.title': { es: 'VISITOR LOG', en: 'VISITOR LOG' },
    'counter.text':  { es: 'humanos detectados en el sistema', en: 'humans detected in the system' },

    'footer.truth':   { es: 'Presiona Ctrl+Shift+X', en: 'Press Ctrl+Shift+X' },
    'footer.credits': { es: 'Hecho con odio y cafeína.',             en: 'Made with hate and caffeine.'     },

    /* ── Stand outcomes ── */
    'stand.ora':     { es: '⭐ Has obtenido: STAR PLATINUM\n  — El Stand más rápido. ORA ORA ORA.',               en: '⭐ You got: STAR PLATINUM\n  — The fastest Stand. ORA ORA ORA.'             },
    'stand.zawarudo':{ es: '⭐ Has obtenido: THE WORLD\n  — Za Warudo. Toki wo tomare.',                           en: '⭐ You got: THE WORLD\n  — Za Warudo. Toki wo tomare.'                     },
    'stand.crazy':   { es: '⭐ Has obtenido: CRAZY DIAMOND\n  — Dora dora dora.',                                  en: '⭐ You got: CRAZY DIAMOND\n  — Dora dora dora.'                          },
    'stand.killer':  { es: '⭐ Has obtenido: KILLER QUEEN\n  — Todo lo que tocas explota.',                        en: '⭐ You got: KILLER QUEEN\n  — Everything you touch explodes.'            },
    'stand.gold':    { es: '⭐ Has obtenido: GOLD EXPERIENCE REQUIEM\n  — Ni Araki sabe lo que hace realmente.',                          en: '⭐ You got: GOLD EXPERIENCE REQUIEM\n  — Even Araki doesn\'t know what it really does.'                },
    'stand.bach':    { es: '💀 Eres un parguela, has muerto intentando conseguir un Stand.', en: '💀 You are a failure, you died trying to get a Stand.'    },

    /* ── Terminal cmd descriptions ── */
    'cmd.help.desc':     { es: 'Muestra esta ayuda',              en: 'Shows this help'            },
    'cmd.about.desc':    { es: 'Info sobre el sistema',           en: 'System info'                },
    'cmd.whoami.desc':   { es: '¿Quien es sivoleck?',                   en: 'Who is sivoleck?'               },
    'cmd.whoami.resp':   { es: 'Soy un cocoa más con Wifi.', en: 'An NPC with WiFi.' },
    'cmd.date.desc':     { es: 'Fecha y hora actual',             en: 'Current date/time'          },
    'cmd.ls.desc':       { es: 'Lista ficheros del sistema',      en: 'List system files'          },
    'cmd.cat.desc':      { es: 'cat <fichero>',                   en: 'cat <file>'                 },
    'cmd.cat.noarg':     { es: 'Uso: cat <fichero>',              en: 'Usage: cat <file>'          },
    'cmd.cat.index':     { es: '// Estás mirando el source en el navegador.', en: "// You're viewing the source in the browser." },
    'cmd.ping.desc':     { es: 'ping <host>',                     en: 'ping <host>'               },
    'cmd.clear.desc':    { es: 'Limpia la terminal',              en: 'Clears the terminal'        },
    'cmd.matrix.desc':   { es: 'Activa la lluvia de Matrix',      en: 'Activate Matrix rain'       },
    'cmd.matrix.resp':   { es: '// Iniciando simulación...',      en: '// Initiating simulation...' },
    'cmd.stand.desc':    { es: 'Obtén tu Stand (o muere en el intento)', en: 'Get your Stand (or die trying)' },
    'cmd.zawarudo.desc': { es: 'Za Warudo! Toki wo tomare!',     en: 'Za Warudo! Toki wo tomare!'  },
    'cmd.eclipse.desc':  { es: 'El Eclipse ha comenzado',        en: 'The Eclipse has begun'       },
    'cmd.sudo.desc':     { es: 'Escalar privilegios',            en: 'Escalate privileges'         },
    'cmd.sudo.resp':     { es: 'guest no está en sudoers.\nEste incidente será reportado.\n// (no será reportado)', en: "guest is not in sudoers.\nThis incident will be reported.\n// (it won't be)" },
    'cmd.exit.desc':     { es: 'Salir de la terminal',           en: 'Exit terminal'               },
    'cmd.exit.resp':     { es: '// No puedes salir de la simulación.', en: '// You cannot exit the simulation.' },
    'cmd.credits.desc':  { es: 'Créditos del sistema',           en: 'System credits'              },
    'cmd.konami.resp':   { es: '// ↑ ... luego busca el cielo, desciende dos veces al infierno, y sigue el curso del sol (ocaso, alba, ocaso, alba)... B, A', en: '// ↑ ... then seek the sky, descend twice to hell, and follow the sun (dusk, dawn, dusk, dawn)... B, A' },

    'cmd.kill.desc':     { es: 'kill <pid>',                    en: 'kill <pid>'                  },
    'cmd.mkdir.desc':    { es: 'mkdir <dir>',                   en: 'mkdir <dir>'                 },
    'cmd.pwd.desc':      { es: 'Muestra directorio actual',      en: 'Show current directory'      },
    'cmd.cd.desc':       { es: 'cd <directorio>',               en: 'cd <directory>'              },
    'cmd.touch.desc':    { es: 'touch <fichero>',               en: 'touch <file>'                },
    'cmd.mv.desc':       { es: 'mv <src> <dest>',               en: 'mv <src> <dest>'             },
    'cmd.cp.desc':       { es: 'cp <src> <dest>',               en: 'cp <src> <dest>'             },
    'cmd.why.desc':      { es: '¿Porque esto existe?',                       en: 'Why does this exist?'                        },
    "cmd.why.resp":      { es: '¿Y porque no?, siguiente pregunta.',                                 en: 'And why not?, next question.'                                 },
    "cmd.contact.desc":  { es: '¿Como contactar con sivoleck?',              en: 'How to contact sivoleck?'                    },
    "cmd.contact.resp":  { es: '¿Quieres contactarme? ¿Estas tu seguro? Puedes por discord, supongo mi user es sivolc01, y mi github es sivoleck. Si vas a mi git dame follow ya que estas ¿No?.', en: 'Do you want to contact me? Are you sure? You can reach me on Discord, my username is sivolc01, and my GitHub is sivoleck. If you visit my GitHub, please follow me.' },
    "cmd.sleep.desc":    { es: 'Puedes intentar dormir, aun que dudo que funcione', en: 'You can try to sleep, but I doubt it will work.' },
    "cmd.sleep.resp":    { es: 'Dormir dice, no lo hago ni yo lo vas a hacer tu...', en: 'You cannot sleep, you are in a web browser, not in real life...' },
    "cmd.top.desc":      { es: 'Muestra procesos activos', en: 'Shows active processes' },
    "cmd.top.resp": { 
        es: 'PID   USER     %CPU  %MEM  COMMAND\n1234  sivoleck  99.9   0.1  buscando-el-sentido-de-la-vida\n5678  root       0.1   0.0  calentar-cafe-con-la-cpu\n9101  nadie     42.0   6.9  contar-ovejas-infinitas\n1121  yo        0.0    0.0  procrastinar-fuertemente\n3141  pi        0.0    0.0  intentar-dividir-por-cero\n0000  ghost     13.7   0.0  existir-sin-proposito', 
        en: 'PID   USER     %CPU  %MEM  COMMAND\n1234  sivoleck  99.9   0.1  searching-for-the-meaning-of-life\n5678  root       0.1   0.0  heating-coffee-with-the-cpu\n9101  nobody    42.0   6.9  counting-infinite-sheep\n1121  me         0.0   0.0  procrastinating-heavily\n3141  pi         0.0   0.0  attempting-to-divide-by-zero\n0000  ghost     13.7   0.0  existing-without-purpose' 
    },

};

let currentLang = 'es';

function i18n(key, fallback) {
    const entry = I18N[key];
    if (!entry) return fallback !== undefined ? fallback : key;
    return entry[currentLang] ?? entry['es'] ?? fallback ?? key;
}

function applyI18n() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const str = i18n(el.dataset.i18n, '');
        if (str) el.innerHTML = str;
    });
    document.querySelectorAll('#lang-toggle, #lang-toggle-mobile').forEach(btn => {
        btn.textContent = currentLang === 'es' ? '[EN]' : '[ES]';
    });
    const gbLang = document.getElementById('gb-language');
    if (gbLang) gbLang.value = currentLang;
}

/* ═══════════════════════════════════════════════════════════
   [MUSIC-CONFIG] — Add/remove tracks here freely.
   ─────────────────────────────────────────────────────────
   Each track: { title, artist, url, cover }
   · url  : direct .mp3/.ogg link. YouTube won't work (CORS).
             Leave '' to show the cassette UI without audio.
   · cover: path to image, or '' for ♪ placeholder.
═══════════════════════════════════════════════════════════ */
const MUSIC_CONFIG = [
    { title: 'Babydoll',      artist: 'Dominic Fike',          url: 'music/Babydoll.mp3', cover: 'music/Babydoll.jpg' },
    { title: 'Jane!',      artist: 'The Long Faces',          url: 'music/Jane!.mp3', cover: 'music/Jane!.jpg' },
    { title: 'Little L',            artist: 'Jamiroquai',  url: 'music/Little L.mp3', cover: 'music/Little L.jpg' },
    { title: "Batshit", artist: "Diminic Fike", url: "music/Batshit.mp3", cover: "music/Babydoll.jpg" },
    { title: 'FRESH', artist: 'Trueno', url: 'music/FRESH.mp3', cover: 'music/FRESH.jpg' },
    { title: 'TRES PECADOS DESPUES', artist: 'Milo J', url: 'music/TRES PECADOS DESPUES....mp3', cover: 'music/TRES PECADOS DESPUES....jpg' },
    { title: 'X UNAS LLANTAS', artist: 'Trueno', url: 'music/X UNAS LLANTAS.mp3', cover: 'music/X UNAS LLANTAS.jpg' },
    { title: 'ALIOLI', artist: 'Milo J', url: 'music/ALIOLI.mp3', cover: 'music/TRES PECADOS DESPUES....jpg' },
    { title: 'Rift', artist: 'Good Kid', url: 'music/Rift.mp3', cover: 'music/Rift.jpg' },
];

/* ═══════════════════════════════════════════════════════════
   [COMMAND-REGISTRY] — Add new terminal commands here.
   ─────────────────────────────────────────────────────────
   HOW TO ADD A COMMAND:
     1. Add entry: commandName: { desc, fn(args){...} }
     2. fn must return a string (printed) or null (side effect only).
     3. Add hidden: true to hide from `help`.
   NOTE: i18n() is safe to call here (defined above).
═══════════════════════════════════════════════════════════ */

// State for filesystem simulation
let currentDir = '/home/guest/sivoleck_os';
let dirHistory = [];

const FILESYSTEM = {
    '/home/guest/sivoleck_os': [
        '<span class="keyword">projects/</span>',
        '<span class="keyword">music/</span>',
        'index.html',
        'style.css',
        'script.js',
        '<span class="comment">secrets.txt</span>',
    ],
    '/home/guest/sivoleck_os/projects': [
        'portfolio.html',
        'readme.md',
        '<span class="keyword">web/</span>',
        '<span class="keyword">python/</span>',
    ],
    '/home/guest/sivoleck_os/music': [
        'Babydoll.mp3',
        'Jane!.mp3',
        'Little L.mp3',
        'FRESH.mp3',
        'Rift.mp3',
    ],
    '/home/guest/sivoleck_os/projects/web': [
        'index.html',
        'style.css',
        'script.js',
    ],
    '/home/guest/sivoleck_os/projects/python': [
        'main.py',
        'utils.py',
        'config.txt',
    ],
};

const COMMAND_REGISTRY = {

    help: {
        get desc() { return i18n('cmd.help.desc'); },
        fn(args) {
            const query = args[0]?.toLowerCase();

            if (query) {
                const cmd = COMMAND_REGISTRY[query];
                if (!cmd || cmd.hidden) {
                    return `<span class="error">help: ${query}: comando no encontrado</span>`;
                }

                return [
                    `<span class="highlight">${query}</span>`,
                    cmd.desc,
                ].join('\n');
            }

            const lines = ['<span class="highlight">SIVOLECK_OS v2.0</span> — comandos disponibles:'];
            Object.entries(COMMAND_REGISTRY).forEach(([name, cmd]) => {
                if (cmd.hidden) return;
                lines.push(`  <span class="highlight">${name}</span>`);
            });
            return lines.join('\n');
        },
    },

    about: {
        get desc() { return i18n('cmd.about.desc'); },
        fn() {
            return [
                '<span class="keyword">class</span> <span class="class-name">Sivoleck</span>:',
                '  level    = 16',
                '  location = <span class="string">"España"</span>',
                '  status   = <span class="string">"bachillerato.exe (not responding)"</span>',
                '  sleep    = <span class="keyword">None</span>  <span class="comment"># still deprecated</span>',
            ].join('\n');
        },
    },

    whoami: {
        get desc() { return i18n('cmd.whoami.desc'); },
        fn()  { return i18n('cmd.whoami.resp'); },
    },

    date: {
        get desc() { return i18n('cmd.date.desc'); },
        fn()  { return new Date().toLocaleString(currentLang === 'es' ? 'es-ES' : 'en-US'); },
    },

    ls: {
        get desc() { return i18n('cmd.ls.desc'); },
        fn() {
            const contents = FILESYSTEM[currentDir];
            if (!contents) {
                return '<span class="comment">// Directorio vacío</span>';
            }
            return contents.join('\n');
        },
    },

    cat: {
        get desc() { return i18n('cmd.cat.desc'); },
        fn(args) {
            if (!args.length) return i18n('cmd.cat.noarg');
            const f = args[0];
            if (f === 'secrets.txt') return '<span class="error">cat: secrets.txt: Permiso denegado</span>';
            if (f === 'index.html')  return i18n('cmd.cat.index');
            
            // Verificar si el archivo existe en el directorio actual
            const dirContents = FILESYSTEM[currentDir];
            if (dirContents && dirContents.includes(f)) {
                return `<span class="comment">// Contenido de ${escHtml(f)}</span>`;
            }
            
            return `<span class="error">cat: ${escHtml(f)}: Fichero no encontrado</span>`;
        },
    },

    ping: {
        get desc() { return i18n('cmd.ping.desc'); },
        fn(args) {
            const host = args[0] || 'localhost';
            return [
                `PING ${host}: 56 bytes de datos`,
                `64 bytes de ${host}: icmp_seq=0 ttl=64 tiempo=1.337 ms`,
                `64 bytes de ${host}: icmp_seq=1 ttl=64 tiempo=0.420 ms`,
                `--- ${host} ping --- 2 paquetes enviados, 2 recibidos, 0% pérdida`,
            ].join('\n');
        },
    },

    clear: {
        get desc() { return i18n('cmd.clear.desc'); },
        fn() { Terminal.clear(); return null; },
    },

    matrix: {
        get desc() { return i18n('cmd.matrix.desc'); },
        fn() { EasterEggs.toggleMatrix(); return i18n('cmd.matrix.resp'); },
    },

    stand: {
        get desc() { return i18n('cmd.stand.desc'); },
        fn() { return EasterEggs.standCommand(); },
    },

    zawarudo: {
        get desc() { return i18n('cmd.zawarudo.desc'); },
        fn() { EasterEggs.zaWarudo(); return null; },
    },

    eclipse: {
        get desc() { return i18n('cmd.eclipse.desc'); },
        fn() { EasterEggs.startEclipse(); return null; },
    },

    sudo: {
        get desc() { return i18n('cmd.sudo.desc'); },
        fn() { return i18n('cmd.sudo.resp'); },
    },

    exit: {
        get desc() { return i18n('cmd.exit.desc'); },
        fn() { return i18n('cmd.exit.resp'); },
    },

    credits: {
        get desc() { return i18n('cmd.credits.desc'); },
        fn() {
            return [
                '╔══════════════════════════════╗\n',
                '║   SIVOLECK_OS v2.0           ║\n',
                '║   Built with: odio + cafeína ║\n',
                '║   Engine: navegador stock    ║\n',
                '║   Bugs: muchos               ║\n',
                '╚══════════════════════════════╝\n',
            ].join('\n');
        },
    },

    hack: {
        desc: 'hack',
        hidden: true,
        fn() {
            return [
                'Iniciando secuencia...',
                'Accediendo a mainframe...',
                'Bypassing firewall [<span class="highlight">OK</span>]',
                'Descargando internetes...',
                '<span class="error">ERROR: ni hay servidor. Nice try.</span>',
            ].join('\n');
        },
    },

    konami: {
        desc: 'Código konami',
        hidden: true,
        fn() { return i18n('cmd.konami.resp'); },
    },

    rm: {
        desc: 'rm',
        hidden: true,
        fn() { return '<span class="error">ERROR: Not enough chaos for this operation.</span>'; },
    },

    kill: {
        get desc() { return i18n('cmd.kill.desc'); },
        fn(args) {
            if (!args.length) return i18n('cmd.kill.desc');
            const pid = args[0];
            return `<span class="comment">// Proceso ${escHtml(pid)} terminado.</span>`;
        },
    },

    mkdir: {
        get desc() { return i18n('cmd.mkdir.desc'); },
        fn(args) {
            if (!args.length) return '<span class="error">mkdir: falta argumento</span>';
            return `<span class="comment">// Directorio ${escHtml(args[0])} creado.</span>`;
        },
    },

    pwd: {
        get desc() { return i18n('cmd.pwd.desc'); },
        fn() {
            return currentDir;
        },
    },

    cd: {
        get desc() { return i18n('cmd.cd.desc'); },
        fn(args) {
            if (!args.length) {
                dirHistory.push(currentDir);
                currentDir = '/home/guest';
                return null;
            }
            const dest = args[0];
            dirHistory.push(currentDir);
            if (dest === '..') {
                currentDir = currentDir.split('/').slice(0, -1).join('/') || '/';
            } else if (dest === '-') {
                const prev = dirHistory.pop();
                if (prev) {
                    currentDir = prev;
                    dirHistory.push(currentDir);
                }
            } else if (dest === '/') {
                currentDir = '/';
            } else if (dest.startsWith('/')) {
                currentDir = dest;
            } else {
                currentDir = (currentDir === '/' ? '' : currentDir) + '/' + dest;
            }
            return null;
        },
    },

    touch: {
        get desc() { return i18n('cmd.touch.desc'); },
        fn(args) {
            if (!args.length) return '<span class="error">touch: falta nombre de fichero</span>';
            const filename = args[0];
            if (!FILESYSTEM[currentDir]) FILESYSTEM[currentDir] = [];
            if (!FILESYSTEM[currentDir].includes(filename)) {
                FILESYSTEM[currentDir].push(filename);
            }
            return null;
        },
    },

    mv: {
        get desc() { return i18n('cmd.mv.desc'); },
        fn(args) {
            if (args.length < 2) return '<span class="error">mv: faltan argumentos</span>';
            const source = args[0];
            const dest = args[1];
            if (!FILESYSTEM[currentDir]) return `<span class="error">mv: ${source}: no encontrado</span>`;
            const idx = FILESYSTEM[currentDir].indexOf(source);
            if (idx === -1) return `<span class="error">mv: ${source}: no encontrado</span>`;
            FILESYSTEM[currentDir].splice(idx, 1);
            FILESYSTEM[currentDir].push(dest);
            return null;
        },
    },

    cp: {
        get desc() { return i18n('cmd.cp.desc'); },
        fn(args) {
            if (args.length < 2) return '<span class="error">cp: faltan argumentos</span>';
            const source = args[0];
            const dest = args[1];
            if (!FILESYSTEM[currentDir]) return `<span class="error">cp: ${source}: no encontrado</span>`;
            if (!FILESYSTEM[currentDir].includes(source)) return `<span class="error">cp: ${source}: no encontrado</span>`;
            if (!FILESYSTEM[currentDir].includes(dest)) {
                FILESYSTEM[currentDir].push(dest);
            }
            return null;
        },
    },

};

/* ═══════════════════════════════════════════════════════════
   [SOUND] Web Audio API — synthetic SFX (no audio files)
═══════════════════════════════════════════════════════════ */
const Sound = (() => {
    let ctx     = null;
    let enabled = true;
    const activeAudios = new Set();

    function getCtx() {
        if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
        return ctx;
    }

    function beep({ freq = 440, type = 'square', duration = 0.08, gain = 0.06 } = {}) {
        if (!enabled) return;
        try {
            const c = getCtx();
            const o = c.createOscillator();
            const g = c.createGain();
            o.connect(g); g.connect(c.destination);
            o.type = type;
            o.frequency.setValueAtTime(freq, c.currentTime);
            g.gain.setValueAtTime(gain, c.currentTime);
            g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + duration);
            o.start(c.currentTime);
            o.stop(c.currentTime + duration);
        } catch { /* unavailable */ }
    }

    function toggle() {
        enabled = !enabled;
        // Silenciar/desilenciar el reproductor principal
        const mainAudio = document.getElementById('audio-player');
        if (mainAudio) mainAudio.muted = !enabled;
        // Silenciar/desilenciar todos los efectos cargados activos
        activeAudios.forEach(a => { a.muted = !enabled; });
        return enabled;
    }

    function playFile(url, volume = 0.85) {
        const audio = new Audio(url);
        audio.volume = volume;
        audio.muted = !enabled;
        activeAudios.add(audio);
        audio.play().catch(() => {
            // Si el archivo falla, fallback al sintetizador interno
            if (url.includes('Zawarudo')) beep({ freq: 80, type: 'sawtooth', duration: 1.2, gain: 0.12 });
            else if (url.includes('Eclipse')) [Math.random()*800+200, Math.random()*600+200].forEach((f,i) => setTimeout(() => beep({ freq: f, type: 'sawtooth', duration: 0.06, gain: 0.05 }), i * 40));
        });
        audio.addEventListener('ended', () => activeAudios.delete(audio));
        return audio;
    }

    return {
        toggle,
        isEnabled() { return enabled; },
        playFile,
        click()     { beep({ freq: 800, duration: 0.05, gain: 0.04 }); },
        win()       { [880, 1100, 1320].forEach((f, i) => setTimeout(() => beep({ freq: f, type: 'sine', duration: 0.15, gain: 0.07 }), i * 100)); },
        error()     { beep({ freq: 180, type: 'sawtooth', duration: 0.18, gain: 0.08 }); },
        glitch()    { [Math.random()*800+200, Math.random()*600+200].forEach((f,i) => setTimeout(() => beep({ freq: f, type: 'sawtooth', duration: 0.06, gain: 0.05 }), i * 40)); },
        zawarudo()  { beep({ freq: 80, type: 'sawtooth', duration: 1.2, gain: 0.12 }); },
    };
})();

/* ═══════════════════════════════════════════════════════════
   [TERMINAL]
═══════════════════════════════════════════════════════════ */
const Terminal = (() => {
    const getOutput = () => document.getElementById('terminal-output');
    const getInput  = () => document.getElementById('terminal-input');

    const history = [];
    let   histIdx = -1;

    function print(html, cls = '', animate = true) {
        const el = document.createElement('p');
        if (cls) el.className = cls;
        const out = getOutput();
        out.appendChild(el);
        
        if (!animate) {
            el.innerHTML = html;
            out.scrollTop = out.scrollHeight;
            return;
        }

        let i = 0;
        let currentHTML = '';
        function type() {
            if (i >= html.length) {
                el.innerHTML = currentHTML;
                out.scrollTop = out.scrollHeight;
                return;
            }
            let char = html[i];
            if (char === '<') {
                let end = html.indexOf('>', i);
                if (end !== -1) {
                    currentHTML += html.substring(i, end + 1);
                    i = end + 1;
                } else {
                    currentHTML += html[i++];
                }
            } else if (char === '&') {
                let end = html.indexOf(';', i);
                if (end !== -1 && end - i < 8) {
                    currentHTML += html.substring(i, end + 1);
                    i = end + 1;
                } else {
                    currentHTML += html[i++];
                }
            } else {
                currentHTML += html[i++];
            }
            
            el.innerHTML = currentHTML + '<span style="opacity:0.7">█</span>';
            out.scrollTop = out.scrollHeight;
            
            if (char === ' ') {
                type();
            } else {
                setTimeout(type, 10);
            }
        }
        type();
    }

    function clear() { getOutput().innerHTML = ''; }

    function escHtml(s) {
        return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    }

    function run(raw) {
        const trimmed = raw.trim();
        if (!trimmed) return;

        history.unshift(trimmed);
        histIdx = -1;

        const displayDir = currentDir === '/home/guest' ? '~' : currentDir;
        print(`<span class="prompt">guest@web:${displayDir}$</span> ${escHtml(trimmed)}`, '', false);
        Sound.click();

        const parts = trimmed.toLowerCase().split(/\s+/);
        const name  = parts[0];
        const args  = parts.slice(1);
        const cmd   = COMMAND_REGISTRY[name];

        if (cmd) {
            const result = cmd.fn(args);
            if (result !== null && result !== undefined) print(result);
        } else {
            print(`<span class="error">bash: ${escHtml(name)}: command not found</span>`);
            Sound.error();
        }
    }

    function init() {
        const inp = getInput();
        if (!inp) return;

        inp.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                run(inp.value);
                inp.value = '';
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (histIdx < history.length - 1) inp.value = history[++histIdx] || '';
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                inp.value = histIdx > 0 ? history[--histIdx] : '';
                if (histIdx <= 0) histIdx = -1;
            }
        });

        document.getElementById('terminal-section')
            ?.addEventListener('click', () => inp.focus());
    }

    return { init, print, clear, run };
})();

/* ═══════════════════════════════════════════════════════════
   [MUSIC] Cassette Boombox Player
═══════════════════════════════════════════════════════════ */
const Music = (() => {
    let currentIndex = 0;
    let isPlaying    = false;
    let vuInterval   = null;

    const get = id => document.getElementById(id);

    function escHtml(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

    function buildTrackList() {
        const el = get('track-list');
        if (!el) return;
        el.innerHTML = MUSIC_CONFIG.map((t, i) => `
            <div class="track-item${i === currentIndex ? ' active' : ''}" data-index="${i}">
                <span class="track-num">${String(i+1).padStart(2,'0')}</span>
                <span class="track-name">${escHtml(t.title)}</span>
                <span class="track-artist-small">${escHtml(t.artist)}</span>
            </div>
        `).join('');
        el.querySelectorAll('.track-item').forEach(item => {
            item.addEventListener('click', () => playTrack(+item.dataset.index));
        });
    }

    function highlightTrack() {
        get('track-list')?.querySelectorAll('.track-item').forEach((el, i) => {
            el.classList.toggle('active', i === currentIndex);
        });
    }

    function updateNowPlaying() {
        const t = MUSIC_CONFIG[currentIndex];
        if (!t) return;
        const title  = get('track-title');
        const artist = get('track-artist');
        const label  = get('cassette-label-text');
        const cover  = get('album-art');
        const ph     = get('album-art-placeholder');

        if (title)  title.textContent  = t.title  || '---';
        if (artist) artist.textContent = t.artist || '---';
        if (label)  label.textContent  = `${t.artist} — ${t.title}`;

        if (cover && ph) {
            if (t.cover) {
                cover.src = t.cover;
                cover.style.display = 'block';
                ph.style.display    = 'none';
            } else {
                cover.style.display = 'none';
                ph.style.display    = 'flex';
            }
        }
    }

    function setReels(spin) {
        ['left-reel','right-reel'].forEach(id => {
            get(id)?.classList.toggle('spinning', spin);
        });
    }

    function animateVU(on) {
        clearInterval(vuInterval);
        const bars = document.querySelectorAll('.vu-bar');
        const cones = document.querySelectorAll('.speaker-cone');
        if (!on) {
            bars.forEach(b => { b.style.height = '5%'; b.style.background = 'var(--neon-violet)'; });
            cones.forEach(c => { c.style.transform = 'scale(1)'; c.style.boxShadow = '0 0 5px rgba(157,0,255,0.15)'; c.style.borderColor = '#333'; });
            return;
        }
        let frame = 0;
        vuInterval = setInterval(() => {
            frame++;
            let maxVal = 0;
            bars.forEach(b => {
                const h = Math.random() * 82 + 8;
                if (h > maxVal) maxVal = h;
                b.style.height = `${h}%`;
                b.style.background = h > 70 ? 'var(--neon-cyan)' : h > 40 ? 'var(--neon-magenta)' : 'var(--neon-violet)';
            });

            // Simular ritmo de bajos (golpe de subwoofer cada 4 frames o por picos de volumen)
            let bass = 0;
            if (frame % 4 === 0 || maxVal > 75) {
                // Golpe de bajo fuerte
                bass = 0.22 + Math.random() * 0.14;
            } else {
                // Vibración de frecuencias medias/agudas menores
                bass = 0.04 + Math.random() * 0.08;
            }

            const scale = 1 + bass;
            cones.forEach(c => {
                c.style.transform = `scale(${scale})`;
                if (bass > 0.2) {
                    c.style.boxShadow = '0 0 12px var(--neon-cyan)';
                    c.style.borderColor = 'var(--neon-cyan)';
                } else {
                    c.style.boxShadow = '0 0 5px rgba(157,0,255,0.2)';
                    c.style.borderColor = '#444';
                }
            });
        }, 110);
    }

    function setPlayBtn(playing) {
        const btn = get('btn-play');
        if (btn) btn.textContent = playing ? '⏸' : '▶';
    }

    function playTrack(index) {
        if (index < 0) index = MUSIC_CONFIG.length - 1;
        if (index >= MUSIC_CONFIG.length) index = 0;
        currentIndex = index;

        const track = MUSIC_CONFIG[currentIndex];
        updateNowPlaying();
        highlightTrack();

        const audio = get('audio-player');
        if (!audio) return;

        if (track.url) {
            audio.src = track.url;
            audio.play()
                .then(() => { isPlaying = true; setReels(true); animateVU(true); setPlayBtn(true); })
                .catch(() => { isPlaying = false; setReels(false); animateVU(false); setPlayBtn(false); });
        } else {
            // No URL — drive UI only
            audio.src = '';
            isPlaying = true;
            setReels(true);
            animateVU(true);
            setPlayBtn(true);
        }
    }

    function togglePlay() {
        const audio = get('audio-player');
        if (!MUSIC_CONFIG.length || !audio) return;

        if (isPlaying) {
            if (audio.src) audio.pause();
            isPlaying = false;
            setReels(false);
            animateVU(false);
            setPlayBtn(false);
        } else {
            const track = MUSIC_CONFIG[currentIndex];
            // Si es la primera vez que se da play y no se ha cargado un archivo de audio
            if (track && track.url && !audio.getAttribute('src')) {
                audio.src = track.url;
            }

            if (audio.src) {
                audio.play()
                    .then(() => {
                        isPlaying = true;
                        setReels(true);
                        animateVU(true);
                        setPlayBtn(true);
                    })
                    .catch(() => {
                        // Fallback virtual si falla la carga física
                        isPlaying = true;
                        setReels(true);
                        animateVU(true);
                        setPlayBtn(true);
                    });
            } else {
                // Conducir UI de forma virtual si no hay URL configurada
                isPlaying = true;
                setReels(true);
                animateVU(true);
                setPlayBtn(true);
            }
        }
    }

    function init() {
        buildTrackList();
        updateNowPlaying();

        get('audio-player')?.addEventListener('ended', () => playTrack(currentIndex + 1));

        get('btn-play')?.addEventListener('click', togglePlay);
        get('btn-prev')?.addEventListener('click', () => playTrack(currentIndex - 1));
        get('btn-next')?.addEventListener('click', () => playTrack(currentIndex + 1));
        get('btn-rewind')?.addEventListener('click', () => {
            const a = get('audio-player');
            (a && a.currentTime > 3) ? a.currentTime = 0 : playTrack(currentIndex - 1);
        });
        get('btn-forward')?.addEventListener('click', () => {
            const a = get('audio-player');
            if (a) a.currentTime = Math.min(a.currentTime + 10, a.duration || 0);
        });

        const vol = get('volume-slider');
        const aud = get('audio-player');
        if (vol && aud) {
            aud.volume = parseFloat(vol.value);
            vol.addEventListener('input', () => aud.volume = parseFloat(vol.value));
        }
    }

    function externalPause() {
        const audio = get('audio-player');
        if (audio && isPlaying) {
            if (audio.src) audio.pause();
            setReels(false);
            animateVU(false);
        }
    }

    function externalResume() {
        const audio = get('audio-player');
        if (audio && isPlaying) {
            if (audio.src) {
                audio.play().then(() => {
                    setReels(true);
                    animateVU(true);
                }).catch(() => {});
            } else {
                setReels(true);
                animateVU(true);
            }
        }
    }

    return {
        init,
        pause: externalPause,
        resume: externalResume,
        getIsPlaying() { return isPlaying; }
    };
})();

/* ═══════════════════════════════════════════════════════════
   [GUESTBOOK]
═══════════════════════════════════════════════════════════ */
const Guestbook = (() => {
    const LOCAL_KEY    = 'gb_local_messages';
    const BLOCKLIST_KEY= 'gb_blocklist';
    let   currentTab   = 'es';

    function escHtml(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

    function getBlocklist() {
        try { return JSON.parse(localStorage.getItem(BLOCKLIST_KEY) || '[]'); }
        catch { return []; }
    }

    function getMessages() {
        try { return JSON.parse(localStorage.getItem(LOCAL_KEY) || '[]'); }
        catch { return []; }
    }

    function saveMessage(msg) {
        const all = getMessages();
        all.unshift(msg);
        localStorage.setItem(LOCAL_KEY, JSON.stringify(all.slice(0, 100)));
    }

    function renderMessages(lang) {
        lang = lang || currentTab;
        const el = document.getElementById('gb-messages');
        if (!el) return;

        const blocked  = getBlocklist();
        const messages = getMessages().filter(m => m.language === lang && !blocked.includes(m.id));

        if (!messages.length) {
            el.innerHTML = `<p class="gb-empty">${i18n('guestbook.empty', '// Sin mensajes aún.')}</p>`;
            return;
        }

        el.innerHTML = messages.map(m => `
            <div class="gb-entry">
                <div class="gb-entry-header">
                    <span class="gb-alias">${escHtml(m.alias)}</span>
                    <span class="gb-date">${m.date}</span>
                </div>
                <div class="gb-text">${escHtml(m.message)}</div>
            </div>
        `).join('');
    }

    function init() {
        // Tabs
        document.querySelectorAll('.gb-tab').forEach(btn => {
            btn.addEventListener('click', () => {
                currentTab = btn.dataset.lang;
                document.querySelectorAll('.gb-tab').forEach(b => b.classList.toggle('active', b.dataset.lang === currentTab));
                const gbLang = document.getElementById('gb-language');
                if (gbLang) gbLang.value = currentTab;
                renderMessages(currentTab);
            });
        });

        // Char counter
        const textarea = document.getElementById('gb-message');
        const counter  = document.getElementById('gb-char-remaining');
        textarea?.addEventListener('input', () => {
            if (counter) counter.textContent = 300 - textarea.value.length;
        });

        // Form submission
        const form   = document.getElementById('guestbook-form');
        const status = document.getElementById('gb-status');

        form?.addEventListener('submit', async e => {
            e.preventDefault();
            const alias   = document.getElementById('gb-alias').value.trim();
            const message = document.getElementById('gb-message').value.trim();
            const language= document.getElementById('gb-language').value || currentTab;
            if (!alias || !message) return;

            const msg = {
                id: `local_${Date.now()}`,
                alias, message, language,
                date: new Date().toLocaleDateString(
                    language === 'es' ? 'es-ES' : 'en-US',
                    { year: 'numeric', month: 'short', day: 'numeric' }
                ),
            };
            saveMessage(msg);
            renderMessages(currentTab);

            // Try Formspree
            if (form.action && !form.action.includes('YOUR_FORM_ID')) {
                try {
                    await fetch(form.action, {
                        method: 'POST',
                        body: new FormData(form),
                        headers: { Accept: 'application/json' },
                    });
                } catch { /* no-op */ }
            }

            form.reset();
            if (counter) counter.textContent = '300';
            if (status) {
                status.textContent = '// Mensaje enviado. ゴゴゴゴゴ';
                status.style.color = 'var(--neon-cyan)';
                setTimeout(() => { status.textContent = ''; }, 4000);
            }
            Sound.win();
        });

        renderMessages(currentTab);
    }

    return { init, renderMessages };
})();

/* ═══════════════════════════════════════════════════════════
   [EASTER-EGGS]
═══════════════════════════════════════════════════════════ */

/* ── Secret clue system ── */
let hasZawarudo = false;
let hasKonami = false;
let hasMatrix = false;

function showToastMsg(text, duration = 5000) {
    const toast = document.getElementById('secret-toast');
    if (!toast) return;
    toast.textContent = text;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), duration);
}

function triggerSecretStep(stepId) {
    if (stepId === 1) { // Zawarudo
        if (!hasZawarudo) {
            hasZawarudo = true;
            if (!hasKonami) {
                showToastMsg('// PISTA 1: Algo ha cambiado en el ambiente... Prueba una combinación de teclas extraña.', 6000);
            } else {
                showToastMsg('// PISTA 2: El tiempo se ha detenido... Ejecuta el comando en la sombra (Cruza la X entre el Control y el Cambio).', 6000);
            }
        } else {
            showToastMsg('// PISTA 1: El tiempo ya está bajo tu control...', 4000);
        }
    } else if (stepId === 2) { // Konami
        if (!hasKonami) {
            hasKonami = true;
            if (!hasZawarudo) {
                showToastMsg('// PISTA 1: Código aceptado, pero... aún no es el momento. No tenemos tiempo para esto.', 6000);
            } else {
                showToastMsg('// PISTA 2: La barrera cede... Ejecuta el comando en la sombra (Busca la X oculta bajo el Control y el Cambio).', 6000);
            }
        } else {
            showToastMsg('// PISTA 2: Las teclas ya cumplieron su propósito...', 4000);
        }
    } else if (stepId === 3) { // Matrix (Ctrl+Shift+X)
        if (!hasZawarudo || !hasKonami) {
            showToastMsg('// El sistema rechaza tu comando. Falta energía en el ambiente.', 4000);
        } else if (!hasMatrix) {
            hasMatrix = true;
            showToastMsg('// PISTA 3: La marca del sacrificio reacciona... Búscala y actívala.', 6000);
        } else {
            showToastMsg('// PISTA 3: El sistema ya está en tus manos...', 4000);
        }
    } else if (stepId === 4) { // Eclipse Finishes
        if (hasMatrix) {
            showToastMsg('// EL RITUAL ESTÁ COMPLETO. REDIRECCIONANDO...', 6000);
            setTimeout(() => {
                window.location.href = 'secret.html';
            }, 3000);
        } else {
            showToastMsg('// La marca resplandece pero el ritual está incompleto. Faltan pasos previos.', 4000);
        }
    }
}

function showClue(n) {
    triggerSecretStep(n);
}

const STAND_POOL = ['stand.ora','stand.zawarudo','stand.crazy','stand.killer','stand.gold'];

const EasterEggs = (() => {
    let matrixActive = false;
    let matrixAnim   = null;
    let zawTimeout   = null;
    let eclTimeout   = null;

    /* ── Matrix rain ── */
    function toggleMatrix() {
        const canvas = document.getElementById('matrix-canvas');
        if (!canvas) return;
        matrixActive = !matrixActive;

        if (!matrixActive) {
            cancelAnimationFrame(matrixAnim);
            canvas.style.opacity = '0';
            setTimeout(() => { canvas.style.display = 'none'; }, 600);
            return;
        }

        canvas.style.display  = 'block';
        canvas.style.opacity  = '0.05';
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
        const ctx  = canvas.getContext('2d');
        const cols  = Math.floor(canvas.width / 18);
        const drops = Array(cols).fill(1);
        const chars = 'アイウエオカキクケコサシスセソタチツ01SIVOLECK';

        (function draw() {
            ctx.fillStyle = 'rgba(0,0,0,0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#006677';
            ctx.font      = '14px monospace';
            drops.forEach((y, i) => {
                ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * 18, y * 18);
                if (y * 18 > canvas.height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            });
            if (matrixActive) matrixAnim = requestAnimationFrame(draw);
        })();
    }

    let wasPlayingBeforeTimeStop = false;
    let zawSfx = null;

    /* ── ZA WARUDO ── */
    function zaWarudo() {
        const el = document.getElementById('zawarudo-overlay');
        if (!el) return;

        // Pausar reproductor si está sonando
        const mainAudio = document.getElementById('audio-player');
        if (mainAudio && !mainAudio.paused && Music.getIsPlaying()) {
            wasPlayingBeforeTimeStop = true;
            Music.pause();
        } else {
            wasPlayingBeforeTimeStop = false;
        }

        // Reproducir el archivo de audio
        if (zawSfx) { try { zawSfx.pause(); } catch(e){} }
        zawSfx = Sound.playFile('music/Zawarudo.mp3', 0.85);

        document.body.style.overflow = 'hidden';
        el.classList.add('active');
        showClue(1);
        clearTimeout(zawTimeout);
        zawTimeout = setTimeout(() => {
            document.body.style.overflow = '';
            el.classList.remove('active');
            // Reanudar música si estaba sonando antes del paro temporal
            if (wasPlayingBeforeTimeStop) {
                Music.resume();
            }
        }, 4000);
    }

    let wasPlayingBeforeEclipse = false;
    let eclSfx = null;

    /* ── Eclipse ── */
    function startEclipse() {
        const el = document.getElementById('eclipse-overlay');
        if (!el) return;

        // Pausar reproductor si está sonando
        const mainAudio = document.getElementById('audio-player');
        if (mainAudio && !mainAudio.paused && Music.getIsPlaying()) {
            wasPlayingBeforeEclipse = true;
            Music.pause();
        } else {
            wasPlayingBeforeEclipse = false;
        }

        // Reproducir el archivo de audio
        if (eclSfx) { try { eclSfx.pause(); } catch(e){} }
        eclSfx = Sound.playFile('music/Eclipse.mp3', 0.45);

        el.classList.add('active');
        
        // Citas del sacrificio
        const quotes = [
            { text: '«Un hombre atesora algo con todo su ser que supera todo lo demás. Esto se refiere a un sueño, algo que no se debe cumplir por los demás, sino por uno mismo.»', color: '#e0e0e0' },
            { text: '«Sin importar su rango, clase social u origen, un hombre siempre persigue sus sueños, se ve respaldado por ellos, sufre por ellos y vive por ellos. Incluso es capaz de morir por sus sueños.»', color: '#d4b8ff' },
            { text: '«Aunque un sueño lo abandone, seguirá latente y ardiendo en su corazón al menos una vez en la vida. Los hombres fantasean con vivir como mártires de un dios conocido como "sueño".»', color: '#ffccaa' },
            { text: '«Simplemente existir solo porque uno ha nacido es el tipo de noción que odio. No lo soporto.»', color: '#ff99aa' },
            { text: '«Son mis nobles soldados. Son camaradas importantes que se dedican a mi sueño. Sin embargo... no son necesariamente mis amigos.»', color: '#cc0000' },
            { text: '«A mis ojos, un verdadero amigo es alguien que nunca se aferra al sueño de otro. Alguien que no es forzado por nadie, sino que determina su propia razón de vivir, y sigue adelante sin mirar atrás.»', color: '#ff0000' },
            { text: '«Y si alguien pisoteara su sueño, él lo defendería con su alma, incluso si ese alguien fuera yo. Para mí, un amigo es aquel que está a mi misma altura.»', color: '#ff4444' }
        ];

        const existingQuote = el.querySelector('.eclipse-quote');
        if (existingQuote) existingQuote.remove();

        const quoteEl = document.createElement('div');
        quoteEl.className = 'eclipse-quote';
        el.appendChild(quoteEl);
        let qIdx = 0;
        let typeTimeout;

        const finishEclipse = () => {
            el.classList.remove('active');
            if (wasPlayingBeforeEclipse) Music.resume();
            if (quoteEl) quoteEl.remove();
            triggerSecretStep(4);
        };

        const showNextQuote = () => {
            if (!el.classList.contains('active')) return;
            if (qIdx >= quotes.length) {
                finishEclipse();
                return;
            }
            const q = quotes[qIdx++];
            quoteEl.style.color = q.color;
            quoteEl.style.opacity = '1';
            quoteEl.style.animation = 'none';
            quoteEl.textContent = '';
            
            let charIdx = 0;
            const typeChar = () => {
                if (!el.classList.contains('active')) return;
                quoteEl.textContent += q.text.charAt(charIdx);
                charIdx++;
                if (charIdx < q.text.length) {
                    typeTimeout = setTimeout(typeChar, 35);
                } else {
                    typeTimeout = setTimeout(() => {
                        quoteEl.style.transition = 'opacity 1s';
                        quoteEl.style.opacity = '0';
                        typeTimeout = setTimeout(() => {
                            quoteEl.style.transition = 'none';
                            showNextQuote();
                        }, 1000);
                    }, 2000);
                }
            };
            typeChar();
        };
        showNextQuote();

        clearTimeout(eclTimeout);
        eclTimeout = setTimeout(() => {
            if (el.classList.contains('active')) finishEclipse();
        }, 60000);

        const brand = document.getElementById('brand-sacrifice');
        if (brand) {
            brand.classList.add('brand-activated');
            setTimeout(() => brand.classList.remove('brand-activated'), 6500);
        }
    }

    /* ── Stand command ── */
    function standCommand() {
        if (Math.random() < 0.18) {
            return i18n('stand.bach');
        }
        const key = STAND_POOL[Math.floor(Math.random() * STAND_POOL.length)];
        if (key === 'stand.zawarudo') setTimeout(zaWarudo, 500);
        Sound.win();
        return i18n(key);
    }

    /* ── Overlay click-to-dismiss ── */
    function initOverlays() {
        document.getElementById('eclipse-overlay')?.addEventListener('click', () => {
            document.getElementById('eclipse-overlay').classList.remove('active');
            clearTimeout(eclTimeout);
            // Reanudar música de fondo si se cierra el eclipse antes
            if (wasPlayingBeforeEclipse) {
                Music.resume();
            }
        });
    }

    /* ── Konami code ── */
    function initKonami() {
        const SEQ = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
        let n = 0;
        document.addEventListener('keydown', e => {
            n = (e.key === SEQ[n]) ? n + 1 : 0;
            if (n === SEQ.length) {
                n = 0;
                Terminal.print('// ↑↑↓↓←→←→BA — Konami code accepted!');
                showClue(2);
                Sound.win();
            }
        });
    }

    /* ── Ctrl+Shift+X ── */
    function initSecretKey() {
        document.addEventListener('keydown', e => {
            if (e.ctrlKey && e.shiftKey && e.key === 'X') {
                e.preventDefault();
                showClue(3);
                Sound.glitch();
            }
        });
    }

    /* ── Hidden clickables ── */
    function initHiddenElements() {
        document.getElementById('brand-sacrifice')?.addEventListener('click', startEclipse);

        document.getElementById('creeper-face')?.addEventListener('click', () => {
            Sound.error();
            document.body.style.transition = 'filter 0.15s';
            document.body.style.filter = 'sepia(0.6) hue-rotate(90deg) brightness(1.15)';
            setTimeout(() => { document.body.style.filter = ''; }, 700);
        });

        let logoClicks = 0;
        document.getElementById('alias-trigger')?.addEventListener('click', () => {
            if (++logoClicks >= 3) { logoClicks = 0; setTimeout(zaWarudo, 200); }
        });
    }

    function init() {
        initOverlays();
        initKonami();
        initSecretKey();
        initHiddenElements();
    }

    return { init, toggleMatrix, zaWarudo, startEclipse, standCommand };
})();

/* ═══════════════════════════════════════════════════════════
   [ARCADE]
═══════════════════════════════════════════════════════════ */
const Arcade = (() => {

    function initGuessGame() {
        let secret   = Math.floor(Math.random() * 21);
        let attempts = 0;

        const inp  = document.getElementById('guess-input');
        const btn  = document.getElementById('guess-btn');
        const fb   = document.getElementById('game-feedback');
        const cnt  = document.getElementById('prime-counter');
        if (!btn) return;

        function reset() {
            secret = Math.floor(Math.random() * 21);
            attempts = 0;
            if (fb)  fb.textContent  = '';
            if (inp) inp.value       = '';
            if (cnt) cnt.textContent = '0';
        }

        btn.addEventListener('click', () => {
            const guess = parseInt(inp?.value, 10);
            if (isNaN(guess) || guess < 0 || guess > 20) {
                if (fb) { fb.textContent = '// Entre 0 y 20.'; fb.style.color = '#ff3333'; }
                return;
            }
            attempts++;
            if (cnt) cnt.textContent = attempts;
            if (guess === secret) {
                Sound.win();
                fb.textContent = `✓ ¡Correcto! Era ${secret}. Intentos: ${attempts}`;
                fb.style.color = 'var(--neon-cyan)';
                setTimeout(reset, 2500);
            } else {
                Sound.error();
                fb.textContent = guess < secret ? '▲ Más alto' : '▼ Más bajo';
                fb.style.color = 'var(--neon-magenta)';
            }
        });
        inp?.addEventListener('keydown', e => { if (e.key === 'Enter') btn.click(); });
    }

    function isPrime(n) {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
        return true;
    }
    function nextPrime(n) { let x = n + 1; while (!isPrime(x)) x++; return x; }

    function initPrimeGame() {
        let current = 2;
        let streak  = 0;

        const disp = document.getElementById('current-prime');
        const str  = document.getElementById('prime-streak');
        const inp  = document.getElementById('prime-input');
        const btn  = document.getElementById('prime-btn');
        const fb   = document.getElementById('prime-feedback');
        if (!btn) return;

        btn.addEventListener('click', () => {
            const val     = parseInt(inp?.value, 10);
            const correct = nextPrime(current);
            if (val === correct) {
                Sound.win();
                streak++;
                current = correct;
                if (disp) disp.textContent = current;
                if (str)  str.textContent  = streak;
                if (fb)   { fb.textContent = '✓ Correcto!'; fb.style.color = 'var(--neon-cyan)'; }
            } else {
                Sound.error();
                streak = 0;
                if (str) str.textContent = '0';
                if (fb)  { fb.textContent = `✗ Era ${correct}`; fb.style.color = '#ff3333'; }
            }
            if (inp) inp.value = '';
        });
        inp?.addEventListener('keydown', e => { if (e.key === 'Enter') btn.click(); });
    }

    return { init() { initGuessGame(); initPrimeGame(); } };
})();

/* ═══════════════════════════════════════════════════════════
   [MISC] Particles · Cursor · Scroll · Visitor · Nav
═══════════════════════════════════════════════════════════ */

function initParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    const colors = ['#9d00ff','#00f3ff','#ff00ff','#ff3333','#8B0000'];
    for (let i = 0; i < 35; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.cssText = [
            `position:absolute`,
            `width:${Math.random()*2+1}px`,
            `height:${Math.random()*2+1}px`,
            `background:${colors[Math.floor(Math.random()*colors.length)]}`,
            `border-radius:50%`,
            `top:${Math.random()*100}%`,
            `left:${Math.random()*100}%`,
            `animation:float${Math.floor(Math.random()*3)+1} ${10+Math.random()*20}s linear infinite`,
            `opacity:${(Math.random()*0.35+0.08).toFixed(2)}`,
        ].join(';');
        container.appendChild(p);
    }
}

function initCursor() {
    const ring = document.querySelector('.custom-cursor');
    const dot  = document.querySelector('.custom-cursor-dot');
    if (!ring || !dot) return;

    let mx=0, my=0, cx=0, cy=0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

    Object.assign(dot.style, { position:'fixed', width:'6px', height:'6px', borderRadius:'50%',
        background:'var(--neon-cyan)', pointerEvents:'none', zIndex:'9998', transform:'translate(-50%,-50%)' });
    Object.assign(ring.style, { position:'fixed', width:'28px', height:'28px', borderRadius:'50%',
        border:'1px solid rgba(0,243,255,0.4)', pointerEvents:'none', zIndex:'9997',
        transform:'translate(-50%,-50%)', transition:'width 0.2s,height 0.2s,border-color 0.2s' });

    (function loop() {
        cx += (mx - cx) * 0.12; cy += (my - cy) * 0.12;
        ring.style.left = cx + 'px'; ring.style.top = cy + 'px';
        dot.style.left  = mx + 'px'; dot.style.top  = my + 'px';
        requestAnimationFrame(loop);
    })();

    const expand  = () => { ring.style.width = '44px'; ring.style.height = '44px'; ring.style.borderColor = 'rgba(255,0,255,0.6)'; };
    const shrink  = () => { ring.style.width = '28px'; ring.style.height = '28px'; ring.style.borderColor = 'rgba(0,243,255,0.4)'; };
    document.querySelectorAll('a, button, .fav-card, .track-item, .transport-btn').forEach(el => {
        el.addEventListener('mouseenter', expand);
        el.addEventListener('mouseleave', shrink);
    });
}

function initScrollReveal() {
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('active'); obs.unobserve(e.target); }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

    // Scroll-reactive hue on particles
    window.addEventListener('scroll', () => {
        const pct = window.scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1);
        document.documentElement.style.setProperty('--scroll-hue', `${Math.round(pct * 120)}deg`);
    }, { passive: true });
}

function initVisitorCounter() {
    const el = document.getElementById('count-number');
    if (!el) return;

    // Cambia esto para reiniciar a cero
    const username = 'sivoleck-cyber-final'; 
    const tema = 'rule34'; 
    
    el.innerHTML = `
        <img 
            src="https://count.getloli.com/get/@${username}?theme=${tema}" 
            alt="visitor counter" 
            style="
                height: 80px; 
                image-rendering: pixelated;
                filter: hue-rotate(250deg) brightness(1.5) drop-shadow(0 0 10px #ff00ff);
            "
        >`;
}

function initMobileNav() {
    const btn  = document.getElementById('hamburger-btn');
    const mNav = document.getElementById('mobile-nav');
    if (!btn || !mNav) return;

    function close() {
        btn.classList.remove('open');
        mNav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        mNav.setAttribute('aria-hidden', 'true');
    }

    btn.addEventListener('click', e => {
        e.stopPropagation();
        const open = btn.classList.toggle('open');
        mNav.classList.toggle('open', open);
        btn.setAttribute('aria-expanded', open);
        mNav.setAttribute('aria-hidden', !open);
    });

    mNav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('click', e => {
        if (!btn.contains(e.target) && !mNav.contains(e.target)) close();
    });
}

function initSoundToggle() {
    const btn = document.getElementById('sound-toggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
        const on = Sound.toggle();
        btn.textContent = on ? '🔊' : '🔇';
        if (on) Sound.click();
    });
}

function initLangToggle() {
    const toggle = () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        applyI18n();
        Guestbook.renderMessages(currentLang);
        Sound.click();
    };
    document.getElementById('lang-toggle')?.addEventListener('click', toggle);
    document.getElementById('lang-toggle-mobile')?.addEventListener('click', toggle);
}

function initNavHighlight() {
    const links = document.querySelectorAll('header nav a[href^="#"]');
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${e.target.id}`));
            }
        });
    }, { threshold: 0.4 });
    document.querySelectorAll('section[id]').forEach(s => obs.observe(s));
}

/* ═══════════════════════════════════════════════════════════
   [INIT] — Boot sequence
═══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

    /* 1. Language */
    applyI18n();

    /* 2. UI essentials */
    initParticles();
    initCursor();
    initScrollReveal();
    initMobileNav();
    initSoundToggle();
    initLangToggle();
    initNavHighlight();

    /* 3. Features */
    Terminal.init();
    Music.init();
    Guestbook.init();
    Arcade.init();
    EasterEggs.init();

    /* 4. Visitor counter */
    initVisitorCounter();

    /* 5. Typing animation in hero */
    const typingEl = document.querySelector('.typing-text');
    if (typingEl) {
        const text = typingEl.textContent.trim();
        typingEl.textContent = '';
        let i = 0;
        const type = () => {
            if (i < text.length) {
                typingEl.textContent += text[i++];
                setTimeout(type, 32 + Math.random() * 28);
            }
        };
        setTimeout(type, 500);
    }

    /* 6. Header shrink on scroll */
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 60);
        }, { passive: true });
    }

    console.log('%c SIVOLECK_OS v2.0 ', 'background:#9d00ff;color:#fff;font-size:1rem;font-family:monospace;padding:4px 12px;');
    console.log('%c Escribe "help" en la terminal de la página ', 'color:#00f3ff;font-family:monospace');
});
