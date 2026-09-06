import { renderTriviaGame } from "../../components/trivia-game.js";

export function renderRielerosdeAguascalientes(container, ctx) {
  container.innerHTML = `
        <div class="trivia-team-screen">

            <img 
                class="trivia-team-banner"
                src="./images/trivia/club5.png"
            >

            <div class="trivia-team-info">

                <div class="trivia-team-title">
                    Rieleros de Aguascalientes
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
                        question: "¿En qué liga juegan activamente los Rieleros de Aguascalientes?",

                        options: [
                            "Liga Mexicana de Beisból",
                            "Liga Invernal Mexicana",
                            "Liga de Beisból Regional",
                            "Liga Mayor de Beisból”"
                        ],

                        correct: 0
                    },

                    {
                        question: "¿Qué otro nombre tiene los Rieleros de Aguascalientes?",

                        options: [
                            "Astros de Aguascalientes",
                            "La Máquina Rielera",
                            "Club de Aguascalientes",
                            "Unión de Aguascalientes"
                        ],

                        correct: 0
                    },

                    {
                        question: "¿En qué año debutaron?",

                        options: [
                            "1945",
                            "1969",
                            "1975",
                            "1973"
                        ],

                        correct: 0
                    },

                    {
                        question: "¿Quién es su manager?",

                        options: [
                            "Raúl Medina Reyes",
                            "José Ortiz Benavides",
                            "Pedro Barbosa",
                            "Enrique Reyes"
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
        "Rieleros de Aguascalientes",
        questions,
        ctx,
        "rieleros"
    );
}