export function renderHome(container, ctx) {
  container.innerHTML = `
    <div class="home-screen">

      <!-- Imagenes principal -->
      <div class="home-banner-container">
        <img  
            class="home-banner" 
            src="images/1.png" 
            alt="El Rincón del Beisbol"
        >
      </div>

      <!-- Texto de bienvenida -->
      <div class="home-content">

        <h1>
          ¿Qué quieres hacer hoy?
        </h1>

        <p>
          Disfruta de las múltiples interacciones creadas para la comunidad.
          Prueba desde juegos, trivias, escaneo del logo de la LMB,
          tarjetas coleccionables, historia
          <br>
          ¡Y mucho más!
        </p>

      </div>


      <!-- OPCIONES PRINCIPALES -->
      <div class="home-options">

        <!-- Estadísticas e historia -->
        <button class="home-card home-card-history">

          <div class="home-card-content">

            <div class="home-card-title-row">

              <div class="home-card-title">
                Estadísticas e historia
              </div>

              <img 
                class="home-card-icon"
                src="images/Users.svg"
                alt=""
              >

            </div>

            <div class="home-card-description">
              ¿Quieres conocer más sobre tu equipo?
              ¡Entra y averígualo!
            </div>

          </div>

        </button>


        <!-- Juegos -->
        <button class="home-card home-card-games">

          <div class="home-card-content">

            <div class="home-card-title-row">

              <div class="home-card-title home-card-title-games">
                Juegos
              </div>

              <img 
                class="home-card-icon"
                src="images/Star.svg"
                alt=""
              >

            </div>

            <div class="home-card-description">
              ¡Diviértete con los juegos que tenemos
              preparados para ti!
            </div>

          </div>

        </button>

      </div>

    </div>
  `;

container
  .querySelector(".home-card-history")
  .addEventListener("click", () => {
    ctx.navigate("history", "forward");
});

container
  .querySelector(".home-card-games")
  .addEventListener("click", () => {
    ctx.navigate("games", "forward");
});

// cambio de imagen
const banner = container.querySelector(".home-banner");

const images = [
    "images/1.png",
    "images/2.png",
    "images/3.png",
    "images/4.png",
    "images/5.png"
];

let currentImage = 0;

const bannerInterval = setInterval(() => {

    currentImage = (currentImage + 1) % images.length;

    banner.src = images[currentImage];

}, 4000);


// Limpieza al abandonar Home
ctx.cleanup = () => {
    clearInterval(bannerInterval);
};

}