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
exports.passwordDelete = exports.passwordUpdate = exports.passwordNew = exports.password = exports.passwords = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Password_1 = __importDefault(require("../models/Password"));
const passwords = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let passwords = yield Password_1.default.find({});
    res.render('pages/passwords', {
        passwords
    });
});
exports.passwords = passwords;
const password = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "ID inválido" });
    }
    try {
        const pass = yield Password_1.default.findOne({ _id: id });
        if (pass) {
            return res.send({ dados: pass });
        }
        else {
            return res.status(404).send({ message: "Senha não encontrada" });
        }
    }
    catch (error) {
        console.log("Error: " + error);
        return res.status(500).send({ message: "Ocorreu um erro ao encontrar a senha" });
    }
});
exports.password = password;
const passwordNew = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { valor, descricao } = req.body;
    let pass = new Password_1.default({
        valor,
        descricao
    });
    try {
        yield pass.save();
        return res.status(201).send({ id: pass.id, message: "Senha inserida com sucesso!" });
    }
    catch (error) {
        return res.status(500).send({ message: "Ocorreu um erro ao inserir a senha" });
    }
});
exports.passwordNew = passwordNew;
const passwordUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    let { valor, descricao } = req.body;
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "ID inválido" });
    }
    try {
        const pass = yield Password_1.default.findOne({ _id: id });
        if (pass) {
            yield Password_1.default.findByIdAndUpdate(id, { valor, descricao });
            return res.send({ message: "Senha alterada com sucesso!" });
        }
        else {
            return res.status(404).send({ message: "Senha não encontrada" });
        }
    }
    catch (error) {
        console.log("Error: " + error);
        return res.status(500).send({ message: "Ocorreu um erro ao atualizar a senha" });
    }
});
exports.passwordUpdate = passwordUpdate;
const passwordDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "ID inválido" });
    }
    try {
        const pass = yield Password_1.default.findOne({ _id: id });
        if (pass) {
            yield Password_1.default.findByIdAndDelete(id);
            return res.send({ message: "Senha deletada com sucesso!" });
        }
        else {
            return res.status(404).send({ message: "Senha não encontrada" });
        }
    }
    catch (error) {
        console.log("Error: " + error);
        return res.status(500).send({ message: "Ocorreu um erro ao deletar a senha" });
    }
});
exports.passwordDelete = passwordDelete;
