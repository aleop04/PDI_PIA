import { iniciarAtrapaLaPelota } from "../../components/atrapalapelotaGame.js";

export function renderAtrapalaPelota(container, ctx) {

  container.innerHTML = `
    <div class="atrapalapelota-screen">

      <!-- Imagen principal -->
      <div class="atrapalapelota-banner">
      </div>

      <!-- Contenido inferior -->
      <div class="atrapalapelota-content">

        <!-- Pantalla inicial -->
        <div
          class="atrapalapelota-start"
          id="atrapalapelota-start"
        >

          <h1>
            Atrapa la pelota
          </h1>

          <p>
            ¡Prueba tu velocidad!
          </p>

          <button
            class="atrapalapelota-start-button"
            id="atrapalapelota-start-button"
          >
            COMENZAR
          </button>

        </div>


        <!-- Zona del juego -->
        <div
          class="atrapalapelota-game"
          id="atrapalapelota-game"
        >

          <h2>
            ¡Atrapa la pelota!
          </h2>

          <div class="atrapalapelota-game-info">

            <span>
              Tiempo:
              <strong id="game-time">15</strong>
            </span>

            <span>
              Puntos:
              <strong id="game-score">0</strong>
            </span>

          </div>


          <div
            class="atrapalapelota-game-area"
            id="atrapalapelota-game-area"
          >
          </div>

        </div>

      </div>

    </div>
  `;


  // elementos

  const startScreen =
    container.querySelector(
      "#atrapalapelota-start"
    );

  const gameScreen =
    container.querySelector(
      "#atrapalapelota-game"
    );

  const startButton =
    container.querySelector(
      "#atrapalapelota-start-button"
    );


  // audio

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


    iniciarAtrapaLaPelota(
      container,
      {
        onRestart: playStartSound
      }
    );

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