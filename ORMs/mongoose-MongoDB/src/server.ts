import express, {Request, Response} from 'express'
import path from 'path'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import {mongoConnect} from './database/mongo'
import mainRoutes from './routes/index'

dotenv.config()

mongoConnect()

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


