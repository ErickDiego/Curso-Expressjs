const mongoose = require("mongoose")

const TracksSchema = new mongoose.Schema(
    {
        name:{type: String},
        albun:{type: String},
        cover:{type: String, validate:{validator:(req) =>{return true}, message: "ERROR_URL"}},
        artist:{
           name: {type: String},
           nickname: {type: String},
           nacionality:{type: String}},
        duration:{
            start:{type: Number},
            end:{type: Number}},
        mediaId:{type: mongoose.Types.ObjectId}
    },
    {
        timestamps:true, //TODO createdAT, updateAT
        versionKey:false
    }
)

module.exports = mongoose.model("tracks", TracksSchema)