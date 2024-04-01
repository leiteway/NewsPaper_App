import express from "express";
import { getOneUser } from "../controllers/UserController";

const router = express.Router() //estamos invocado el enrutador

router.get('/', getOneUser );

router.delete('/:id');

router.post('/');

router.put('/:id');

router.get('/:id');

export default router;