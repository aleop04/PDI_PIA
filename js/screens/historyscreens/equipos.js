import { createTeamCard, initTeamCards } from "../../components/teamCard.js";

export function renderEquipos(container, ctx) {

  const equipos = [
    {
      nombre: "Acereros de Monclova",
      video: "../images/videos/acereros.mp4",
      poster: "../images/videos/posters/acereros.png"
    },
    {
      nombre: "Algodoneros de Unión Laguna",
      video: "../images/videos/algodoneros.mp4",
      poster: "../images/videos/posters/algodoneros.png"
    },
    {
      nombre: "Charros de Jalisco",
      video: "../images/videos/charros.mp4",
      poster: "../images/videos/posters/charros.png"
    },
    {
      nombre: "Dorados de Chihuahua",
      video: "../images/videos/dorados.mp4",
      poster: "../images/videos/posters/dorados.png"
    },
    {
      nombre: "Rieleros de Aguascalientes",
      video: "../images/videos/rieleros.mp4",
      poster: "../images/videos/posters/rieleros.png"
    },
    {
      nombre: "Saraperos de Saltillo",
      video: "../images/videos/saraperos.mp4",
      poster: "../images/videos/posters/saraperos.png"
    },
    {
      nombre: "Sultanes de Monterrey",
      video: "../images/videos/sultanes.mp4",
      poster: "../images/videos/posters/sultanes.png"
    },
    {
      nombre: "Tecolotes de los Dos Laredos",
      video: "../images/videos/tecolotes.mp4",
      poster: "../images/videos/posters/tecos.png"
    },
    {
      nombre: "Toros de Tijuana",
      video: "../images/videos/toros.mp4",
      poster: "../images/videos/posters/toros.png"
    },
    {
      nombre: "Caliente de Durango",
      video: "../images/videos/caliente.mp4",
      poster: "../images/videos/posters/caliente.png"
    }
  ];


  container.innerHTML = `
    <div class="teams-screen">

      <div class="teams-banner"></div>

      <div class="teams-content">

        <h1>Equipos</h1>

        <p>Conoce nuestros clubes</p>

        <div class="teams-grid">

          ${equipos.map(equipo => createTeamCard(equipo)).join("")}

        </div>

      </div>

    </div>
  `;


  initTeamCards(container);

}