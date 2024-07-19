import {Request, Response} from "express"
import {Password} from '../models/Password'

export const passwords = async (req: Request, res: Response)=>{

    let passwords = await Password.findAll()

    res.render('pages/passwords', {
        passwords
    })

}

export const password = async (req: Request, res: Response)=>{

    let { id } = req.params

    try {

        const pass = await Password.findByPk(id)

        if (pass) {

            return res.send({dados: pass})

        } else {

            return res.status(404).send({message: "Senha não encontrada"})

        }

    } catch (error) {

        console.log("Error: " + error);
        return res.status(500).send({message: "Ocorreu um erro ao encontrar a senha"})

    }

}

export const passwordNew = async (req: Request, res: Response)=>{

    let {valor, descricao} = req.body 

    let pass = new Password()

    pass.valor = valor
    pass.descricao = descricao

    try{

        await pass.save()
        return res.status(201).send({message: "Senha inserida com sucesso!"})

    } catch(error){

        return res.status(500).send({message: "Ocorreu um erro ao inserir a senha"})

    }

}

export const passwordUpdate = async (req: Request, res: Response) => {

    let { id } = req.params
    let { valor, descricao } = req.body

    try {

        const pass = await Password.findByPk(id)

        if (pass) {

            pass.valor = valor
            pass.descricao = descricao
            await pass.save()

            return res.send({message: "Senha alterada com sucesso!"})

        } else {

            return res.status(404).send({message: "Senha não encontrada"})

        }

    } catch (error) {

        console.log("Error: " + error);
        return res.status(500).send({message: "Ocorreu um erro ao atualizar a senha"})

    }
}

export const passwordDelete = async (req: Request, res: Response)=>{

    let { id } = req.params

    try {

        const pass = await Password.findByPk(id)

        if (pass) {

            await pass.destroy()

            return res.send({message: "Senha deletada com sucesso!"})

        } else {

            return res.status(404).send({message: "Senha não encontrada"})

        }

    } catch (error) {

        console.log("Error: " + error);
        return res.status(500).send({message: "Ocorreu um erro ao deletar a senha"})

    }

}