"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.editPost = exports.addNewPost = exports.getOnePost = exports.getAllNews = void 0;
var jwt_1 = require("../utils/jwt");
var NewsModel_1 = __importDefault(require("../models/NewsModel"));
//GET NEWS
var getAllNews = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var news, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, NewsModel_1.default.findAll()];
            case 1:
                news = _a.sent();
                res.status(200).json(news);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                return [2 /*return*/, res.status(500).send({ error: 'Internal Server Error' + error_1 })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllNews = getAllNews;
//GET ONE POST
var getOnePost = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newsId, onePost, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                newsId = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, NewsModel_1.default.findOne({ where: { id: newsId } })];
            case 2:
                onePost = _a.sent();
                res.status(200).json(onePost);
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                res.status(500).json({ message: 'Error fetching your post' });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getOnePost = getOnePost;
// POST
var addNewPost = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var authHeader, token, tokenData, userId, newPost, publishNews, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                authHeader = req.headers['authorization'];
                token = authHeader && authHeader.split(' ')[1];
                tokenData = (0, jwt_1.verifyToken)(token);
                userId = tokenData.id;
                newPost = __assign(__assign({}, req.body), { user_id: userId });
                return [4 /*yield*/, NewsModel_1.default.create(newPost)];
            case 1:
                publishNews = _a.sent();
                res.status(201).json(publishNews);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                res.status(500).json({ message: error_3.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addNewPost = addNewPost;
//UPDATE  (PUT)
var editPost = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newsId, editedPost, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                newsId = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, NewsModel_1.default.update(req.body, { where: { id: newsId } })];
            case 2:
                _a.sent();
                return [4 /*yield*/, NewsModel_1.default.findOne({ where: { id: newsId } })];
            case 3:
                editedPost = _a.sent();
                res.status(200).json({ message: "Sculpture with ID ".concat(newsId, " updated successfully: "), news: editedPost });
                return [3 /*break*/, 5];
            case 4:
                error_4 = _a.sent();
                res.status(500).json({ message: 'Your post could not be updated' });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.editPost = editPost;
//DELETE
var deletePost = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newsId, deletedPost, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                newsId = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, NewsModel_1.default.destroy({ where: { id: newsId } })];
            case 2:
                deletedPost = _a.sent();
                res.status(201).json({ message: "Post with ID ".concat(newsId, " deleted successfully"), news: deletedPost });
                return [3 /*break*/, 4];
            case 3:
                error_5 = _a.sent();
                res.status(500).json({ message: 'Error trying to delete the post', error: error_5 });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.deletePost = deletePost;
