import { renderTriviaGame } from "../../components/trivia-game.js";

export function renderSaraperosdeSaltillo(container, ctx) {
  container.innerHTML = `
        <div class="trivia-team-screen">

            <img 
                class="trivia-team-banner"
                src="./images/trivia/club6.png"
            >

            <div class="trivia-team-info">

                <div class="trivia-team-title">
                    Saraperos de Saltillo
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
                        question: "¿Cuántos titulos de liga tienen?",

                        options: [
                            "2",
                            "4",
                            "1",
                            "3"
                        ],

                        correct: 0
                    },

                    {
                        question: "¿Cuál fue el primer nombre del equipo?",

                        options: [
                            "El dragón del norte",
                            "La nave verde",
                            "Sultanes de Saltillo",
                            "El equipo del Sarape"
                        ],

                        correct: 0
                    },

                    {
                        question: "¿En qué año se inauguró su estadio?",

                        options: [
                            "1945",
                            "1969",
                            "1975",
                            "1963"
                        ],

                        correct: 0
                    },

                    {
                        question: "¿En qué etapa tuvieron más logros en la LMB?",

                        options: [
                            "2000-2004",
                            "1983-1986",
                            "1970-1972",
                            "1999-2005"
                        ],

                        correct: 0
                    },

                    {
                        question: "¿Cuántos titulos de liga tiene?",

                        options: [
                            "3",
                            "5",
                            "1",
                            "2"
                        ],

                        correct: 0
                    }

                ];

    const triviaContainer = container.querySelector(".trivia-game-container");

    renderTriviaGame(
        triviaContainer,
        "Saraperos de Saltillo",
        questions,
        ctx,
        "saraperos"
    );
}