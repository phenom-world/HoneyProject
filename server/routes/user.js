import express from "express";

const router = express.Router();

import { signup, signin, forgotPassword, resetPassword, verifyEmail } from "../controllers/user.js";

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forgotPassword", forgotPassword);
router.put("/resetpassword/:resettoken", resetPassword)
router.get("/verify/:id/:token", verifyEmail)

export default router;
