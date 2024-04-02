import express from "express";
import { createUser, getOneUser } from "../controllers/UserController";

const router = express.Router() //estamos invocado el enrutador

router.get('/', getOneUser );

router.delete('/:id');

router.post('/', createUser);

router.put('/:id');

router.get('/:id');

export default router;