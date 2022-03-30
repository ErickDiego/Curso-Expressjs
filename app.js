require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnect = require('./config/mongo');
const app = express()

app.use(cors())

const port = process.env.PORT //Configurando la variable de entorno

app.listen(port, () =>{
    console.log(`Tu app esta corriendo en el puerto: ${port}`)
})

dbConnect()