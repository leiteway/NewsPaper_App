"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_validator_1 = require("express-validator");
var validateResult = function (req, res, next) {
    try {
        var result = (0, express_validator_1.validationResult)(req);
        result.throw();
        return next(); //que pase al controlador
    }
    catch (error) {
        res.status(400).json({ errors: error.array() });
    }
};
exports.default = validateResult;
