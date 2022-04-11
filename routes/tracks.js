const express = require("express")
const router = express.Router();
const customHeader = require("../middleware/customHeader")
const {getItems, getItem, createItem} = require("../controllers/tracks")
const { validatorCreateItem, validatorGetItem} = require("../validators/tracks")

/**
 * Ruta Para Obtener Detalle de ITEM
 */
 router.get("/:id", validatorGetItem, getItem)
/**
 * Ruta Lista de Items
 */
router.get("/", getItems)
/**
 * Ruta para Crear Item
 */
router.post("/", validatorCreateItem, customHeader, createItem)






module.exports = router;