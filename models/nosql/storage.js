const mongoose = require("mongoose")

const StorageSchema = new mongoose.Schema(
    {
        url:{type: String},
        filename:{type: Number},
    },
    {
        timestamps:true, //TODO createdAT, updateAT
        versionKey:false
    }
)

module.exports = mongoose.model("storage", StorageSchema)