"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var connection_db_1 = __importDefault(require("../database/connection_db"));
var UserModel_1 = __importDefault(require("./UserModel"));
var NewsModel = connection_db_1.default.define('News', {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    title: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    content: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    date: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false
    },
    image: {
        type: sequelize_1.DataTypes.STRING(1024),
        allowNull: false
    },
    user_id: {
        type: sequelize_1.DataTypes.BIGINT,
        references: {
            model: UserModel_1.default,
            key: 'id'
        }
    },
}, {
    tableName: 'news', // Nombre de la tabla en la base de datos
    timestamps: false // Deshabilitando los campos los campos createdAt y updatedAt
});
/* UserModel.hasMany(NewsModel, { foreignKey: 'user_id' }); */
console.log(NewsModel === connection_db_1.default.models.News); // devuelve true
exports.default = NewsModel;
