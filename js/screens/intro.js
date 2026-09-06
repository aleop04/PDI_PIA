export function renderIntro(container, ctx) {
  container.innerHTML = `
    <div class="intro-screen">

      <div class="intro-logo">
        <img src="images/landinglogo.png" alt="Logo">
        <img src="images/logo1.png" alt="El Rincón del Beisbol">
      </div>

      <p class="intro-description">
        Lo mejor del beisból solo aquí
      </p>

      <div class="intro-buttons">

        <button id="btn-login" class="intro-button login-button">
        Iniciar sesión
        </button>

        <button id="btn-register" class="intro-button register-button">
          Registrarse
        </button>

      </div>

    </div>
  `;
    container.querySelector("#btn-login").addEventListener("click", () => {
        ctx.navigate("login", "forward");
    });

    container.querySelector("#btn-register").addEventListener("click", () => {
        ctx.navigate("register", "forward");
    });
}
