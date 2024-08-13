import express from "express";
import { login, signup } from "../controller/user.controller.js";
import mailController from "../controller/mail.controller.js";


const router = express.Router();

router.post('/signup',signup)
router.post('/login',login)

router.post('/send',mailController)

export default router