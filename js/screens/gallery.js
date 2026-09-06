export async function renderGallery(container, ctx) {

    container.innerHTML = `
        <div class="gallery-screen">

            <div class="gallery-header">

                <div class="gallery-label">
                    COLECCIÓN
                </div>

                <div class="gallery-title">
                    ÁLBUM AR
                </div>

                <div class="gallery-progress">
                    Cargando...
                </div>

            </div>


            <div class="gallery-cards">
            </div>

        </div>
    `;


    const cardsContainer =
        container.querySelector(
            ".gallery-cards"
        );

    const progressElement =
        container.querySelector(
            ".gallery-progress"
        );


    try {

        const response = await fetch(
            "/api/cards",
            {
                method: "GET",
                credentials: "include"
            }
        );


        const data =
            await response
                .json()
                .catch(() => ({}));


        if (response.status === 401) {

            ctx.state.user = null;

            ctx.navigate(
                "intro",
                "back"
            );

            return;
        }


        if (!response.ok) {

            throw new Error(
                data.error ||
                "No fue posible cargar las tarjetas"
            );

        }


        const cards = data.cards;


        const collectedCount =
            cards.filter(
                card => Boolean(card.owned)
            ).length;


        progressElement.textContent =
            `${collectedCount} / ${cards.length} cartas desbloqueadas`;


        cardsContainer.innerHTML =
            cards.map(card => {

                const owned =
                    Boolean(card.owned);


                return `

                    <div
                        class="gallery-card ${owned ? "" : "locked"}"
                        data-id="${card.id}"
                    >

                        <img
                            class="gallery-card-image"
                            src="${card.image}"
                            alt="${card.name}"
                        >

                        <div class="gallery-card-name">
                            ${owned ? card.name : "???"}
                        </div>

                    </div>

                `;

            }).join("");


        /* click en tarjeta */

        cardsContainer
            .querySelectorAll(".gallery-card")
            .forEach(card => {

                card.addEventListener(
                    "click",
                    () => {

                        card.classList.toggle(
                            "selected"
                        );

                    }
                );

            });


    } catch (error) {

        console.error(
            "Error al cargar galería:",
            error
        );


        progressElement.textContent =
            "No fue posible cargar la colección";


        cardsContainer.innerHTML = `
            <div class="gallery-error">
                No fue posible cargar las tarjetas.
            </div>
        `;

    }

}