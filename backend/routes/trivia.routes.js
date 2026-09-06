import { Router } from "express";

import {
    completeTrivia
} from "../controllers/trivia.controller.js";

import {
    requireAuth
} from "../middlewares/auth.middleware.js";


const router = Router();


router.post(
    "/trivia/complete",
    requireAuth,
    completeTrivia
);


export default router;