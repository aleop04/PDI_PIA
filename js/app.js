import { renderIntro } from "./screens/intro.js";
import { renderLogin } from "./screens/login.js";
import { renderRegister } from "./screens/register.js";
import { renderHome } from "./screens/home.js";
import { renderScan } from "./screens/scan.js";
import { renderGallery } from "./screens/gallery.js";
import { renderTrivia } from "./screens/trivia.js";
import { renderProfile } from "./screens/profile.js";
import { renderHistory } from "./screens/history.js";
import { renderGames } from "./screens/games.js";

import { renderAcererosdeMonclova } from "./screens/triviascreens/acererosdemonclova.js";
import { renderAlgodonerosUnionLaguna } from "./screens/triviascreens/algodonerosunionlaguna.js";
import { renderCalientedeDurango } from "./screens/triviascreens/calientededurango.js";
import { renderCharrosdeJalisco } from "./screens/triviascreens/charrosdejalisco.js";
import { renderDoradosdeChihuahua } from "./screens/triviascreens/doradosdechihuahua.js";
import { renderRielerosdeAguascalientes } from "./screens/triviascreens/rielerosdeaguascalientes.js";
import { renderSaraperosdeSaltillo } from "./screens/triviascreens/saraperosdesaltillo.js";
import { renderSultanesdeMonterrey } from "./screens/triviascreens/sultanesdemonterrey.js";
import { renderTecolotesdelosdosLaredos } from "./screens/triviascreens/tecolotesdelosdoslaredos.js";
import { renderTorosdeTijuana } from "./screens/triviascreens/torosdetijuana.js";

import { renderEquipos } from "./screens/historyscreens/equipos.js";
import { renderEstadisticas } from "./screens/historyscreens/estadisticas.js";
import { renderHistoria } from "./screens/historyscreens/historia.js";

import { renderAtrapalaPelota } from "./screens/gamescreens/atrapalapelota.js";
import { renderHomeRun } from "./screens/gamescreens/homerun.js";
import { renderMemorama } from "./screens/gamescreens/memorama.js";

import { renderBottomNav } from "./components/bottom-nav.js";
import { renderHeader } from "./components/header.js";

const content = document.getElementById("screen-content");
const nav = document.getElementById("bottom-nav");
const header = document.getElementById("header");

const ctx = {
  state: {
    user: null,
  },
  navigate,
  cleanup: null,
};

