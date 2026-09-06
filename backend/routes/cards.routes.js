import { Router } from "express";

import {
    getCards
} from "../controllers/cards.controller.js";

import {
    requireAuth
} from "../middlewares/auth.middleware.js";


const router = Router();


router.get(
    "/cards",
    requireAuth,
    getCards
);


export default router;