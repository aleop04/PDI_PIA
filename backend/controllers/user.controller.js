import bcrypt from "bcryptjs";

import { db } from "../db.js";

import {
    validateUsername,
    validatePassword
} from "../validators/auth.validators.js";

import fs from "fs/promises";
import path from "path";

import {
    profileUploadsDir
} from "../config/paths.js";

export async function getProfile(req, res) {

    try {

        const userId = req.session.user.id;


        const [usuarios] = await db.query(
            `
            SELECT
                id_usuario,
                nombre_usuario,
                foto_perfil
            FROM usuarios
            WHERE id_usuario = ?
            LIMIT 1
            `,
            [userId]
        );


        if (usuarios.length === 0) {

            return res.status(404).json({
                error: "Usuario no encontrado"
            });

        }


        const usuario = usuarios[0];


        return res.status(200).json({

            user: {
                id: usuario.id_usuario,
                name: usuario.nombre_usuario,
                photo: usuario.foto_perfil
            }

        });


    } catch (error) {

        console.error(
            "Error al obtener perfil:",
            error
        );


        return res.status(500).json({
            error: "Error interno del servidor"
        });

    }

}

export async function updateProfile(req, res) {

    try {

        const userId = req.session.user.id;

        const {
            nombre_usuario,
            password_actual,
            nueva_password
        } = req.body;


        /* VALIDA NOMBRE */

        const usernameError =
            validateUsername(nombre_usuario);


        if (usernameError) {

            return res.status(400).json({
                error: usernameError
            });

        }


        const usuarioLimpio =
            nombre_usuario.trim();


        /* BUSCA USUARIO ACTUAL */

        const [usuarios] = await db.query(
            `
            SELECT
                id_usuario,
                nombre_usuario,
                password_hash
            FROM usuarios
            WHERE id_usuario = ?
            LIMIT 1
            `,
            [userId]
        );


        if (usuarios.length === 0) {

            return res.status(404).json({
                error: "Usuario no encontrado"
            });

        }


        const usuario = usuarios[0];


        /* VERIFICAR NOMBRE D USUARIO UNIQUE */

        const [usuarioExistente] = await db.query(
            `
            SELECT id_usuario
            FROM usuarios
            WHERE nombre_usuario = ?
            AND id_usuario <> ?
            LIMIT 1
            `,
            [
                usuarioLimpio,
                userId
            ]
        );


        if (usuarioExistente.length > 0) {

            return res.status(409).json({
                error:
                    "Ese nombre de usuario ya está registrado"
            });

        }


        /* CAMBIO D CONTRA */

        if (nueva_password) {

            if (
                typeof password_actual !== "string" ||
                !password_actual
            ) {

                return res.status(400).json({
                    error:
                        "Debes ingresar tu contraseña actual"
                });

            }


            const passwordCorrecta =
                await bcrypt.compare(
                    password_actual,
                    usuario.password_hash
                );


            if (!passwordCorrecta) {

                return res.status(401).json({
                    error:
                        "La contraseña actual es incorrecta"
                });

            }


            const passwordError =
                validatePassword(nueva_password);


            if (passwordError) {

                return res.status(400).json({
                    error: passwordError
                });

            }


            const nuevoPasswordHash =
                await bcrypt.hash(
                    nueva_password,
                    10
                );


            await db.query(
                `
                UPDATE usuarios
                SET
                    nombre_usuario = ?,
                    password_hash = ?
                WHERE id_usuario = ?
                `,
                [
                    usuarioLimpio,
                    nuevoPasswordHash,
                    userId
                ]
            );

        } else {

            /* solo cambiar nombre */

            await db.query(
                `
                UPDATE usuarios
                SET nombre_usuario = ?
                WHERE id_usuario = ?
                `,
                [
                    usuarioLimpio,
                    userId
                ]
            );

        }


        /* actualizar también la sesión */

        req.session.user.name =
            usuarioLimpio;


        return res.status(200).json({

            message:
                "Perfil actualizado correctamente",

            user: {
                id: userId,
                name: usuarioLimpio
            }

        });


    } catch (error) {

        console.error(
            "Error al actualizar perfil:",
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

export async function updateProfilePhoto(
    req,
    res
) {

    try {

        const userId =
            req.session.user.id;


        if (!req.file) {

            return res
                .status(400)
                .json({
                    error:
                        "Debes seleccionar una imagen"
                });

        }


        /* buscar foto anterior */

        const [usuarios] =
            await db.query(
                `
                SELECT foto_perfil
                FROM usuarios
                WHERE id_usuario = ?
                LIMIT 1
                `,
                [userId]
            );


        if (usuarios.length === 0) {

            await fs.unlink(
                req.file.path
            ).catch(() => {});


            return res
                .status(404)
                .json({
                    error:
                        "Usuario no encontrado"
                });

        }


        const fotoAnterior =
            usuarios[0].foto_perfil;


        /* ruta que guardaremos en mysql */

        const nuevaFoto =
            `/uploads/profiles/${req.file.filename}`;


        await db.query(
            `
            UPDATE usuarios
            SET foto_perfil = ?
            WHERE id_usuario = ?
            `,
            [
                nuevaFoto,
                userId
            ]
        );


        /*
         eliminar foto anterior
         si existía
        */

        if (
            fotoAnterior &&
            fotoAnterior.startsWith(
                "/uploads/profiles/"
            )
        ) {

            const nombreAnterior =
                path.basename(
                    fotoAnterior
                );


            const rutaAnterior =
                path.join(
                    profileUploadsDir,
                    nombreAnterior
                );


            await fs.unlink(
                rutaAnterior
            ).catch(() => {});

        }


        return res
            .status(200)
            .json({

                message:
                    "Foto de perfil actualizada correctamente",

                photo:
                    nuevaFoto

            });


    } catch (error) {

        console.error(
            "Error al actualizar foto de perfil:",
            error
        );


        /*
         si hubo un error después
         de guardar el archivo,
         eliminarlo
        */

        if (req.file?.path) {

            await fs.unlink(
                req.file.path
            ).catch(() => {});

        }


        return res
            .status(500)
            .json({
                error:
                    "Error interno del servidor"
            });

    }

}