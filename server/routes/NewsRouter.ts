import express from "express";
import { getAllNews } from "../controllers/NewsController";

const router = express.Router() //estamos invocado el enrutador

router.get('/', getAllNews);

router.delete('/:id');

router.post('/');

router.put('/:id');

router.get('/:id');

export default router;