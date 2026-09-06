export function renderHistoryTeam(equipo) {

  return `
    <div
      class="historia-team-item"
      style="--team-color: ${equipo.color};"
    >

      <button
        class="historia-team-button"
        type="button"
      >

        <span class="historia-team-name">
          ${equipo.nombre}
        </span>

        <img
          class="historia-chevron"
          src="../images/Chevron down.svg"
          alt=""
        >

      </button>


      <div class="historia-team-info">

        <p class="historia-team-text">
          ${equipo.historia}
        </p>

        ${
          equipo.imagen
            ? `
              <img
                class="historia-team-image"
                src="${equipo.imagen}"
                alt="${equipo.nombre}"
              >
            `
            : ""
        }

      </div>

    </div>
  `;
}