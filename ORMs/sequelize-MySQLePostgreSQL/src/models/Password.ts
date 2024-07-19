import {Model, DataTypes} from 'sequelize'
import {sequelizeMySQL} from '../instances/mysql'
import {sequelizePg} from '../instances/pg'

export interface PasswordInterface extends Model {
    id: number,
    valor: string,
    descricao: string
}

// export const Password = sequelize.Pg.define<PasswordInterface>("Password", {

export const Password = sequelizeMySQL.define<PasswordInterface>("Password", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    valor: {
        type: DataTypes.STRING
    },
    descricao: {
        type: DataTypes.STRING
    }
}, {
    tableName: "pass",
    timestamps: false
})