export function renderHeader(container, ctx) {
  container.innerHTML = `
    <header class="app-header">

      <button class="header-user" id="btn-user">
        <img src="images/User.svg" alt="Usuario">
      </button>

      <img
        class="header-logo"
        src="images/logo2.png"
        alt="El Rincón del Beisbol"
      >

      <button class="header-logout" id="btn-logout">
        <img src="images/Log out.svg" alt="Cerrar sesión">
      </button>

    </header>
  `;

    container.querySelector("#btn-user").addEventListener("click", () => {
        ctx.navigate("profile", "forward");
    });

    container
    .querySelector("#btn-logout")
    .addEventListener("click", async () => {

      try {

        const response = await fetch(
          "/api/logout",
          {
            method: "POST",
            credentials: "include"
          }
        );


        if (!response.ok) {

          const data =
            await response.json().catch(() => ({}));


          alert(
            data.error ||
            "No fue posible cerrar sesión."
          );

          return;
        }


        ctx.state.user = null;

        ctx.navigate("intro", "back");


      } catch (error) {

        console.error(
          "Error al cerrar sesión:",
          error
        );


        alert(
          "No fue posible conectar con el servidor."
        );

      }

    });
}