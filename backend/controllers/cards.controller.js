import { db } from "../db.js";


export async function getCards(req, res) {

    try {

        const userId = req.session.user.id;


        const [cards] = await db.query(
            `
            SELECT
                t.id_tarjeta AS id,
                t.nombre AS name,
                t.imagen AS image,

                CASE
                    WHEN ut.id_usuario IS NOT NULL
                    THEN TRUE
                    ELSE FALSE
                END AS owned

            FROM tarjetas t

            LEFT JOIN usuarios_tarjetas ut
                ON ut.id_tarjeta = t.id_tarjeta
                AND ut.id_usuario = ?

            ORDER BY t.id_tarjeta
            `,
            [userId]
        );


        return res.status(200).json({
            cards
        });


    } catch (error) {

        console.error(
            "Error al obtener tarjetas:",
            error
        );


        return res.status(500).json({
            error: "Error interno del servidor"
        });

    }

}