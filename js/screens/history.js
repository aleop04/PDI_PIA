export function renderHistory(container, ctx) {
  container.innerHTML = `
    <div class="history-screen">

      <!-- Imagen principal con título -->
      <div class="history-banner">

        <div class="history-banner-title">
          ESTADÍSTICAS E HISTORIA
        </div>

      </div>

      <!-- Contenido -->
      <div class="history-content">

        <h1>
          Espacio de estudio
        </h1>

        <p>
          Infórmate sobre los clubes en nuestra querida Zona Norte
          y entérate del estatus que tienen actualmente
        </p>

      </div>

      <!-- Botones -->
      <div class="history-options">

        <!-- Equipos -->
        <button class="history-card" id="history-teams">
          <div class="history-card-content">

            <img
              src="images/copa.png"
              alt="Equipos"
              class="history-card-icon"
            >

            <div class="history-card-title">
              Equipos
            </div>

            <div class="history-card-description">
              Conoce nuestros clubes
            </div>

          </div>
        </button>


        <!-- Estadísticas -->
        <button class="history-card" id="history-stats">
          <div class="history-card-content">

            <img
              src="images/estadisticas.png"
              alt="Estadísticas"
              class="history-card-icon"
            >

            <div class="history-card-title">
              Estadísticas
            </div>

            <div class="history-card-description">
              Consulta sus números
            </div>

          </div>
        </button>


        <!-- Historia -->
        <button class="history-card" id="history-history">
          <div class="history-card-content">

            <img
              src="images/historia.png"
              alt="Historia"
              class="history-card-icon"
            >

            <div class="history-card-title">
              Historia
            </div>

            <div class="history-card-description">
              Conoce sus orígenes
            </div>

          </div>
        </button>

      </div>

    </div>
  `;


  // Equipos
  container
    .querySelector("#history-teams")
    .addEventListener("click", () => {
      ctx.navigate("equipos", "forward");
    });


  // Estadísticas
  container
    .querySelector("#history-stats")
    .addEventListener("click", () => {
      ctx.navigate("estadisticas", "forward");
    });


  // Historia
  container
    .querySelector("#history-history")
    .addEventListener("click", () => {
      ctx.navigate("historia", "forward");
    });
}