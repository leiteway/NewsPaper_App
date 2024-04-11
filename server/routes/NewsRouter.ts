import express from "express";
import { addNewPost, deletePost, editPost, getAllNews, getOnePost } from "../controllers/NewsController";
import { newsValidationRules } from "../validators/NewsValidator";
import { verifyToken } from "../middlewares/HandleVerifyToken";
import { verifyUserRole } from "../middlewares/VerifyRole";


const router = express.Router()

router.get('/', verifyToken, verifyUserRole(['admin', 'user']), getAllNews);

router.delete('/:id', verifyToken, verifyUserRole(['admin']), deletePost);

router.post('/', verifyToken, verifyUserRole(['admin', 'user']), newsValidationRules, addNewPost);

router.put('/:id', verifyToken, verifyUserRole(['admin']), newsValidationRules, editPost);

router.get('/:id', verifyToken, verifyUserRole(['admin', 'user']), getOnePost);

export default router;