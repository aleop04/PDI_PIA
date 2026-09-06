import { renderTriviaGame } from "../../components/trivia-game.js";

export function renderTorosdeTijuana(container, ctx) {
  container.innerHTML = `
        <div class="trivia-team-screen">

            <img 
                class="trivia-team-banner"
                src="./images/trivia/club9.png"
            >

            <div class="trivia-team-info">

                <div class="trivia-team-title">
                    Toros de Tijuana
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
                        question: "¿En qué año tuvieron su primera participación en la LMB?",

                        options: [
                            "1998",
                            "2004",
                            "1995",
                            "1980"
                        ],

                        correct: 0
                    },

                    {
                        question: "¿En qué lugar de la zona norte quedaron durante la temporada 2008?",

                        options: [
                            "Tercero",
                            "Octavo",
                            "Décimo",
                            "Sexto"
                        ],

                        correct: 0
                    },

                    {
                        question: "Nombre del presidente del club",

                        options: [
                            "Carlos Gastélum",
                            "Homar Rojas",
                            "Alberto Ignacio Uribe",
                            "Francisco Morales"
                        ],

                        correct: 0
                    },

                    {
                        question: "¿Cuánta capacidad tiene su estadio?",

                        options: [
                            "17,000",
                            "8,900",
                            "5,300",
                            "10,000"
                        ],

                        correct: 0
                    },

                    {
                        question: "¿Qué jugador se llevo el trofeo Jugador Más Valioso de la Serie del Rey 2017 de la LMB?",

                        options: [
                            "Xorge Carrillo",
                            "Oliver Pérez",
                            "Faustino Carrera",
                            "Roberto López"
                        ],

                        correct: 0
                    }

                ];

    const triviaContainer = container.querySelector(".trivia-game-container");

    renderTriviaGame(
        triviaContainer,
        "Toros de Tijuana",
        questions,
        ctx,
        "toros"
    );
}