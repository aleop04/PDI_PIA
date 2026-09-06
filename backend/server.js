import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";

import {
    sessionMiddleware
} from "./config/session.js";

import userRoutes from "./routes/user.routes.js";

import path from "path";

import {
    backendRoot,
    projectRoot
} from "./config/paths.js";

import cardsRoutes from "./routes/cards.routes.js";

import triviaRoutes from "./routes/trivia.routes.js";

const app = express();

const PORT = process.env.PORT || 3000;


/* middlewares */

app.use(
    cors({
        origin: [
            "http://localhost:5500",
            "http://127.0.0.1:5500"
        ],

        credentials: true
    })
);

app.use(express.json());

app.use(sessionMiddleware);

app.use(
    "/uploads",
    express.static(
        path.join(
            backendRoot,
            "uploads"
        )
    )
);

/* rutas */
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", cardsRoutes);
app.use("/api", triviaRoutes);

/* archivos del frontend */

app.use(
    "/js",
    express.static(
        path.join(projectRoot, "js")
    )
);

app.use(
    "/images",
    express.static(
        path.join(projectRoot, "images")
    )
);

app.use(
    "/css",
    express.static(
        path.join(projectRoot, "css")
    )
);


app.get("/", (req, res) => {

    res.sendFile(
        path.join(
            projectRoot,
            "index.html"
        )
    );

});

/* iniciar servidor */

app.listen(
    PORT,
    "0.0.0.0",
    () => {

        console.log(
            `Servidor funcionando en el puerto ${PORT}`
        );

    }
);