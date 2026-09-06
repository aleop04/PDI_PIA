export function iniciarAtrapaLaPelota(
  container,
  options = {}
) {

  const {
    onRestart
  } = options;


  const gameArea = container.querySelector(
    "#atrapalapelota-game-area"
  );

  const scoreElement = container.querySelector(
    "#game-score"
  );

  const timeElement = container.querySelector(
    "#game-time"
  );


  // configuracion del juego

  const TIEMPO_JUEGO = 15;

  const VELOCIDAD_PELOTA = 1000;


  // variables

  let puntos = 0;

  let tiempo = TIEMPO_JUEGO;

  let juegoActivo = true;

  let temporizador;

  let movimientoAutomatico;


  // reiniciar marcadores

  scoreElement.textContent = puntos;

  timeElement.textContent = tiempo;


  // crear la pelota

  const pelota =
    document.createElement("button");

  pelota.classList.add(
    "atrapalapelota-ball"
  );

  pelota.setAttribute(
    "aria-label",
    "Atrapar pelota"
  );


  gameArea.innerHTML = "";

  gameArea.appendChild(pelota);


  // Primera posición

  moverPelota();


  // atrapar la pelota

  pelota.addEventListener("click", () => {

    if (!juegoActivo) {
      return;
    }


    puntos++;

    scoreElement.textContent = puntos;

    moverPelota();

  });


  // temporizador

  temporizador = setInterval(() => {

    tiempo--;

    timeElement.textContent = tiempo;


    if (tiempo <= 0) {

      terminarJuego();

    }

  }, 1000);


  // movimiento automatico

  movimientoAutomatico = setInterval(() => {

    if (juegoActivo) {

      moverPelota();

    }

  }, VELOCIDAD_PELOTA);


  // mover pelota

  function moverPelota() {

    const areaWidth =
      gameArea.clientWidth;

    const areaHeight =
      gameArea.clientHeight;

    const ballWidth =
      pelota.offsetWidth;

    const ballHeight =
      pelota.offsetHeight;


    const maxX =
      areaWidth - ballWidth;

    const maxY =
      areaHeight - ballHeight;


    const randomX =
      Math.random() * maxX;

    const randomY =
      Math.random() * maxY;


    pelota.style.left =
      `${randomX}px`;

    pelota.style.top =
      `${randomY}px`;

  }


  // terminar juego

  function terminarJuego() {

    juegoActivo = false;


    clearInterval(
      temporizador
    );

    clearInterval(
      movimientoAutomatico
    );


    pelota.remove();


    mostrarResultado();

  }


  // resultado final

  function mostrarResultado() {

    const resultado =
      document.createElement("div");


    resultado.classList.add(
      "atrapalapelota-result"
    );


    resultado.innerHTML = `

      <h2>
        ¡Tiempo!
      </h2>

      <p>
        Tu puntuación
      </p>

      <strong class="atrapalapelota-final-score">
        ${puntos}
      </strong>

      <button
        class="atrapalapelota-restart-button"
      >
        JUGAR DE NUEVO
      </button>

    `;


    gameArea.appendChild(
      resultado
    );


    const restartButton =
      resultado.querySelector(
        ".atrapalapelota-restart-button"
      );


    restartButton.addEventListener(
      "click",
      () => {

        // Sonido al reiniciar
        if (
          typeof onRestart === "function"
        ) {
          onRestart();
        }


        // Volver a iniciar el juego
        iniciarAtrapaLaPelota(
          container,
          options
        );

      }
    );

  }

}