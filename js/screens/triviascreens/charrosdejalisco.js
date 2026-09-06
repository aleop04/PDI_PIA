import { renderTriviaGame } from "../../components/trivia-game.js";

export function renderCharrosdeJalisco(container, ctx) {
  container.innerHTML = `
        <div class="trivia-team-screen">

            <img 
                class="trivia-team-banner"
                src="./images/trivia/club3.png"
            >

            <div class="trivia-team-info">

                <div class="trivia-team-title">
                    Charros de Jalisco
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
                        question: "¿Quién es el presidente del equipo?",

                        options: [
                            "Benjamín Gil",
                            "Héctor Ley López",
                            "Alfredo Amézaga",
                            "José Luis González Iñigo”"
                        ],

                        correct: 0
                    },

                    {
                        question: "¿En qué año comenzó su primera etapa en la LMB?",

                        options: [
                            "1973",
                            "1958",
                            "1949",
                            "1960"
                        ],

                        correct: 0
                    },

                    {
                        question: "¿Cuántos estadios ha utilizado el equipo?",

                        options: [
                            "3",
                            "1",
                            "4",
                            "2"
                        ],

                        correct: 0
                    },

                    {
                        question: "¿Contra quién ganaron su primer titulo?",

                        options: [
                            "Algodoneros de Guasave",
                            "Broncos de Reynosa",
                            "Saraperos de Saltillo",
                            "Águilas de Mexicali"
                        ],

                        correct: 0
                    },

                    {
                        question: "¿Cuanta capacidad tiene su estadio?",

                        options: [
                            "5,800",
                            "10,300",
                            "16,500",
                            "8,900"
                        ],

                        correct: 0
                    }

                ];

    const triviaContainer = container.querySelector(".trivia-game-container");

    renderTriviaGame(
        triviaContainer,
        "Charros de Jalisco",
        questions,
        ctx,
        "charros"
    );
}