export function renderLogin(container, ctx) {
  container.innerHTML = `
    <div class="login-screen">

      <!-- Efectos de luz del fondo -->
      <div class="login-glow login-glow-black"></div>
      <div class="login-glow login-glow-blue"></div>


      <!-- Botón regresar -->
      <button id="btn-back" class="login-back">
        <img src="images/Arrow left white.svg" alt="Regresar">
      </button>


      <!-- Encabezado -->
      <div class="login-welcome">

        <img
          class="login-logo"
          src="images/landinglogo.png"
          alt="El Rincón del Beisbol"
        >

        <div class="login-welcome-text">
          <h1>¡Bienvenido/a de vuelta!</h1>
          <p>Es un gusto tenerte por aquí</p>
        </div>

      </div>


      <!-- Tarjeta de inicio de sesión -->
      <div class="login-card">


        <!-- Pelotas decorativas -->
        <div class="login-decorations">

          <img
            class="login-decoration login-decoration-1"
            src="images/ball.png"
            alt=""
          >

          <img
            class="login-decoration login-decoration-2"
            src="images/ball.png"
            alt=""
          >

          <img
            class="login-decoration login-decoration-3"
            src="images/ball.png"
            alt=""
          >

          <img
            class="login-decoration login-decoration-4"
            src="images/ball.png"
            alt=""
          >

        </div>


        <!-- Contenido -->
        <div class="login-card-content">

          <!-- Parte superior -->
          <div class="login-main-content">

            <!-- Título -->
            <div class="login-title">
              <h2>Inicio de sesión</h2>
              <p>Inserta los datos correspondientes</p>
            </div>


            <!-- Formulario -->
            <div class="login-form">

              <!-- Usuario -->
              <div class="login-field">

                <img
                  src="images/User grey.svg"
                  alt=""
                >

                <input 
                  type="text"
                  id="login-user"
                  placeholder="Usuario"
                  autocomplete="username"
                >

              </div>


              <!-- Contraseña -->
              <div class="login-field">

                <img
                  src="images/Lock grey.svg"
                  alt=""
                >

                <input 
                  type="password"
                  id="login-password"
                  placeholder="Contraseña"
                  autocomplete="current-password"
                >

              </div>

            </div>


            <!-- Botón ingresar -->
            <button id="btn-enter" class="login-submit">
              Ingresar
            </button>

          </div>


          <!-- Copyright -->
          <p class="login-copyright">
            El Rincón del Beisból © 2026
          </p>

        </div>

      </div>

    </div>
  `;


  // Regresar a Intro
  container.querySelector("#btn-back").addEventListener("click", () => {
    ctx.navigate("intro", "back");
  });


  // Ingresar
  container
    .querySelector("#btn-enter")
    .addEventListener("click", async () => {

      const username = container
        .querySelector("#login-user")
        .value
        .trim();

      const password = container
        .querySelector("#login-password")
        .value;

      const button = container
        .querySelector("#btn-enter");


      /* campos vacíos */

      if (!username || !password) {

        alert(
          "Por favor ingresa tu usuario y contraseña."
        );

        return;
      }


      try {

        button.disabled = true;


        const response = await fetch(
          "/api/login",
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


        const data =
          await response.json().catch(() => ({}));


        /* login incorrecto */

        if (!response.ok) {

          alert(
            data.error ||
            "No fue posible iniciar sesión."
          );

          return;
        }


        /* guardar usuario en el estado */

        ctx.state.user = data.user;


        /* ir al home */

        ctx.navigate("home");


      } catch (error) {

        console.error(
          "Error al iniciar sesión:",
          error
        );


        alert(
          "No fue posible conectar con el servidor."
        );


      } finally {

        button.disabled = false;

      }

    });
}