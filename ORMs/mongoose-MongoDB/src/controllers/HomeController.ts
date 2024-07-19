import {Request, Response} from "express"
import mongoose from "mongoose"
import Password from '../models/Password'

export const passwords = async (req: Request, res: Response)=>{

    let passwords = await Password.find({})

    res.render('pages/passwords', {
        passwords
    })

}

export const password = async (req: Request, res: Response)=>{

    let { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({message: "ID inválido"})
    }

    try {

        const pass = await Password.findOne({_id: id})

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

    let pass = new Password({
        valor,
        descricao
    });

    try{

        await pass.save()
        return res.status(201).send({id: pass.id, message: "Senha inserida com sucesso!"})

    } catch(error){

        return res.status(500).send({message: "Ocorreu um erro ao inserir a senha"})

    }

}

export const passwordUpdate = async (req: Request, res: Response) => {

    let { id } = req.params
    let { valor, descricao } = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({message: "ID inválido"})
    }

    try {

        const pass = await Password.findOne({_id: id})

        if (pass) {

            await Password.findByIdAndUpdate(id, { valor, descricao })
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

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({message: "ID inválido"})
    }

    try {

        const pass = await Password.findOne({_id: id})

        if (pass) {

            await Password.findByIdAndDelete(id)
            return res.send({message: "Senha deletada com sucesso!"})

        } else {

            return res.status(404).send({message: "Senha não encontrada"})

        }

    } catch (error) {

        console.log("Error: " + error);
        return res.status(500).send({message: "Ocorreu um erro ao deletar a senha"})

    }

}