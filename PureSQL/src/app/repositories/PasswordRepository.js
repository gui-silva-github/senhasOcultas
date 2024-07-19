import {consulta} from '../database/connection.js'

class PasswordRepository{

    create(password){
        const sql = "INSERT INTO pass SET ?;"
        return consulta(sql, password, "Não foi possível inserir a senha!")
    }

    findAll(){
        const sql = "SELECT * FROM pass;"
        return consulta(sql, "Não foi possível localizar as senhas!")
    }

    findById(id){
        const sql = "SELECT * FROM pass WHERE id = ?;"
        return consulta(sql, id, "Não foi possível localizar a senha!")
    }

    update(password, id){
        const sql = "UPDATE pass SET ? WHERE id = ?;"
        return consulta(sql, [password, id], "Não foi possível atualizar a senha!")
    }

    delete(id){
        const sql = "DELETE FROM pass WHERE id = ?;"
        return consulta(sql, id, "Não foi possível deletar a senha!")
    }

}

// padrão Singleton
export default new PasswordRepository()