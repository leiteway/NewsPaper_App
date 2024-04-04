import express from "express";
import { loginUser, registerUser } from "../controllers/AuthController";
import { userValidationRules } from "../validators/UserValidator";


const router = express.Router() //estamos invocado el enrutador

router.post('/register', userValidationRules, registerUser );

router.post('/login', loginUser)

export default router;
