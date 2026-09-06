import multer from "multer";
import fs from "fs";

import {
    profileUploadsDir
} from "../config/paths.js";


/* crear carpeta si no existe */

fs.mkdirSync(
    profileUploadsDir,
    {
        recursive: true
    }
);


/* extensiones permitidas */

const extensions = {
    "image/jpeg": ".jpg",
    "image/png": ".png",
    "image/webp": ".webp"
};


/* almacenamiento */

const storage = multer.diskStorage({

    destination: (
        req,
        file,
        callback
    ) => {

        callback(
            null,
            profileUploadsDir
        );

    },


    filename: (
        req,
        file,
        callback
    ) => {

        const extension =
            extensions[file.mimetype];


        const filename =
            `user-${req.session.user.id}-${Date.now()}${extension}`;


        callback(
            null,
            filename
        );

    }

});


/* configuración */

const upload = multer({

    storage,

    limits: {
        fileSize:
            5 * 1024 * 1024
    },

    fileFilter: (
        req,
        file,
        callback
    ) => {

        if (!extensions[file.mimetype]) {

            return callback(
                new Error(
                    "Solo se permiten imágenes JPG, PNG o WEBP"
                )
            );

        }


        callback(
            null,
            true
        );

    }

});


/* middleware final */

export function uploadProfilePhoto(
    req,
    res,
    next
) {

    upload.single("photo")(
        req,
        res,
        (error) => {

            if (!error) {

                return next();

            }


            if (
                error instanceof
                multer.MulterError
            ) {

                if (
                    error.code ===
                    "LIMIT_FILE_SIZE"
                ) {

                    return res
                        .status(400)
                        .json({
                            error:
                                "La imagen no puede superar los 5 MB"
                        });

                }


                return res
                    .status(400)
                    .json({
                        error:
                            "No fue posible procesar la imagen"
                    });

            }


            return res
                .status(400)
                .json({
                    error:
                        error.message ||
                        "Imagen no válida"
                });

        }
    );

}