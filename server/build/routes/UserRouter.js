"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var UserController_1 = require("../controllers/UserController");
var router = express_1.default.Router();
router.get('/');
router.delete('/:id');
router.post('/', UserController_1.createUser);
router.put('/:id');
router.get('/:id');
exports.default = router;
