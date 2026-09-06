import { createHomeRunGame } from "../../components/homerunGame.js";

export function renderHomeRun(container, ctx) {

  container.innerHTML = `
    <div class="homerun-screen">

      <!-- Imagen principal -->
      <div class="homerun-banner">
      </div>

      <!-- Contenido inferior -->
      <div class="homerun-content">

        <!-- Pantalla inicial -->
        <div
          class="homerun-start"
          id="homerun-start"
        >

          <h1>
            Home Run
          </h1>

          <p>
            ¡Realiza tres Home Runs para ganar!
          </p>

          <button
            class="homerun-start-button"
            id="homerun-start-button"
          >
            COMENZAR
          </button>

        </div>


        <!-- Zona del juego -->
        <div
          class="homerun-game"
          id="homerun-game"
        >

          <h2>
            ¡Batea en el momento correcto!
          </h2>

          <div class="homerun-game-info">

            <span>
              Home Runs:
              <strong id="homerun-score">0</strong> / 3
            </span>

            <span>
              Intentos:
              <strong id="homerun-attempts">0</strong>
            </span>

          </div>


          <div
            class="homerun-game-area"
            id="homerun-game-area"
          >
          </div>

        </div>

      </div>

    </div>
  `;


  // elementos

  const startScreen =
    container.querySelector("#homerun-start");

  const gameScreen =
    container.querySelector("#homerun-game");

  const startButton =
    container.querySelector("#homerun-start-button");

  const gameArea =
    container.querySelector("#homerun-game-area");

  const scoreElement =
    container.querySelector("#homerun-score");

  const attemptsElement =
    container.querySelector("#homerun-attempts");


  // juego

  let game = null;


  // audio de inicio

  const startSound = new Audio(
    "./images/audio/beisbolgames.mp3"
  );

  startSound.preload = "auto";
  startSound.volume = 0.7;

  ctx.cleanup = () => {

    startSound.pause();
    startSound.currentTime = 0;

  };

  function playStartSound() {

    startSound.currentTime = 0;

    startSound.play().catch((error) => {
      console.error(
        "Error al reproducir el audio:",
        error
      );
    });

  }


  // boton comenzar
    startButton.addEventListener("click", () => {

    playStartSound();

    startScreen.classList.add("hide");

    gameScreen.classList.add("show");


    game = createHomeRunGame(
      gameArea,
      {
        scoreElement,
        attemptsElement,
        onRestart: playStartSound
      }
    );


    game.start();

  });

  function destroy() {

    juegoActivo = false;

    clearInterval(temporizador);

    clearInterval(movimientoAutomatico);

  }


  return {
    destroy
  };

}