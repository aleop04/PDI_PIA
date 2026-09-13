import {
    startScanner
} from "../ar/arScanner.js";


export function renderScan(container, ctx) {

    container.innerHTML = `

        <div class="scan-screen">


            <!-- Header azul del escáner -->

            <div class="scan-header">

                <img
                    src="images/logo1.png"
                    alt="El Rincón del Beisbol"
                >

            </div>


            <!-- Área del escáner -->

            <div class="scan-camera">


                <!-- Aquí MindAR coloca
                     video + canvas -->

                <div
                    class="scan-ar-container"
                    id="scan-ar-container"
                >
                </div>


                <!-- Marco visual -->

                <div class="scan-frame">

                    <div
                        class="
                            scan-corner
                            scan-corner-tl
                        "
                    ></div>

                    <div
                        class="
                            scan-corner
                            scan-corner-tr
                        "
                    ></div>

                    <div
                        class="
                            scan-corner
                            scan-corner-bl
                        "
                    ></div>

                    <div
                        class="
                            scan-corner
                            scan-corner-br
                        "
                    ></div>

                </div>


                <!-- Instrucción -->

                <div
                    class="scan-instruction"
                    id="scan-instruction"
                >
                    Preparando cámara...
                </div>


            </div>


        </div>

    `;


    const arContainer =
        container.querySelector(
            "#scan-ar-container"
        );


    const instruction =
        container.querySelector(
            "#scan-instruction"
        );


    startScanner(
      arContainer,
      {

          onTargetFound: (team) => {

              instruction.textContent =
                  `Equipo detectado: ${team.name}`;

          },


          onTargetLost: (team) => {

              instruction.textContent =
                  "Apunta la cámara al logo de un equipo";

          }

      }
  )

  .then(() => {

      instruction.textContent =
          "Apunta la cámara al logo de un equipo";

  })

  .catch((error) => {

      console.error(error);

      instruction.textContent =
          "No fue posible iniciar la cámara";

  });

}