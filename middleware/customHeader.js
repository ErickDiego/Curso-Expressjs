const customHeader = (req, res, next) =>{
   try {
    const apiKey = req.headers.api_key
    next()
   } catch (error) {
       res.status(403);
        res.send({error:"ALGO_OCURRIO_EN_EL_CUSTOM_HEADER"})
   }
}

module.exports = customHeader;