document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       GUSTAVO — LIVRO INTERATIVO
       ANIME CINEMATOGRÁFICO
       ENTRADA DE ALTO IMPACTO
    ========================================= */

    const intro = document.getElementById("intro");
    const botaoEntrar = document.getElementById("entrar");
    const secoes = [...document.querySelectorAll("main section")];

    const CONFIG = {
        cor: "#D4AF37",
        brilho: "rgba(212,175,55,0.45)",
        vermelho: "#A51C30",
        preto: "#030303"
    };

    let paginaAtual = 0;
    let livroIniciado = false;
    let saidaIniciada = false;

    /* =========================================
       FRASE DA INTRODUÇÃO
    ========================================= */

    if (intro) {
        const frase = intro.querySelector(".intro-content p");

        if (frase) {
            frase.textContent =
                "MINHA HISTÓRIA ESTÁ APENAS COMEÇANDO.";
        }
    }

    /* =========================================
       FUNDO ANIMADO
    ========================================= */

    const fundo = document.createElement("div");

    fundo.id = "livro-particulas";

    Object.assign(fundo.style, {
        position: "fixed",
        inset: "0",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: "0"
    });

    document.body.prepend(fundo);

    // Partículas douradas

    for (let i = 0; i < 65; i++) {
        const estrela = document.createElement("span");
        const tamanho = Math.random() * 3 + 1;

        Object.assign(estrela.style, {
            position: "absolute",
            width: tamanho + "px",
            height: tamanho + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            borderRadius: "50%",
            background: CONFIG.cor,
            boxShadow: `0 0 12px ${CONFIG.cor}`,
            opacity: Math.random() * 0.6 + 0.1,
            animation: `estrelaFlutuar ${Math.random() * 8 + 5}s infinite ease-in-out`,
            animationDelay: Math.random() * 5 + "s"
        });

        fundo.appendChild(estrela);
    }

    /* =========================================
       ESTILOS E ANIMAÇÕES
    ========================================= */

    const estilo = document.createElement("style");

    estilo.textContent = `

        /* PARTÍCULAS */

        @keyframes estrelaFlutuar {
            0%, 100% {
                transform: translateY(0) scale(.6);
                opacity: .2;
            }

            50% {
                transform: translateY(-40px) scale(1.5);
                opacity: .9;
            }
        }

        /* INTRODUÇÃO ANIME */

        #intro.intro-animada {
            position: fixed !important;
            inset: 0 !important;
            width: 100% !important;
            height: 100vh !important;
            min-height: 100vh;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            overflow: hidden !important;

            background:
                radial-gradient(
                    circle at center,
                    #38250a 0%,
                    #171006 25%,
                    #080706 55%,
                    #000 100%
                ) !important;

            z-index: 999999 !important;
            isolation: isolate;
            opacity: 0;
            transition: opacity 1s ease;
        }

        #intro.intro-pronta {
            opacity: 1;
        }

        /* AURA DE ENERGIA */

        #intro.intro-animada::before {
            content: "";
            position: absolute;
            width: 15px;
            height: 15px;
            left: 50%;
            top: 50%;
            border-radius: 50%;
            background: #fff;

            box-shadow:
                0 0 25px #fff,
                0 0 60px #ffe6a0,
                0 0 120px #d4af37,
                0 0 220px #d4af37,
                0 0 350px #a51c30;

            transform: translate(-50%, -50%) scale(0);
            animation: animeNucleo 2.5s ease-out forwards;
            z-index: -1;
        }

        @keyframes animeNucleo {
            0% {
                transform: translate(-50%, -50%) scale(0);
                opacity: 0;
            }

            30% {
                transform: translate(-50%, -50%) scale(8);
                opacity: 1;
            }

            60% {
                transform: translate(-50%, -50%) scale(4);
                opacity: .8;
            }

            100% {
                transform: translate(-50%, -50%) scale(1);
                opacity: .2;
            }
        }

        /* CÍRCULO DE ENERGIA */

        #intro.intro-animada::after {
            content: "";
            position: absolute;
            width: 250px;
            height: 250px;
            left: 50%;
            top: 50%;
            border: 2px solid rgba(255, 219, 115, .9);
            border-radius: 50%;

            box-shadow:
                0 0 20px #d4af37,
                inset 0 0 30px rgba(212,175,55,.4);

            transform: translate(-50%, -50%) scale(0);
            animation: animeCirculo 2.4s ease-out forwards;
            z-index: -1;
        }

        @keyframes animeCirculo {
            0% {
                transform: translate(-50%, -50%) scale(0) rotate(0);
                opacity: 0;
            }

            35% {
                opacity: 1;
            }

            100% {
                transform: translate(-50%, -50%) scale(5) rotate(240deg);
                opacity: 0;
            }
        }

        /* FLASH DE ABERTURA */

        .anime-flash {
            position: absolute;
            inset: 0;
            background: white;
            opacity: 0;
            pointer-events: none;
            z-index: 10;
            animation: flashAnime 1.2s .15s ease-out both;
        }

        @keyframes flashAnime {
            0% {
                opacity: 0;
            }

            15% {
                opacity: .95;
            }

            35% {
                opacity: .15;
            }

            100% {
                opacity: 0;
            }
        }

        /* LINHAS DE VELOCIDADE */

        .anime-linha {
            position: absolute;
            width: 2px;
            height: 200px;
            top: -250px;

            background: linear-gradient(
                transparent,
                #fff,
                #d4af37,
                #a51c30,
                transparent
            );

            box-shadow: 0 0 15px #d4af37;
            transform: rotate(35deg);
            animation: linhaAnime 1.5s linear infinite;
            opacity: 0;
            pointer-events: none;
        }

        @keyframes linhaAnime {
            0% {
                transform: translateY(-100px) rotate(35deg);
                opacity: 0;
            }

            25% {
                opacity: 1;
            }

            100% {
                transform: translateY(130vh) rotate(35deg);
                opacity: 0;
            }
        }

        /* CONTEÚDO DA INTRO */

        #intro.intro-animada .intro-content {
            position: relative;
            z-index: 5;
            width: 90%;
            max-width: 950px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 22px;
            opacity: 0;
            transform: translateY(80px) scale(.7);

            animation:
                animeConteudo 1.3s .4s cubic-bezier(.16,1,.3,1) forwards;
        }

        @keyframes animeConteudo {
            0% {
                opacity: 0;
                transform: translateY(80px) scale(.7);
                filter: blur(20px);
            }

            60% {
                opacity: 1;
                transform: translateY(-8px) scale(1.05);
            }

            100% {
                opacity: 1;
                transform: translateY(0) scale(1);
                filter: blur(0);
            }
        }

        /* TAG SUPERIOR */

        #intro.intro-animada .intro-tag {
            color: #d4af37;
            font-size: 12px;
            letter-spacing: 8px;
            font-weight: 900;
            text-transform: uppercase;
            text-shadow: 0 0 18px #d4af37;
            animation: animeTag 1s 1s both;
        }

        @keyframes animeTag {
            from {
                opacity: 0;
                letter-spacing: 22px;
                filter: blur(10px);
            }

            to {
                opacity: 1;
                letter-spacing: 8px;
                filter: blur(0);
            }
        }

        /* NOME GUSTAVO */

        #intro.intro-animada h1 {
            position: relative;
            margin: 15px 0;
            color: #fff;
            font-size: clamp(65px, 14vw, 155px);
            font-weight: 1000;
            letter-spacing: 14px;
            line-height: 1;
            text-transform: uppercase;

            text-shadow:
                0 0 10px #fff,
                0 0 25px #d4af37,
                0 0 60px #d4af37,
                0 0 100px rgba(212,175,55,.9);

            animation: animeNome 1.5s .7s cubic-bezier(.16,1,.3,1) both;
        }

        @keyframes animeNome {
            0% {
                opacity: 0;
                transform: scale(3) rotateX(70deg);
                filter: blur(30px);
                letter-spacing: 40px;
            }

            45% {
                opacity: 1;
                transform: scale(.85) rotateX(-10deg);
                filter: blur(2px);
            }

            70% {
                transform: scale(1.08);
            }

            100% {
                opacity: 1;
                transform: scale(1);
                filter: blur(0);
                letter-spacing: 14px;
            }
        }

        /* LINHA DE CORTE DOURADA */

        #intro.intro-animada h1::after {
            content: "";
            position: absolute;
            left: -20%;
            bottom: -15px;
            width: 0;
            height: 3px;

            background: linear-gradient(
                90deg,
                transparent,
                #fff,
                #d4af37,
                #fff,
                transparent
            );

            box-shadow: 0 0 20px #d4af37;
            animation: corteDourado 1.2s 1.6s ease-out forwards;
        }

        @keyframes corteDourado {
            to {
                left: 5%;
                width: 90%;
            }
        }

        /* FRASE PRINCIPAL */

        #intro.intro-animada .intro-content p {
            color: #fff;
            font-size: clamp(14px, 3vw, 23px);
            font-weight: 900;
            line-height: 1.7;
            letter-spacing: 4px;
            text-transform: uppercase;

            text-shadow:
                0 0 10px rgba(212,175,55,.8),
                0 0 25px rgba(212,175,55,.4);

            animation: animeFrase 1.1s 1.8s both;
        }

        @keyframes animeFrase {
            0% {
                opacity: 0;
                transform: translateY(40px);
                filter: blur(12px);
            }

            100% {
                opacity: 1;
                transform: translateY(0);
                filter: blur(0);
            }
        }

        /* BOTÃO DE ENTRADA */

        #intro.intro-animada #entrar {
            position: relative;
            margin-top: 20px;
            padding: 18px 42px;
            color: #080808;

            background: linear-gradient(
                120deg,
                #fff4bf,
                #d4af37,
                #9c7012
            );

            border: 1px solid #fff0a5;
            border-radius: 3px;
            font-size: 13px;
            font-weight: 1000;
            letter-spacing: 3px;
            text-transform: uppercase;
            cursor: pointer;

            box-shadow:
                0 0 20px #d4af37,
                0 0 45px rgba(212,175,55,.5);

            overflow: hidden;
            opacity: 0;
            animation: animeBotao .9s 2.5s forwards;
            transition: .35s ease;
        }

        @keyframes animeBotao {
            from {
                opacity: 0;
                transform: translateY(35px) scale(.6);
            }

            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }

        #intro.intro-animada #entrar::before {
            content: "";
            position: absolute;
            top: 0;
            left: -120%;
            width: 70%;
            height: 100%;

            background: linear-gradient(
                90deg,
                transparent,
                rgba(255,255,255,.9),
                transparent
            );

            transform: skewX(-25deg);
            animation: brilhoBotao 2.5s infinite;
        }

        @keyframes brilhoBotao {
            0%, 35% {
                left: -120%;
            }

            75%, 100% {
                left: 150%;
            }
        }

        #intro.intro-animada #entrar:hover {
            transform: scale(1.1);

            box-shadow:
                0 0 30px #fff,
                0 0 65px #d4af37,
                0 0 100px rgba(212,175,55,.7);
        }

        /* RUÍDO VISUAL */

        #intro.intro-animada .intro-noise {
            position: absolute;
            inset: 0;
            pointer-events: none;
            opacity: .13;

            background-image:
                repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 2px,
                    rgba(255,255,255,.1) 3px
                );

            z-index: 2;
        }

        /* SAÍDA EXPLOSIVA */

        #intro.anime-exit {
            animation: animeExplosao .95s ease-in forwards !important;
            pointer-events: none;
        }

        @keyframes animeExplosao {
            0% {
                opacity: 1;
                filter: brightness(1);
                transform: scale(1);
            }

            25% {
                opacity: 1;
                filter: brightness(4);
                transform: scale(1.04);
            }

            55% {
                opacity: .9;
                filter: brightness(6) blur(5px);
                transform: scale(1.1);
            }

            100% {
                opacity: 0;
                filter: brightness(10) blur(25px);
                transform: scale(1.25);
            }
        }

        /* ANIMAÇÃO DAS PÁGINAS */

        main section {
            position: relative;
            transform-origin: left center;
            backface-visibility: hidden;
        }

        main section.pagina-entrando {
            animation: paginaEntrando .9s ease both;
        }

        @keyframes paginaEntrando {
            0% {
                opacity: .3;
                transform:
                    perspective(1200px)
                    rotateY(-15deg)
                    translateX(50px);
                filter: blur(6px);
            }

            100% {
                opacity: 1;
                transform:
                    perspective(1200px)
                    rotateY(0)
                    translateX(0);
                filter: blur(0);
            }
        }

        .brilho-livro {
            animation: brilhoLivro 1.5s ease;
        }

        @keyframes brilhoLivro {
            0% {
                box-shadow: 0 0 0 transparent;
            }

            50% {
                box-shadow: 0 0 35px ${CONFIG.brilho};
            }

            100% {
                box-shadow: 0 0 0 transparent;
            }
        }

        /* CONTROLES DO LIVRO */

        .livro-controles {
            position: fixed;
            bottom: 25px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 12px;
            margin: 0;
            padding: 12px 18px;
            z-index: 9999;
            background: rgba(10,10,10,.9);
            border: 1px solid rgba(212,175,55,.5);
            border-radius: 40px;
            backdrop-filter: blur(12px);
            box-shadow: 0 0 25px rgba(212,175,55,.2);
        }

        .livro-controles button {
            border: 1px solid ${CONFIG.cor};
            color: ${CONFIG.cor};
            background: rgba(15,15,15,.95);
            padding: 11px 18px;
            border-radius: 30px;
            cursor: pointer;
            transition: .3s;
            font-size: 13px;
        }

        .livro-controles button:hover:not(:disabled) {
            background: ${CONFIG.cor};
            color: #111;
            box-shadow: 0 0 20px ${CONFIG.brilho};
            transform: translateY(-3px);
        }

        .livro-controles button:disabled {
            opacity: .3;
            cursor: not-allowed;
        }

        #livro-indicador {
            color: ${CONFIG.cor};
            font-size: 13px;
            letter-spacing: 2px;
            white-space: nowrap;
        }

        /* ANIMAÇÃO DOS CARDS */

        .skill-card,
        .project-card,
        .card {
            transition:
                opacity .7s ease,
                transform .7s ease,
                box-shadow .4s ease;
        }

        .skill-card:not(.visivel),
        .project-card:not(.visivel),
        .card:not(.visivel) {
            opacity: 0;
            transform: translateY(35px);
        }

        .skill-card.visivel,
        .project-card.visivel,
        .card.visivel {
            opacity: 1;
            transform: translateY(0);
        }

        /* CELULAR */

        @media (max-width: 480px) {
            #intro.intro-animada h1 {
                font-size: 58px;
                letter-spacing: 5px;
            }

            #intro.intro-animada .intro-tag {
                font-size: 9px;
                letter-spacing: 3px;
            }

            #intro.intro-animada .intro-content p {
                font-size: 13px;
                letter-spacing: 2px;
            }

            #intro.intro-animada #entrar {
                padding: 15px 24px;
                font-size: 10px;
                letter-spacing: 2px;
            }

            #intro.intro-animada::after {
                width: 170px;
                height: 170px;
            }

            .livro-controles {
                bottom: 12px;
                gap: 7px;
                width: calc(100% - 24px);
                padding: 9px;
            }

            .livro-controles button {
                padding: 9px 12px;
                font-size: 11px;
            }
        }

        /* ACESSIBILIDADE */

        @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
                animation-duration: .01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: .01ms !important;
                scroll-behavior: auto !important;
            }
        }
    `;

    document.head.appendChild(estilo);

    /* =========================================
       CRIAR ELEMENTOS DA INTRO
    ========================================= */

    if (intro) {
        // Flash de abertura

        const flash = document.createElement("div");
        flash.className = "anime-flash";
        intro.appendChild(flash);

        // Linhas de velocidade

        for (let i = 0; i < 30; i++) {
            const linha = document.createElement("span");
            linha.className = "anime-linha";
            linha.style.left = Math.random() * 100 + "%";

            linha.style.animationDelay =
                Math.random() * 3 + "s";

            linha.style.animationDuration =
                (Math.random() * 1.5 + 1) + "s";

            intro.appendChild(linha);
        }
    }

    /* =========================================
       CRIAR CONTROLES DO LIVRO
    ========================================= */

    const controles = document.createElement("div");
    controles.className = "livro-controles";

    const anterior = document.createElement("button");
    anterior.textContent = "← Anterior";
    anterior.type = "button";

    const indicador = document.createElement("span");
    indicador.id = "livro-indicador";

    const proxima = document.createElement("button");
    proxima.textContent = "Próxima →";
    proxima.type = "button";

    controles.append(anterior, indicador, proxima);

    /* =========================================
       ATUALIZAR PÁGINA
    ========================================= */

    function atualizarLivro() {
        if (!secoes.length) return;

        const secaoAtual = secoes[paginaAtual];
        if (!secaoAtual) return;

        indicador.textContent =
            `${paginaAtual + 1} / ${secoes.length}`;

        anterior.disabled = paginaAtual === 0;

        proxima.disabled =
            paginaAtual === secoes.length - 1;

        secaoAtual.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        secaoAtual.classList.remove("pagina-entrando");
        secaoAtual.classList.remove("brilho-livro");

        void secaoAtual.offsetWidth;

        secaoAtual.classList.add("pagina-entrando");
        secaoAtual.classList.add("brilho-livro");
    }

    /* =========================================
       INICIAR LIVRO
    ========================================= */

    function iniciarLivro() {
        if (!secoes.length || livroIniciado) return;

        livroIniciado = true;

        const primeiraSecao = secoes[0];

        primeiraSecao.parentNode.insertBefore(
            controles,
            primeiraSecao
        );

        atualizarLivro();
    }

    /* =========================================
       PÁGINA ANTERIOR
    ========================================= */

    anterior.addEventListener("click", () => {
        if (paginaAtual > 0) {
            paginaAtual--;
            atualizarLivro();
        }
    });

    /* =========================================
       PRÓXIMA PÁGINA
    ========================================= */

    proxima.addEventListener("click", () => {
        if (paginaAtual < secoes.length - 1) {
            paginaAtual++;
            atualizarLivro();
        }
    });

    /* =========================================
       INTRODUÇÃO ANIME
    ========================================= */

    if (intro) {
        document.body.style.overflow = "hidden";
        intro.classList.add("intro-animada");

        requestAnimationFrame(() => {
            intro.classList.add("intro-pronta");
        });
    }

    /* =========================================
       BOTÃO ENTRAR
    ========================================= */

    if (botaoEntrar && intro) {
        botaoEntrar.addEventListener("click", () => {
            if (saidaIniciada) return;

            saidaIniciada = true;
            botaoEntrar.disabled = true;

            intro.classList.add("anime-exit");

            setTimeout(() => {
                intro.style.display = "none";
                document.body.style.overflow = "";

                iniciarLivro();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }, 1000);
        });
    } else {
        iniciarLivro();
    }

    /* =========================================
       DETECTAR PÁGINA DURANTE A ROLAGEM
    ========================================= */

    if ("IntersectionObserver" in window) {
        const observador = new IntersectionObserver((entradas) => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) {
                    const indice = secoes.indexOf(entrada.target);

                    if (indice !== -1) {
                        paginaAtual = indice;

                        indicador.textContent =
                            `${paginaAtual + 1} / ${secoes.length}`;

                        anterior.disabled = paginaAtual === 0;

                        proxima.disabled =
                            paginaAtual === secoes.length - 1;
                    }
                }
            });
        }, {
            threshold: 0.45
        });

        secoes.forEach(secao => {
            observador.observe(secao);
        });
    }

    /* =========================================
       ANIMAÇÕES DOS CARDS
    ========================================= */

    const elementos = document.querySelectorAll(
        ".skill-card, .project-card, .card"
    );

    if ("IntersectionObserver" in window) {
        const observadorElementos = new IntersectionObserver((entradas) => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add("visivel");
                    observadorElementos.unobserve(entrada.target);
                }
            });
        }, {
            threshold: 0.15
        });

        elementos.forEach(elemento => {
            observadorElementos.observe(elemento);
        });
    } else {
        elementos.forEach(elemento => {
            elemento.classList.add("visivel");
        });
    }

    /* =========================================
       MENU COM ROLAGEM SUAVE
    ========================================= */

    document.querySelectorAll("header a").forEach(link => {
        link.addEventListener("click", event => {
            const destino = link.getAttribute("href");

            if (!destino || !destino.startsWith("#")) return;

            const alvo = document.querySelector(destino);

            if (alvo) {
                event.preventDefault();

                alvo.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    /* =========================================
       FUNDO COM MOVIMENTO SUAVE
    ========================================= */

    window.addEventListener("scroll", () => {
        fundo.style.transform =
            `translateY(${window.scrollY * 0.04}px)`;
    }, {
        passive: true
    });

    /* =========================================
       ANO AUTOMÁTICO
    ========================================= */

    const ano = document.getElementById("ano");

    if (ano) {
        ano.textContent = new Date().getFullYear();
    }

    /* =========================================
       BAIXAR CURRÍCULO DIRETAMENTE EM PDF
       Usa html2pdf.js carregado sob demanda.
    ========================================= */

    let bibliotecaPDFCarregando = null;

    function carregarBibliotecaPDF() {
        if (window.html2pdf) return Promise.resolve();

        if (bibliotecaPDFCarregando) {
            return bibliotecaPDFCarregando;
        }

        bibliotecaPDFCarregando = new Promise((resolve, reject) => {
            const scriptPDF = document.createElement("script");

            scriptPDF.src =
                "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";

            scriptPDF.onload = resolve;

            scriptPDF.onerror = () => reject(
                new Error("Não foi possível carregar a biblioteca de PDF.")
            );

            document.head.appendChild(scriptPDF);
        });

        return bibliotecaPDFCarregando;
    }

    // O botão do index.html chama esta função pelo atributo onclick.

    window.salvarCurriculoPDF = async function () {
        const curriculo = document.querySelector(
            "#Curriculo .curriculo-card"
        );

        const botao = document.querySelector(
            "#Curriculo .curriculo-botao"
        );

        if (!curriculo) {
            alert("Não foi possível encontrar o conteúdo do currículo.");
            return;
        }

        const textoOriginal = botao ? botao.textContent : "";

        if (botao) {
            botao.disabled = true;
            botao.textContent = "GERANDO PDF...";
        }

        try {
            await carregarBibliotecaPDF();

            const opcoesPDF = {
                margin: [10, 10, 10, 10],

                filename: "Curriculo-Gustavo-Rodrigues-de-Souza.pdf",

                image: {
                    type: "jpeg",
                    quality: 0.98
                },

                html2canvas: {
                    scale: 2,
                    useCORS: true,
                    backgroundColor: "#111318",
                    scrollY: 0
                },

                jsPDF: {
                    unit: "mm",
                    format: "a4",
                    orientation: "portrait"
                },

                pagebreak: {
                    mode: ["css", "legacy"],
                    avoid: [
                        ".curriculo-item",
                        ".curriculo-topo",
                        ".curriculo-frase"
                    ]
                }
            };

            await window.html2pdf()
                .set(opcoesPDF)
                .from(curriculo)
                .save();

        } catch (erro) {
            console.error(
                "Erro ao gerar o currículo em PDF:",
                erro
            );

            alert(
                "Não foi possível gerar o PDF agora. Verifique sua conexão com a internet e tente novamente."
            );

        } finally {
            if (botao) {
                botao.disabled = false;
                botao.textContent = textoOriginal;
            }
        }
    };

    /* =========================================
       FIM DO SCRIPT — GUSTAVO
    ========================================= */

});