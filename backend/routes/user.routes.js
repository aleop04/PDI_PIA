import { Router } from "express";

import {
    getProfile,
    updateProfile,
    updateProfilePhoto
} from "../controllers/user.controller.js";

import {
    requireAuth
} from "../middlewares/auth.middleware.js";

import {
    uploadProfilePhoto
} from "../middlewares/upload.middleware.js";

const router = Router();


router.get(
    "/profile",
    requireAuth,
    getProfile
);

router.put(
    "/profile",
    requireAuth,
    updateProfile
);

router.post(
    "/profile/photo",
    requireAuth,
    uploadProfilePhoto,
    updateProfilePhoto
);

export default router;