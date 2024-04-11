import express from "express";
import { addNewPost, deletePost, editPost, getAllNews, getOnePost } from "../controllers/NewsController";
import { newsValidationRules } from "../validators/NewsValidator";
import { verifyToken } from "../middlewares/HandleVerifyToken";
import { verifyUserRole } from "../middlewares/VerifyRole";


const router = express.Router()//estamos invocado el enrutador

router.get('/', verifyUserRole(['admin', 'user']), getAllNews);

router.delete('/:id', verifyToken, verifyUserRole(['admin']), deletePost);

router.post('/post', verifyToken, newsValidationRules, addNewPost);

router.put('/:id', verifyToken, newsValidationRules, editPost);

router.get('/:id', getOnePost);

export default router;

//middleware para verificar el token primero,luego middleware para verificar roles si es 