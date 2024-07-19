import {connect} from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export const mongoConnect = async ()=>{

    try{

        console.log("Conectando ao MongoDB...")
        await connect(process.env.MONGODB_URL as string)
        console.log("Conectado com sucesso!")

    } catch(error){

        console.log("Erro: " + error)

    }


}

