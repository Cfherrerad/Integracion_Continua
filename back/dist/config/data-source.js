"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentRepository = exports.userRepository = exports.credentialRepository = exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const envs_1 = require("./envs");
const Credential_1 = __importDefault(require("../entities/Credential"));
const User_1 = __importDefault(require("../entities/User"));
const Appointment_1 = __importDefault(require("../entities/Appointment"));
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: envs_1.DB_HOST,
    port: envs_1.DB_PORT,
    username: envs_1.DB_USERNAME,
    password: envs_1.DB_PASSWORD,
    database: envs_1.DB_NAME,
    // dropSchema: true,
    synchronize: true,
    logging: false,
    entities: [Credential_1.default, User_1.default, Appointment_1.default],
    subscribers: [],
    migrations: [],
});
exports.credentialRepository = exports.AppDataSource.getRepository(Credential_1.default);
exports.userRepository = exports.AppDataSource.getRepository(User_1.default);
exports.appointmentRepository = exports.AppDataSource.getRepository(Appointment_1.default);
