import express from "express";
import { getAllNews, addNewPost } from "../controllers/NewsController";

const router = express.Router() //estamos invocado el enrutador

router.get('/', getAllNews);

router.delete('/:id');

router.post('/', addNewPost);

router.put('/:id');

router.get('/:id');

export default router;