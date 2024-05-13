"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var AuthController_1 = require("../controllers/AuthController");
var UserValidator_1 = require("../validators/UserValidator");
// userValidationRules
var router = express_1.default.Router(); //estamos invocado el enrutador
router.post('/register', UserValidator_1.userValidationRules, AuthController_1.registerUser);
router.post('/login', AuthController_1.loginUser);
exports.default = router;
