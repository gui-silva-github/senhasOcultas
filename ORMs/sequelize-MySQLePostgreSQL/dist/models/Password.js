"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Password = void 0;
const sequelize_1 = require("sequelize");
const mysql_1 = require("../instances/mysql");
// export const Password = sequelize.Pg.define<PasswordInterface>("Password", {
exports.Password = mysql_1.sequelizeMySQL.define("Password", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    valor: {
        type: sequelize_1.DataTypes.STRING
    },
    descricao: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    tableName: "pass",
    timestamps: false
});
