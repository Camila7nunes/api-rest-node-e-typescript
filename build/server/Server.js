"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
//importa tudo disponível no express, é uma função pois tem um export default dentro do express
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const routes_1 = require("./routes");
//instancia basica do servidor
const server = (0, express_1.default)();
exports.server = server;
server.use(express_1.default.json());
server.use(routes_1.router);
