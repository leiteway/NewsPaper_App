"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsValidationRules = void 0;
var express_validator_1 = require("express-validator");
var ValidationResult_1 = __importDefault(require("../helpers/ValidationResult"));
exports.newsValidationRules = [
    (0, express_validator_1.body)('title').notEmpty().withMessage('A title is require'),
    (0, express_validator_1.body)('content').notEmpty().withMessage('You must write your News here'),
    (0, express_validator_1.body)('date').notEmpty().withMessage('A date is required'),
    (0, express_validator_1.body)('image').notEmpty().withMessage('An url is required'),
    function (req, res, next) {
        (0, ValidationResult_1.default)(req, res, next);
    }
];
