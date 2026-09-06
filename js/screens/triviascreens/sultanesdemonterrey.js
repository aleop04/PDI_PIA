import { renderTriviaGame } from "../../components/trivia-game.js";

export function renderSultanesdeMonterrey(container, ctx) {
  container.innerHTML = `
        <div class="trivia-team-screen">

            <img 
                class="trivia-team-banner"
                src="./images/trivia/club7.png"
            >

            <div class="trivia-team-info">

                <div class="trivia-team-title">
                    Sultanes de Monterrey
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
                        question: "Nombre del estadio en donde juegan actualmente",

                        options: [
                            "Mobil Park",
                            "Estadio Industrial",
                            "Walmart Park",
                            "Estadio Monumental"
                        ],

                        correct: 0
                    },

                    {
                        question: "¿Bajo que nombre fue fundado el club?",

                        options: [
                            "Sultanes de Monterrey",
                            "Carta Blanca",
                            "Industriales",
                            "Fantasmas Grises"
                        ],

                        correct: 0
                    },

                    {
                        question: "¿Cuántos titulos tienen en la LMB?",

                        options: [
                            "10",
                            "7",
                            "5",
                            "3"
                        ],

                        correct: 0
                    },

                    {
                        question: "¿Qué lugar tiene en cuanto a los estadios de beisból mexicanos con mayor capacidad?",

                        options: [
                            "Quinto",
                            "Décimo",
                            "Tercero",
                            "Primero"
                        ],

                        correct: 0
                    },

                    {
                        question: "¿Contra quién jugaron al ganar su primer y único tricampeonato?",

                        options: [
                            "Aceros de Monclova",
                            "Unión Laguna de Torreón",
                            "Dorados de Chihuahua",
                            "Charros de Jalisco"
                        ],

                        correct: 0
                    }

                ];

    const triviaContainer = container.querySelector(".trivia-game-container");

    renderTriviaGame(
        triviaContainer,
        "Sultanes de Monterrey",
        questions,
        ctx,
        "sultanes"
    );
}