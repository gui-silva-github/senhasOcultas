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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const mustache_express_1 = __importDefault(require("mustache-express"));
const mysql_1 = require("./instances/mysql");
const index_1 = __importDefault(require("./routes/index"));
dotenv_1.default.config();
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Conectando ao MySQL...");
        yield mysql_1.sequelizeMySQL.authenticate();
        console.log("Conectado com sucesso!");
        // await sequelizePG.authenticate()
        // console.log("Conectado ao PostgreSQL!!!")
    }
    catch (error) {
        console.log(error);
    }
});
main();
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use(express_1.default.urlencoded({ extended: true }));
server.set('view engine', 'mustache');
server.set('views', path_1.default.join(__dirname, 'views'));
server.engine('mustache', (0, mustache_express_1.default)());
server.use("/", express_1.default.static(path_1.default.join(__dirname, '../public')));
server.use(index_1.default);
server.use((req, res) => {
    res.status(404).send("Página não encontrada!");
});
server.listen(process.env.PORT, () => {
    console.log(`Aplicação rodando nesta url: http://localhost:${process.env.PORT}`);
});
