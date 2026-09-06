import { renderTriviaGame } from "../../components/trivia-game.js";

export function renderCalientedeDurango(container, ctx) {
  container.innerHTML = `
        <div class="trivia-team-screen">

            <img 
                class="trivia-team-banner"
                src="./images/trivia/club10.png"
            >

            <div class="trivia-team-info">

                <div class="trivia-team-title">
                    Caliente de Durango
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
                    question: "Nombre de su mascota",

                    options: [
                        "Pollo Tomas",
                        "Beto Coyote",
                        "Rango y Zeus",
                        "Leonel “El Coronel”"
                    ],

                    correct: 0
                },

                {
                    question: "Presidente del club",

                    options: [
                        "Emilio Hank Talancon",
                        "Carlos Lazo",
                        "Ramon Orantes",
                        "Baltazar Arredondo"
                    ],

                    correct: 0
                },

                {
                    question: "¿En qué temporada de la LMB debutaron?",

                    options: [
                        "1997",
                        "2001",
                        "1949",
                        "2024"
                    ],

                    correct: 0
                },

                {
                    question: "Nombre del primer equipo profesional de beisból que tuvo Durango",

                    options: [
                        "Generales de Durango",
                        "Caliente de Durango",
                        "Alacranes de Durango",
                        "Club de Durango"
                    ],

                    correct: 0
                },

                {
                    question: "Estadio donde juega el club",

                    options: [
                        "Estadio Hermanos Serdán",
                        "Parque Kukulcán Alamo",
                        "Estadio Chevron",
                        "Estadio Francisco Villa"
                    ],

                    correct: 0
                }

            ];

    const triviaContainer = container.querySelector(".trivia-game-container");

    renderTriviaGame(
        triviaContainer,
        "Caliente de Durango",
        questions,
        ctx,
        "caliente"
    );
}