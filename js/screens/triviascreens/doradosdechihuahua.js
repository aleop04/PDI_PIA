import { renderTriviaGame } from "../../components/trivia-game.js";

export function renderDoradosdeChihuahua(container, ctx) {
  container.innerHTML = `
        <div class="trivia-team-screen">

            <img 
                class="trivia-team-banner"
                src="./images/trivia/club4.png"
            >

            <div class="trivia-team-info">

                <div class="trivia-team-title">
                    Dorados de Chihuahua
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
                        question: "¿Cuál es su mascota?",

                        options: [
                            "Pancho Pistolas",
                            "Kike Conejo",
                            "Perro Sultán",
                            "Pepe Perico”"
                        ],

                        correct: 0
                    },

                    {
                        question: "¿En qué año regresó el equipo a la LMB?",

                        options: [
                            "2009",
                            "1980",
                            "2023",
                            "1997"
                        ],

                        correct: 0
                    },

                    {
                        question: "Fecha de inauguración del Estadio Monumental Chihuahua",

                        options: [
                            "28 de enero de 20043",
                            "30 de marzo de 2004",
                            "13 de mayo de 2004",
                            "13 de agosto de 2004"
                        ],

                        correct: 0
                    },

                    {
                        question: "¿En qué año fue la “primera epoca” de los Dorados de Chihuahua?",

                        options: [
                            "1949",
                            "1940",
                            "1956",
                            "1960"
                        ],

                        correct: 0
                    },

                    {
                        question: "Presidente del club",

                        options: [
                            "Eddy Ramos",
                            "Ángel Araiza",
                            "Martín Galindo Navarro",
                            "Óscar Robles"
                        ],

                        correct: 0
                    }

                ];

    const triviaContainer = container.querySelector(".trivia-game-container");

    renderTriviaGame(
        triviaContainer,
        "Dorados de Chihuahua",
        questions,
        ctx,
        "dorados"
    );
}