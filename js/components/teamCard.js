export function createTeamCard(equipo) {

  return `
    <div class="team-card">

      <h2>${equipo.nombre}</h2>

      <div class="team-media">

        <div class="team-video-wrapper">

          <video
            class="team-video"
            data-src="${equipo.video}"
            poster="${equipo.poster}"
            preload="none"
            playsinline
          ></video>

          <button
            class="team-video-play"
            type="button"
            aria-label="Reproducir video"
          >
            ▶
          </button>

        </div>


        <div class="team-filters">

          <button
            class="filter filter-normal active"
            data-filter="normal"
            type="button"
            aria-label="Video normal"
          ></button>

          <button
            class="filter filter-blur"
            data-filter="blur"
            type="button"
            aria-label="Desenfoque"
          ></button>

          <button
            class="filter filter-thermal"
            data-filter="thermal"
            type="button"
            aria-label="Cámara térmica"
          ></button>

          <button
            class="filter filter-color"
            data-filter="color"
            type="button"
            aria-label="Ajuste de color"
          ></button>

          <button
            class="filter filter-custom"
            data-filter="custom"
            type="button"
            aria-label="Filtro personalizado"
          ></button>

        </div>

      </div>

    </div>
  `;
}

export function initTeamCards(container) {

  const cards = container.querySelectorAll(".team-card");


  cards.forEach(card => {

    const video = card.querySelector(".team-video");

    const playButton = card.querySelector(".team-video-play");

    const filters = card.querySelectorAll(".filter");


    /* reproducir video */

    playButton.addEventListener("click", () => {

      if (!video.src) {

        video.src = video.dataset.src;

        video.load();

      }


      const allVideos =
        container.querySelectorAll(".team-video");


      allVideos.forEach(otherVideo => {

        if (otherVideo !== video) {

          otherVideo.pause();

        }

      });


      video.controls = true;

      playButton.style.display = "none";


      video.play().catch(error => {

        console.error(
          "No se pudo reproducir el video:",
          error
        );

      });

    });


    /* filtros */

    filters.forEach(filterButton => {

      filterButton.addEventListener("click", () => {

        const filterName =
          filterButton.dataset.filter;


        applyVideoFilter(
          video,
          filterName
        );


        /* Quitar selección anterior */

        filters.forEach(button => {

          button.classList.remove("active");

        });


        /* Marcar filtro actual */

        filterButton.classList.add("active");

      });

    });

  });

}

function applyVideoFilter(video, filterName) {

  switch (filterName) {

    case "normal":

      video.style.filter = "none";

      break;


    case "blur":

      video.style.filter = "blur(5px)";

      break;


    case "thermal":

      video.style.filter =
        "contrast(1.5) saturate(4) hue-rotate(180deg)";

      break;


    case "color":

      video.style.filter =
        "saturate(1.8) contrast(1.2)";

      break;


    case "custom":

      video.style.filter =
        "brightness(1.1) saturate(0.8) contrast(0.9)";

      break;

  }

}