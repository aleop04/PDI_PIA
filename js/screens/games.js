export function renderGames(container, ctx) {
  container.innerHTML = `
    <div class="games-screen">

      <!-- Imagen principal -->
      <div class="games-banner">
        <div class="games-banner-title">
          JUEGOS
        </div>
      </div>

      <!-- Contenido inferior -->
      <div class="games-content">

        <h1>
          ¡Hora de divertirse!
        </h1>

        <p>
          Diviértete con las interacciones que preparamos para la comunidad
          y obtén tarjetas coleccionables al ganar
        </p>

        <!-- Botones de juegos -->
        <div class="games-buttons">

          <button class="games-card memorama-game-card" id="btn-memorama">
            <div class="games-card-inner">

              <div class="games-card-title memorama-title">
                Memorama
              </div>

              <div class="games-card-description memorama-description">
                ¡Encuentra los pares correctos!
              </div>

            </div>
          </button>


          <button class="games-card atrapa-card" id="btn-atrapa">
            <div class="games-card-inner">

              <div class="games-card-title atrapa-title">
                Atrapa la pelota
              </div>

              <div class="games-card-description atrapa-description">
                ¡Prueba tu velocidad!
              </div>

            </div>
          </button>


          <button class="games-card homerun-card" id="btn-homerun">
            <div class="games-card-inner">

              <div class="games-card-title homerun-title">
                Home run
              </div>

              <div class="games-card-description homerun-description">
                ¡Realiza tres Home Runs para ganar!
              </div>

            </div>
          </button>

        </div>

      </div>

    </div>
  `;


  // navegacion a juegos

  const btnMemorama = container.querySelector("#btn-memorama");
  const btnAtrapa = container.querySelector("#btn-atrapa");
  const btnHomeRun = container.querySelector("#btn-homerun");


  btnMemorama.addEventListener("click", () => {
    ctx.navigate("memorama");
  });


  btnAtrapa.addEventListener("click", () => {
    ctx.navigate("atrapalapelota");
  });


  btnHomeRun.addEventListener("click", () => {
    ctx.navigate("homerun");
  });
}