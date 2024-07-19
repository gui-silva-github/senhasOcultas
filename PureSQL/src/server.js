import app from './app.js'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`Aplicação rodando nesta url: http://localhost:${PORT}`)
})

app.get('/', (req, res)=>{
    res.send("Use as rotas no Insomnia, Postman ou qualquer software com métodos HTTP: GET, POST, PUT e DELETE")
})