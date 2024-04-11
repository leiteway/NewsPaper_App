import express from "express";
import { createUser } from "../controllers/UserController";


const router = express.Router() 

router.get('/', );

router.delete('/:id');

router.post('/', createUser);

router.put('/:id');

router.get('/:id');

export default router;
