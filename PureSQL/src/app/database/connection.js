import mysql from 'mysql'
import dotenv from 'dotenv'

dotenv.config()

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

connection.connect()

/**
 * Executa um código SQL com ou sem parâmetros
 * @param {string} sql instrução SQL a ser executada
 * @param {string=id | [valor, descricao]} valores a serem passados para o SQL
 * @param {string} mensagemReject mensagem a ser exibida 
 * @returns objeto da Promise
 */

export const consulta = (sql, valores='', mensagemReject)=>{
    return new Promise((resolve, reject)=>{
        connection.query(sql, valores, (erro, resultado)=>{
            if (erro) return reject(mensagemReject)
            const row = JSON.parse(JSON.stringify(resultado))
            return resolve(row)
        })
    })
}

export default connection