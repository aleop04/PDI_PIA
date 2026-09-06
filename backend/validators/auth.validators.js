export function validateUsername(username) {

    if (typeof username !== "string") {
        return "El nombre de usuario es obligatorio";
    }

    const cleanUsername = username.trim();


    if (!cleanUsername) {
        return "El nombre de usuario es obligatorio";
    }


    if (
        cleanUsername.length < 3 ||
        cleanUsername.length > 10
    ) {
        return "El nombre de usuario debe tener entre 3 y 10 caracteres";
    }


    const usernameRegex = /^[a-zA-Z0-9_]+$/;


    if (!usernameRegex.test(cleanUsername)) {
        return "El nombre de usuario solo puede contener letras, números y guion bajo";
    }


    return null;
}


export function validatePassword(password) {

    if (typeof password !== "string") {
        return "La contraseña es obligatoria";
    }


    if (!password) {
        return "La contraseña es obligatoria";
    }


    if (password.length < 6) {
        return "La contraseña debe tener al menos 6 caracteres";
    }


    if (password.length > 72) {
        return "La contraseña no puede superar los 72 caracteres";
    }


    // Al menos una letra minúscula
    if (!/[a-z]/.test(password)) {
        return "La contraseña debe contener al menos una letra minúscula";
    }


    // Al menos una letra mayúscula
    if (!/[A-Z]/.test(password)) {
        return "La contraseña debe contener al menos una letra mayúscula";
    }


    // Al menos un número
    if (!/[0-9]/.test(password)) {
        return "La contraseña debe contener al menos un número";
    }


    return null;
}