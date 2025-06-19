"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = exports.registerController = exports.getUserByIdController = exports.getUsersController = void 0;
const usersService_1 = require("../services/usersService");
// GET /users => Obtener el listado de todos los usuarios.
const getUsersController = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, usersService_1.getUsersService)();
        res.status(200).json({
            succes: true,
            data: users,
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: error.message,
        });
    }
});
exports.getUsersController = getUsersController;
// GET /users/:id => Obtener el detalle de un usuario específico.
const getUserByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield (0, usersService_1.getUserByIdService)(Number(id));
        res.status(200).json({
            succes: true,
            data: user,
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: error.message,
        });
    }
});
exports.getUserByIdController = getUserByIdController;
// POST /users/register => Registro de un nuevo usuario.
const registerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, birthdate, nDni, username, password } = req.body;
        const user = yield (0, usersService_1.createUserService)({ name, email, birthdate, nDni, username, password });
        res.status(201).json({
            succes: true,
            data: user,
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: error.message,
        });
    }
});
exports.registerController = registerController;
// POST /users/login => Login del usuario a la aplicación.
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const user = yield (0, usersService_1.userLoginService)(username, password);
        res.status(200).json({
            succes: true,
            user,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
});
exports.loginController = loginController;
