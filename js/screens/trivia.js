export function renderTrivia(container, ctx) {
  container.innerHTML = `
    <div class="trivia-screen">

      <!-- Imagen principal -->
      <div class="trivia-banner">

        <div class="trivia-banner-title">
          TRIVIA
        </div>

      </div>

      <!-- Contenido inferior -->
      <div class="trivia-content">

        <h1>
          ¡Pon a prueba tu conocimiento!
        </h1>

        <p>
          Escoge un club para comenzar la trivia
        </p>

      </div>

      <!-- Clubes -->
      <div class="trivia-clubs">

        <button 
          class="trivia-club"
          data-trivia="acererosdemonclova"
          style="background-image: url('../images/trivia/club1.png');">
        </button>

        <button 
          class="trivia-club"
          data-trivia="algodonerosunionlaguna"
          style="background-image: url('../images/trivia/club2.png');">
        </button>

        <button 
          class="trivia-club"
          data-trivia="charrosdejalisco"
          style="background-image: url('../images/trivia/club3.png');">
        </button>

        <button 
          class="trivia-club"
          data-trivia="doradosdechihuahua"
          style="background-image: url('../images/trivia/club4.png');">
        </button>

        <button 
          class="trivia-club"
          data-trivia="rielerosdeaguascalientes"
          style="background-image: url('../images/trivia/club5.png');">
        </button>

        <button 
          class="trivia-club"
          data-trivia="saraperosdesaltillo"
          style="background-image: url('../images/trivia/club6.png');">
        </button>

        <button 
          class="trivia-club"
          data-trivia="sultanesdemonterrey"
          style="background-image: url('../images/trivia/club7.png');">
        </button>

        <button 
          class="trivia-club"
          data-trivia="tecolotesdelosdoslaredos"
          style="background-image: url('../images/trivia/club8.png');">
        </button>

        <button 
          class="trivia-club"
          data-trivia="torosdetijuana"
          style="background-image: url('../images/trivia/club9.png');">
        </button>

        <button 
          class="trivia-club"
          data-trivia="calientededurango"
          style="background-image: url('../images/trivia/club10.png');">
        </button>

      </div>

    </div>
  `;

  container.querySelectorAll(".trivia-club").forEach((button) => {

    button.addEventListener("click", () => {

      const triviaId = button.dataset.trivia;

      ctx.navigate(triviaId, "forward");

    });

  });
}