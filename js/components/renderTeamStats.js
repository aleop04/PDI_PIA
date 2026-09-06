import { renderStatsTable } from "./renderStatsTable.js";

export function renderTeamStats(equipo) {

  let contenido = "";

  if (equipo.bateo && equipo.pitcheo) {

    contenido = `
      <div class="stadistics-team-content">

        ${renderStatsTable(
          "Líderes de Bateo",
          ["Nombre", "AVG", "R", "HR", "RBI", "SB"],
          equipo.bateo
        )}

        ${renderStatsTable(
          "Líderes de Pitcheo",
          ["Nombre", "ERA", "W", "SO", "SV", "WHIP"],
          equipo.pitcheo
        )}

      </div>
    `;
  }

  return `
    <div
      class="stadistics-team-item"
      style="--team-color: ${equipo.color};"
    >

      <button
        class="stadistics-team"
        type="button"
      >

        <span class="stadistics-team-name">
          ${equipo.nombre}
        </span>

        <img
          class="stadistics-chevron"
          src="../images/Chevron down.svg"
          alt=""
        >

      </button>

      ${contenido}

    </div>
  `;
}