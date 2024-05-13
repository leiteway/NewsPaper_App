"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.createToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = require("../../config");
var createToken = function (user) {
    var data = {
        role: user.role,
        id: user.id
    };
    var token = jsonwebtoken_1.default.sign(data, config_1.SECRET_KEY, { expiresIn: '2h' });
    console.log(token);
    return token;
};
exports.createToken = createToken;
var verifyToken = function (tokenJwt) {
    try {
        return jsonwebtoken_1.default.verify(tokenJwt, config_1.SECRET_KEY);
    }
    catch (error) {
        return null;
    }
};
exports.verifyToken = verifyToken;
