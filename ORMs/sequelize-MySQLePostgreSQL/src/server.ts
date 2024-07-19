import express, {Request, Response} from 'express'
import path from 'path'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import {sequelizeMySQL} from './instances/mysql'
import {sequelizePg} from './instances/pg'
import mainRoutes from './routes/index'

dotenv.config()

const main = async()=>{

    try{

        console.log("Conectando ao MySQL...")
        await sequelizeMySQL.authenticate()
        console.log("Conectado com sucesso!")

        // await sequelizePG.authenticate()
        // console.log("Conectado ao PostgreSQL!!!")

    } catch(error){

        console.log(error)

    }
}

main()

const server = express()

server.use(express.json())
server.use(express.urlencoded({extended: true}))

server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())

server.use("/", express.static(path.join(__dirname, '../public')))

server.use(mainRoutes)

server.use((req: Request, res: Response)=>{
    res.status(404).send("Página não encontrada!")
})

server.listen(process.env.PORT, ()=>{
    console.log(`Aplicação rodando nesta url: http://localhost:${process.env.PORT}`)
})


