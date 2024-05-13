"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var config_1 = require("../../config");
var DB_NAME = config_1.NODE_ENV === 'test' ? config_1.DB_TEST_NAME : config_1.DB_DEV_NAME;
var connection_db = new sequelize_1.Sequelize(DB_NAME, config_1.DB_USER, config_1.DB_PASSWORD, {
    host: config_1.DB_HOST,
    dialect: 'mysql'
});
exports.default = connection_db;
