// Sistema de Temas por Temporadas y Días Festivos
class SeasonalTheme {
    constructor() {
        this.currentTheme = this.detectTheme();
        this.applyTheme();
    }

    detectTheme() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const day = today.getDate();

        // Navidad (1 Dic - 25 Dic)
        if ((month === 12 && day >= 1 && day <= 25)) {
            return 'christmas';
        }

        // Año Nuevo (26 Dic - 14 Ene)
        if ((month === 12 && day >= 26) || (month === 1 && day <= 14)) {
            return 'newyear';
        }

        // Halloween (15 Oct - 10 Nov)
        if ((month === 10 && day >= 15) || (month === 11 && day <= 10)) {
            return 'halloween';
        }

        // Semana Santa (40 días antes de Pascua - variable, aproximadamente Mar 20 - Abr 20)
        if ((month === 3 && day >= 20) || (month === 4 && day <= 20)) {
            return 'eastersunday';
        }

        // Día del Trabajo - Perú (1 Mayo)
        if (month === 5 && day === 1) {
            return 'labourday';
        }

        // Batalla de Arica - Perú (27 Mayo)
        if (month === 5 && day === 27) {
            return 'patrioticday';
        }

        // Fiestas Patrias - Perú (28-29 Julio)
        if (month === 7 && (day === 28 || day === 29)) {
            return 'independenceday';
        }

        // Día de Muertos - Perú (1-2 Noviembre)
        if (month === 11 && (day === 1 || day === 2)) {
            return 'dayofthedead';
        }

