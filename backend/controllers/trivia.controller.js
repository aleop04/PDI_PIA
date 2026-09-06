import { db } from "../db.js";


export async function completeTrivia(req, res) {

    try {

        const userId =
            req.session.user.id;

        const {
            codigo,
            score
        } = req.body;


        /* validar datos */

        if (
            typeof codigo !== "string" ||
            !codigo.trim()
        ) {

            return res.status(400).json({
                error:
                    "Código de trivia inválido"
            });

        }


        if (
            typeof score !== "number"
        ) {

            return res.status(400).json({
                error:
                    "Puntaje inválido"
            });

        }


        const codigoLimpio =
            codigo.trim();


        /* buscar trivia y tarjeta */

        const [resultados] =
            await db.query(
                `
                SELECT
                    tr.id_trivia,
                    tr.puntaje_requerido,

                    ta.id_tarjeta,
                    ta.nombre,
                    ta.imagen

                FROM trivias tr

                INNER JOIN tarjetas ta
                    ON ta.id_trivia = tr.id_trivia

                WHERE tr.codigo = ?

                LIMIT 1
                `,
                [codigoLimpio]
            );


        if (resultados.length === 0) {

            return res.status(404).json({
                error:
                    "Trivia no encontrada"
            });

        }


        const trivia =
            resultados[0];


        /* no obtuvo el puntaje necesario */

        if (
            score !== trivia.puntaje_requerido
        ) {

            return res.status(200).json({

                awarded: false,

                reason:
                    "score_not_enough"

            });

        }


        /*
         Intentar entregar tarjeta.

         INSERT IGNORE evita insertar otra vez
         la misma combinación:
         usuario + tarjeta
        */

        const [resultadoInsert] =
            await db.query(
                `
                INSERT IGNORE INTO usuarios_tarjetas (
                    id_usuario,
                    id_tarjeta
                )
                VALUES (?, ?)
                `,
                [
                    userId,
                    trivia.id_tarjeta
                ]
            );


        /* ya tenía la tarjeta */

        if (
            resultadoInsert.affectedRows === 0
        ) {

            return res.status(200).json({

                awarded: false,

                alreadyOwned: true

            });

        }


        /* tarjeta nueva */

        return res.status(201).json({

            awarded: true,

            card: {
                id:
                    trivia.id_tarjeta,

                name:
                    trivia.nombre,

                image:
                    trivia.imagen
            }

        });


    } catch (error) {

        console.error(
            "Error al completar trivia:",
            error
        );


        return res.status(500).json({
            error:
                "Error interno del servidor"
        });

    }

}