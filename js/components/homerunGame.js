export function createHomeRunGame(gameArea, options = {}) {

  const {
    scoreElement,
    attemptsElement,
    onRestart
  } = options;


  let score = 0;
  let attempts = 0;

  let ballPosition = 0;
  let direction = 1;

  let speed = 8;

  let canSwing = true;
  let gameFinished = false;

  const maxAttempts = 10;

  let animationId = null;


  function render() {

    gameArea.innerHTML = `

      <div class="homerun-track">

        <div class="homerun-hit-zone">
        </div>

        <div class="homerun-ball">
        </div>

      </div>


      <div
        class="homerun-result"
        id="homerun-result"
      >
        Prepárate
      </div>


      <button
        class="homerun-hit-button"
        id="homerun-hit-button"
      >
        BATEAR
      </button>

    `;

  }


  function moveBall() {

    const track =
        gameArea.querySelector(".homerun-track");

    const ball =
        gameArea.querySelector(".homerun-ball");


    if (!track || !ball) return;


    const trackWidth = track.clientWidth;
    const ballWidth = ball.offsetWidth;

    const maxPosition =
        trackWidth - ballWidth;


    ballPosition += speed * direction;


    if (ballPosition >= maxPosition) {

        ballPosition = maxPosition;
        direction = -1;

    }


    if (ballPosition <= 0) {

        ballPosition = 0;
        direction = 1;

    }


    ball.style.left =
        `${ballPosition}px`;


    animationId =
        requestAnimationFrame(moveBall);

    }

  function swing() {

  if (!canSwing) return;

  canSwing = false;


  const ball =
    gameArea.querySelector(".homerun-ball");

  const hitZone =
    gameArea.querySelector(".homerun-hit-zone");

  const result =
    gameArea.querySelector("#homerun-result");

  const hitButton =
    gameArea.querySelector("#homerun-hit-button");


  if (!ball || !hitZone || !result) return;


  cancelAnimationFrame(animationId);


  const ballRect =
    ball.getBoundingClientRect();

  const zoneRect =
    hitZone.getBoundingClientRect();


  const ballCenter =
    ballRect.left + ballRect.width / 2;

  const zoneCenter =
    zoneRect.left + zoneRect.width / 2;


  const distance =
    Math.abs(ballCenter - zoneCenter);


  attempts++;


  if (attemptsElement) {
    attemptsElement.textContent = attempts;
  }


  /* HOME RUN */

  if (distance <= 15) {

    score++;

    result.textContent = "¡HOME RUN!";


    if (scoreElement) {
      scoreElement.textContent = score;
    }

  }


  /* HIT */

  else if (distance <= 55) {

    result.textContent = "¡HIT!";

  }


  /* STRIKE */

  else {

    result.textContent = "¡STRIKE!";

  }


  /* COMPROBAR VICTORIA */

  if (score >= 3) {

    finishGame();

    return;

  }


  /* COMPROBAR DERROTA */

  if (attempts >= maxAttempts) {

    loseGame();

    return;

  }


  /* desactivar botón */

  if (hitButton) {
    hitButton.disabled = true;
  }


  /* nuevo lanzamiento */

  setTimeout(() => {

    resetPitch();

  }, 1000);

}

function resetPitch() {

  const result =
    gameArea.querySelector("#homerun-result");

  const hitButton =
    gameArea.querySelector("#homerun-hit-button");


  ballPosition = 0;
  direction = 1;

  canSwing = true;


  if (result) {
    result.textContent = "¡Prepárate!";
  }


  if (hitButton) {
    hitButton.disabled = false;
  }


  moveBall();

}


  function start() {

  score = 0;
  attempts = 0;

  ballPosition = 0;
  direction = 1;

  canSwing = true;
  gameFinished = false;


  if (scoreElement) {
    scoreElement.textContent = score;
  }


  if (attemptsElement) {
    attemptsElement.textContent = attempts;
  }


  render();


  const hitButton =
    gameArea.querySelector("#homerun-hit-button");


  hitButton.addEventListener("click", () => {

    if (gameFinished) {

      restartGame();

    } else {

      swing();

    }

  });


  moveBall();

}

  function loseGame() {

  canSwing = false;
  gameFinished = true;

  cancelAnimationFrame(animationId);


  const result =
    gameArea.querySelector("#homerun-result");

  const hitButton =
    gameArea.querySelector("#homerun-hit-button");


  if (result) {
    result.textContent = "¡PERDISTE!";
  }


  if (hitButton) {

    hitButton.disabled = false;

    hitButton.textContent = "VOLVER A JUGAR";

  }

}

  function finishGame() {

  canSwing = false;
  gameFinished = true;

  cancelAnimationFrame(animationId);


  const result =
    gameArea.querySelector("#homerun-result");

  const hitButton =
    gameArea.querySelector("#homerun-hit-button");


  if (result) {
    result.textContent = "¡GANASTE!";
  }


  if (hitButton) {

    hitButton.disabled = false;

    hitButton.textContent = "VOLVER A JUGAR";

  }

}

function restartGame() {

  if (onRestart) {
    onRestart();
  }

  score = 0;
  attempts = 0;

  ballPosition = 0;
  direction = 1;

  canSwing = true;
  gameFinished = false;


  const result =
    gameArea.querySelector("#homerun-result");

  const hitButton =
    gameArea.querySelector("#homerun-hit-button");

  const ball =
    gameArea.querySelector(".homerun-ball");


  if (scoreElement) {
    scoreElement.textContent = score;
  }


  if (attemptsElement) {
    attemptsElement.textContent = attempts;
  }


  if (result) {
    result.textContent = "¡Prepárate!";
  }


  if (hitButton) {

    hitButton.textContent = "BATEAR";

    hitButton.disabled = false;

  }


  if (ball) {
    ball.style.left = "0px";
  }


  moveBall();

}

return {
  start
};

}