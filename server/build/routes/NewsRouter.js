"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var NewsController_1 = require("../controllers/NewsController");
var NewsValidator_1 = require("../validators/NewsValidator");
var HandleVerifyToken_1 = require("../middlewares/HandleVerifyToken");
var VerifyRole_1 = require("../middlewares/VerifyRole");
var router = express_1.default.Router();
router.get('/', HandleVerifyToken_1.verifyToken, (0, VerifyRole_1.verifyUserRole)(['admin', 'user']), NewsController_1.getAllNews);
router.delete('/:id', HandleVerifyToken_1.verifyToken, (0, VerifyRole_1.verifyUserRole)(['admin']), NewsController_1.deletePost);
router.post('/', HandleVerifyToken_1.verifyToken, (0, VerifyRole_1.verifyUserRole)(['admin', 'user']), NewsValidator_1.newsValidationRules, NewsController_1.addNewPost);
router.put('/:id', HandleVerifyToken_1.verifyToken, (0, VerifyRole_1.verifyUserRole)(['admin']), NewsValidator_1.newsValidationRules, NewsController_1.editPost);
router.get('/:id', HandleVerifyToken_1.verifyToken, (0, VerifyRole_1.verifyUserRole)(['admin', 'user']), NewsController_1.getOnePost);
exports.default = router;
