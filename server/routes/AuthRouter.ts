import express from "express";
import { loginUser, registerUser, verifyUserRole } from "../controllers/AuthController";


const router = express.Router() //estamos invocado el enrutador

router.post('/register', registerUser );

router.post('/login', verifyUserRole('admin'), loginUser)

export default router;
