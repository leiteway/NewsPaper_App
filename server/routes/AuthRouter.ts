import express from "express";
import { loginUser, registerUser } from "../controllers/AuthController";


const router = express.Router() //estamos invocado el enrutador

router.post('/register', registerUser );

router.post('/login', loginUser)

export default router;
