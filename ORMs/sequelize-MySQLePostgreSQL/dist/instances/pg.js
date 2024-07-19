"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelizePg = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.sequelizePg = new sequelize_1.Sequelize(process.env.PG_DB, process.env.PG_USER, process.env.PG_PASSWORD, {
    dialect: 'postgres',
    port: parseInt(process.env.PG_PORT)
});
