import { renderTriviaGame } from "../../components/trivia-game.js";

export function renderTecolotesdelosdosLaredos(container, ctx) {
  container.innerHTML = `
        <div class="trivia-team-screen">

            <img 
                class="trivia-team-banner"
                src="./images/trivia/club8.png"
            >

            <div class="trivia-team-info">

                <div class="trivia-team-title">
                    Tecolotes de los Dos Laredos
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
                        question: "¿Cuántos logros de equipo tuvo en su primera etapa en 1940?",

                        options: [
                            "3",
                            "1",
                            "Ninguno",
                            "5"
                        ],

                        correct: 0
                    },

                    {
                        question: "Nombre de su mascota",

                        options: [
                            "Toro Torín",
                            "Tico el Teco",
                            "Rocco",
                            "Chacho"
                        ],

                        correct: 0
                    },

                    {
                        question: "¿A partir de qué año adquirieron el nombre de Tecolotes de los Dos Laredos?",

                        options: [
                            "1949",
                            "1960",
                            "1980",
                            "1985"
                        ],

                        correct: 0
                    },

                    {
                        question: "Manager con el que ganaron su primer titulo en 1953",

                        options: [
                            "Adolfo Luque",
                            "Grillo Serrell",
                            "Pedro Antúnez",
                            "Servando Capetillo"
                        ],

                        correct: 0
                    },

                    {
                        question: "¿Cuántos campeonatos de liga tienen?",

                        options: [
                            "2",
                            "5",
                            "7",
                            "1"
                        ],

                        correct: 0
                    }

                ];

    const triviaContainer = container.querySelector(".trivia-game-container");

    renderTriviaGame(
        triviaContainer,
        "Tecolotes de los Dos Laredos",
        questions,
        ctx,
        "tecolotes"
    );
}