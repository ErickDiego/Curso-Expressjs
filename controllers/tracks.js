const { matchedData } = require("express-validator");
const req = require("express/lib/request");
const res = require("express/lib/response");
const {tracksModel} = require("../models")

/**
 * obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    try {
        const data = await tracksModel.find({}); 
        res.send({data})

    } catch (error) {
        handleHttpError(res, 'ERROR_EN_GETITEMS')
    }    
}
/**
 * Obtener un registro de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {
    try {
        req = matchedData(req)
        const {id} = req
        const data = await tracksModel.findById(id); 
        res.send({data})
    } catch (error) {
        handleHttpError(res, "ERROR_GET_ITEM")
    }
}
/**
 * Crear un registro en la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    try {
        const body =  matchedData(req) // la siguiente funcion permite utilizar solo las variables necesarias
        const data = await tracksModel.create(body)
              
        res.send({data})        
    } catch (error) {
        handleHttpError(res, 'ERROR_EN_CREATEITEMS')        
    }

}
/**
 * Actualizar un registro de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req, res) => {
    
}
/**
 * Eliminar un registro de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {

}


module.exports = {getItems, getItem, createItem, updateItem, deleteItem};