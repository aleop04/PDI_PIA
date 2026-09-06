export function renderTriviaGame(container, teamName, questions, ctx, triviaCode) {

    let currentQuestion = 0;
    let score = 0;

    function renderQuestion() {

        const question = questions[currentQuestion];

        container.innerHTML = `
            <div class="trivia-game">

                <div class="trivia-progress">
                    Pregunta ${currentQuestion + 1} de ${questions.length}
                </div>

                <h1 class="trivia-question">
                    ${question.question}
                </h1>

                <div class="trivia-options">

                    ${question.options.map((option, index) => `
                        <button 
                            class="trivia-option"
                            data-index="${index}">
                            ${option}
                        </button>
                    `).join("")}

                </div>

            </div>
        `;

        container
            .querySelectorAll(".trivia-option")
            .forEach(button => {

                button.addEventListener("click", () => {

                    const selected = Number(button.dataset.index);

                    if (selected === question.correct) {
                        score++;
                    }

                    nextQuestion();

                });

            });
    }

    function nextQuestion() {

        currentQuestion++;

        if (currentQuestion >= questions.length) {
            renderResult();
            return;
        }

        renderQuestion();
    }

    function renderResult() {

        container.innerHTML = `
            <div class="trivia-result">

                <div class="trivia-result-title">
                    Resultados
                </div>

                <div class="trivia-score">
                    ${score}/${questions.length}
                </div>


                <div
                    class="trivia-reward"
                    id="trivia-reward"
                >
                </div>


                <button class="trivia-restart">
                    Volver a jugar
                </button>

            </div>
        `;


        const rewardContainer =
            container.querySelector(
                "#trivia-reward"
            );


        /*
        Solo preguntamos por recompensa
        cuando hizo todas correctamente.
        */

        if (score === questions.length) {

            claimReward(
                rewardContainer
            );

        }


        container
            .querySelector(".trivia-restart")
            .addEventListener(
                "click",
                () => {

                    currentQuestion = 0;
                    score = 0;

                    renderQuestion();

                }
            );

    }

    function showCardReward(card) {

        const overlay =
            document.createElement("div");

        overlay.className =
            "trivia-reward-overlay";


        overlay.innerHTML = `

            <div class="trivia-reward-modal">

                <img
                    class="trivia-reward-congrats-image"
                    src="./images/tarjetadesbloqueada.png"
                    alt="¡Tarjeta desbloqueada!"
                >

                <img
                    class="trivia-reward-modal-card"
                    src="${card.image}"
                    alt="${card.name}"
                >

                <div class="trivia-reward-modal-name">
                    ${card.name}
                </div>

                <button
                    class="trivia-reward-continue"
                    aria-label="Continuar"
                >
                    <img
                        src="./images/continuar.png"
                        alt=""
                    >
                </button>

            </div>

        `;


        document.body.appendChild(
            overlay
        );


        overlay
            .querySelector(
                ".trivia-reward-continue"
            )
            .addEventListener(
                "click",
                () => {

                    overlay.classList.add(
                        "closing"
                    );


                    setTimeout(() => {

                        overlay.remove();

                    }, 300);

                }
            );

    }

    async function claimReward(
        rewardContainer
    ) {

        try {

            const response = await fetch(
                "/api/trivia/complete",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    credentials:
                        "include",

                    body: JSON.stringify({

                        codigo:
                            triviaCode,

                        score:
                            score

                    })

                }
            );


            const data =
                await response
                    .json()
                    .catch(() => ({}));


            /* sesión perdida */

            if (
                response.status === 401
            ) {

                ctx.state.user = null;

                ctx.navigate(
                    "intro",
                    "back"
                );

                return;

            }


            if (!response.ok) {

                console.error(
                    data.error ||
                    "No fue posible procesar la recompensa"
                );

                return;

            }


            /*
            Ya tenía la tarjeta.

            No mostramos absolutamente nada.
            */

            if (!data.awarded) {

                return;

            }


            /*
            El usuario acaba de ganar
            esta tarjeta.
            */

            if (!rewardContainer.isConnected) {

                return;

            }


            if (!data.awarded) {
                return;
            }


            showCardReward(
                data.card
            );


        } catch (error) {

            console.error(
                "Error al obtener recompensa:",
                error
            );

        }

    }

    renderQuestion();
}