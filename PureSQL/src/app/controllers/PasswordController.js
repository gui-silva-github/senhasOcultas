import PasswordRepository from "../repositories/PasswordRepository.js"

class PasswordController {

    async index(req, res){
        const row = await PasswordRepository.findAll()
        res.json(row)
    }

    async show(req, res){
        const id = req.params.id
        const row = await PasswordRepository.findById(id)
        res.json(row)
    }

    async store(req, res){
        const password = req.body
        const row = await PasswordRepository.create(password)
        res.json(row)
    }

    async update(req, res){
        const id = req.params.id
        const password = req.body
        const row = await PasswordRepository.update(password, id)
        res.json(row)
    }

    async delete(req, res){
        const id = req.params.id
        const row = await PasswordRepository.delete(id)
        res.json(row)
    }

}

// padrão Singleton
export default new PasswordController()