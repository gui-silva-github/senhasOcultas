import {Sequelize} from "sequelize"
import dotenv from 'dotenv'

dotenv.config()

export const sequelizeMySQL = new Sequelize(
    process.env.MYSQL_DB as string,
    process.env.MYSQL_USER as string,
    process.env.MYSQL_PASSWORD as string,
    {
        dialect: 'mysql',
        port: parseInt(process.env.MYSQL_PORT as string)
    }
)