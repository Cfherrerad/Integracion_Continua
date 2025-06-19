"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_NAME = exports.DB_PASSWORD = exports.DB_USERNAME = exports.DB_PORT = exports.DB_HOST = exports.PORT = void 0;
require("dotenv/config");
exports.PORT = Number(process.env.PORT);
// POSTGRES
exports.DB_HOST = process.env.DB_HOST || "localhost";
exports.DB_PORT = Number(process.env.DB_PORT) || 5432;
exports.DB_USERNAME = process.env.DB_USERNAME || "test";
exports.DB_PASSWORD = process.env.DB_PASSWORD || "test";
exports.DB_NAME = process.env.DB_NAME || "demo_typeorm";
