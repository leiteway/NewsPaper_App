import express from "express";
import { getAllPosts, deletePost, addNewPost, editPost, getOnePost } from "../controllers/NewsController";

const router = express.Router() 

router.get('/', getAllPosts);

router.delete('/:id', deletePost);

router.post('/', addNewPost);

router.put('/:id', editPost);

router.get('/:id', getOnePost);

export default router;