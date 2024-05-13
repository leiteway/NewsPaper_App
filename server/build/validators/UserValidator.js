"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidationRules = void 0;
var express_validator_1 = require("express-validator");
var ValidationResult_1 = __importDefault(require("../helpers/ValidationResult"));
exports.userValidationRules = [
    (0, express_validator_1.body)('name').notEmpty().withMessage('A name is required'),
    (0, express_validator_1.body)('email').notEmpty().withMessage('email is required'),
    (0, express_validator_1.body)('password').notEmpty().withMessage('this field can not be empty')
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
        .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter')
        .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter')
        .matches(/[0-9]/).withMessage('Password must contain at least one digit')
        .matches(/[^a-zA-Z0-9]/).withMessage('Password must contain at least one special character'),
    function (req, res, next) {
        (0, ValidationResult_1.default)(req, res, next);
    }
];
