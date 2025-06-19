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
exports.userLoginService = exports.createUserService = exports.getUserByIdService = exports.getUsersService = void 0;
const console_1 = require("console");
const data_source_1 = require("../config/data-source");
const credentialsService_1 = require("./credentialsService");
const getUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield data_source_1.userRepository.find();
});
exports.getUsersService = getUsersService;
const getUserByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const foundUser = yield data_source_1.userRepository.findOne({
        where: { id },
        relations: {
            appointments: true,
        }
    });
    if (!foundUser)
        throw new Error(" User not found");
    return foundUser;
});
exports.getUserByIdService = getUserByIdService;
const createUserService = (createUserDTO) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield data_source_1.userRepository.create({
        name: createUserDTO.name,
        email: createUserDTO.email,
        birthdate: createUserDTO.birthdate,
        nDni: createUserDTO.nDni,
    });
    const user = yield data_source_1.userRepository.save(newUser);
    const newCredential = yield (0, credentialsService_1.createCredentialService)(createUserDTO.username, createUserDTO.password, user);
    newUser.credentials = newCredential;
    const results = yield data_source_1.userRepository.save(newUser);
    return results;
});
exports.createUserService = createUserService;
const userLoginService = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const credential = yield data_source_1.credentialRepository.findOne({
        where: { username },
        relations: ["user"],
    });
    if (!credential || credential.password !== password) {
        throw (0, console_1.error)("Credenciales invalidas");
    }
    return credential.user;
});
exports.userLoginService = userLoginService;
