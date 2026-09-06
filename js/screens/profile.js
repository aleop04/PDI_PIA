export function renderProfile(container, ctx) {

    container.innerHTML = `
        <div class="profile-screen">

            <!-- ENCABEZADO -->
            <div class="profile-header">

                <div class="profile-header-background"></div>

                <div class="profile-user">

                    <img 
                        class="profile-avatar"
                        id="profile-avatar"
                        src="./images/fotoejemplo.jpg"
                        alt="Foto de perfil"
                    >

                    <input
                        type="file"
                        id="profile-photo-input"
                        accept="image/jpeg,image/png,image/webp"
                        hidden
                    >

                    <!-- INFORMACIÓN NORMAL -->
                    <div class="profile-user-info" id="profile-normal">

                        <div
                            class="profile-username"
                            id="profile-username"
                        >
                            Cargando...
                        </div>

                        <button class="profile-edit-button">
                            Editar datos
                        </button>

                    </div>


                    <!-- INFORMACIÓN PARA EDITAR -->
                    <div class="profile-edit-form" id="profile-edit">

                        <input 
                            type="text"
                            class="profile-input"
                            id="profile-username-input"
                            placeholder="Nombre de usuario"
                        >


                        <input 
                            type="password"
                            class="profile-input"
                            id="profile-current-password"
                            placeholder="Contraseña actual"
                            autocomplete="current-password"
                        >


                        <input 
                            type="password"
                            class="profile-input"
                            id="profile-new-password"
                            placeholder="Nueva contraseña"
                            autocomplete="new-password"
                        >


                        <input 
                            type="password"
                            class="profile-input"
                            id="profile-confirm-password"
                            placeholder="Confirmar nueva contraseña"
                            autocomplete="new-password"
                        >

                        <div class="profile-edit-buttons">

                          <button class="profile-edit-action profile-save-button">
                              Guardar datos
                          </button>

                          <button class="profile-edit-action profile-cancel-button">
                              Cancelar
                          </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    `;


    // Elementos
    const editButton = container.querySelector(".profile-edit-button");
    const saveButton = container.querySelector(".profile-save-button");
    const cancelButton = container.querySelector(".profile-cancel-button");

    const normalInfo = container.querySelector("#profile-normal");
    const editForm = container.querySelector("#profile-edit");

    const usernameElement =
    container.querySelector("#profile-username");

    const usernameInput =
        container.querySelector("#profile-username-input");

    const avatarElement =
        container.querySelector("#profile-avatar");
    
    const photoInput =
    container.querySelector("#profile-photo-input");

    const currentPasswordInput =
    container.querySelector("#profile-current-password");

    const newPasswordInput =
        container.querySelector("#profile-new-password");

    const confirmPasswordInput =
        container.querySelector("#profile-confirm-password");
    
    async function loadProfile() {

        try {

            const response = await fetch(
                "/api/profile",
                {
                    method: "GET",
                    credentials: "include"
                }
            );


            const data =
                await response.json().catch(() => ({}));


            /* sesión inexistente */

            if (response.status === 401) {

                ctx.state.user = null;

                ctx.navigate(
                    "intro",
                    "back"
                );

                return;
            }


            if (!response.ok) {

                console.error(
                    data.error ||
                    "No se pudo obtener el perfil"
                );

                return;
            }


            /* actualizar estado */

            ctx.state.user = {
                id: data.user.id,
                name: data.user.name
            };


            /* mostrar nombre */

            usernameElement.textContent =
                data.user.name;


            /* preparar input de edición */

            usernameInput.value =
                data.user.name;


            /* mostrar foto */

            if (data.user.photo) {

                avatarElement.src =
                    data.user.photo;

            } else {

                avatarElement.src =
                    "./images/fotoejemplo.jpg";

            }


        } catch (error) {

            console.error(
                "Error al cargar perfil:",
                error
            );

        }

    }


    // EDITAR DATOS
    editButton.addEventListener("click", () => {

        normalInfo.style.display = "none";
        editForm.style.display = "flex";

    });


    // GUARDAR DATOS
    saveButton.addEventListener("click", async () => {

        const username =
            usernameInput.value.trim();

        const currentPassword =
            currentPasswordInput.value;

        const newPassword =
            newPasswordInput.value;

        const confirmPassword =
            confirmPasswordInput.value;


        /* nombre vacío */

        if (!username) {

            alert(
                "El nombre de usuario es obligatorio."
            );

            return;
        }


        /* quiere cambiar contraseña */

        if (
            currentPassword ||
            newPassword ||
            confirmPassword
        ) {

            if (!currentPassword) {

                alert(
                    "Debes ingresar tu contraseña actual."
                );

                return;
            }


            if (!newPassword) {

                alert(
                    "Debes ingresar una nueva contraseña."
                );

                return;
            }


            if (!confirmPassword) {

                alert(
                    "Debes confirmar la nueva contraseña."
                );

                return;
            }


            if (newPassword !== confirmPassword) {

                alert(
                    "Las nuevas contraseñas no coinciden."
                );

                return;
            }

        }


        try {

            saveButton.disabled = true;


            const response = await fetch(
                "/api/profile",
                {
                    method: "PUT",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    credentials: "include",

                    body: JSON.stringify({

                        nombre_usuario:
                            username,

                        password_actual:
                            currentPassword,

                        nueva_password:
                            newPassword

                    })

                }
            );


            const data =
                await response
                    .json()
                    .catch(() => ({}));


            /* sesión perdida */

            if (response.status === 401) {

                /*
                Puede ser:
                - contraseña actual incorrecta
                - sesión inexistente
                */

                if (
                    data.error ===
                    "La contraseña actual es incorrecta"
                ) {

                    alert(data.error);

                    return;
                }


                ctx.state.user = null;

                ctx.navigate(
                    "intro",
                    "back"
                );

                return;
            }


            if (!response.ok) {

                alert(
                    data.error ||
                    "No fue posible actualizar el perfil."
                );

                return;
            }


            /* actualizar estado */

            ctx.state.user = data.user;


            /* actualizar nombre visible */

            usernameElement.textContent =
                data.user.name;


            usernameInput.value =
                data.user.name;


            /* limpiar contraseñas */

            currentPasswordInput.value = "";
            newPasswordInput.value = "";
            confirmPasswordInput.value = "";


            /* cerrar edición */

            normalInfo.style.display = "flex";

            editForm.style.display = "none";


            alert(
                "Datos actualizados correctamente."
            );


        } catch (error) {

            console.error(
                "Error al actualizar perfil:",
                error
            );


            alert(
                "No fue posible conectar con el servidor."
            );


        } finally {

            saveButton.disabled = false;

        }

    });

    // CANCELAR EDICIÓN
    cancelButton.addEventListener("click", () => {

        usernameInput.value =
            ctx.state.user?.name || "";

        currentPasswordInput.value = "";
        newPasswordInput.value = "";
        confirmPasswordInput.value = "";


        normalInfo.style.display = "flex";

        editForm.style.display = "none";

    });

    avatarElement.addEventListener(
        "click",
        () => {

            photoInput.click();

        }
    );

    photoInput.addEventListener(
        "change",
        async () => {

            const file =
                photoInput.files[0];


            if (!file) {

                return;

            }


            const formData =
                new FormData();


            formData.append(
                "photo",
                file
            );


            try {

                const response =
                    await fetch(
                        "/api/profile/photo",
                        {
                            method: "POST",

                            credentials:
                                "include",

                            body:
                                formData
                        }
                    );


                const data =
                    await response
                        .json()
                        .catch(() => ({}));


                if (
                    response.status === 401
                ) {

                    ctx.state.user = null;

                    ctx.navigate(
                        "intro",
                        "back"
                    );

                    return;

                }


                if (!response.ok) {

                    alert(
                        data.error ||
                        "No fue posible actualizar la foto."
                    );

                    return;

                }


                avatarElement.src =
                    data.photo;


                alert(
                    "Foto de perfil actualizada correctamente."
                );


            } catch (error) {

                console.error(
                    "Error al actualizar foto:",
                    error
                );


                alert(
                    "No fue posible conectar con el servidor."
                );


            } finally {

                /*
                permitir seleccionar nuevamente
                incluso la misma imagen
                */

                photoInput.value = "";

            }

        }
    );

    loadProfile();

}