import bcrypt from "bcryptjs";

import { db } from "../db.js";

import {
    validateUsername,
    validatePassword
} from "../validators/auth.validators.js";


export async function register(req, res) {

    try {

        const {
            nombre_usuario,
            password
        } = req.body;


        /* validaciones */

        const usernameError =
            validateUsername(nombre_usuario);


        if (usernameError) {

            return res.status(400).json({
                error: usernameError
            });

        }


        const passwordError =
            validatePassword(password);


        if (passwordError) {

            return res.status(400).json({
                error: passwordError
            });

        }


        const usuarioLimpio =
            nombre_usuario.trim();


        /* comprobar usuario */

        const [usuariosExistentes] =
            await db.query(
                `
                SELECT id_usuario
                FROM usuarios
                WHERE nombre_usuario = ?
                `,
                [usuarioLimpio]
            );


        if (usuariosExistentes.length > 0) {

            return res.status(409).json({
                error:
                    "Ese nombre de usuario ya está registrado"
            });

        }


        /* hash contra */

        const passwordHash =
            await bcrypt.hash(password, 10);


        /* insertar usuario */

        const [resultado] =
            await db.query(
                `
                INSERT INTO usuarios (
                    nombre_usuario,
                    password_hash
                )
                VALUES (?, ?)
                `,
                [
                    usuarioLimpio,
                    passwordHash
                ]
            );

        req.session.user = {
            id: resultado.insertId,
            name: usuarioLimpio
        };


        /* respuesta */

        return res.status(201).json({

            message:
                "Usuario registrado correctamente",

            user: req.session.user

        });


    } catch (error) {

        console.error(
            "Error al registrar usuario:",
            error
        );


        if (error.code === "ER_DUP_ENTRY") {

            return res.status(409).json({
                error:
                    "Ese nombre de usuario ya está registrado"
            });

        }


        return res.status(500).json({
            error:
                "Error interno del servidor"
        });

    }

}

export async function login(req, res) {

    try {

        const {
            nombre_usuario,
            password
        } = req.body;


        /* comprobar campos */

        if (
            typeof nombre_usuario !== "string" ||
            !nombre_usuario.trim() ||
            typeof password !== "string" ||
            !password
        ) {

            return res.status(400).json({
                error:
                    "Usuario y contraseña son obligatorios"
            });

        }


        const usuarioLimpio =
            nombre_usuario.trim();


        /* buscar usuario */

        const [usuarios] =
            await db.query(
                `
                SELECT
                    id_usuario,
                    nombre_usuario,
                    password_hash
                FROM usuarios
                WHERE nombre_usuario = ?
                LIMIT 1
                `,
                [usuarioLimpio]
            );


        if (usuarios.length === 0) {

            return res.status(401).json({
                error:
                    "Usuario o contraseña incorrectos"
            });

        }


        const usuario = usuarios[0];


        /* comparar contraseña */

        const passwordCorrecta =
            await bcrypt.compare(
                password,
                usuario.password_hash
            );


        if (!passwordCorrecta) {

            return res.status(401).json({
                error:
                    "Usuario o contraseña incorrectos"
            });

        }


        /* crear sesión */

        req.session.user = {
            id: usuario.id_usuario,
            name: usuario.nombre_usuario
        };


        /* respuesta */

        return res.status(200).json({

            message:
                "Inicio de sesión correcto",

            user: req.session.user

        });


    } catch (error) {

        console.error(
            "Error al iniciar sesión:",
            error
        );


        return res.status(500).json({
            error:
                "Error interno del servidor"
        });

    }

}

export function logout(req, res) {

    req.session.destroy((error) => {

        if (error) {

            console.error(
                "Error al cerrar sesión:",
                error
            );

            return res.status(500).json({
                error: "No fue posible cerrar la sesión"
            });

        }


        res.clearCookie("pdipia.sid");


        return res.status(200).json({
            message: "Sesión cerrada correctamente"
        });

    });

}

export function me(req, res) {

    return res.status(200).json({

        user: req.session.user

    });

}