require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnect = require('./config/mongo');
const app = express()

app.use(cors())
app.use(express.json()) //para que la api pueda recibir un body
app.use(express.static("storage")) //configuracion para poder dar permiso para acceder a la informacion en la carpeta

const port = process.env.PORT //Configurando la variable de entorno

/**
* Aqui invocaremos a las rutas :)
*/
app.use("/api", require("./routes"));

app.listen(port, () =>{
    console.log(`Tu app esta corriendo en el puerto: ${port}`)
})

dbConnect()