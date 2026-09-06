export function renderScan(container, ctx) {
  container.innerHTML = `
    <div class="scan-screen">

      <!-- Header azul del escáner -->
      <div class="scan-header">
        <img src="images/logo1.png" alt="El Rincón del Beisbol">
      </div>

      <!-- Área del escáner -->
      <div class="scan-camera">

        <div class="scan-frame">

          <div class="scan-corner scan-corner-tl"></div>
          <div class="scan-corner scan-corner-tr"></div>
          <div class="scan-corner scan-corner-bl"></div>
          <div class="scan-corner scan-corner-br"></div>

        </div>

        <div class="scan-instruction">
          Apunta la cámara a un póster, QR u objeto
        </div>

      </div>

    </div>
  `;
}