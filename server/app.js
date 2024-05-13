"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var config_1 = require("./config");
var connection_db_1 = __importDefault(require("./build/database/connection_db"));
var express_1 = __importDefault(require("express"));
var UserModel_1 = __importDefault(require("./build/models/UserModel"));
var NewsModel_1 = __importDefault(require("./build/models/NewsModel"));
var NewsRouter_1 = __importDefault(require("./build/routes/NewsRouter"));
var AuthRouter_1 = __importDefault(require("./build/routes/AuthRouter"));
var UserRouter_1 = __importDefault(require("./build/routes/UserRouter"));
var cors_1 = __importDefault(require("cors"));
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.json()); // para que la aplicacion pueda soportar formato json desde postman (Middleware para parsear el cuerpo de las solicitudes en formato JSON)
exports.app.use("/api/news", NewsRouter_1.default);
exports.app.use("/api/auth", AuthRouter_1.default);
exports.app.use("/api/user", UserRouter_1.default);
try {
    connection_db_1.default.authenticate();
    console.log('Connection has been established successfully.🚀🚀🚀');
    UserModel_1.default.sync();
    console.log('The UserModel has been synchronized succesfully 👩🏼‍💻');
    NewsModel_1.default.sync();
    console.log('The NewsModel has been synchronized succesfully 👩🏼‍💻');
    /*     connection_db.sync()
        console.log('All models have been synchronized succesfully 👩🏼‍💻') */
}
catch (error) {
    console.error('Unable to connect to the database:', error);
}
var server;
if (config_1.NODE_ENV !== 'test') {
    server = exports.app.listen(config_1.DB_PORT, function () {
        console.log("Server up in  http://localhost:".concat(config_1.DB_PORT, "/api"));
    });
}
;
