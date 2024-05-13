"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var connection_db_1 = __importDefault(require("../database/connection_db"));
var UserModel = connection_db_1.default.define('User', {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: 'user'
    }
}, {
    tableName: 'users', // Nombre de la tabla en la base de datos
    timestamps: false // Habilitando los campos los campos createdAt y updatedAt
});
console.log(UserModel === connection_db_1.default.models.User); // devuelve true
exports.default = UserModel;
