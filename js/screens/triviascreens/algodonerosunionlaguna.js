import { renderTriviaGame } from "../../components/trivia-game.js";

export function renderAlgodonerosUnionLaguna(container, ctx) {

  container.innerHTML = `
        <div class="trivia-team-screen">

            <img 
                class="trivia-team-banner"
                src="./images/trivia/club2.png"
            >

            <div class="trivia-team-info">

                <div class="trivia-team-title">
                    Algodoneros de Unión Laguna
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
                question: "¿En donde se encuentra la sede de los Algodoneros del Unión Laguna?",

                options: [
                    "Torreón, Coahuila",
                    "Nuevo Laredo, Tamaulipas",
                    "Monterrey, Nuevo León",
                    "Cancún, Quintana Roo"
                ],

                correct: 0
            },

            {
                question: "¿Cúal fue el nombre con el que debutó por primera vez el equipo?",

                options: [
                    "Vaqueros Unión Laguna",
                    "Vaqueros Laguna",
                    "La máquina Guinda",
                    "Unión Laguna de Torreón"
                ],

                correct: 0
            },

            {
                question: "¿Cuál es su mascota?",

                options: [
                    "La Furia",
                    "El pollo Algodonero",
                    "Pancho Pistolas",
                    "Cornelio"
                ],

                correct: 0
            },

            {
                question: "¿Bajo el mando de quién ganaron su primer título?",

                options: [
                    "Fernando Tatis",
                    "Guillermo Murra",
                    "Martín Dihigo",
                    "Hector Espino"
                ],

                correct: 0
            },

            {
                question: "¿En qué estadio juegan?",

                options: [
                    "Estadio Revolución",
                    "Estadio Tomateros",
                    "Estadio Alfredo Harp Helú",
                    "Estadio Mobil Super"
                ],

                correct: 0
            }

        ];

    const triviaContainer = container.querySelector(".trivia-game-container");

    renderTriviaGame(
        triviaContainer,
        "Algodoneros Unión Laguna",
        questions,
        ctx,
        "algodoneros"
    );
}