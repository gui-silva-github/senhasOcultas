import {Schema, model, Model, connection} from "mongoose"

type PasswordType = {
    valor: string,
    descricao: string
}

const schema = new Schema<PasswordType>({
    valor: {type: String, required: true},
    descricao: {type: String, required: true}
})

const modelName: string = "pass"

export default (connection && connection.models[modelName]) ? 
    connection.models[modelName] as Model<PasswordType>
    :
    model<PasswordType>(modelName, schema)