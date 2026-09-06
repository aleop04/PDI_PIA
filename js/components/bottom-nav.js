export function renderBottomNav(container, current, navigate) {

  const screens = {
    home: {
      label: "Inicio",
      icon: "🏠"
    },

    scan: {
      label: "Escanear",
      icon: "📷"
    },

    gallery: {
      label: "Galería",
      icon: "🎴"
    },

    trivia: {
      label: "Trivia",
      icon: "❓"
    }
  };

  container.innerHTML = Object.entries(screens)
    .map(([id, screen]) => `
      <button
        class="nav-btn ${id === current ? "active" : ""}"
        data-screen="${id}"
      >
        <span>${screen.icon}</span>
        <span>${screen.label}</span>
      </button>
    `)
    .join("");

  container.querySelectorAll(".nav-btn").forEach((button) => {

    button.addEventListener("click", () => {
      navigate(button.dataset.screen);
    });

  });
}