        // Tema por defecto
        return 'default';
    }

    applyTheme() {
        // Agregar estilos CSS temáticos
        this.addSeasonalCSS();

        // Agregar efectos visuales
        this.addSeasonalEffects();

        // Cambiar colores de navbar y footer
        this.applyThemeColors();

        // Cambiar tagline según la temporada
        this.changeTagline();

        // Agregar decoraciones
        this.addDecorations();
    }

    addSeasonalCSS() {
        const style = document.createElement('style');
        
        const themes = {
            christmas: `
                :root {
                    --theme-primary: #C41E3A;
                    --theme-secondary: #165B33;
                    --theme-accent: #FFD700;
                }
                body { background: linear-gradient(135deg, #0a1f47 0%, #1a3a52 100%); }
                .navbar { background: linear-gradient(135deg, rgba(196, 30, 58, 0.95) 0%, rgba(22, 91, 51, 0.95) 100%) !important; }
                .footer { background: linear-gradient(135deg, #C41E3A 0%, #165B33 100%) !important; }
                /* Nieve cayendo */
                @keyframes snowfall {
                    0% { transform: translateY(-10vh) translateX(0); opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translateY(100vh) translateX(100px); opacity: 0; }
                }
            `,
            newyear: `
                :root {
                    --theme-primary: #FFD700;
                    --theme-secondary: #FF1493;
                    --theme-accent: #00CED1;
                }
                .navbar { background: linear-gradient(135deg, rgba(255, 215, 0, 0.95) 0%, rgba(255, 20, 147, 0.95) 100%) !important; }
                .footer { background: linear-gradient(135deg, #FFD700 0%, #FF1493 100%) !important; }
                /* Confeti */
                @keyframes confetti-fall {
                    0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
                    100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
                }
            `,
            halloween: `
                :root {
                    --theme-primary: #FF6600;
                    --theme-secondary: #1a1a1a;
                    --theme-accent: #9D00FF;
                }
                .navbar { background: linear-gradient(135deg, rgba(255, 102, 0, 0.95) 0%, rgba(26, 26, 26, 0.95) 100%) !important; }
                .footer { background: linear-gradient(135deg, #FF6600 0%, #1a1a1a 100%) !important; }
                body { filter: brightness(0.9); }
                /* Efecto de telaraña */
                @keyframes spider-web {
                    0% { opacity: 0; }
                    50% { opacity: 0.3; }
                    100% { opacity: 0; }
                }
            `,
            eastersunday: `
                :root {
                    --theme-primary: #FFB6C1;
                    --theme-secondary: #87CEEB;
                    --theme-accent: #90EE90;
                }
                .navbar { background: linear-gradient(135deg, rgba(255, 182, 193, 0.95) 0%, rgba(135, 206, 235, 0.95) 100%) !important; }
                .footer { background: linear-gradient(135deg, #FFB6C1 0%, #87CEEB 100%) !important; }
                /* Huevos flotando */
                @keyframes egg-bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
            `,
            labourday: `
                :root {
                    --theme-primary: #DC143C;
                    --theme-secondary: #FFD700;
                    --theme-accent: #000000;
                }
                .navbar { background: linear-gradient(135deg, rgba(220, 20, 60, 0.95) 0%, rgba(255, 215, 0, 0.95) 100%) !important; }
                .footer { background: linear-gradient(135deg, #DC143C 0%, #FFD700 100%) !important; }
            `,
            patrioticday: `
                :root {
                    --theme-primary: #ED2939;
                    --theme-secondary: #FFFFFF;
                    --theme-accent: #0066CC;
                }
                .navbar { background: linear-gradient(135deg, rgba(237, 41, 57, 0.95) 0%, rgba(0, 102, 204, 0.95) 100%) !important; }
                .footer { background: linear-gradient(135deg, #ED2939 0%, #0066CC 100%) !important; }
            `,
            independenceday: `
                :root {
                    --theme-primary: #ED2939;
                    --theme-secondary: #FFFFFF;
                    --theme-accent: #0066CC;
                }
                .navbar { background: linear-gradient(135deg, rgba(237, 41, 57, 0.95) 0%, rgba(0, 102, 204, 0.95) 100%) !important; }
                .footer { background: linear-gradient(135deg, #ED2939 0%, #0066CC 100%) !important; }
                /* Fuegos artificiales */
                @keyframes fireworks {
                    0% { transform: translate(0, 0) scale(1); opacity: 1; }
                    100% { transform: translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
                }
            `,
            dayofthedead: `
                :root {
                    --theme-primary: #FFA500;
                    --theme-secondary: #8B0000;
                    --theme-accent: #FFD700;
                }
                .navbar { background: linear-gradient(135deg, rgba(255, 165, 0, 0.95) 0%, rgba(139, 0, 0, 0.95) 100%) !important; }
                .footer { background: linear-gradient(135deg, #FFA500 0%, #8B0000 100%) !important; }
                /* Calaveras flotando */
                @keyframes skull-float {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
            `,
            default: `
                :root {
                    --theme-primary: #1a5490;
                    --theme-secondary: #2b9fcc;
                    --theme-accent: #00d9ff;
                }
                .navbar { background: linear-gradient(135deg, rgba(26, 84, 144, 0.98) 0%, rgba(43, 159, 204, 0.98) 100%) !important; }
                .footer { background: linear-gradient(135deg, #0a1f47 0%, #0d2d5a 100%) !important; }
            `
        };

        style.textContent = themes[this.currentTheme] || themes.default;
        document.head.appendChild(style);
    }

    addSeasonalEffects() {
        switch(this.currentTheme) {
            case 'christmas':
                this.createSnowfall();
                break;
            case 'newyear':
                this.createConfetti();
                break;
            case 'halloween':
                this.createSpiderWeb();
                break;
            case 'eastersunday':
                this.createFloatingEggs();
                break;
            case 'independenceday':
            case 'patrioticday':
                this.createFireworks();
                break;
            case 'dayofthedead':
                this.createFloatingSkulls();
                break;
        }
    }

    createSnowfall() {
        const snowContainer = document.createElement('div');
        snowContainer.id = 'snow-container';
        snowContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
        `;

        for (let i = 0; i < 50; i++) {
            const snowflake = document.createElement('div');
            snowflake.innerHTML = '❄';
            snowflake.style.cssText = `
                position: absolute;
                top: -10px;
                left: ${Math.random() * 100}%;
                font-size: ${Math.random() * 10 + 10}px;
                color: white;
                opacity: ${Math.random() * 0.5 + 0.5};
                animation: snowfall ${Math.random() * 10 + 10}s linear infinite;
                animation-delay: ${Math.random() * 2}s;
            `;
            snowContainer.appendChild(snowflake);
        }

        document.body.appendChild(snowContainer);
    }

    createConfetti() {
        const confettiContainer = document.createElement('div');
        confettiContainer.id = 'confetti-container';
        confettiContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
        `;

        const colors = ['#FFD700', '#FF1493', '#00CED1', '#FF6347', '#32CD32'];
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: absolute;
                left: ${Math.random() * 100}%;
                top: -10px;
                width: 10px;
                height: 10px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                animation: confetti-fall ${Math.random() * 5 + 3}s linear infinite;
                animation-delay: ${Math.random() * 2}s;
            `;
            confettiContainer.appendChild(confetti);
        }

        document.body.appendChild(confettiContainer);
    }

    createSpiderWeb() {
        const webContainer = document.createElement('div');
        webContainer.id = 'spider-web-container';
        webContainer.style.cssText = `
            position: fixed;
            top: 0;
            right: 0;
            width: 200px;
            height: 200px;
            z-index: 1;
            pointer-events: none;
        `;

        const web = document.createElement('svg');
        web.viewBox = '0 0 200 200';
        web.style.cssText = 'width: 100%; height: 100%;';
        web.innerHTML = `
            <line x1="100" y1="0" x2="100" y2="100" stroke="gray" stroke-width="2" opacity="0.5"/>
            <line x1="100" y1="100" x2="140" y2="140" stroke="gray" stroke-width="2" opacity="0.5"/>
            <line x1="100" y1="100" x2="60" y2="140" stroke="gray" stroke-width="2" opacity="0.5"/>
            <circle cx="100" cy="100" r="5" fill="black"/>
        `;
        webContainer.appendChild(web);

        // Araña
        const spider = document.createElement('div');
        spider.innerHTML = '🕷';
        spider.style.cssText = `
            position: absolute;
            top: 100px;
            left: 100px;
            font-size: 30px;
            animation: spider-web 3s ease-in-out infinite;
        `;
        webContainer.appendChild(spider);

        document.body.appendChild(webContainer);
    }

    createFloatingEggs() {
        const eggContainer = document.createElement('div');
        eggContainer.id = 'egg-container';
        eggContainer.style.cssText = `
            position: fixed;
            bottom: -50px;
            left: 0;
            width: 100%;
            height: 100px;
            pointer-events: none;
            z-index: 1;
            display: flex;
            justify-content: space-around;
            overflow: hidden;
        `;

        const eggs = ['🥚', '🐣', '🐤', '🐥'];
        for (let i = 0; i < 5; i++) {
            const egg = document.createElement('div');
            egg.innerHTML = eggs[Math.floor(Math.random() * eggs.length)];
            egg.style.cssText = `
                font-size: 40px;
                animation: egg-bounce 4s ease-in-out infinite;
                animation-delay: ${i * 0.5}s;
            `;
            eggContainer.appendChild(egg);
        }

        document.body.appendChild(eggContainer);
    }

    createFireworks() {
        const fireworksContainer = document.createElement('div');
        fireworksContainer.id = 'fireworks-container';
        fireworksContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
        `;

        const createFirework = () => {
            const firework = document.createElement('div');
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight * 0.5;
            
            firework.innerHTML = '✨';
            firework.style.cssText = `
                position: absolute;
                left: ${x}px;
                top: ${y}px;
                font-size: 30px;
                --tx: ${(Math.random() - 0.5) * 200}px;
                --ty: ${Math.random() * 200 + 100}px;
                animation: fireworks 2s ease-out forwards;
            `;
            fireworksContainer.appendChild(firework);

            setTimeout(() => firework.remove(), 2000);
        };

        // Crear fuegos artificiales cada 500ms
        setInterval(createFirework, 500);
        document.body.appendChild(fireworksContainer);
    }

    createFloatingSkulls() {
        const skullContainer = document.createElement('div');
        skullContainer.id = 'skull-container';
        skullContainer.style.cssText = `
            position: fixed;
            bottom: -50px;
            left: 0;
            width: 100%;
            height: 100px;
            pointer-events: none;
            z-index: 1;
            display: flex;
            justify-content: space-around;
            overflow: hidden;
        `;

        for (let i = 0; i < 5; i++) {
            const skull = document.createElement('div');
            skull.innerHTML = '💀';
            skull.style.cssText = `
                font-size: 40px;
                animation: skull-float 4s ease-in-out infinite;
                animation-delay: ${i * 0.5}s;
            `;
            skullContainer.appendChild(skull);
        }

        document.body.appendChild(skullContainer);
    }

    applyThemeColors() {
        const root = document.documentElement;
        const computedStyle = getComputedStyle(root);
        
        // Los colores ya se aplicaron en el CSS
        document.querySelectorAll('.section-title').forEach(el => {
            el.style.color = computedStyle.getPropertyValue('--theme-primary') || '#1a5490';
        });
    }

    changeTagline() {
        // Esperar a que la página cargue completamente
        setTimeout(() => {
            const taglineNav = document.querySelector('.tagline-nav');
            if (!taglineNav) return;

            const taglines = {
                christmas: '🎄 ¡Feliz Navidad! 🎄',
                newyear: '🎆 ¡Feliz Año Nuevo! 🎆',
                halloween: '🎃 ¡Feliz Halloween! 👻',
                eastersunday: '🐰 ¡Feliz Pascua! 🌸',
                labourday: '✊ ¡Día del Trabajo! 💪',
                patrioticday: '🇵🇪 ¡Batalla de Arica! 🇵🇪',
                independenceday: '🇵🇪 ¡Fiestas Patrias! 🇵🇪',
                dayofthedead: '💀 ¡Día de Muertos! 🌼',
                default: 'Pasión por lo que hacemos, confianza en lo que ofrecemos'
            };

            const taglineText = taglines[this.currentTheme] || taglines.default;
            taglineNav.textContent = taglineText;
            
            // Agregar animación al tagline
            taglineNav.style.animation = 'pulse 2s ease-in-out infinite';
        }, 100);
    }

    addDecorations() {
        // Cambiar mascota en Navidad
        if (this.currentTheme === 'christmas') {
            this.changeMascotaChristmas();
        }
    }

    changeMascotaChristmas() {
        // Esperar a que la página cargue completamente
        setTimeout(() => {
            const mascotaImage = document.querySelector('.mascota-image');
            if (mascotaImage) {
                mascotaImage.src = 'worldtel-mascota-christmas.jpg';
                mascotaImage.alt = 'Mascota Worldtel Navideña';
            }
        }, 100);
    }
}

// Inicializar tema cuando la página cargue
document.addEventListener('DOMContentLoaded', () => {
    new SeasonalTheme();
});
