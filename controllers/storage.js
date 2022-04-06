const {storageModel} = require("../models")
const PUBLIC_URl = process.env.PUBLIC_URl;

/**
 * obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    const data = await storageModel.find({}); 

    res.send({data})
}
/**
 * Obtener un registro de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res) => {

}
/**
 * Crear un registro en la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    const {body, file} = req

    console.log(file)

    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URl}/${file.filename}`
    }

    const data = await storageModel.create(fileData)
    res.send({data}) //lo que se va a devolver como respuesta
}
/**
 * Actualizar un registro de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res) => {
    
}
/**
 * Eliminar un registro de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req, res) => {}


module.exports = {getItems, getItem, createItem, updateItem, deleteItem};