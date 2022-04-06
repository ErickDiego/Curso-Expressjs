const multer = require("multer")


const storage = multer.diskStorage({
    destination:function(req, resp, cb){
        const pathStorage = `${__dirname}/../storage`

        cb(null, pathStorage)
    },
    filename:function(req, file, cb){
        //Obtener la extencion del archivo
        const ext = file.originalname.split(".").pop() //va a devolver un arreglo y tomaremos el ultimo dato
        const filename = `file-${Date.now()}.${ext}`

        cb(null, filename)
    }
})

const uploadMiddleware = multer({
    storage
})


module.exports = uploadMiddleware;