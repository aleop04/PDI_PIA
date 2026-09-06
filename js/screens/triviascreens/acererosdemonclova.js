import { renderTriviaGame } from "../../components/trivia-game.js";

export function renderAcererosdeMonclova(container, ctx) {

    container.innerHTML = `
        <div class="trivia-team-screen">

            <img 
                class="trivia-team-banner"
                src="./images/trivia/club1.png"
                alt="Acereros de Monclova"
            >

            <div class="trivia-team-info">

                <div class="trivia-team-title">
                    Acereros de Monclova
                </div>

                <div class="trivia-team-description">
                    Contesta las preguntas correctamente y gana increíbles tarjetas coleccionables
                </div>

            </div>

            <div class="trivia-game-container"></div>

        </div>
    `;

    const questions = [

        {
            question: "¿En qué año debutaron los Acereros de Monclova?",

            options: [
                "1963",
                "1974",
                "1959",
                "1980"
            ],

            correct: 0
        },

        {
            question: "¿Cúal fue el nombre con el que debutó por primera vez el equipo?",

            options: [
                "Acereros de Monclova",
                "Astros de Monclova",
                "La furia azul",
                "Mineros de Coahuila"
            ],

            correct: 0
        },

        {
            question: "¿Contra quién jugaron en la inauguración del Estadio de Monclova en el 75?",

            options: [
                "Indios de Ciudad Juárez",
                "Piratas de Sabinas",
                "Alijadores de Tampico",
                "Astros de Tamaulipas"
            ],

            correct: 0
        },

        {
            question: "¿En donde fue su partido debut?",

            options: [
                "Parque Deportivo AHMSA",
                "Estadio de Monclova",
                "Foro Sol",
                "Mobil Park"
            ],

            correct: 0
        },

        {
            question: "¿A quién vencieron en si primer campeonato?",

            options: [
                "Sultanes de Monterrey",
                "Toros de Tijuana",
                "Tecolotes de los Dos Laredos",
                "Pericos de Puebla"
            ],

            correct: 0
        }

    ];

    const triviaContainer = container.querySelector(".trivia-game-container");

    renderTriviaGame(
        triviaContainer,
        "Acereros de Monclova",
        questions,
        ctx,
        "acereros"
    );
}