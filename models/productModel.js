const mongoose = require("mongoose")
const {Schema} = mongoose;

const productSchema = new Schema({
    id:{
        type:Number,
        require:true
    },
    name:{
        type:String,
        require:true,
    },
    img:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    review:{
        type:Number,
        require:true,
    },
    category:{
        type:String,
        require:true,
    },
    location:{
        type:String,
        require:true,
    },
    desc:{
        type:String,
        require:true,
    },



})

const Product = mongoose.model("product", productSchema)
module.exports = {Product}