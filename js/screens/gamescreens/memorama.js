export function renderMemorama(container, ctx) {

  container.innerHTML = `

    <div class="memorama-screen">

      <!-- Imagen principal -->
      <div class="memorama-banner">
      </div>

      <!-- Contenido inferior -->
      <div class="memorama-content">

        <!-- Pantalla inicial -->
        <div class="memorama-start" id="memorama-start">

          <h1>
            Memorama
          </h1>

          <p>
            ¡Encuentra los pares correctos!
          </p>

          <button
            class="memorama-start-button"
            id="memorama-start-button"
          >
            COMENZAR
          </button>

        </div>


        <!-- Zona del juego -->
        <div class="memorama-game" id="memorama-game">

          <h2>
            ¡Encuentra todas las parejas!
          </h2>

          <div class="memorama-game-info">

            <span>
              Intentos:
              <strong id="memorama-attempts">
                0
              </strong>
            </span>

            <span>
              Parejas:
              <strong id="memorama-pairs">
                0
              </strong>
            </span>

          </div>


          <!-- Tablero -->
          <div
            class="memorama-board"
            id="memorama-board"
          >
          </div>


          <!-- Resultado final -->
          <div
            class="memorama-result"
            id="memorama-result"
          >
          </div>

        </div>

      </div>

    </div>
  `;


  // elementos

  const startScreen =
    container.querySelector("#memorama-start");

  const gameScreen =
    container.querySelector("#memorama-game");

  const startButton =
    container.querySelector("#memorama-start-button");

  const board =
    container.querySelector("#memorama-board");

  const attemptsElement =
    container.querySelector("#memorama-attempts");

  const pairsElement =
    container.querySelector("#memorama-pairs");

  const resultElement =
    container.querySelector("#memorama-result");


  // audio al presionar boton
  const startSound = new Audio(
    "./images/audio/beisbolgames.mp3"
  );

  startSound.preload = "auto";
  startSound.volume = 0.7;

  ctx.cleanup = () => {

    startSound.pause();
    startSound.currentTime = 0;

  };


  // cartas del juego

  const cardImages = [

    {
      id: "pelota",
      image: "./images/memoramacards/carta1.png"
    },

    {
      id: "bate",
      image: "./images/memoramacards/carta2.png"
    },

    {
      id: "guante",
      image: "./images/memoramacards/carta3.png"
    },

    {
      id: "gorra",
      image: "./images/memoramacards/carta4.png"
    },

    {
      id: "casco",
      image: "./images/memoramacards/carta5.png"
    },

    {
      id: "base",
      image: "./images/memoramacards/carta6.png"
    }

  ];


  // estado del juego

  let firstCard = null;

  let secondCard = null;

  let lockBoard = false;

  let attempts = 0;

  let pairs = 0;


  // boton comenzar

  startButton.addEventListener("click", () => {

    startSound.currentTime = 0;

    startSound.play().catch((error) => {
      console.error(
        "Error al reproducir el audio:",
        error
      );
    });

    startScreen.classList.add("hide");

    gameScreen.classList.add("show");

    iniciarJuego();

  });


  // iniciar juego

  function iniciarJuego() {

    firstCard = null;

    secondCard = null;

    lockBoard = false;

    attempts = 0;

    pairs = 0;


    attemptsElement.textContent = attempts;

    pairsElement.textContent = pairs;

    resultElement.innerHTML = "";


    // duplicamos las cartas

    const cards = [

      ...cardImages,

      ...cardImages

    ];


    // mezclamos las cartas

    shuffle(cards);


    // creamos el tablero

    board.innerHTML = "";


    cards.forEach((cardData, index) => {

      const card = document.createElement("button");

      card.className = "memorama-card";

      card.dataset.id = cardData.id;

      card.dataset.index = index;


      card.innerHTML = `

        <div class="memorama-card-inner">

          <!-- Parte trasera -->
          <div class="memorama-card-back">
            ?
          </div>

          <!-- Parte frontal -->
          <div class="memorama-card-front">

            <img
              src="${cardData.image}"
              alt="${cardData.id}"
            >

          </div>

        </div>

      `;


      card.addEventListener("click", () => {

        seleccionarCarta(card);

      });


      board.appendChild(card);

    });

  }


  // seleccionar cartas

  function seleccionarCarta(card) {

    // si estamos esperando la comparacion

    if (lockBoard) {
      return;
    }


    // si toca la misma carta dos veces

    if (card === firstCard) {
      return;
    }


    // si ya esta encontrada

    if (card.classList.contains("matched")) {
      return;
    }


    /* Voltear carta */

    card.classList.add("flipped");


    // primera carta

    if (!firstCard) {

      firstCard = card;

      return;

    }


    // segunda carta

    secondCard = card;

    attempts++;

    attemptsElement.textContent = attempts;


    compararCartas();

  }


  // comparar cartas

  function compararCartas() {

    const isMatch =
      firstCard.dataset.id ===
      secondCard.dataset.id;


    if (isMatch) {

      parejaEncontrada();

    } else {

      cartasIncorrectas();

    }

  }


  // pareja correcta

  function parejaEncontrada() {

    firstCard.classList.add("matched");

    secondCard.classList.add("matched");


    pairs++;

    pairsElement.textContent = pairs;


    resetTurn();


    /* ¿Ganó? */

    if (pairs === cardImages.length) {

      terminarJuego();

    }

  }


  // pareja incorrecta

  function cartasIncorrectas() {

    lockBoard = true;


    setTimeout(() => {

      firstCard.classList.remove("flipped");

      secondCard.classList.remove("flipped");


      resetTurn();

    }, 900);

  }


  // reiniciar turno

  function resetTurn() {

    firstCard = null;

    secondCard = null;

    lockBoard = false;

  }


  // final de juego

  function terminarJuego() {

    resultElement.innerHTML = `

      <div class="memorama-win">

        <h3>
          ¡Felicidades!
        </h3>

        <p>
          Encontraste todas las parejas en
          <strong>${attempts}</strong>
          intentos.
        </p>

        <button
          class="memorama-restart-button"
          id="memorama-restart-button"
        >
          JUGAR OTRA VEZ
        </button>

      </div>

    `;


    const restartButton =
      resultElement.querySelector(
        "#memorama-restart-button"
      );


    restartButton.addEventListener("click", () => {

      startSound.currentTime = 0;

      startSound.play().catch((error) => {
        console.error(
          "Error al reproducir el audio:",
          error
        );
      });

      iniciarJuego();

    });

  }


  // mezcla de cartas

  function shuffle(array) {

    for (
      let i = array.length - 1;
      i > 0;
      i--
    ) {

      const j =
        Math.floor(
          Math.random() * (i + 1)
        );


      [array[i], array[j]] =
      [array[j], array[i]];

    }

  }

function destroy() {

  juegoActivo = false;

  clearInterval(temporizador);

  clearInterval(movimientoAutomatico);

}


return {
  destroy
};

}