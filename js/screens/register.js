export function renderRegister(container, ctx) {
  container.innerHTML = `
    <div class="register-screen">

      <!-- Efectos de luz del fondo -->
      <div class="register-glow register-glow-black"></div>
      <div class="register-glow register-glow-blue"></div>


      <!-- Botón regresar -->
      <button id="btn-back-register" class="register-back">
        <img src="images/Arrow left white.svg" alt="Regresar">
      </button>


      <!-- Encabezado -->
      <div class="register-welcome">

        <img
          class="register-logo"
          src="images/landinglogo.png"
          alt="El Rincón del Beisbol"
        >

        <div class="register-welcome-text">
          <h1>¡Bienvenido/a a la comunidad!</h1>
        </div>

      </div>


      <!-- Tarjeta de registro -->
      <div class="register-card">

        <!-- Pelotas decorativas -->
        <div class="register-decorations">

          <img
            class="register-decoration register-decoration-1"
            src="images/ball.png"
            alt=""
          >

          <img
            class="register-decoration register-decoration-2"
            src="images/ball.png"
            alt=""
          >

          <img
            class="register-decoration register-decoration-3"
            src="images/ball.png"
            alt=""
          >

          <img
            class="register-decoration register-decoration-4"
            src="images/ball.png"
            alt=""
          >

        </div>


        <!-- Contenido -->
        <div class="register-card-content">

          <!-- Contenido principal -->
          <div class="register-main-content">

            <!-- Título -->
            <div class="register-title">
              <h2>Registro</h2>
              <p>Inserta los datos correspondientes</p>
            </div>


            <!-- Formulario -->
            <div class="register-form">

              <!-- Usuario -->
              <div class="register-field">

                <img
                  src="images/User grey.svg"
                  alt=""
                >

                <input
                  type="text"
                  id="register-user"
                  placeholder="Usuario"
                >

              </div>


              <!-- Contraseña -->
              <div class="register-field register-password">

                <img
                  src="images/Lock grey.svg"
                  alt=""
                >

                <input
                  type="password"
                  id="register-password"
                  placeholder="Contraseña"
                >

                <button
                  type="button"
                  class="password-toggle"
                  data-target="register-password"
                >
                  <img src="images/Eye.svg" alt="Mostrar contraseña">
                </button>

              </div>


              <!-- Confirmar contraseña -->
              <div class="register-field register-password">

                <img
                  src="images/Lock grey.svg"
                  alt=""
                >

                <input
                  type="password"
                  id="register-confirm-password"
                  placeholder="Confirmar contraseña"
                >

                <button
                  type="button"
                  class="password-toggle"
                  data-target="register-confirm-password"
                >
                  <img src="images/Eye.svg" alt="Mostrar contraseña">
                </button>

              </div>

            </div>


            <!-- Botón registrarse -->
            <button id="btn-register-submit" class="register-submit">
              Registrarse
            </button>

          </div>

           <!-- Copyright -->
          <p class="register-copyright">
            El Rincón del Beisból © 2026
          </p>

        </div>

      </div>

    </div>
  `;


  // Regresar a Intro
  container
    .querySelector("#btn-back-register")
    .addEventListener("click", () => {
      ctx.navigate("intro", "back");
    });


  // Mostrar / ocultar contraseñas
  container.querySelectorAll(".password-toggle").forEach((button) => {

    button.addEventListener("click", () => {

      const input = document.getElementById(button.dataset.target);
      const icon = button.querySelector("img");

      if (input.type === "password") {

        input.type = "text";
        icon.src = "images/Eye off.svg";
        icon.alt = "Ocultar contraseña";

      } else {

        input.type = "password";
        icon.src = "images/Eye.svg";
        icon.alt = "Mostrar contraseña";

      }

    });

  });


  // Botón registrarse
  container
    .querySelector("#btn-register-submit")
    .addEventListener("click", async () => {

      const username = container
        .querySelector("#register-user")
        .value
        .trim();

      const password = container
        .querySelector("#register-password")
        .value;

      const confirmPassword = container
        .querySelector("#register-confirm-password")
        .value;


      // Campos vacíos
      if (!username || !password || !confirmPassword) {

        alert("Por favor completa todos los campos.");

        return;
      }


      // Contraseñas diferentes
      if (password !== confirmPassword) {

        alert("Las contraseñas no coinciden.");

        return;
      }


      try {

        const response = await fetch(
          "/api/register",
          {
            method: "POST",

            headers: {
              "Content-Type": "application/json"
            },

            credentials: "include",

            body: JSON.stringify({
              nombre_usuario: username,
              password: password
            })
          }
        );


        const data = await response.json();


        if (!response.ok) {

          alert(data.error || "No se pudo registrar el usuario.");

          return;
        }


        // Guardamos temporalmente al usuario
        // en el estado de tu aplicación
        ctx.state.user = data.user;


        // Entrar al Home
        ctx.navigate("home");


      } catch (error) {

        console.error(
          "Error al conectar con el servidor:",
          error
        );


        alert(
          "No fue posible conectar con el servidor."
        );

      }

    });

}