function navigate(screenId, direction = "forward") {

  // Limpiar procesos de la pantalla anterior
  if (ctx.cleanup) {
    ctx.cleanup();
    ctx.cleanup = null;
  }

  if (screenId === "intro") {

    header.style.display = "none";
    nav.style.display = "none";

    renderIntro(content, ctx);

    content.firstElementChild.classList.add(
      direction === "back"
        ? "slide-in-left"
        : "slide-in-right"
    );

    return;
  }

  if (screenId === "login") {

    header.style.display = "none";
    nav.style.display = "none";

    renderLogin(content, ctx);

    content.firstElementChild.classList.add(
      direction === "back"
        ? "slide-in-left"
        : "slide-in-right"
    );

    return;
  }

  if (screenId === "register") {

    header.style.display = "none";
    nav.style.display = "none";

    renderRegister(content, ctx);

    content.firstElementChild.classList.add(
      direction === "back"
        ? "slide-in-left"
        : "slide-in-right"
    );

    return;
  }

    if (screenId === "home") {

      header.style.display = "block";
      nav.style.display = "flex";

      renderHeader(header, ctx);
      renderBottomNav(nav, "home", navigate);

      renderHome(content, ctx);

      return;
    }


  if (screenId === "scan") {

    header.style.display = "none";
    nav.style.display = "flex";

    renderBottomNav(nav, "scan", navigate);

    renderScan(content, ctx);

    return;
  }


  if (screenId === "gallery") {

    header.style.display = "block";
    nav.style.display = "flex";

    renderHeader(header, ctx);
    renderBottomNav(nav, "gallery", navigate);

    renderGallery(content, ctx);

    return;
  }


  if (screenId === "trivia") {

    header.style.display = "block";
    nav.style.display = "flex";

    renderHeader(header, ctx);
    renderBottomNav(nav, "trivia", navigate);

    renderTrivia(content, ctx);

    return;
  }

  if (screenId === "profile") {

    header.style.display = "block";
    nav.style.display = "flex";

    renderHeader(header, ctx);
    renderBottomNav(nav, "home", navigate);

    renderProfile(content, ctx);

    return;
  }

  if (screenId === "history") {

    nav.style.display = "flex";

    renderBottomNav(nav, "home", navigate);

    renderHistory(content, ctx);

    return;
  }

  if (screenId === "equipos") {

  nav.style.display = "flex";

    renderBottomNav(nav, "home", navigate);

    renderEquipos(content, ctx);

    return;
}

if (screenId === "estadisticas") {

  nav.style.display = "flex";

    renderBottomNav(nav, "home", navigate);

    renderEstadisticas(content, ctx);

    return;
}

if (screenId === "historia") {

  nav.style.display = "flex";

    renderBottomNav(nav, "home", navigate);

    renderHistoria(content, ctx);

    return;
}

  if (screenId === "games") {

    nav.style.display = "flex";

    renderBottomNav(nav, "home", navigate);

    renderGames(content, ctx);

    return;
  }

  if (screenId === "atrapalapelota") {

  nav.style.display = "flex";

  renderHeader(header, ctx);
  renderBottomNav(nav, "home", navigate);

  renderAtrapalaPelota(content, ctx);

  return;
}


if (screenId === "homerun") {

  nav.style.display = "flex";

  renderHeader(header, ctx);
  renderBottomNav(nav, "home", navigate);

  renderHomeRun(content, ctx);

  return;
}


if (screenId === "memorama") {

  nav.style.display = "flex";

  renderHeader(header, ctx);
  renderBottomNav(nav, "home", navigate);

  renderMemorama(content, ctx);

  return;
}

  if (screenId === "acererosdemonclova") {

    nav.style.display = "flex";

    renderBottomNav(nav, "trivia", navigate);

    renderAcererosdeMonclova(content, ctx);

    return; 
  } 

  if (screenId === "algodonerosunionlaguna") {

    nav.style.display = "flex";

    renderBottomNav(nav, "trivia", navigate);

    renderAlgodonerosUnionLaguna(content, ctx);

    return; 
  } 

  if (screenId === "calientededurango") {

    nav.style.display = "flex";

    renderBottomNav(nav, "trivia", navigate);

    renderCalientedeDurango(content, ctx);

    return; 
  } 

  if (screenId === "charrosdejalisco") {

    nav.style.display = "flex";

    renderBottomNav(nav, "trivia", navigate);

    renderCharrosdeJalisco(content, ctx);

    return; 
  } 

  if (screenId === "doradosdechihuahua") {

    nav.style.display = "flex";

    renderBottomNav(nav, "trivia", navigate);

    renderDoradosdeChihuahua(content, ctx);

    return; 
  } 

  if (screenId === "rielerosdeaguascalientes") {

    nav.style.display = "flex";

    renderBottomNav(nav, "trivia", navigate);

    renderRielerosdeAguascalientes(content, ctx);

    return; 
  }
  
  if (screenId === "saraperosdesaltillo") {

    nav.style.display = "flex";

    renderBottomNav(nav, "trivia", navigate);

    renderSaraperosdeSaltillo(content, ctx);

    return; 
  }

  if (screenId === "sultanesdemonterrey") {

    nav.style.display = "flex";

    renderBottomNav(nav, "trivia", navigate);

    renderSultanesdeMonterrey(content, ctx);

    return; 
  }

  if (screenId === "tecolotesdelosdoslaredos") {

    nav.style.display = "flex";

    renderBottomNav(nav, "trivia", navigate);

    renderTecolotesdelosdosLaredos(content, ctx);

    return; 
  }

  if (screenId === "torosdetijuana") {

    nav.style.display = "flex";

    renderBottomNav(nav, "trivia", navigate);

    renderTorosdeTijuana(content, ctx);

    return; 
  }
}


// Iniciar aplicación en Intro
async function initializeApp() {

  try {

    const response = await fetch(
      "/api/me",
      {
        method: "GET",
        credentials: "include"
      }
    );


    // No existe una sesión válida
    if (!response.ok) {

      ctx.state.user = null;

      navigate("intro");

      return;
    }


    const data = await response.json();


    // Recuperar usuario
    ctx.state.user = data.user;


    // Usuario ya autenticado
    navigate("home");


  } catch (error) {

    console.error(
      "No fue posible comprobar la sesión:",
      error
    );


    ctx.state.user = null;

    navigate("intro");

  }

}


// Iniciar aplicación
initializeApp();