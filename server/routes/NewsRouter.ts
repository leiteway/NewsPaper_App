import express from "express";
import { addNewPost, deletePost, editPost, getAllNews, getOnePost } from "../controllers/NewsController";

const router = express.Router()//estamos invocado el enrutador

router.get('/', getAllNews);

router.delete('/:id', deletePost);

router.post('/post', addNewPost);

router.put('/:id', editPost);

router.get('/:id', getOnePost);

export default router;